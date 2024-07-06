const { default: mongoose } = require("mongoose");

const DB_URI = "mongodb://localhost:27017/login-system";

mongoose.set('strictQuery', true);

async function ConnectToDB() {
    try {
        await mongoose.connect(DB_URI);
        console.log("connected to mongodb.");
    } catch (error) {
        console.log("failed to connect..");
    }
}
ConnectToDB();