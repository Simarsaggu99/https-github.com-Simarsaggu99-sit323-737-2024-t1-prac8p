const createStudent = require("../controllers/createStudent");
const getStudent = require("../controllers/getStudent");
const updateStudent = require("../controllers/updateStudent");
const deleteStudent = require("../controllers/deleteStudent");

const router = require("express").Router();

router.get("/getStudent", getStudent);
router.post("/createStudent", createStudent);
router.delete("/deleteStudent", deleteStudent);
router.put("/updateStudent", updateStudent);

module.exports = router;