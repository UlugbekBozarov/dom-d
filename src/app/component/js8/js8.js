import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Js8 = () => {

    return (
        <div id="js8" className="bg-white py-5">
            <div className="row justify-content-center m-0">
                <div className="col-12 col-sm-12 col-md-10 ">
                    <h1 className="text-center  mx-0 mx-md-5 js8-title" style={{ fontWeight: "400" }}>Используем только <span style={{ fontWeight: "500" }}> экологически чистые и профессиональные материалы </span></h1>

                    <div className="row justify-content-center mt-5">
                        <div className="col-3 col-sm-2 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
                            <span className="text-warning" style={{ fontSize: "40px" }}>
                                <BsArrowLeft />
                            </span>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                            <img src="../images/js6/remmers.png" alt="remmers" style={{ width: "140px" }} />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-none d-sm-flex justify-content-center align-items-center">
                            <img src="../images/js6/sadolin.png" alt="sadolin" style={{ width: "100px" }} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2 d-none d-md-flex justify-content-center align-items-center">
                            <img src="../images/js6/pinotex.png" alt="pinotex" style={{ width: "80px" }} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2 d-none d-lg-flex justify-content-center align-items-center">
                            <img src="../images/js6/adler.png" alt="adler" style={{ width: "140px" }} />
                        </div>

                        <div className="col-3 col-sm-2 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
                            <span className="text-warning" style={{ fontSize: "40px" }}>
                                <BsArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Js8