const router = require("express").Router();
const { route } = require(".");
const projectsController = require("../../controllers/projectsController");
const emailjs = require("emailjs-com");

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)


router.route("/sendEmail").post((req, res) => {
  console.log(req.body);
  console.log(process.env.REACT_APP_TEMPLATE_ID);
  console.log(process.env.REACT_APP_USER_ID);
  emailjs
    .sendForm("my_amazing_template", process.env.REACT_APP_TEMPLATE_ID, req.body, process.env.REACT_APP_USER_ID)
    .then((result) => {
        console.log(result.text);
        alert("Your message was sent");
    }, (error) => {
        console.log(error.text);
        console.log(process.env);
    });
})

module.exports = router;
