const studentsModel = require('../models/studentsModel');


//Create Student into Database
exports.InsertStudent = async (req, res) => {
    const reqBody = req.body;
    try {
        let data = await studentsModel.create(reqBody);
        res.status(201).json({status: "success", data: data})

    } catch (err) {
        res.status(200).json({status: "Fail", data: err})
    }
}

//Read Student from Database
exports.ReadStudent = async (req, res) => {
    let query = {};
    let projection = {Name: 1, Roll: 1, _id: 1}
    try {
        let data = await studentsModel.find(query, projection);
        res.status(201).json({status: "success", data: data})
    } catch (err) {
        res.status(200).json({status: "Fail", data: err})
    }
}

//Update Student into Database
exports.updateStudent = async (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    try {
        let data = await studentsModel.updateOne(query, reqBody);
        res.status(200).json({status: "Success", data: data});
    } catch (err) {
        res.status(401).json({status: "Fail", data: err});
    }
}


//Delete Student from Database
exports.deleteStudent = async (req, res) => {
    let id = req.params.id;
    let query = {_id: id};
    try {
        let data = await studentsModel.findOneAndRemove(query);
        res.status(200).json({status: "Deleted", data: data});

    } catch (err) {
        res.status(200).json({status: "Deleted fail", data: err});
    }
}