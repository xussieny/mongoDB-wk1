const {mongoose}= require('../db');
const {Schema} =mongoose;
const taskSchema = new Schema({
    title:String,
    status:{ enum:["todo", "in_progress", "done"]},
    owner:String,
}, {timestamp:true}
);
const Task = mongoose.model('Task', taskSchema);
module.exports={Task};