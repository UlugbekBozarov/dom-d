import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoCheckmarkSharp } from "react-icons/io5";
import './js6.css'

const Js6 = () => {

    return (
        <div id="js6" className="my-5">
            <div className="row justify-content-center m-0">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                    <h1 className="text-center mx-0 mx-md-5" style={{ fontWeight: "400" }}>Готовы <span style={{ fontWeight: "500" }}> начать строить дом </span> с надежной компанией?</h1>

                    <div className="row mt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <div className="js6-img-text">
                                <img className="w-100" src="/images/js6/people.png" alt="qwe" />
                                <div className="js6-text">
                                    <p className="m-0">
                                        Здравствуйте, меня зовут
                                    </p>
                                    <p className="m-0">
                                        Ярослав  Доля.
                                    </p>
                                    <p className="m-0">
                                        Я руководитель компании DOM-D
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 d-none d-md-flex align-items-center p-0">
                            <div className="row m-0 mt-5">
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            Мы не просто <span className="font-weight-bold">предоставляем</span> услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания.
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            Вы не <span className="font-weight-bold"> рискуете </span> своими деньгами, нервами и временем. Мы берем на себя полную материальную ответственность по договору за дом, работы, сроки выполнения каждого этапа работы
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            Наша команда стремится к полной <span className="font-weight-bold"> прозрачности </span> в работе, поэтому мы с удовольствием показываем каждый процесс строительства, без прикрас.
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            Мы <span className="font-weight-bold"> гарантируем </span> Ваше минимальное вовлечение в рутину строительства, беря на себя весь комплекс строительных работ
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            Мы <span className="font-weight-bold"> знаем все </span> о строительстве деревянных домов и строительных работах
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6">
                                    <div className="js6-cart">
                                        <p>
                                            <span className="font-weight-bold"> Проектируем </span> и строим авторские дома из дерева и клееного бруса
                                        </p>
                                        <span className="js6-icon text-warning" >
                                            <IoCheckmarkSharp />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 d-block d-md-none px-5 pt-4 pb-2">
                            <div className="col-12 p-3 bg-white ">
                                <div className="js6-cart-sm">
                                    <p>
                                        <span className="font-weight-bold"> Проектируем </span> и строим авторские дома из дерева и клееного бруса
                                    </p>
                                    <span className="js6-icon text-warning" >
                                        <IoCheckmarkSharp />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-100 d-flex justify-content-center">
                            <span className="collaple-prev-next" >
                                <BsArrowLeft />
                            </span>
                            <span className="collaple-prev-next">
                                <BsArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Js6