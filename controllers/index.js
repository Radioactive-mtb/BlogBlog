const router = require("express").Router();
const apiRoutes = require("./api");
const dashRoutes = require("./dashRoutes.js");

router.use("/", dashRoutes);
router.use("/api", apiRoutes);

module.exports = router;
