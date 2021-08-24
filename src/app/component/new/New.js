import './new.css'

const New = () => {

    return (
        <div className="row justify-content-center m-0 py-5">
            <div className="col-12 col-lg-10">
                <div className="row m-0">
                    <div className="col-12">
                        <h1 className="text-center">Приступим cегодня</h1>
                        <h5 className="text-center" style={{ fontWeight: "400" }}>Напишите нам, чтобы получить персональное предложение</h5>
                    </div>
                </div>

                <div id="new-body" className="row m-0 mt-5" style={{backgroundImage: "url('/images/new/sss.png')"}}>
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-lg-4">
                        <div>
                            <h3 className="text-warning">
                                Cтроительство дома, не покажешь картинкой
                            </h3>
                            <h5 className="text-white">
                                За каждым домом стоит целая история, смотри полезные  презентации у нас на канале.
                            </h5>
                            <div className="d-flex justify-content-center justify-content-md-start mt-4">
                                <button id="contact-me" className="btn py-2 px-5 rounded-0 bg-warning">Заказать расчет</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center py-4 px-3">
                        <img className="w-75" src="../images/new/karkas 8.png" alt="qwe" style={{height: "auto"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New