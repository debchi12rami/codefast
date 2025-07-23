import mongoose from "mongoose";

const mongoose = async () => {
 
    try {
        await mongoose.connect(process.env.MONGO_URI)

    } catch (e) {
          console.error("Mongoose Error")
    }
};

export default mongoose;
 
