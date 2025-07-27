import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
    },
    image: {
        type: String,
    },
    boards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "board",
        },

    ]
});

export default mongoose.models.user || mongoose.model("user" , userSchema);