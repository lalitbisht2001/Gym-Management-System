import { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const [Input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null)
    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!Input.name || !Input.email || !Input.password) {
            setError("Please fill in all the field!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3030/api/register", {
                name: Input.name,
                email: Input.email,
                password: Input.password,
            });
            console.log(res);
            setError(null);
            navigate('/login')
        }
        catch (err) {
            setError(err.response?.data?.message || "something is wrong");
        }
    }
    return (
        <div className={style.main}>
            <div className={style.box}>
                <p className={style.heading}>
                    REGISTER
                </p>
                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            value={Input.name}
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            value={Input.email}
                            onChange={handleData}
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={Input.password}
                            onChange={handleData}
                        />
                    </div>
                    {error && <p className={style.error}>{error}</p>}
                    <div className={style.btn_div}>
                        <button type="submit" className={style.btn}>SignIn</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
