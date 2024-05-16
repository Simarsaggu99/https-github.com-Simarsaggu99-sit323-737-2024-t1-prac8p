const logger = require("../logger")
const Student = require("../model/Student")

const getStudent = async (req, res, next) =>{
    try{
        const student = await Student.find()
        logger.log({
            level: "info",
            message: "Finding students"
        })
        res.json({
            status:200,
            success:true,
            message:"students fetched successfully",
            data: student
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = getStudent;