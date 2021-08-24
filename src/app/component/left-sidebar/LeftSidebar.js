import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { Collapsible } from 'react-hook-collapse';
import './leftSidebar.css'

const LeftSidebar = () => {

    const [sidebarCollapseActive, setSidebarCollapseActive] = useState(2);
    const [openStateIndex, setOpenStateIndex] = useState(0);
    const [state, setState] = useState([
        true,
        false,
        false,
        false,
        false
    ]);

    const updateCollapse = (index) => {
        let copyState = [...state];
        if (openStateIndex !== -1 && openStateIndex !== index) {
            copyState[openStateIndex] = !copyState;
        }

        copyState[index] = !copyState[index];
        setOpenStateIndex(index);
        setState(copyState);
    }

    const closeLeftSidebar = () => {
        document.getElementById('left-sidebar').classList.remove("open");
    }

    return (
        <div id="left-sidebar">
            <div id="sidebar-header" className="d-flex align-items-center">
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn p-0 icon-x" onClick={closeLeftSidebar}>
                            <BsX />
                        </button>
                        <span>
                            <img src="../images/header/image 1.png" alt="img" />
                        </span>
                    </div>
                    <div className="d-flex d-md-none justify-content-end">
                        <button id="contact-me" className="btn py-2 rounded-0 bg-warning" style={{ width: "200px" }}>ПЕРЕЗВОНИТЬ МНЕ</button>
                    </div>
                </div>
            </div>
            <div id="sidebar-body">
                <ul className="nav d-block">
                    <li className="nav-item nav-sidebar">
                        <div onClick={() => updateCollapse(0)} style={{ cursor: "pointer" }}>
                            <span className="menu-title">Виды строительства</span>
                        </div>
                        <Collapsible
                            expanded={state[0]}
                            style={{ overflow: 'hidden', transition: '0.3s' }}
                        >
                            <ul className="nav in-nav w-100">
                                <li className="nav-item d-block">
                                    <a href="#doma" className={sidebarCollapseActive === 1 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(1)}>Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 2 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(2)}>Дома из клеёного бруса</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 3 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(3)}>Фахверковые дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 4 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(4)}>Дома из брёвен</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 5 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(5)}>Беседки</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 6 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(6)}>Ремонт и отделка</a>
                                </li>
                            </ul>
                        </Collapsible>
                    </li>
                    <li className="nav-item nav-sidebar">
                        <div onClick={() => updateCollapse(1)} style={{ cursor: "pointer" }}>
                            <span className="menu-title">Наши работы</span>
                        </div>
                        <Collapsible
                            expanded={state[1]}
                            style={{ overflow: 'hidden', transition: '0.3s' }}
                        >
                            <ul className="nav in-nav w-100">
                                <li className="nav-item d-block">
                                    <a href="#doma" className={sidebarCollapseActive === 7 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(7)}>Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 8 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(8)}>Дома из клеёного бруса</a>
                                </li>
                            </ul>
                        </Collapsible>
                    </li>
                    <li className="nav-item nav-sidebar">
                        <div onClick={() => updateCollapse(2)} style={{ cursor: "pointer" }}>
                            <span className="menu-title">Отзывы клиентов</span>
                        </div>
                        <Collapsible
                            expanded={state[2]}
                            style={{ overflow: 'hidden', transition: '0.3s' }}
                        >
                            <ul className="nav in-nav w-100">
                                <li className="nav-item d-block">
                                    <a href="#doma" className={sidebarCollapseActive === 9 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(9)}>Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 10 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(10)}>Дома из клеёного бруса</a>
                                </li>
                            </ul>
                        </Collapsible>
                    </li>
                    <li className="nav-item nav-sidebar">
                        <div onClick={() => updateCollapse(3)} style={{ cursor: "pointer" }}>
                            <span className="menu-title">Партнеры</span>
                        </div>
                        <Collapsible
                            expanded={state[3]}
                            style={{ overflow: 'hidden', transition: '0.3s' }}
                        >
                            <ul className="nav in-nav w-100">
                                <li className="nav-item d-block">
                                    <a href="#doma" className={sidebarCollapseActive === 11 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(11)}>Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 12 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(12)}>Дома из клеёного бруса</a>
                                </li>
                            </ul>
                        </Collapsible>
                    </li>
                    <li className="nav-item nav-sidebar">
                        <div onClick={() => updateCollapse(4)} style={{ cursor: "pointer" }}>
                            <span className="menu-title">Контакты</span>
                        </div>
                        <Collapsible
                            expanded={state[4]}
                            style={{ overflow: 'hidden', transition: '0.3s' }}
                        >
                            <ul className="nav in-nav w-100">
                                <li className="nav-item d-block">
                                    <a href="#doma" className={sidebarCollapseActive === 13 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(13)}>Каркасные дома</a>
                                </li>
                                <li className="nav-item w-100">
                                    <a href="#doma" className={sidebarCollapseActive === 14 ? "nav-link active" : "nav-link"} onClick={() => setSidebarCollapseActive(14)}>Дома из клеёного бруса</a>
                                </li>
                            </ul>
                        </Collapsible>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default LeftSidebar