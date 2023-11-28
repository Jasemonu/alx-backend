const kue = require('kue');

// Array of blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Function to send a notification
function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100); // Track progress of the job (0% initially)

  if (blacklistedNumbers.includes(phoneNumber)) {
    const errorMessage = `Phone number ${phoneNumber} is blacklisted`;
    return done(new Error(errorMessage));
  }

  // If not blacklisted, proceed with sending notification
  job.progress(50, 100); // Track progress of the job (50%)
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  // Job completed successfully
  done();
}

// Create a queue with Kue
const queue = kue.createQueue({
  concurrency: 2 // Process two jobs at a time
});

// Queue process for handling jobs on 'push_notification_code_2'
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;

  // Call the sendNotification function for each job
  sendNotification(phoneNumber, message, job, done);

  // Event handler when the job is completed
  job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
  });

  // Event handler when the job fails
  job.on('failed', (errorMessage) => {
    console.error(`Notification job ${job.id} failed: ${errorMessage}`);
  });

  // Event handler for job progress
  job.on('progress', (progress, data) => {
    console.log(`Notification job ${job.id} ${progress}% complete`);
  });
});
