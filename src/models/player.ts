import mongoose from "mongoose";
const schema = mongoose.Schema;
const playerSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    team:
    {
        type:schema.Types.ObjectId,
        ref:"team",
        required:true
    },
    height:
    {
        type:Number,
        required:true
    }
})

export default mongoose.model('player',playerSchema);