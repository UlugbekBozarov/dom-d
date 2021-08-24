import './footer.css'

const Footer = () => {

    return (
        <div id="footer" className="py-5 px-3" style={{ backgroundColor: "#1D1A14" }}>
            <div className="row justify-content-center m-0">
                <div className="col-12 col-sm-12 col-md-10">
                    <div className="row px-0 px-sm-5 text-white">
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2 pl-0 pb-4">
                            <img src="../images/header/image 2.png" className="w-100" alt="dom_d" style={{maxWidth: "150px"}} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 p-0">
                            <h6>
                                Виды строительства
                            </h6>
                            <ul className="nav footer w-100 text-white">
                                <li className="nav-item d-block">
                                    <a className={"nav-link"} href="#doma">Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a className={"nav-link"} href="#doma">Дома из клеёного бруса</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a className={"nav-link"} href="#doma">Фахверковые дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a className={"nav-link"} href="#doma">Дома из брёвен</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a className={"nav-link"} href="#doma">Беседки</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a className={"nav-link"} href="#doma">Ремонт и отделка</a>
                                </li>
                            </ul>
                            <div className="d-none d-md-block d-lg-none  mt-2">
                                <h6 className="mb-0">
                                    Наши работы
                                </h6>
                                <h6 className="mb-0">
                                    Отзывы клиентов
                                </h6>
                                <h6>
                                    Партнеры
                                </h6>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 d-block d-md-none d-lg-block">
                            <h6 className="mb-3 mt-4 mt-md-0">
                                Наши работы
                            </h6>
                            <h6 className="mb-3">
                                Отзывы клиентов
                            </h6>
                            <h6 className="mb-4">
                                Партнеры
                            </h6>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-4 p-0">
                            <h5>
                                Контакты
                            </h5>
                            <div className="d-flex align-items-center my-1">
                                <div style={{ width: "25px", marginRight: "5px" }}>
                                    <img src="../images/js9/map.png" alt="img" />
                                </div>
                                <div style={{ fontSize: "12px" }}>
                                    Украина, г. Одесса
                                    ул. Комитетская, 24Б
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <div style={{ width: "25px", marginRight: "5p" }}>
                                    <img src="../images/js9/message.png" alt="img" />
                                </div>
                                <div style={{ fontSize: "12px" }}>
                                    Эл.почта: odessadomd@gmail.com
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <div style={{ width: "25px", marginRight: "5p" }}>
                                    <img src="../images/js9/telephone.png" alt="img" />
                                </div>
                                <div style={{ fontSize: "12px" }}>
                                    +38 (090) 271-50-35
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <div className="mx-1" style={{ width: "40px" }}>
                                    <img className="w-100 rounded-circle" src="../images/js9/facebook.png" alt="img" />
                                </div>
                                <div className="mx-1" style={{ width: "40px" }}>
                                    <img className="w-100 rounded-circle" src="../images/js9/instagramm.svg" alt="img" />
                                </div>
                                <div className="mx-1" style={{ width: "40px" }}>
                                    <img className="w-100 rounded-circle" src="../images/js9/yotubecom.png" alt="img" />
                                </div>
                                <div className="mx-1">
                                    <p className="font-weight-bold m-0" style={{ lineHeight: "15px", fontSize: "13px" }}>
                                        Свежие видео у нас на канале
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer