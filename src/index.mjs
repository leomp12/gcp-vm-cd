import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { PubSub } from '@google-cloud/pubsub';

const {
  DATA_FILENAME,
  GCP_PROJECT_ID,
  PUBSUB_TOPIC,
  SUBSCRIPTION_PREFIX,
} = process.env;

(async () => {
  const pubsub = new PubSub({
    projectId: GCP_PROJECT_ID,
  });
  const topicName = PUBSUB_TOPIC || 'vms_cd';

  const dataFilepath = path.join(process.cwd(), DATA_FILENAME || 'data.json');
  let data;
  try {
    data = JSON.parse(await readFile(dataFilepath));
  } catch (error) {
    // no data saved yet
  }

  let subscription;
  if (data && data.subscriptionName && data.topicName === topicName) {
    subscription = pubsub.subscription(data.subscriptionName);
  } else {
    // create new subscription
    let topic;
    try {
      [topic] = pubsub.createTopic(PUBSUB_TOPIC);
    } catch (error) {
      topic = pubsub.topic(PUBSUB_TOPIC);
    }
    const subscriptionPrefix = (SUBSCRIPTION_PREFIX || `${topicName}_${os.hostname()}_`);
    const subscriptionName = `${subscriptionPrefix}${Date.now()}`;
    [subscription] = await topic.createSubscription(subscriptionName);
    writeFile(dataFilepath, JSON.stringify({
      subscriptionName,
      topicName,
    }, null, 2));
  }

  subscription.on('message', (message) => {
    console.log('Received message:', message.data.toString());
  });

  subscription.on('error', (error) => {
    console.error('PubSub subscription error:', error);
  });
})();
