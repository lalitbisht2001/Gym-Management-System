import style from "./Class.module.css";
import { NavLink } from "react-router-dom";

const MainHeading = ({ exerciseName }) => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div className={style.allclass}>
                    <p>{exerciseName || "All Classes"}</p>
                </div>
                <div className={style.link_div}>
                    <NavLink className={style.link} to='/'>Home</NavLink>
                    <p>/</p>
                    <NavLink className={style.link} to='/class'>Classes</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainHeading
