import { NavLink } from "react-router-dom";
import style from "./Merge.module.css";
import Photo1 from "/CLASS/Photo1.jpg";
import Photo2 from "/CLASS/Photo2.jpg";
import Photo3 from "/CLASS/Photo3.jpg";
import Photo4 from "/CLASS/Photo4.jpg";
import Photo5 from "/CLASS/Photo5.jpg";
import Photo6 from "/CLASS/Photo6.jpg";

const Merge = () => {
    const Arr = [
        {
            name: "Cycling",
            photo: Photo1,
            link: '/class/cycling',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "FRI",
            w2: "SAT",
        },
        {
            name: "Martial Arts",
            photo: Photo2,
            link: '/class/martial',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "SUN",
            w2: "WED",
        },
        {
            name: "Running",
            photo: Photo3,
            link: '/class/running',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "THU",
            w2: "FRI",
        },
        {
            name: "Meditation",
            photo: Photo4,
            link: '/class/meditation',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "WED",
            w2: "THU",
        },
        {
            name: "Karate",
            photo: Photo5,
            link: '/class/karate',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "SUN",
            w2: "MON",
        },
        {
            name: "Body Building",
            photo: Photo6,
            link: '/class/bodybuilding',
            t1: "1:30AM",
            t2: "12:00AM",
            w1: "MON",
            w2: "TUS",
        }
    ]
    return (
        <div className={style.main}>
            {
                Arr.map(({ name, photo, link, t1, t2, w1, w2 }, id) => (
                    <div key={id} className={style.box}>
                        <img src={photo} alt="loading..." className={style.img} />
                        <div className={style.time}>
                            <div className={style.time_box}>
                                <p className={style.t}>{t1}</p><p className={style.w1}>{w1}</p>
                            </div>
                            <div className={style.time_box}>
                                <p className={style.t}>{t2}</p><p className={style.w1}>{w2}</p>
                            </div>
                        </div>
                        <NavLink to={link} className={style.link_box} >
                            <p className={style.link}>
                                {name}
                            </p>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}

export default Merge
