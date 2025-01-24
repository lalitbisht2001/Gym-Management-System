import { NavLink } from "react-router-dom";
import style from "./Course.module.css";
import { useState } from "react";

const Course = ({ input, totalPrice, userId, exerciseName, sharedData }) => {
  const { course, email, month, startDate, weight, price, difficultyLevel } = input;
  const [isPay, setIsPay] = useState(false);
  const makePayment = () => {
    setIsPay((prev) => !prev);
  }
  return (
    <div className={style.main}>
      {
        isPay ? (
          <div className={style.success}>
            <p className={style.pay}> Payment Successful ! </p>
            <p className={style.id}>{userId}</p>
            <NavLink to='/' className={style.link} onClick={makePayment}>Home</NavLink>
          </div>
        ) :
          (
            <>
              <p className={style.heading}>Cart</p>
              <div className={style.table}>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{exerciseName}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{sharedData}</td>
                    </tr>
                    <tr>
                      <th>Month</th>
                      <td>{month}</td>
                    </tr>
                    <tr>
                      <th>Start Date</th>
                      <td>{startDate}</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>{weight}</td>
                    </tr>
                    <tr>
                      <th>Total Price</th>
                      <td>{totalPrice}</td>
                    </tr>
                    <tr>
                      <th>Difficulty Level</th>
                      <td>{difficultyLevel}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={style.btn_div}>
                  <button className={style.btn} onClick={makePayment}>
                    Proceed to Buy
                  </button>
                </div>
              </div>
            </>
          )
      }
    </div>
  );
};

export default Course;
