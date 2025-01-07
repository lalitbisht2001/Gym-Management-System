import style from "./AboutPage.module.css";
import Image from "/about-fitness.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPersonRunning, faChild } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
    const Arr = [
        {
            logo: <FontAwesomeIcon icon={faDumbbell} />,
            name: "Weight Lifting",
            para: "Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates."
        },
        {
            logo: <FontAwesomeIcon icon={faPersonRunning} />,
            name: "Running",
            para: "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet…"
        },
        {
            logo: <FontAwesomeIcon icon={faChild} />,
            name: "Yoga",
            para: "Yoga is a meditative means of discovering dysfunctional perception and cognition, as well as overcoming it for release from suffering, inner peace, and salvation."
        },
    ];

    return (
        <div className={style.main}>
            <div className={style.image_box}>
                <img src={Image} alt="About Fitness" className={style.img} />
                <p className={style.heading}>
                    All
                    <span> About </span>
                    <br />
                    Fitness
                </p>
            </div>
            <div className={style.about}>
                <div className={style.triangle_right}></div>
                {Arr.map(({ logo, name, para }, id) => (
                    <div key={id} className={style.box}>
                        <div className={style.logo_box}>
                            <div className={style.logo}>{logo}</div>
                            <p className={style.name}>{name}</p>
                        </div>
                        <p className={style.para}>
                            {para}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
