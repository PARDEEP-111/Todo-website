import mongoose from "mongoose"
const takschema =  new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
         type: String
    }
})
const task = mongoose.model("Task", takschema,"testing data")
export default task