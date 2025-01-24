require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

// Check if MONGO_URL is defined in environment variables
if (!MONGO_URL) {
    console.error("Error: MONGO_URL is not defined in the environment variables.");
    process.exit(1); // Exit the process with a failure code
}

// Function to connect to MongoDB
const connectDB = () => {
    mongoose
        .connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
            process.exit(1); // Exit the process if the connection fails
        });
};

// Export the connectDB function
module.exports = connectDB;
