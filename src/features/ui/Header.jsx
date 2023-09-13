import Nav from "./Nav";

const Header = (props) => {
    return (
        <header>
            <Nav overlay={props.overlay} container={props.coatainer} />
        </header>
    );
};
export default Header;
