// const mongoose = require("mongoose");
// const stripe = require("stripe")("sk_test_51QhkbUCFS8ZA11qMfl9wui5Xcfpz1QKDc25OujhPGn7tOLY3SSgZlW2ay9UoCwhJnQiWWgvoBu3uvA8erVDPYHbk00jTWjTS3a"); // Replace with your Stripe secret key
// const Course = require("../model/userCourse");

// exports.usePayment = async (req, res) => {
//     try {
//         console.log("Received payment request body:", req.body);  // Log the request body

//         const { course, isTotal, email, startDate, weight, difficultyLevel, month, userId, price } = req.body;

//         if (!course || !isTotal || !email || !startDate || !weight || !difficultyLevel || !month || !userId) {
//             return res.status(400).json({ message: "Invalid request body. Missing required fields." });
//         }

//         // Validate the course data format
//         if (!["Beginner", "Intermediate", "Advanced"].includes(difficultyLevel)) {
//             return res.status(400).json({ message: "Invalid difficulty level provided." });
//         }

//         // Create a Stripe Checkout session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd",
//                         product_data: {
//                             name: course,  // Use the value directly from the `course` field
//                             description: `Difficulty Level: ${difficultyLevel}`,
//                         },
//                         unit_amount: isTotal * 100,  // Ensure the amount is in cents
//                     },
//                     quantity: 1,
//                 },
//             ],
//             mode: "payment",
//             success_url: "http://localhost:5173/Success",  // Replace with your success URL
//             cancel_url: "http://localhost:5173/Cancel",   // Replace with your cancel URL
//         });


//         // Save the course data to MongoDB and associate the userId
//         const newCourse = new Course({
//             email,
//             course: course.course,
//             month,
//             startDate,
//             weight,
//             price, // Assuming price is passed or calculated
//             difficultyLevel,
//             totalPrice: isTotal,
//             user: userId, // Store userId in the user field
//         });

//         await newCourse.save();

//         // Send the session ID back to the client
//         res.status(200).json({ id: session.id });
//     } catch (error) {
//         console.error("Error during payment or course saving:", error.message);
//         res.status(500).json({ message: "Internal server error. Please try again later." });
//     }
// };
