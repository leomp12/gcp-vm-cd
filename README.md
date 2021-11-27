# GCP VMs CD

Node app for simple GCP VMs ([MIGs](https://cloud.google.com/compute/docs/instance-groups))
continuous deployment from GitHub using Pub/Sub.

## Why ?

High availability keeping infrastructure simple as possible for less complex and stateless instances,
no K8s (or Nomad) and no IaC:

_Cloud Load Balancing > Stateless MIGs > VMs on demand_

Starts with a simple GCP VM turned to instance model after the first configuration,
then create instance the group (one by region) and setup load balancer with MIGs backends.

**We can't just mock external IPs because VMs may be created and destroyed on demand,
so this project is intended to provide simple CI/CD functionality using Pub/Sub (each VM as a subscriber)
and GitHub Actions.**

## Getting started

### Setup on GCP

1. Create [service account](https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account)
and key with authorization to _Read_ and _Admin pub/sub_;

2. [Create Pub/Sub topic](https://console.cloud.google.com/cloudpubsub/topic/list?modal=create_topic):
  - Default name is *vms_cd*;
  - Without initial subscriber.

### Setup Node app on VM

3. Save account key file on your VM:
```bash
nano ~/vms-cd-service-account.json
chmod 640 ~/vms-cd-service-account.json
```

4. Clone repository and set minimal env:
```
git clone -b main --single-branch https://github.com/leomp12/gcp-vms-cd
echo "GOOGLE_APPLICATION_CREDENTIALS=\"$HOME/vms-cd-service-account.json\"" > gcp-vms-cd/.env
```

5. Start Node background service:
```bash
node gcp-vms-cd/app.js # pm2 start "/home/user/gcp-vms-cd/app.js" --name "deploy" --max-memory-restart 200M --restart-delay=3000
```

### Setup GitHub Actions workflow

Add a _secret_ to your GitHub repository with name `GCP_ACCOUNT_KEY` and paste the
created account key JSON, then setup the workflow file as following:

```yml
# .github/workflows/trigger-deploy.yml
name: Trigger deploy to GCP VMs

on:
  push:
    branches:
      - main

jobs:
  publish:
    name: Publish Pub/Sub message to VMs CD topic
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: leomp12/gcp-vms-cd@main
        with:
          gcp_account_key: ${{ secrets.GCP_ACCOUNT_KEY }}
          pubsub_topic: 'vms_cd'
          command_working_dir: '/home/user/apps/myapp'
          command_pull: 'git pull'
          command_restart: 'npm run restart'
          command_test: 'npm run test'
          regex_test_output: 'active'
```
