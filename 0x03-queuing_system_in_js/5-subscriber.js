import redis from 'redis';

// Create a Redis client for subscribing
const subscriber = redis.createClient();

// Event listener for successful connection
subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event listener for connection errors
subscriber.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

// Subscribe to the "holberton school channel"
subscriber.subscribe('holberton school channel');

// Event listener for messages on the subscribed channel
subscriber.on('message', (channel, message) => {
  console.log(`Received message on channel ${channel}: ${message}`);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
