const kue = require('kue');
const queue = kue.createQueue();

// Create an object containing Job data
const jobData = {
  phoneNumber: '1234567890',
  message: 'Sample notification message',
};

// Create a queue named push_notification_code and create a job with the provided object
const notificationJob = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (!err) {
      console.log(`Notification job created: ${notificationJob.id}`);
    } else {
      console.error('Failed to create notification job:', err);
    }
  });

// Event handler when the job is completed
notificationJob.on('complete', () => {
  console.log('Notification job completed');
});

// Event handler when the job is failing
notificationJob.on('failed', () => {
  console.log('Notification job failed');
});
