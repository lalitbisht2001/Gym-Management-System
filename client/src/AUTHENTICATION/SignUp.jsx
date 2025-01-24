import { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Make sure to add the `VITE_` prefix in .env file for environment variables.
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!input.name || !input.email || !input.password) {
            setError("Please fill in all the fields!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.email)) {
            setError("Please enter a valid email address!");
            return;
        }

        if (input.password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        setLoading(true);
        setError(null); // Reset any previous error before trying to submit

        try {
            await axios.post(`${API_URL}/api/register`, {
                name: input.name,
                email: input.email,
                password: input.password,
            });

            setInput({ name: "", email: "", password: "" }); // Reset input fields
            alert("Registration successful! Redirecting to login...");
            navigate("/login");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to connect to the server. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.main}>
            <div className={style.box}>
                <p className={style.heading}>REGISTER</p>
                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={input.name}
                            onChange={handleData}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={handleData}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={handleData}
                            disabled={loading}
                        />
                    </div>
                    {error && <p className={style.error}>{error}</p>}
                    <div className={style.btn_div}>
                        <button type="submit" className={style.btn} disabled={loading}>
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
