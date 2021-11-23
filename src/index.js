const path = require('path');
const { readFile, writeFile } = require('fs/promises');
const os = require('os');
const { PubSub } = require('@google-cloud/pubsub');
const logger = require('./lib/logger');
const runPipeline = require('./lib/pipeline/run');

const {
  DATA_FILEPATH,
  PUBSUB_TOPIC,
  SUBSCRIPTION_PREFIX,
} = process.env;

(async () => {
  const pubsub = new PubSub();
  const topicName = PUBSUB_TOPIC || 'vms_cd';

  const dataFilepath = path.resolve(process.cwd(), DATA_FILEPATH || 'data.json');
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
    const topic = pubsub.topic(topicName);
    const subscriptionPrefix = (SUBSCRIPTION_PREFIX || `${topicName}_${os.hostname()}_`);
    const subscriptionName = `${subscriptionPrefix}${Date.now()}`;
    [subscription] = await topic.createSubscription(subscriptionName, {
      enableMessageOrdering: true,
      expirationPolicy: { ttl: null },
    });
    writeFile(dataFilepath, JSON.stringify({
      subscriptionName,
      topicName,
    }, null, 2));
  }

  subscription.on('message', (message) => {
    let eventData;
    try {
      eventData = JSON.parse(message.data);
    } catch (error) {
      logger.info('Ignoring invalid message:', message.data.toString());
      return Promise.resolve(0);
    }
    logger.info('Starting pipeline with message:', eventData);
    return runPipeline(eventData);
  });

  subscription.on('error', (error) => {
    logger.error('PubSub subscription error:', error);
  });

  logger.info(`Watching Pub/Sub topic ${topicName}`);
})();
