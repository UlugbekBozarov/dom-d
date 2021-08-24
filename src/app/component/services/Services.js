import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import './server.css'

const Services = () => {

    const [servicesMass] = useState([
        {
            id: 1,
            title: "Каркасные дома",
            img: "../images/services/home_2.png"
        },
        {
            id: 2,
            title: "Дома из клеёного бруса",
            img: "../images/services/home_3.png"
        },
        {
            id: 3,
            title: "Дома из брёвен",
            img: "../images/services/home_4.png"
        },
        {
            id: 4,
            title: "Фахверковые дома",
            img: "../images/services/home_5.png"
        },
        {
            id: 5,
            title: "Беседки",
            img: "../images/services/home_6.png"
        },
        {
            id: 6,
            title: "Ремонт и отделка",
            img: "../images/services/home_7.png"
        }
    ]);

    const renderServicesMass = () => {
        return servicesMass.map(m => {
            return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-4 px-3" key={m.id}>
                    <div className="server-block">
                        <span className="server_circle"></span>
                        <h4 className="px-4 font-weight-bold">{m.title}</h4>
                        <div className="px-4 mt-5">
                            <button id="server-button" className="btn d-flex align-items-center py-2 px-5 rounded-0">
                                Подробнее
                                <span className="ml-3" style={{ fontSize: "20px" }}>
                                    <BsArrowRight />
                                </span>
                            </button>
                        </div>
                        <div className="w-100 mt-5">
                            <img className="w-100" src={m.img} alt={m.title} />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="row justify-content-center m-0 py-5">
            <div className="col-12 col-lg-10">
                <div className="row m-0">
                    <div className="col-12 d-none d-lg-block">
                        <h1 className="text-center">Оказываем услуги комплексно, </h1>
                        <h1 className="text-center" style={{ fontWeight: "400" }}>совмещая отдельные виды работ</h1>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <h1 className="text-center font-weight-bold">
                            <span>
                                Оказываем услуги комплексно,
                            </span>
                            <span style={{ fontWeight: "400" }}> совмещая отдельные виды работ</span>
                        </h1>
                    </div>
                </div>

                <div className="row d-none d-md-flex m-0 pt-4">
                    {
                        renderServicesMass()
                    }
                </div>
                <div className="row d-flex d-md-none m-0 pt-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-4 px-3">
                        <div className="server-block">
                            <span className="server_circle"></span>
                            <h4 className="px-4 font-weight-bold">Каркасные дома</h4>
                            <div className="px-4 mt-5">
                                <button id="server-button" className="btn d-flex align-items-center py-2 px-5 rounded-0">
                                    Подробнее
                                    <span className="ml-3" style={{ fontSize: "20px" }}>
                                        <BsArrowRight />
                                    </span>
                                </button>
                            </div>
                            <div className="w-100 mt-5">
                                <img className="w-100" src="../images/services/home_2.png" alt="Каркасные дома" />
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
    )
}
export default Services