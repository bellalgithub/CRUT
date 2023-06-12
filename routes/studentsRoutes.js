const express = require('express');
const {InsertStudent, ReadStudent, updateStudent, deleteStudent} = require("../controllers/studentsController");

const router = express.Router();

//Routes

router.post('/insertStudent', InsertStudent);
router.get('/readStudent', ReadStudent);
router.post('/updateStudent/:id', updateStudent);
router.post('/deleteStudent/:id', deleteStudent);

module.exports = router;