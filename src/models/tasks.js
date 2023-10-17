const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = mongoose.Schema({
    description:{
        type:String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default:false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Users'
    }
}, {
    timestamps: true
})

const Tasks = mongoose.model('Taks', taskSchema)
module.exports = Tasks