const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token; // Ensure `cookie-parser` is in use
        if (!token) {
            console.error("No token provided.");
            return res.status(401).json({ message: "Unauthorized access! Token missing." });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error("JWT_SECRET is not defined in environment variables.");
            return res.status(500).json({ message: "Server configuration error!" });
        }

        const decoded = jwt.verify(token, jwtSecret); // Verify token
        req.user = decoded; // Attach decoded data to the request
        next();
    } catch (err) {
        console.error("Error in authMiddleware:", err.message);
        if (err.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: "Invalid token!" });
        }
        if (err.name === 'TokenExpiredError') {
            return res.status(403).json({ message: "Token has expired!" });
        }
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};
