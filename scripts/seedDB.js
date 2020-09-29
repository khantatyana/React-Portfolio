const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectslist"
);

const projectSeed = [
  {
    title: "Work Day Scheduler",
    portfolioImgBackground: "background-image:url(./Assets/Images/wrkdayScheduler.png)",
    synopsis:
      "This app will run in the browser and feature dynamically updated HTML, CSS powered by jQuery, using the Moment.js library and local storage.",
    deployed: "https://khantatyana.github.io/HW-Work-Day-Scheduler/",
    logoWrapper: "./Assets/Images/wrkdayScheduler.png",
    gitHub: "https://github.com/khantatyana/HW-Work-Day-Scheduler"
  }

];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
