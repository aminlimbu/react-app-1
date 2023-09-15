import { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ overlay }) {
    const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive((prevActive) => !active);
        setClicked((prevClicked) => !clicked);
        overlay(!active);
    }
    function handleMouseLeave() {
        if (active) {
            setActive(false);
        }
        if (clicked) {
            setClicked(false);
        }
        overlay(false);
    }

    return (
        <nav className="nav-bar">
            <a href="/">
                <div className="icon-container">
                    <span className="material-symbols-outlined">looks_one</span>
                    <span className="logo-text">React App 1</span>
                </div>
            </a>
            <div className="full-nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-collapsed" onMouseLeave={handleMouseLeave}>
                <div className="menu-icon" onClick={handleClick}>
                    <button className="material-symbols-outlined">
                        {clicked ? "close" : "menu"}
                    </button>
                </div>
                <div className={active ? "dynamic-nav" : "dynamic-nav-hide"}>
                    <ul className="dynamic-nav-list" id="mobile-list-items">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
