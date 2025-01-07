const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const userRouter = require('./router/useRouter');

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', userRouter);

// Server Port
const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
