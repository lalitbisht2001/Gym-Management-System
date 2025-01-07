const userData = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ........................................Signup...

exports.useSignup = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const user = await userData.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already registered" });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


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

//.................................Logout..............................

exports.useLogout = (req, res) => {
    res.cookie("token", "", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    return res.status(200).json({ message: "Logout successful!" });
};

//...................................Login................................
exports.useLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const User = await userData.findOne({ email });

        if (!User) {
            return res.status(404).json({ message: 'Something is wrong' });
        }

        const isMatch = bcrypt.compare(password, User.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Inalid Credentails" });
        }

        const token = jwt.sign({ email: User.email, id: User._id }, "shshshsh");
        res.cookie("token", token, {
            httpOnly: true,
            securesecure: process.env.NODE_ENV === "production",
        })
        return res.status(200).json({ message: "Login successful", token });
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}