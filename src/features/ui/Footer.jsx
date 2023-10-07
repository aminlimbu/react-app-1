import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="grid">
                <div className="copy-right flex">
                    <h2>React App One</h2>
                    <p>Copyright &copy; {year}</p>
                </div>
                <nav className="flex">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/products">
                            <li>Products</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
                <div className="social flex">
                    <ul>
                        <li className="social-fb">
                            <Link to="#">
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </li>
                        <li className="social-in">
                            <Link to="#">
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>
                        <li className="social-x">
                            <Link to="#">
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
