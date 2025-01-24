import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Logo from "/Logo_fit.png";
import { sharedContext } from "../../CONTEXTAPI/sharedContext";
import axios from "axios";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const { isLogin, setIsLogin } = useContext(sharedContext);

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (!confirmLogout) return;

        try {
            await axios.get("http://localhost:5001/api/logout", { withCredentials: true });
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            setIsLogin(false);
        } catch (err) {
            alert("Logout failed. Please try again.");
            console.error("Error during logout:", err);
        }
    };

    return (
        <div className={`${style.main} ${scrolling ? style.scrolled : ""}`}>
            <div className={style.logo_div}>
                <img src={Logo} alt="Website Logo" className={style.logo} />
            </div>

            <div className={style.navbar}>
                <div className={style.link_div}>
                    <Link className={style.link} to="/">Home</Link>
                    <Link className={style.link} to="/about">About</Link>
                    <Link className={style.link} to="/daskboard">Daskboard</Link>
                    <Link className={style.link} to="/trainer">Trainers</Link>
                    <Link className={style.link} to="/class">Classes</Link>
                </div>
                <div className={style.btn_div}>
                    {!isLogin ? (
                        <Link className={style.btn} to="/login">Login</Link>
                    ) : (
                        <div className={style.btn} onClick={handleLogout}>Logout</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
