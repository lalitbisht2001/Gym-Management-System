
const express = require('express');

const { useLogin, useSignup, useLogout } = require('../controller/User');
const { authMiddleware } = require('../controller/Middleware');
const router = express.Router();


router.post('/login', useLogin);
router.post('/register', useSignup);
router.get('/logout', useLogout);
router.get('/course', authMiddleware, (req, res) => {
    res.status(200).json({ message: "Welcome to the protected dashboard!" });
})
module.exports = router;
