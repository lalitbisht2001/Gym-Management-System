import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={style.main}>
            <div className={style.logo_div}>
                <img src={Logo} alt="loading......" className={style.logo} />
            </div>
            <div className={style.navbar}>
                <div className={style.link_div}>
                    <NavLink className={style.link}>Home</NavLink>
                    <NavLink className={style.link}>About</NavLink>
                    <NavLink className={style.link}>Schedule</NavLink>
                    <NavLink className={style.link}>Trainers</NavLink>
                    <NavLink to='/class' className={style.link}>Classes</NavLink>
                </div>
                <div className={style.btn_div}>
                    <NavLink className={style.btn} to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
