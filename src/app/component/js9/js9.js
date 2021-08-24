const Js9 = () => {

    return (
        <div id="js9" className="py-5" style={{backgroundImage: "url('/images/js9/contact_fon.png')"}}>
            <div className="row justify-content-center m-0">
                <div className="col-12 col-sm-12 col-md-10">
                    <h1 className="text-center mx-0 mx-md-5" style={{ fontWeight: "bold" }}>Наши контакты</h1>

                    <div className="row justify-content-center mt-5 px-0 px-sm-5">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-6 d-flex justify-content-center align-items-center py-2">
                            <div className="js9-cart h-100">
                                <h2 className="font-weight-bold">
                                    Задать вопрос
                                </h2>
                                <p>
                                    Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее время!
                                </p>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Ваш вопросы" style={{ height: "100px" }}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Телефон" />
                                </div>
                                <div>
                                    <button id="contact-me" className="btn rounded-0 px-4">Отправить вопрос</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 col-lg-6 d-flex justify-content-center align-items-center py-2">
                            <div className="js9-cart w-100 h-100">
                                <h2 className="font-weight-bold mb-4">
                                    Мы на связи
                                </h2>
                                <div className="d-flex mb-3">
                                    <div style={{ width: "50px" }}>
                                        <img src="../images/js9/map.png" alt="img" />
                                    </div>
                                    <span>
                                        Украина, г. Одесса
                                        ул. Комитетская, 24Б
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <div style={{ width: "50px" }}>
                                        <img src="../images/js9/message.png" alt="img" />
                                    </div>
                                    <span>
                                        Эл.почта: odessadomd@gmail.com
                                    </span>
                                </div>
                                <div className="d-flex py-4">
                                    <div className="pr-1">
                                        <a href="#doma" className="btn btn-block rounded-0 bg-white py-1 px-4" style={{ height: "40px" }}>
                                            <span className="pr-1">
                                                <img className="h-100" src="../images/header/phone.png" alt="phone" />
                                            </span>
                                            <span className="pl-1">Viber</span>
                                        </a>
                                    </div>
                                    <div className="pl-1">
                                        <a href="#doma" className="btn btn-block rounded-0 bg-white py-1 px-3" style={{ height: "40px" }}>
                                            <span className="pr-1">
                                                <img className="h-100" src="../images/header/telegram.png" alt="telegram" />
                                            </span>
                                            <span className="pl-1">Telegram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div style={{ width: "50px" }}>
                                        <img src="../images/js9/telephone.png" alt="img" />
                                    </div>
                                    <div>
                                        <h4 className="font-weight-bold m-0">
                                            +38 (098) 271-50-35
                                        </h4>
                                        <p className="text-warning">
                                            Мы на связи
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button id="contact-me" className="btn rounded-0 px-4">ПЕРЕЗВОНИТЬ МНЕ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Js9