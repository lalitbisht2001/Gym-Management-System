import style from "./Table.module.css";

const Time = () => {
    return (
        <table className={style.table}>
            <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}><p>Karate</p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}><p>Body Building</p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Meditation</p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}><p>Yoga</p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Running</p><p>12:00am - 2:00am</p></div></td>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}><p>Body Building</p><p>1:30am - 3:30am</p></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Meditation</p><p>1:30am - 3:30am</p></div></td>
                <td><div className={style.box}><p>Yoga</p><p>1:30am - 3:30am</p></div></td>
                <td><div className={style.box}><p></p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}><p>Running</p><p>1:30am - 3:30am</p></div></td>
                <td><div className={style.box}><p>Karate</p><p>1:30am - 3:30am</p></div></td>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Cycling</p><p>2:00am - 4:00am</p></div></td>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Martial Arts</p><p>3:00am - 5:30pm</p></div></td>
                <td><div className={style.box}></div></td>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Cycling</p><p>3:00am - 5:30am</p></div></td>
                <td><div className={style.box}><p></p><p>12:00am - 2:00am</p></div></td>
                <td><div className={style.box}></div></td>
            </tr>
            <tr>
                <td>12:00am</td>
                <td><div className={style.box}><p>Running</p><p>12:00pm - 2:00pm</p></div></td>
                <td><div className={style.box}><p>Karate</p><p>12:00pm - 2:00pm</p></div></td>
                <td><div className={style.box}><p>Body Building</p><p>12:00pm - 2:00pm</p></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p>Meditation </p><p>12:00pm - 2:00pm</p></div></td>
                <td><div className={style.box}><p></p>Yoga<p>12:00pm - 2:00pm</p></div></td>
                <td><div className={style.box}></div></td>
            </tr>
            <tr>
                <td>6:00pm</td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}><p></p><p>6:00pm - 7:30pm</p></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
                <td><div className={style.box}></div></td>
            </tr>
        </table>
    )
}

export default Time
