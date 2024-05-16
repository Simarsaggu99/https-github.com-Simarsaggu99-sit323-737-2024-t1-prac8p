const logger = require("../logger")
const Student = require("../model/Student")

const updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.body._id },
            {
                name: req.body.name,
                unit: req.body.unit,
                course: req.body.course
            },
            { new: true }
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
    catch (error) {
        next(error)
    }
}

module.exports = updateStudent;