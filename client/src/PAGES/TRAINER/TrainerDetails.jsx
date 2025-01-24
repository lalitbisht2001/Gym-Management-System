import { useParams } from "react-router-dom"
import { trainers } from "./DetailsTrainers"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import style from "./TrainerDetails.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const TrainerDetails = () => {
    const { name } = useParams();

    const trainer = trainers.find((trainer) => trainer.name.toLowerCase() === name.toLowerCase());

    if (!trainer) {
        return (
            <div>
                <h1>Trainer not Found</h1>
                <p>We could`t find any trainer</p>
            </div>
        )
    }
    const { Photo, designation, education, expertise, about, instagram, facebook, otherLinks } = trainer;
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <img src={Photo} alt={`${trainer.name}'s photo`} className={style.photo} />
                <p className={style.name}>{trainer.name}</p>
                <p className={style.known}> {designation}</p>
                <p className={style.known}> {expertise}</p>
                <p className={style.known}>{education}</p>
                <p className={style.about}>{about}</p>
                <p >
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className={style.link}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a> |{" "}

                    <a href={facebook} target="_blank" rel="noopener noreferrer" className={style.link}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </p>
                <p>
                    {otherLinks.map((link, index) => (
                        <span key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer" className={style.link}>Website</a>{" "}
                        </span>
                    ))}
                </p>
            </div>
            <Footer />
        </>
    )
}

export default TrainerDetails
