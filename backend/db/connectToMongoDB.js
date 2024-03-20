import mongoose from "mongoose";
const MONGO_DB_URI = 'mongodb://priyanshu:12345@host:port/database';
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
