import style from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.box}>
                    <p className={style.heading}>About Company</p>
                    <p className={style.para}>
                        Maintaining a good level of physical fitness is important. However, it can be difficult to determine what fitness entails. Various components of physical health can help determine physical fitness.
                    </p>
                </div>
                <div className={style.box}>
                    <p className={style.heading}>Follow Us on Twitter</p>
                    <p className={style.para}>Twitter</p>
                </div>
                <div className={style.box}>
                    <p className={style.heading}>Corporate Office</p>
                    <div className={style.contact}>
                        <p>8976098768</p>
                        <p>gymifo.gmail.com</p>
                        <p>(123)128 9887</p>
                    </div>
                </div>
            </div>
            <div className={style.main2}>
                <p>
                    Copyright Gymfit 2024 . All Right Reserved. Developed by <span>Lalit Bisht</span>
                </p>
            </div>
        </>
    )
}

export default Footer
