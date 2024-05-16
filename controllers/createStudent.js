const logger = require("../logger")
const Student = require("../model/Student")

const createStudent = async (req, res, next) =>{
    try{
        const student = new Student(req.body)
        await student.save()
        logger.log({
            level: "info",
            message: `creating ${student}`
        })
        res.json({
            status:201,
            success:true,
            message:"student added successfully",
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = createStudent;