const logger = require("../logger")
const Student = require("../model/Student")

const deleteStudent = async (req, res, next) =>{
    try{
        const student = await Student.findOneAndDelete(
            { _id: req.body._id },
        )
        logger.log({
            level: "info",
            message: `updating ${student}`
        })
        res.json({
            status: 200,
            success: true,
            message: "student updated successfully",
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = deleteStudent;