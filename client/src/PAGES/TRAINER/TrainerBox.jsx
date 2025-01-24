import { useState } from "react";
import style from "./TrainerBox.module.css";
import { trainers } from "./DetailsTrainers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const TrainerBox = () => {

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % trainers.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + trainers.length) % trainers.length);
  };

  const visibleItems = Array.from(
    { length: itemsToShow },
    (_, i) => trainers[(startIndex + i) % trainers.length]
  );

  return (
    <div className={style.main}>
      <div className={style.navigation}>
        <p className={style.heading}>Trainers</p>
        <div className={style.line}></div>
        <div className={style.Button} onClick={handlePrevious}>
          <FontAwesomeIcon icon={faLessThan} className={style.icon} />
        </div>
        <div className={style.Button} onClick={handleNext}>
          <FontAwesomeIcon icon={faGreaterThan} className={style.icon} />
        </div>
      </div>
      <div className={style.cardContainer}>
        {visibleItems.map(({ Photo, name, designation, expertise }, id) => (
          <div key={id} className={style.card}>
            <img src={Photo} alt="Loading..." className={style.img} />
            <div className={style.info}>
              <h2 className={style.name}>{name}</h2>
              <p className={style.desp}><p className={style.strong}>Designation</p> {designation}</p>
              <p className={style.desp}><p className={style.strong}>Expertise</p> {expertise}</p>
              <div className={style.link_div}>
                <NavLink className={style.link} to={`/trainer/${name}`}>About</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerBox;
