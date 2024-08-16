const { createClient } = require("redis");

const subscriber = createClient();

subscriber.on("error", (err) => console.error("Redis Client Error", err));

subscriber.connect().then(async () => {
  await subscriber.subscribe((channel = "my-channel"), (message) => {
    console.log(`Received message from ${channel}: ${message}`);
  });

  console.log(`Subscribed to channel: ${channel}`);
});


//redis-cli
//SUBSCRIBE {channelName} {Message}


//Messages are transient and not stored. If a subscriber is not connected when a message is published, the message is lost.


//Suitable for scenarios where you don’t need message persistence or historical message replay.
//Designed for low-latency communication but doesn’t scale as well as Kafka for large-scale data streams.   
//Kafka is generally slower than Redis for real-time interactions due to its design for durability and replication.