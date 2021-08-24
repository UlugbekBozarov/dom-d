import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Js5 = () => {

    return (
        <div id="js5" className="my-5">
            <div className="row justify-content-center m-0">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                    <h1 className="text-center" style={{ fontWeight: "400" }}><span style={{ fontWeight: "500" }}>Посмотрите на готовые дома</span> с комплексом отделки и прокладки коммуникаций.  </h1>
                </div>
            </div>

            <div id="js4" className="row d-none d-md-flex m-0 mt-5 mb-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_1.png" alt="qwe" />
                </div>
                <div className="col-12 col-sm-12 col-md-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_2.png" alt="qwe" />
                </div>
                <div className="col-12 col-sm-12 col-md-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_3.png" alt="qwe" />
                </div>
                <div className="col-12 col-sm-12 col-md-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_4.png" alt="qwe" />
                </div>
                <div className="col-12 col-sm-12 col-md-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_5.png" alt="qwe" />
                </div>
                <div className="col-12 col-sm-12 col-md-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_6.png" alt="qwe" />
                </div>
            </div>

            <div id="js4" className="row d-block d-md-none m-0 mt-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4" style={{ padding: "1px" }}>
                    <img className="w-100 h-100" src="../images/js5/image_1.png" alt="qwe" />
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

            <div className="d-flex justify-content-center pt-3">
                <button id="server-button" className="btn d-flex align-items-center py-2 px-5 rounded-0">
                    Подробнее
                    <span className="ml-3" style={{ fontSize: "20px" }}>
                        <BsArrowRight />
                    </span>
                </button>
            </div>
        </div>

    )
}
export default Js5