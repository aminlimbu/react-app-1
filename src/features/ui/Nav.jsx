import { useState } from "react";

function Nav() {
    const [clicked, setClicked] = useState(true);
    const [active, setActive] = useState(false);

    function handleIcon() {
        return setClicked(!clicked) && setActive(!active);
    }

    return (
        <nav className="nav-bar">
            <ul
                className={clicked ? "nav-list" : "nav-list-active"}
                id="list-items"
                // onMouseLeave={handleIcon}
            >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className="menu-icon" onClick={handleIcon}>
                <span className="material-symbols-outlined">
                    {clicked ? "menu" : "close"}
                </span>
            </div>
            <ul
                className={clicked ? "nav-list" : "nav-list-active"}
                id="mobile-list-items"
                onMouseLeave={handleIcon}
            >
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
                <a href="/contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    );
}
export default Nav;
