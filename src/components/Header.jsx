import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <div className="icon-container">
                <span className="material-symbols-outlined">looks_one</span>
                <span className="logo-text">React App 1</span>
            </div>
            <Nav />
        </header>
    );
};
export default Header;
