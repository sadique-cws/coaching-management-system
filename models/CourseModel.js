import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    instructor: {
        type: String,
        default: 'Hussain Sir',
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    prerequisites: {
        type: String
    },
    enrollmentLimit: {
        type: Number,
        default:20
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    duration: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    status: {
        type: String,
        enum: ['Draft', 'Published', 'Closed'],
        default: 'Draft'
    },
});


// mongoose.deleteModel("Course")

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);;
 