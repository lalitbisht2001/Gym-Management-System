import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import MainHeading from "./MainHeading";
import Photo1 from "/CLASS/Photo1.jpg";
import Photo2 from "/CLASS/Photo2.jpg";
import Photo3 from "/CLASS/Photo3.jpg";
import Photo4 from "/CLASS/Photo4.jpg";
import Photo5 from "/CLASS/Photo5.jpg";
import Photo6 from "/CLASS/Photo6.jpg";
import style from "./ClassDetails.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { sharedContext } from "../../CONTEXTAPI/sharedContext";

const ClassDetail = () => {
    const navigate = useNavigate();
    const { className } = useParams();
    const [classInfo, setClassInfo] = useState(null);
    const { sharedData, storeEmailInSharedData } = useContext(sharedContext); 

    const exerciseName = className
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const classDetails = {
        cycling: {
            description: "Cycling is a versatile and eco-friendly activity that serves as a mode of transportation, a recreational hobby, and a competitive sport. It is suitable for people of all ages and offers numerous health benefits, including improved cardiovascular fitness, enhanced muscle strength, and mental well-being. As a low-impact exercise, cycling is gentle on the joints, making it an excellent choice for those with physical limitations. It can be enjoyed in various forms, such as road cycling, mountain biking, track cycling, or indoor cycling, catering to diverse interests and fitness levels. Equipped with proper gear like helmets, reflective clothing, and a well-fitted bike, cycling can be a safe and enjoyable experience. Beyond its physical advantages, cycling promotes environmental sustainability by reducing carbon emissions. Whether used for commuting, exploring scenic trails, or participating in global events like the Tour de France, cycling remains a timeless and fulfilling activity.",
            schedule: "Friday and Saturday, 1:30 AM - 12:00 AM",
            photo: Photo1,
        },
        martial: {
            description: "Martial arts are a diverse range of practices and traditions rooted in self-defense, physical fitness, and mental discipline. Originating from ancient cultures, martial arts are not only a form of combat training but also a means of personal development, emphasizing respect, humility, and perseverance. There are various styles of martial arts, each with unique techniques, philosophies, and cultural significance. Some popular styles include Karate, known for its striking techniques and focus on discipline; Taekwondo, characterized by high kicks and agility; Judo, which emphasizes throws and grappling; and Kung Fu, a Chinese practice blending fluid movements.",
            schedule: "Sunday and Wednesday, 1:30 AM - 12:00 AM",
            photo: Photo2,
        },
        running: {
            description: "Running is a fundamental and accessible form of physical exercise that involves moving at a steady pace, often faster than walking. It is one of the most effective ways to improve cardiovascular health, build endurance, and enhance overall physical fitness. Running can be done anywhere, making it a versatile activity for people of all fitness levels. As a weight-bearing exercise, running strengthens bones, muscles, and joints while boosting metabolism and aiding in weight management. It is also known to improve mental health by reducing stress, anxiety, and depression, thanks to the release of endorphins, often referred to as the runner's high.",
            schedule: "Thursday and Friday, 1:30 AM - 12:00 AM",
            photo: Photo3,
        },
        meditation: {
            description: "Meditation is a practice that involves focusing the mind and achieving a state of deep relaxation and mental clarity. It is rooted in ancient traditions but remains widely practiced today for its numerous physical, mental, and emotional benefits. At its core, meditation is about being present in the moment, often through techniques such as deep breathing, mindfulness, or visualization. Physically, meditation helps reduce stress, lower blood pressure, and improve sleep quality. Mentally, it enhances focus, creativity, and emotional resilience while reducing feelings of anxiety and depression.",
            schedule: "Wednesday and Thursday, 1:30 AM - 12:00 AM",
            photo: Photo4,
        },
        karate: {
            description: "Karate is a traditional martial art that originated in Okinawa, Japan, and emphasizes self-defense, discipline, and physical conditioning. The word karate translates to empty hand, reflecting its focus on unarmed combat techniques. It combines strikes, punches, kicks, and defensive movements with precise, controlled motions. Karate is practiced in various styles, such as Shotokan, Goju-Ryu, Shito-Ryu, and Wado-Ryu, each with distinct techniques and philosophies.",
            schedule: "Sunday and Monday, 1:30 AM - 12:00 AM",
            photo: Photo5,
        },
        bodybuilding: {
            description: "Bodybuilding is a sport and physical activity that focuses on developing and enhancing muscle strength and size through resistance training and proper nutrition. It involves a combination of weight lifting, specialized workout routines, and a structured diet to build muscle mass, reduce body fat, and improve overall body composition. The goal of bodybuilding is to achieve an aesthetically pleasing physique with well-defined muscles.",
            schedule: "Monday and Tuesday, 1:30 AM - 12:00 AM",
            photo: Photo6,
        },
    };
    
    const Price = {
        cycling: [1000, 1500, 3000],
        bodybuilding: [1200, 1500, 5000],
        meditation: [500, 1000, 1500],
        running: [700, 1500, 10000],
        martial: [3000, 4500, 7000],
        karate: [1000, 1500, 2000],
    };

    useEffect(() => {
        const currentClassInfo = classDetails[className.toLowerCase()];
        setClassInfo(currentClassInfo);
    }, [className]);

    const handleRegistration = async () => {
        try {
            const res = await axios.get("http://localhost:5001/api/Registration_form", {
                withCredentials: true,
            });
            

            if (res.data.user.email && !sharedData) {
                storeEmailInSharedData(res.data.user.email, res.data.user.id); 
            }
            console.log("Response:", res);
            if (res.status === 200) {
                navigate(`/class/${className.toLowerCase()}/Registration_form`);
            }
        } catch (error) {
            console.error("Error accessing protected route:", error.message);
            navigate('/login');
        }
    };

    if (!classInfo) {
        return <div>Class details not found.</div>;
    }

    const pricing = Price[className.toLowerCase()] || [];

    return (
        <div>
            <Navbar />
            <MainHeading exerciseName={exerciseName} />
            <div className={style.main}>
                <div className={style.photo_div}>
                    <img src={classInfo.photo} alt={exerciseName} className={style.img} />
                </div>
                <div className={style.heading}>
                    <p>{classInfo.description}</p>
                </div>
                <div className={style.pricing}>
                    <p className={style.pheading}>Beginner:</p>    <p className={style.price}>₹{pricing[0] || "N/A"}</p>
                    <p className={style.pheading}>Intermediate:</p><p className={style.price}>₹{pricing[1] || "N/A"}</p>
                    <p className={style.pheading}>Advanced:</p>    <p className={style.price}>₹{pricing[2] || "N/A"}</p>
                </div>
                <NavLink className={style.btn} onClick={handleRegistration}>
                    Registration
                </NavLink>
                <div className={style.schedule}>
                    <p className={style.name}>Schedule</p>
                    <p className={style.time}>{classInfo.schedule}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClassDetail;
