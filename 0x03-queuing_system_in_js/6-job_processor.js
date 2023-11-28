const kue = require('kue');

// Create a queue with Kue
const queue = kue.createQueue();

// Function to send a notification
function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// Queue process for handling new jobs on 'push_notification_code'
queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;

  // Call the sendNotification function with phone number and message from job data
  sendNotification(phoneNumber, message);

  // Mark the job as done
  done();
});
