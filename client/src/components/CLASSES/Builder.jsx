import style from "./Builder.module.css";
import Photo from "/builder.png";
const Builder = () => {
    return (
        <div className={style.main}>
            <img src={Photo} alt="" className={style.img}/>
            <div className={style.about}>
                <p className={style.upper}>BEING <span>BODY</span></p>
                <p className={style.lower}>BUILDERS</p>
                <button className={style.btn}>SIGN UP</button>
            </div>
        </div>
    )
}

export default Builder
