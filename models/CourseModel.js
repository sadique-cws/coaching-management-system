import mongoose from "mongoose";
import CategoryModel from "./CategoryModel";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default:null,
    },
    fee: {
        type: Number,
        default:null,
    },
    instructor: {
        type: String,
        default: 'Hussain Sir',
        default:null,
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default:null,
    },
    prerequisites: {
        type: String,
        default:null,

    },
    enrollmentLimit: {
        type: Number,
        default:20
    },
    startDate: {
        type: Date,
        default:null,

    },
    endDate: {
        type: Date,
        default:null,
    },
    duration: {
        type: Number,
        default:null,

    },
    image:{
        type: String,
        default:null,

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CategoryModel,
        default:null,

    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        default:null,
    }],
    status: {
        type: String,
        enum: ['Draft', 'Published', 'Closed'],
        default: 'Draft'
    },
});


// mongoose.deleteModel("Course")

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);;
 