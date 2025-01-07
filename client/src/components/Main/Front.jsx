import { useEffect, useState } from "react";
import style from "./Front.module.css";
import Photo1 from "/FIRST/First1.jpg";
import Photo2 from "/FIRST/First2.jpg";
import Photo3 from "/FIRST/First3.jpg";
import Photo4 from "/FIRST/First4.jpg";
import Photo5 from "/FIRST/First5.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

const Front = () => {
  const [number, setNumber] = useState(0);
  const Photos = [Photo1, Photo2, Photo3, Photo4, Photo5];


  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 1) % Photos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [number]);

  const handlePrevious = () => {
    setNumber((prevNumber) => (prevNumber - 1 + Photos.length) % Photos.length);
  };

  const handleNext = () => {
    setNumber((prevNumber) => (prevNumber + 1) % Photos.length);
  };

  return (
    <div className={style.main}>
      <div className={style.photo_div}>
        <img src={Photos[number]} alt={`Slide ${number + 1}`} className={style.img} />
        <div className={style.active}>
          <button className={style.btn_border} onClick={handlePrevious}>
            <FontAwesomeIcon icon={faLessThan} className={style.icon} />
          </button>
          <div className={style.heading}>
            <p className={style.big_head}>
              BUILD <span>YOUR</span> BODY <span>STRONG</span>
            </p>
            <p className={style.desp}>Ready to change your physique, but can`t work out in the gym?</p>
            <button className={style.btn}>Join with us</button>
          </div>
          <button className={style.btn_border} onClick={handleNext}>
            <FontAwesomeIcon icon={faGreaterThan} className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Front;
