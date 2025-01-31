import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sharedContext } from "../CONTEXTAPI/sharedContext";

const Login = () => {
    const navigate = useNavigate();
    const { setIsLogin } = useContext(sharedContext);
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            setError("Please fill in all the fields!");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5001/api/login",
                {
                    email: input.email,
                    password: input.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            setIsLogin(true);
            console.log(res);
            setError(null);
            navigate('/');
        } catch (err) {
            setError("Something went wrong! Please try again later.");
            console.error(err);
        }
    };

    return (
        <div className={style.main}>
            <div className={style.box}>
                <p className={style.heading}>LOGIN</p>
                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder="Enter the Email"
                            name="email"
                            value={input.email}
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder="Enter the Password"
                            name="password"
                            value={input.password}
                            onChange={handleData}
                        />
                    </div>
                    {error && <p className={style.error}>{error}</p>}
                    <div className={style.btn_div}>
                        <button className={style.btn}>Login</button>
                    </div>
                    <p className={style.link}>
                        Click to register <NavLink to='/register' className={style.navlink}>Signup</NavLink> ?
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
