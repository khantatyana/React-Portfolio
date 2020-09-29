const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)


module.exports = router;
