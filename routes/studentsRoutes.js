const express = require('express');
const {InsertStudent, ReadStudent, updateStudent, deleteStudent} = require("../controllers/studentsController");
const {tokenIssue} = require("../controllers/tokenIssueController");
const {tokenVerify} = require("../middlewares/tokenVerifyMiddleware");

const router = express.Router();

//Routes, Apply JWT Auth

router.get('/tokenIssue', tokenIssue) //token create
router.post('/insertStudent', tokenVerify, InsertStudent);
router.get('/readStudent', tokenVerify, ReadStudent);
router.post('/updateStudent/:id', tokenVerify, updateStudent);
router.post('/deleteStudent/:id', tokenVerify, deleteStudent);

module.exports = router;