import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import style from "./Trainer.module.css";
import Photo from "../../../public/TRAINER/Owner.png";
import TrainerBox from "./TrainerBox";
const Trainer = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style.img_div}>
                    <img src={Photo} alt="loading.." className={style.img} />
                </div>
                <div className={style.heading}>
                    <p className={style.name}>Arun Singh Joshi</p>
                    <p className={style.education}>Fitness Trainer , Certified Dietician , Wellness Coach Head Trainer , Psychology Specialist</p>
                    <p className={style.thought}>
                        "Your body is the only place you have to live—treat it with respect, fuel it with care, and strengthen it with purpose. Fitness is not about being better than someone else; it's about being better than you used to be."
                    </p>
                </div>
            </div>
            <div className={style.about}>
                <p>
                    Arun Singh Joshi is a passionate and highly accomplished gym owner whose dedication to health and fitness is matched only by his impressive academic achievements. With a B.Tech degree, he combines technical expertise with his deep knowledge of fitness, dietetics, and psychology to provide a holistic approach to well-being. Arun is not just a gym owner; he is a mentor who helps individuals transform their lives by guiding them through fitness regimens tailored to their physical and mental needs.
                </p>
            </div>
            <div className={style.gym}>
                <p className={style.gym_head}>About the Gym</p>
                <p className={style.gym_des}>
                    Arun's gym is more than just a place to work out—it's a community that fosters growth, resilience, and transformation. Whether it's personalized fitness plans, nutritional guidance, or psychological insights for mental strength, the gym offers a comprehensive package to ensure each member reaches their potential.
                </p>
            </div>
            <TrainerBox />
            <Footer />
        </>
    )
}

export default Trainer
