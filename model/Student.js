const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
    {
        name: { 
            type: String 
        },
        unit: {
            type: String,
        },
        course: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

const Student = model("Student", studentSchema, "Student");

module.exports = Student;