// PACKAGE IMPORTS
import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// ROUTE IMPORTS
import staffRoutes from './routes/staffRoutes.js'
import profileRoutes from './routes/profileRoutes.js'

//GENERAL CONSTANTS
const app = express();
const PORT = process.env.PORT || 5000;
const db_URI = process.env.db_URI;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/staffs', staffRoutes);
app.use('/auth', profileRoutes);

//DB CONFIG
const connectDB = async url => {
    await mongoose
        .connect(url)
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err))
}

//PORT LISTEN
app.listen(PORT, async () => {
    await connectDB(db_URI);
    console.log(`Server started at port ${PORT}`);
})
