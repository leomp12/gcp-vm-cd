/* eslint-disable no-console */

const { PubSub } = require('@google-cloud/pubsub');

const {
  PUBSUB_TOPIC,
  COMMAND_WORKING_DIR,
  COMMAND_PULL,
  COMMAND_RESTART,
  COMMAND_TEST,
  REGEX_TEST_OUTPUT,
} = process.env;

const pubsub = new PubSub();
const topicName = PUBSUB_TOPIC || 'vms_cd';
const topic = pubsub.topic(topicName);

const json = {
  commandWorkingDir: COMMAND_WORKING_DIR,
  commandPull: COMMAND_PULL,
  commandRestart: COMMAND_RESTART,
  commandTest: COMMAND_TEST,
  regexTestOutput: REGEX_TEST_OUTPUT,
};

(async () => {
  try {
    const messageId = await topic.publishMessage({ json });
    console.log(`Message ${messageId} published with data:\n${JSON.stringify(json, null, 2)}`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
})();
