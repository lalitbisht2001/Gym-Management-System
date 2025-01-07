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
import axios from "axios";
import { useState, useEffect } from "react";


const ClassDetail = () => {
    const Navigate = useNavigate()
    const { className } = useParams();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [classInfo, setClassInfo] = useState(null);

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
            description: "Martial arts are a diverse range of practices and traditions rooted in self-defense, physical fitness, and mental discipline. Originating from ancient cultures, martial arts are not only a form of combat training but also a means of personal development, emphasizing respect, humility, and perseverance. There are various styles of martial arts, each with unique techniques, philosophies, and cultural significance.Some popular styles include Karate, known for its striking techniques and focus on discipline; Taekwondo, characterized by high kicks and agility; Judo, which emphasizes throws and grappling; and Kung Fu, a Chinese practice blending fluid movements with mindfulness.Brazilian Jiu- Jitsu focuses on ground combat and submissions, while Muay Thai, or is celebrated for its powerful strikes using fists, elbows, knees, and shins.Martial arts offer numerous benefits, including improved physical strength, flexibility, and endurance.Mentally, they cultivate focus, confidence, and stress relief.Many practitioners value the spiritual aspect, as martial arts often integrate meditation and philosophies promoting harmony and inner peace.",
            schedule: "Sunday and Wednesday, 1:30 AM - 12:00 AM",
            photo: Photo2,
        },
        running: {
            description: "Running is a fundamental and accessible form of physical exercise that involves moving at a steady pace, often faster than walking. It is one of the most effective ways to improve cardiovascular health, build endurance, and enhance overall physical fitness. Running can be done anywhere, making it a versatile activity for people of all fitness levels. As a weight-bearing exercise, running strengthens bones, muscles, and joints while boosting metabolism and aiding in weight management. It is also known to improve mental health by reducing stress, anxiety, and depression, thanks to the release of endorphins, often referred to as the runner's high. Regular running promotes better sleep, increased energy, and a stronger immune system. There are various forms of running, including recreational jogging, competitive track and field events, marathon running, trail running, and sprinting. Each form caters to different goals, from leisurely fitness improvement to high-intensity competition. To start running safely, it's essential to wear proper running shoes, warm up before a run, and maintain good posture. Beginners should start with shorter distances and gradually increase intensity and duration to prevent injuries. Staying hydrated, maintaining a balanced diet, and allowing time for recovery are key to sustaining a running routine.",
            schedule: "Thursday and Friday, 1:30 AM - 12:00 AM",
            photo: Photo3,
        },
        meditation: {
            description: "Meditation is a practice that involves focusing the mind and achieving a state of deep relaxation and mental clarity. It is rooted in ancient traditions but remains widely practiced today for its numerous physical, mental, and emotional benefits. At its core, meditation is about being present in the moment, often through techniques such as deep breathing, mindfulness, or visualization. Physically, meditation helps reduce stress, lower blood pressure, and improve sleep quality. Mentally, it enhances focus, creativity, and emotional resilience while reducing feelings of anxiety and depression. Meditation also fosters self-awareness and can improve relationships by promoting patience and empathy.There are different types of meditation, including mindfulness meditation, which focuses on being aware of the present moment; transcendental meditation, which uses a mantra to quiet the mind; and guided meditation, where a teacher or recording provides instructions to aid relaxation. Other forms include loving-kindness meditation, which emphasizes compassion, and body scan meditation, which focuses on bodily sensations.",
            schedule: "Wednesday and Thursday, 1:30 AM - 12:00 AM",
            photo: Photo4,
        },
        karate: {
            description: "Karate is a traditional martial art that originated in Okinawa, Japan, and emphasizes self-defense, discipline, and physical conditioning. The word karate translates to empty hand, reflecting its focus on unarmed combat techniques. It combines strikes, punches, kicks, and defensive movements with precise, controlled motions.Karate is practiced in various styles, such as Shotokan, Goju-Ryu, Shito-Ryu, and Wado-Ryu, each with distinct techniques and philosophies. Training typically involves three main components: kihon, or basic techniques; kata, which are choreographed patterns of movements representing combat scenarios; and kumite, or sparring, where practitioners apply techniques in controlled fights. Beyond physical skills, karate fosters mental discipline, respect, and self-confidence. Practitioners are taught to focus their energy, remain calm under pressure, and respect their instructors, peers, and opponents. It is also an excellent way to improve overall fitness, as it enhances strength, flexibility, balance, and coordination. Karate is practiced worldwide and is both a form of personal development and a competitive sport, recognized in events like the Olympics. Whether pursued for self-defense, fitness, or personal growth, karate offers a holistic approach to physical and mental well-being while promoting a deep sense of discipline and respect.",
            schedule: "Sunday and Monday, 1:30 AM - 12:00 AM",
            photo: Photo5,
        },
        bodybuilding: {
            description: "Bodybuilding is a sport and physical activity that focuses on developing and enhancing muscle strength and size through resistance training and proper nutrition. It involves a combination of weight lifting, specialized workout routines, and a structured diet to build muscle mass, reduce body fat, and improve overall body composition. The goal of bodybuilding is to achieve an aesthetically pleasing physique with well-defined muscles. Training for bodybuilding typically involves lifting weights in a progressive manner, gradually increasing resistance to stimulate muscle growth (hypertrophy). Bodybuilders often perform a variety of exercises targeting different muscle groups, such as squats for the legs, bench presses for the chest, and deadlifts for the back. Strength and conditioning exercises are paired with cardiovascular training to improve endurance and promote fat loss. Nutrition plays a crucial role in bodybuilding, as it provides the necessary fuel for muscle growth and recovery. A balanced diet rich in proteins, carbohydrates, healthy fats, and vitamins is essential. Many bodybuilders also follow a specific eating schedule, focusing on protein intake before and after workouts to optimize muscle repair and growth. Supplements like protein powders, creatine, and branched-chain amino acids (BCAAs) are often used to support training efforts.",
            schedule: "Monday and Tuesday, 1:30 AM - 12:00 AM",
            photo: Photo6,
        },
    };

    useEffect(() => {

        const checkAuth = async () => {
            try {
                const response = await axios.get("/api/course", { withCredentials: true });
                if (response.status === 200) {
                    setIsAuthenticated(true);
                    setClassInfo(classDetails[className.toLowerCase()]);
                }
            } catch (err) {
                console.log("Not authenticated, redirecting to login...", err);
                setIsAuthenticated(false); // User is not authenticated
            }
        };

        checkAuth();
    }, [className]);

    // If the user is not authenticated, redirect to the login page
    if (isAuthenticated === false) {
        return <Navigate to="/login" />;
    }

    // If the authentication status is still loading, you can return a loading state
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <MainHeading exerciseName={exerciseName} />
            <div className={style.main}>
                <div className={style.photo_div}>
                    <img src={classInfo?.photo} alt={exerciseName} className={style.img} />
                </div>
                <div className={style.heading}>
                    <p>{classInfo?.description}</p>
                </div>
                <NavLink to={`/class/${className.toLowerCase()}/course`} className={style.btn}>Buy Now</NavLink>
                <div className={style.schedule}>
                    <p className={style.name}>Schedule</p>
                    <p className={style.time}>{classInfo?.schedule}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClassDetail;



