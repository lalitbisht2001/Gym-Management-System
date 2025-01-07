import { useState } from "react";
import style from "./Calculator.module.css";

const Calculator = () => {
    const [input, setInput] = useState({
        height: "",
        weight: "",
    });
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { height, weight } = input;

        if (!weight || !height || isNaN(weight) || isNaN(height)) {
            setMessage("Please enter valid numerical values for weight and height.");
            setBmi(null);
            return;
        }

        const heightInMeters = height / 100;
        const bmiValue = (weight / heightInMeters ** 2).toFixed(1);
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setMessage("You are underweight.");
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setMessage("You have a normal weight.");
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setMessage("You are overweight.");
        } else {
            setMessage("You are obese.");
        }
        setInput({
            height: "",
            weight: "",
        })
    };

    return (
        <div className={style.main}>
            <div className={style.calculation}>
                <p className={style.heading}>Calculate Your BMI</p>
                <p className={style.desp}>
                    Fitness is a state of being that allows you to feel healthy and
                    strong, and have enough energy to do the things you enjoy.
                </p>
                <div className={style.input_div}>
                    <input
                        type="text"
                        placeholder="Weight (kg)"
                        className={style.input}
                        name="weight"
                        value={input.weight}
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Height (cm)"
                        className={style.input}
                        name="height"
                        value={input.height}
                        onChange={handleInput}
                    />
                </div>
                <button className={style.btn} onClick={handleSubmit}>
                    CALCULATE
                </button>

                <div className={style.message}>
                    {bmi && (
                        <p>
                            Your BMI : <span>{bmi}</span> .  {message}
                        </p>
                    )}
                    {!bmi && message && <p>{message}</p>}
                </div>
            </div>
            <div className={style.chart}>
                <div className={style.calc}>
                    <p className={style.ph}>BMI</p>
                    <p className={style.ph}>Weight Status</p>
                </div>
                <div className={style.calc}>
                    <p>Below 18.5</p> <p>Underweight</p>
                </div>
                <div className={style.calc}>
                    <p>18.5 - 24.9</p> <p>Normal</p>
                </div>
                <div className={style.calc}>
                    <p>25 - 29.9</p> <p>Overweight</p>
                </div>
                <div className={style.calc}>
                    <p>30 and Above</p> <p>Obese</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
