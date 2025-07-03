const notifier = require("node-notifier");

function pomodoro() {
  let fortyFiveMinutes = 2700000; // 45 minutes in milliseconds
  let oneAndHalfMinute = 90000; // 1.30 minute in milliseconds

  setInterval(() => {
    notifier.notify({
      title: "DS Pomodoro Reminder",
      message: "Take a minute to breathe!",
      sound: true,
      timeout: oneAndHalfMinute
    });
  }, fortyFiveMinutes);
}

pomodoro();
