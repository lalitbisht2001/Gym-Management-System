import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./Daskboard.module.css";
import { useContext, useEffect, useState } from "react";
import { sharedContext } from "../../CONTEXTAPI/sharedContext";
import axios from "axios";

const Daskboard = () => {
    const { userId } = useContext(sharedContext); // Retrieve the logged-in user's ID from the context
    const [courses, setCourses] = useState([]); // State to store the fetched courses
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch courses from the backend
                const response = await axios.get(`http://localhost:5001/api/getAllCourse?userId=${userId}`);
                setCourses(response.data.courses); // Update state with fetched courses
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError("Failed to fetch courses. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchCourses(); // Fetch courses when `userId` is available
        }
    }, [userId]);

    return (
        <>
            <Navbar />
            <div className={style.main}>
                <h1>Welcome to Your Dashboard</h1>
                <h2>Your Purchased Courses</h2>

                {loading && <p>Loading courses...</p>}
                {error && <p className={style.error}>{error}</p>}
                {!loading && courses.length === 0 && <p>No courses found.</p>}

                <ul className={style.courseList}>
                    {courses.map((course) => (
                        <li key={course._id} className={style.courseItem}>
                            <h3>{course.course}</h3>
                            <p>Trainer: {course.trainerName}</p>
                            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
                            <p>Price: ${course.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Daskboard;
