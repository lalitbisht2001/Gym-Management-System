const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const userRouter = require('./router/useRouter');
require("dotenv").config();
const connectDB = require('./mongodb/connect');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to allow CORS from specific origins
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
}));

app.options('*', cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', userRouter);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
