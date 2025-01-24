
const express = require('express');

const { useLogin, useSignup, useLogout } = require('../controller/User');
const { authMiddleware } = require('../controller/Middleware');
const { useCourseRegister, getAllCourses } = require('../controller/PAYMENT/Registration');
// const { usePayment } = require('../controller/StripePayment');
const router = express.Router();


router.post('/login', useLogin);
router.post('/register', useSignup);
router.get('/logout', useLogout);

router.get('/Registration_form', authMiddleware, getAllCourses, (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized access! User not found." });
    }
    res.status(200).json({
        message: "Access granted to protected route",
        user: req.user,
    });
});

router.post('/Registration_form', useCourseRegister);

module.exports = router;
