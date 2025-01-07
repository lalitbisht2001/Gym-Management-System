import { useState } from "react";
import style from "./FeatClass.module.css";
import Photo1 from "/FIRST/Class1.jpg";
import Photo2 from "/FIRST/Class2.jpg";
import Photo3 from "/FIRST/Class3.jpg";
import Photo4 from "/FIRST/Class4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const FeatClass = () => {
    const Arr = [
        {
            name: "Martial Arts",
            photo: Photo1,
            trainer: "John Rawat , Karan Singh",
        },
        {
            name: "Running",
            photo: Photo2,
            trainer: "Arjun Badiyari , Rohan",
        },
        {
            name: "Meditation",
            photo: Photo3,
            trainer: "Jecy Bisht , Gaurav Joshi",
        },
        {
            name: "Cycling",
            photo: Photo4,
            trainer: "Rohan Bisht , Gaurav Joshi",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 3;

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % Arr.length);
    };

    const handlePrevious = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + Arr.length) % Arr.length);
    };

    const visibleItems = Array.from(
        { length: itemsToShow },
        (_, i) => Arr[(startIndex + i) % Arr.length]
    );

    return (
        <div className={style.main}>
            <div className={style.heading_box}>
                <p className={style.heading}>FEATURED CLASSES</p>
                <div className={style.line}></div>
                <div className={style.arrow_div}>
                    <div className={style.arrow_box} onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faLessThan} className={style.icon} />
                    </div>
                    <div className={style.arrow_box} onClick={handleNext}>
                        <FontAwesomeIcon icon={faGreaterThan} className={style.icon} />
                    </div>
                </div>
            </div>
            <div className={style.class}>
                {visibleItems.map(({ photo, name, trainer }, id) => (
                    <div key={id} className={style.box}>
                        <img src={photo} alt={`${name}`} />
                        <div className={style.info}>
                            <p className={style.name}>{name}</p>
                            <div className={style.trainer_div}>
                                <FontAwesomeIcon icon={faUser} className={style.icons} />
                                <p className={style.trainer}>{trainer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatClass;
