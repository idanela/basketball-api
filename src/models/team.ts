import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    conference:
    {
        type:String,
        enum:['West','East'],
        required:true
    }
})

export default mongoose.model('team',teamSchema);