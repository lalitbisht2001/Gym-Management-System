import style from "./Table.module.css";
import Time from "./Time";

const Table = () => {
    return (
        <div className={style.main} >
            <div className={style.table_div}>
                <div className={style.heading}>
                    CLASS SCHEDULE
                </div>
                <Time />
            </div>
        </div>
    )
}

export default Table
