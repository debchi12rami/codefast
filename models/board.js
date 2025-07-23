import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        name: {
            type: String,
            required:true,
            trim: true,
            lowercase:true,
            minLength: 5,
            default: "board",
        }
    }
)

export default mongoose.models.Board || mongoose.model("Board" , boardSchema);