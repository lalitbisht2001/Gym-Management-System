import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Photo1 from "../../../public/ABOUT/01.jpg";
import Photo2 from "../../../public/ABOUT/02.jpg";
import Photo3 from "../../../public/ABOUT/03.jpg";
import Photo4 from "../../../public/ABOUT/04.jpg";
import Photo5 from "../../../public/ABOUT/05.jpg";
import Photo6 from "../../../public/ABOUT/06.jpg";
import Photo7 from "../../../public/ABOUT/07.jpg";
import { useEffect, useState } from "react";
import style from "./Connect.module.css";
const Connect = () => {
    const Photo = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7];
    const [isNumber, setIsNumber] = useState(0);

    useEffect(() => {
        const handlePhoto = setInterval(() => {
            setIsNumber((prev) => (prev + 1) % Photo.length);
        }, 4000);

        return () => clearInterval(handlePhoto);
    }, [Photo.length]);

    return (
        <>
            <Navbar />
            <div className={style.right_move}>
            </div>
            <div className={style.main}>
                <img src={Photo[isNumber]} alt={`Photo ${isNumber + 1}`} className={style.img} />
            </div>
            <div className={style.about}>
                <p className={style.about1}>KMD <span className={style.about2}>Fitness</span></p>
                <div className={style.about3}>
                    In the modern world, where sedentary lifestyles and unhealthy habits dominate, maintaining physical fitness is not just a choice but a necessity. KMD Gym stands out as a beacon for health enthusiasts and beginners alike, offering a holistic approach to physical fitness, mental well-being, and an active lifestyle. This essay delves into the various aspects of KMD Gym, its offerings, its emphasis on community, and how it motivates individuals to prioritize health.
                </div>
                <div className={style.about4}>
                    "KMD Gym is not just a place to lift weights or run on a treadmill; it is a community-driven establishment focused on empowering individuals to lead healthier lives. The gym’s vision is to inspire a healthier world by creating a space where fitness and well-being are accessible to everyone. Its mission is to integrate physical fitness, mental clarity, and nutritional balance into the lives of its members, enabling them to achieve their goals sustainably."
                </div>
            </div>
            <div className={style.facts}>
                <p className={style.facts1}>Facilities at KMD Gym</p>
                <dl>
                    <dt>Cardio Zone</dt>
                    <dd>The cardio zone is equipped with advanced treadmills, elliptical machines, stationary bikes, and rowing machines. These machines are designed with user-friendly interfaces and features like heart rate monitoring, fitness tracking, and customizable programs to suit all levels of fitness.</dd>
                </dl>
                <dl>
                    <dt>Strength Training Area</dt>
                    <dd>For those focusing on building muscle or improving strength, the strength training area is stocked with free weights, resistance machines, and functional fitness tools. Whether you're a beginner or an advanced lifter, the gym provides equipment suited to every individual’s needs.</dd>
                </dl>
                <dl>
                    <dt>Personalized Training Services</dt>
                    <dd>For members who require one-on-one attention, KMD Gym provides personalized training services. Certified trainers design tailored fitness programs based on individual goals, whether it’s weight loss, muscle gain, endurance building, or rehabilitation.</dd>
                </dl>
                <dl>
                    <dt>Weight Loss Programs</dt>
                    <dd>The gym offers scientifically-backed weight loss programs that combine cardio exercises, strength training, and nutrition counseling. These programs are designed to help members shed excess weight safely and sustainably.</dd>
                </dl>
                <dl>
                    <dt>Yoga and Mindfulness</dt>
                    <dd>KMD Gym offers yoga classes that blend physical postures, breathing techniques, and meditation. These sessions promote flexibility, stress relief, and mental clarity, catering to those seeking a holistic approach to fitness.</dd>
                </dl>
                <dl>
                    <dt>Strength and Conditioning</dt>
                    <dd>Strength and conditioning programs at KMD Gym focus on enhancing muscle endurance, power, and overall athletic performance. These programs are perfect for athletes and fitness enthusiasts looking to take their training to the next level.</dd>
                </dl>
                <dl>
                    <dt>Outdoor Activities and Events</dt>
                    <dd>KMD Gym frequently organizes outdoor activities such as boot camps, hiking trips, and cycling events. These activities provide members with an opportunity to explore fitness beyond the gym walls and engage with the community.</dd>
                </dl>
            </div>
            <Footer />
        </>
    );
};

export default Connect;
