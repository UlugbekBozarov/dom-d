import { BiMenu } from "react-icons/bi";
import './sidebar.css'

const Sidebar = () => {

    const openLeftSidebar = () => {
        document.getElementById('left-sidebar').classList.add("open")
    }

    return (
        <div id="sidebar">
            <div className="row m-0 pt-3">
                <div className="col-lg-1 d-none d-lg-block">
                    <div className="menu_icon">
                        <button className="btn p-0" onClick={openLeftSidebar}>
                            <BiMenu />
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-10 px-0 px-md-2">
                    <div className="row m-0">

                        <div className="col-12 col-sm-12 col-md-4 col-lg-5 d-flex">
                            <div className="d-block d-lg-none text-white pr-1">
                                <div className="menu_icon">
                                    <button className="btn p-0" onClick={openLeftSidebar}>
                                        <BiMenu />
                                    </button>
                                </div>
                            </div>
                            <div className="w-100 d-block d-lg-flex" style={{ width: "auto" }}>
                                <div className="d-flex align-items-center p-0 pr-md-3">
                                    <div>
                                        <img src="../images/header/image 2.png" className="dom_d" alt="dom-d" />
                                    </div>
                                    <a href="#doma" className="w-100 d-flex d-md-none justify-content-end text-white font-weight-bold mb-2 pl-2">
                                        <div className="d-flex align-items-center">
                                            <img className="pr-2" src="../images/header/telephone.png" alt="img" />
                                        </div>
                                        <span className="" style={{ fontSize: "14px" }}>+38 (098) 271-50-35</span>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="menu_text m-0">
                                                Строительство деревянных домов
                                            </p>
                                            <p className="text-white m-0">
                                                <b>за <span className="text-warning">45</span> дней</b>
                                            </p>
                                        </div>
                                    </div>
                                    <span className="d-flex justify-content-end d-md-none d-flex pr-1">
                                        <a href="#doma" className="rounded p-1" style={{ height: "40px", backgroundColor: "transparent" }}>
                                            <img className="h-100" src="../images/header/phone.png" alt="phone" />
                                        </a>
                                        <a href="#doma" className="rounded p-1" style={{ height: "40px", width: "40px" }}>
                                            <img className="h-100" src="../images/header/telegram.png" alt="telegram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-5 col-lg-4 d-none d-md-block align-items-stretch text-white">
                            <p className="text-center text-warning mb-3" style={{ fontSize: "12px" }}>
                                Нажмите, чтобы начать общение
                            </p>
                            <div className="d-flex">
                                <div className="w-50 pr-1">
                                    <a href="#doma" className="btn btn-block rounded-0 p-1" style={{ height: "40px", backgroundColor: "rgb(56, 56, 56)" }}>
                                        <span className="pr-1">
                                            <img className="h-100" src="../images/header/phone.png" alt="phone" />
                                        </span>
                                        <span className="text-white pl-1">Viber</span>
                                    </a>
                                </div>
                                <div className="w-50 pl-1">
                                    <a href="#doma" className="btn btn-block rounded-0 p-1" style={{ height: "40px", backgroundColor: "rgb(56, 56, 56)" }}>
                                        <span className="pr-1">
                                            <img className="h-100" src="../images/header/telegram.png" alt="telegram" />
                                        </span>
                                        <span className="text-white pl-1">Telegram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3 d-none d-md-flex justify-content-end text-white pl-0">
                            <div>
                                <a href="#doma" className="d-block text-white font-weight-bold mb-2 pr-0">
                                    <img className="pr-2" src="../images/header/telephone.png" alt="img" />
                                    <span className="" style={{ fontSize: "14px" }}>+38 (098) 271-50-35</span>
                                </a>
                                <button id="contact-me" className="btn btn-block py-2 rounded-0 bg-warning">ПЕРЕЗВОНИТЬ МНЕ</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;