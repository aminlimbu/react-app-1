import Nav from "./Nav";

const Header = ({ overlay }) => {
    return (
        <header>
            <Nav overlay={overlay} />
        </header>
    );
};
export default Header;
