import mongoose from "mongoose";

const mongoose1 = async () => {
 
    try {
        await mongoose1.connect(process.env.MONGO_URI)

    } catch (e) {
          console.error("Mongoose Error")
    }
};

export default mongoose;
 
