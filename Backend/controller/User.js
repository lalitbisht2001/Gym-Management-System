const userData = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables.");
    process.exit(1);
}

// ........................................Signup................................
exports.useSignup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await userData.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already registered" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const userCreate = await userData.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: { id: userCreate._id, name: userCreate.name, email: userCreate.email },
        });
    } catch (err) {
        console.error("Error in useSignup:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// ........................................Logout................................

exports.useLogout = (req, res) => {
    try {
        // Clear the authentication cookie (JWT or any token stored in cookies)
        res.clearCookie("token", {
            httpOnly: true,
            secure: false, // Set to true in production with HTTPS
            sameSite: 'Lax',
            path: "/",
            domain: "localhost", // Adjust domain as needed
        });

        // If you're using express-session, destroy the session
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).json({ message: "Failed to destroy session" });
                }

                // Clear the session cookie (typically called 'connect.sid')
                res.clearCookie("connect.sid", {
                    httpOnly: true,
                    secure: false, // Set to true in production with HTTPS
                    sameSite: 'Lax',
                    path: "/",
                    domain: "localhost",
                });

                return res.status(200).json({ message: "Logout successful!" });
            });
        } else {
            // If no session is used, just return the response
            return res.status(200).json({ message: "Logout successful!" });
        }
    } catch (err) {
        console.error("Error during logout:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// ........................................Login................................

exports.useLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "All fields are required" });

    try {
        const user = await userData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found. Please register first." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { email: user.email, id: user._id },
            JWT_SECRET,
            { expiresIn: "3h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            path: "/",
            domain: "localhost",
        });
        console.log(req.cookies.token);
        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error("Error in useLogin:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};





