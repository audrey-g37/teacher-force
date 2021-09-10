const router = require("express").Router();
const teacherRoutes = require("./teacher-routes");
const loginPage = require("./home-routes");
const apiData = require("./api");

router.use("/api", apiData);
router.use("/teacher", teacherRoutes);
router.use("/", loginPage);
router.use("/register", loginPage);
router.use((req, res) => {
  res.status(403).json({ message: "You dont have access to this page" }); //connecting to handlebars "Catherine"
});

module.exports = router;
