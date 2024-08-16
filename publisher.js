const { createClient } = require("redis");

async function run() {
  const publisher = createClient();

  // Handle errors
  publisher.on("error", (err) => console.error("Redis Client Error", err));

  // Connect to Redis
  await publisher.connect();

  const channel = "my-channel";
  const message = "Hello from the updated publisher!";

  // Publish a message
  await publisher.publish(channel, message);
  console.log(`Message published to ${channel}: ${message}`);

  // Close the connection after publishing
  await publisher.quit();
}

run().catch(console.error);



//redis-cli
//PUBLISH {channelName} {Message}