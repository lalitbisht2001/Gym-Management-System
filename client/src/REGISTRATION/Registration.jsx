import { useContext, useState } from "react";
import style from "./Registration.module.css";
import { useParams } from "react-router-dom";
import { sharedContext } from "../CONTEXTAPI/sharedContext";
import axios from "axios";
import Course from "../PAGES/ACCOUNT/Course";

const Registration = () => {
    const [input, setInput] = useState({
        startDate: "",
        month: "",
        price: 0,
        trainerName: "",
        weight: "",
        difficultyLevel: "",
    });
    const { userId, sharedData } = useContext(sharedContext);
    const { className } = useParams();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isview, setView] = useState(false);
    const Price = [
        { name: "cycling", prices: [1000, 1500, 3000] },
        { name: "bodybuilding", prices: [1200, 1500, 5000] },
        { name: "meditation", prices: [500, 1000, 1500] },
        { name: "running", prices: [700, 1500, 10000] },
        { name: "martial", prices: [3000, 4500, 7000] },
        { name: "karate", prices: [1000, 1500, 2000] },
    ];

    const exerciseName = className
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const handleData = (e) => {
        const { name, value } = e.target;

        setInput((prev) => {
            const updated = { ...prev, [name]: value };

            // Handle difficulty level changes
            if (name === "difficultyLevel") {
                const difficultyIndex = {
                    Beginner: 0,
                    Intermediate: 1,
                    Advanced: 2,
                }[value];

                const course = Price.find((p) => p.name === className.toLowerCase());
                if (course) {
                    const pricePerMonth = course.prices[difficultyIndex] || 0;
                    updated.price = pricePerMonth;

                    // Update total price immediately if months are already selected
                    const months = parseInt(updated.month, 10) || 0;
                    setTotalPrice(months * pricePerMonth);
                }
            }

            // Handle month changes
            if (name === "month") {
                const months = parseInt(value, 10) || 0;
                const pricePerMonth = parseInt(updated.price, 10) || 0;
                setTotalPrice(months * pricePerMonth);
            }

            // console.log("Updated Input:", updated);
            // console.log("Updated Total Price:", totalPrice);

            return updated;
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                email: sharedData,
                course: exerciseName,
                month: input.month,
                startDate: input.startDate,
                weight: input.weight,
                price: input.price,
                difficultyLevel: input.difficultyLevel,
                totalPrice: totalPrice,
                trainerName: input.trainerName,
                user: userId,
            };

            console.log("Payload being sent:", payload);

            const response = await axios.post(
                "http://localhost:5001/api/Registration_form",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setView(true);
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("Error registering course:", error);
            if (error.response) {
                console.error("Server response:", error.response.data);
            }
        }
    };


    return (
        <div className={style.main}>
            <div className={style.form_box}>
                <p className={style.heading}>Registration</p>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.form_div}>
                        <div className={style.box}>
                            <p className={style.heading_name}>Course Name</p>
                            <input
                                type="text"
                                name="course"
                                value={exerciseName}
                                className={style.input}
                                readOnly
                            />
                        </div>
                        <div className={style.box}>
                            <p className={style.heading_name}>Email</p>
                            <input
                                type="text"
                                name="email"
                                value={sharedData}
                                className={style.input}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className={style.form_div}>
                        <div className={style.box}>
                            <p className={style.heading_name}>Start Date</p>
                            <input
                                type="date"
                                name="startDate"
                                value={input.startDate}
                                className={style.input}
                                onChange={handleData}
                                required
                            />
                        </div>
                        <div className={style.box}>
                            <p className={style.heading_name}>No. of Months</p>
                            <input
                                type="number"
                                name="month"
                                value={input.month}
                                className={style.input}
                                onChange={handleData}
                                required
                            />
                        </div>
                    </div>
                    <div className={style.form_div}>
                        <div className={style.box}>
                            <p className={style.heading_name}>Price (per month)</p>
                            <input
                                type="number"
                                name="price"
                                value={input.price || 0}
                                className={style.input}
                                readOnly
                            />
                        </div>
                        <div className={style.box}>
                            <p className={style.heading_name}>Trainer Name</p>
                            <select
                                name="trainerName"
                                value={input.trainerName}
                                className={style.input}
                                onChange={handleData}
                                required
                            >
                                <option value="">Select the Trainer</option>
                                <option value="Lalit Bisht">Lalit Bisht</option>
                                <option value="Arjun Badyari">Arjun Badyari</option>
                                <option value="Gaurav Joshi">Gaurav Joshi</option>
                                <option value="Tom">Tom</option>
                                <option value="Priya Rawat">Priya Rawat</option>
                                <option value="Arun Rawat">Arun Rawat</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.form_div}>
                        <div className={style.box}>
                            <p className={style.heading_name}>Weight</p>
                            <input
                                type="text"
                                name="weight"
                                value={input.weight}
                                className={style.input}
                                onChange={handleData}
                                placeholder="Enter the Weight (kg)"
                                required
                            />
                        </div>
                        <div className={style.box}>
                            <p className={style.heading_name}>Difficulty Level</p>
                            <select
                                name="difficultyLevel"
                                value={input.difficultyLevel}
                                className={style.input}
                                onChange={handleData}
                                required
                            >
                                <option value="">Select the Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>

                            </select>
                        </div>
                    </div>
                    <div className={style.form_div}>
                        <p className={style.heading_name}>Total Price: {totalPrice}</p>
                    </div>
                    <div className={style.btn_div}>
                        <button type="submit" className={style.btn}>
                            Submit
                        </button>
                    </div>
                </form>
                {
                    isview && (
                        <div className={style.payment}>
                            <Course input={input} totalPrice={totalPrice} userId={userId} exerciseName={exerciseName} sharedData={sharedData}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Registration;
