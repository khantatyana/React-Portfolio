const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/books"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;
