const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectslist"
);

const projectSeed = [
  {
    title: "Explore Outdoors App",
    portfolioImgBackground: "/outdoor.png",
    synopsis:
      "This application was built with third-party APIs: National Parks, Map Box API and Open Weather API powered by JavaScript code.",
    deployed: "https://khantatyana.github.io/Project-1/",
    logoWrapper: "/outdoor.png",
    gitHub: "https://github.com/khantatyana/Project-1"
  },
  {
    title: "Nosql-Workout-Tracker",
    portfolioImgBackground: "/fit.png",
    synopsis:
      "This app Workout Tracker is built with Express and connected with Mongo database with a Mongoose schema.",
    deployed: "https://nosqlworkout-tracker.herokuapp.com/",
    logoWrapper: "/fit.png",
    gitHub: "https://github.com/khantatyana/Nosql-Workout-Tracker"
  },
  {
    title: "Cinder - Project-2",
    portfolioImgBackground: "/cinder.png",
    synopsis:
      "Social networking platform with using Google API, Express, Socket.io, MySql, Passport, Hanlebars, Bulma, Sequelize.",
    deployed: "https://project2-cinder.herokuapp.com/",
    logoWrapper: "/logo4-charcoal.png",
    gitHub: "https://github.com/BubblyRobot/project2-cinder"
  },
  {
    title: "Work Day Scheduler",
    portfolioImgBackground: "/wrkdayScheduler.png",
    synopsis:
      "This app will run in the browser and feature dynamically updated HTML, CSS powered by jQuery, using the Moment.js library and local storage.",
    deployed: "https://khantatyana.github.io/HW-Work-Day-Scheduler/",
    logoWrapper: "/wrkdayScheduler.png",
    gitHub: "https://github.com/khantatyana/HW-Work-Day-Scheduler"
  },
  {
    title: "React-Employee-Directory",
    portfolioImgBackground: "/empDir1.png",
    synopsis:
      "React application which UI is broken into components, it manages component state, and responds to user events.",
    deployed: "https://react-employee-directory-new.herokuapp.com/",
    logoWrapper: "/empDir1.png",
    gitHub: "https://github.com/khantatyana/React-Employee-Directory"
  },
  {
    title: "PWA-Online-Offline-Budget-Trackers",
    portfolioImgBackground: "/budgetTracker.png",
    synopsis:
      "Budget Tracker Application (PWA) offline (IndexedDB, Service Worker) the user's inputs are shown on the page, and added to DB (MongoDB Atlas) when back online.",
    deployed: "https://floating-castle-47147.herokuapp.com/",
    logoWrapper: "/budgetTracker.png",
    gitHub: "https://github.com/khantatyana/PWA-Online-Offline-Budget-Trackers"
  },
  {
    title: "Weather Dashboard",
    portfolioImgBackground: "/weather.png",
    synopsis:
      "Third-party API with specific parameters to a URL. This app runs in the browser and feature dynamically updated HTML and CSS.",
    deployed: "https://khantatyana.github.io/HW-Weather-Dashboard/",
    logoWrapper: "/weather.png",
    gitHub: "https://github.com/khantatyana/HW-Weather-Dashboard"
  },
  {
    title: "Node-Express-Handlebars - Eat-Da-Burger!",
    portfolioImgBackground: "/burgerScrShot.png",
    synopsis:
      "This application is a burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). It was designed the MVC pattern.",
    deployed: "https://eat-da-burger-hw13-node-expres.herokuapp.com/",
    logoWrapper: "/burgerScrShot.png",
    gitHub: "https://github.com/khantatyana/Burger-Node-Express-Handlebars"
  },
  {
    title: "New York Times Search",
    portfolioImgBackground: "/trent-szmolnik-BA50zDj2W98-unsplash.jpg",
    synopsis:
      "Bootstrap layout with search input boxes. AJAX call to retrieve data with searching keys powering with jQuery.",
    deployed: "https://khantatyana.github.io/HW-Code-Quiz/",
    logoWrapper: "/trent-szmolnik-BA50zDj2W98-unsplash.jpg",
    gitHub: "https://github.com/khantatyana/NYT-Article-Search"
  },
  {
    title: "Password Generator",
    portfolioImgBackground: "/pass-gen.png",
    synopsis:
      "App generates a random password. All characters are determined by ascii code. There are series of prompts/confirms for password criteria.",
    deployed: "https://khantatyana.github.io/HW-JS-Password-Generator/",
    logoWrapper: "/pass-gen.png",
    gitHub: "https://github.com/khantatyana/HW-JS-Password-Generator"
  },
  {
    title: "Code Quiz",
    portfolioImgBackground: "/codeQuiz.jpg",
    synopsis:
      "This app runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface.",
    deployed: "https://khantatyana.github.io/HW-Code-Quiz/",
    logoWrapper: "/codeQuiz.jpg",
    gitHub: "https://github.com/khantatyana/HW-Code-Quiz"
  },
  {
    title: "Good-README-Generator",                
    // {{ backgroundImage: `url(${require("/good-README-Generator.gif")})` }}
    portfolioImgBackground: "/good-README-Generator.gif",
    synopsis:
      "a command-line application that dynamically generates a README.md from a user's input powered with Using Node.js using ES6+.",
    deployed: "https://github.com/khantatyana/Good-README-Generator",
    logoWrapper: "/good-README-Generator.gif",
    gitHub: "https://github.com/khantatyana/Good-README-Generator"
  },
  {
    title: "OOP: Template Engine - Employee Summary",
    portfolioImgBackground: "/oop-team.gif",
    synopsis:
      "App is built with Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person using JEST testing and OOP.",
    deployed: "https://github.com/khantatyana/OOP-Template-Engine-Employee-Summary",
    logoWrapper: "/oop-team.png",
    gitHub: "https://github.com/khantatyana/OOP-Template-Engine-Employee-Summary"
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


