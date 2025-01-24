const User = require("../../model/userModel"); // Import User model
const Course = require("../../model/userCourse");

exports.useCourseRegister = async (req, res) => {
    const {
        course,
        email,
        startDate,
        month,
        price,
        trainerName,
        weight,
        difficultyLevel,
        totalPrice,
        user, // User ID
    } = req.body;

    // Validate required fields
    if (!course || !email || !startDate || !month || !price || !trainerName || !weight || !difficultyLevel || !totalPrice || !user) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if the user is trying to register for the same course
        const existingCourse = await Course.findOne({ email, course, user });
        if (existingCourse) {
            return res.status(409).json({ message: "Course already registered for this user" });
        }

        // Create a new course registration
        const newCourse = new Course({
            course,
            email,
            startDate,
            month,
            price,
            trainerName,
            weight,
            difficultyLevel,
            totalPrice,
            user,
        });

        // Save the course to the database
        const savedCourse = await newCourse.save();

        // Add the course ID to the user's `course` array
        await User.findByIdAndUpdate(
            user, // The user's ID
            { $push: { course: savedCourse._id } }, // Add the course ID to the array
            { new: true } // Return the updated document
        );

        console.log("New course registered:", savedCourse);
        return res.status(201).json({
            message: "Course registered successfully",
            course: savedCourse,
        });
    } catch (err) {
        console.error("Error in useCourseRegister:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};


exports.getAllCourses = async (req, res) => {
    const { userId } = req.query; // Expect `userId` from query parameters

    if (!userId) {
        return res.status(400).json({ error: "userId is required" });
    }

    try {
        // Find the user and populate the `course` array with course details
        const user = await User.findById(userId).populate("course");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: "Courses retrieved successfully",
            courses: user.course, // Send the populated courses
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
