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
  const data = Buffer.from(JSON.stringify(json));
  try {
    const messageId = await topic.publishMessage({ data });
    console.log(`Message ${messageId} published with data:\n${JSON.stringify(json, null, 2)}`);
  } catch (error) {
    const err = new Error(`Received error while publishing: ${error.message}`);
    err.data = data;
    console.error(err);
    process.exitCode = 1;
  }
})();
