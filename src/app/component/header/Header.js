import React from "react"
import './header.css'

const Header = () => {
    return (
        <div id="header" className="d-flex align-items-center" style={{backgroundImage: "url('/images/header/home.png')"}}>
            <div className="row justify-content-center m-0 pb-5">
                <div className="col-12 col-lg-10 text-white">
                    <div className="row m-0 py-5">
                        <div className="col-12 col-lg-6 order-1 order-md-1">
                            <h1 className="d-title">Сделаем ваш <span className="text-warning">Дом</span></h1>
                            <h2 className="d-text text-start" >
                                готовым к комфортному проживанию
                            </h2>

                            <div className="d-none d-md-block">
                                <div className="row m-0 p-0">
                                    <div className="col-12 d-none d-lg-block p-0">
                                        <p className="m-0 d_text-2">
                                            Строительство деревянных домов «под ключ»:
                                        </p>
                                        <p className="d_text-2">
                                            коттеджи, беседки, бани, дома из клееного бруса
                                        </p>
                                        <div className="d-flex d-md-none justify-content-center mt-4">
                                            <button id="contact-me" className="btn py-2 px-5 rounded-0 bg-warning">Заказать расчет</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-none d-lg-block p-0">
                                        <div className="row m-0">
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Демонтаж
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Бетонные работы
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Возведение стен
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Кровельные работы
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Отделка фасадов
                                                </button>
                                            </div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                                <button className="btn btn-d">
                                                    Инженерные работы
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-block d-md-none order-3 order-md-2">
                            <p className="mt-3 d_text-2">
                                Строительство деревянных домов «под ключ»:
                                коттеджи, беседки, бани, дома из клееного бруса
                            </p>
                            <div className="d-flex d-md-none justify-content-center mt-4">
                                <button id="contact-me" className="btn py-2 px-5 rounded-0 bg-warning">Заказать расчет</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 d-block d-lg-none order-2 order-md-3">
                            <div>
                                <div className="d-none d-md-block d-lg-none order-3 order-md-2">
                                    <p className="d_text-2 mb-4">
                                        Строительство деревянных домов «под ключ»:
                                        коттеджи, беседки, бани, дома из клееного бруса
                                    </p>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Демонтаж
                                    </button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Бетонные работы
                                    </button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Возведение стен
                                    </button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Кровельные работы
                                    </button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Отделка фасадов
                                    </button>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 py-1 px-1">
                                    <button className="btn btn-d">
                                        Инженерные работы
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 d-none d-md-flex justify-content-end order-4 order-md-4">
                            <div className="block-12">
                                <h4 className="text-center text-dark font-weight-bold">Заказать расчет</h4>
                                <p className="text-center text-dark" style={{ lineHeight: "15px" }}>
                                    Оказываем услуги комплексно, совмещая отдельные виды работ
                                </p>
                                <div className="px-2 py-2 py-lg-4 d-flex justify-content-center">
                                    <img src="../images/home/book.png" alt="img" />
                                </div>
                                <div className=" d-flex justify-content-center">
                                    <button id="contact-me" className="btn py-2 px-5 rounded-0 bg-warning">Заказать расчет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header