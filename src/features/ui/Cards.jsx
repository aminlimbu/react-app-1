import { Link } from "react-router-dom";

const Cards = (props) => {
    return (
        <Link to={`/landing/${props.name}`} style={{ textDecoration: "none" }}>
            <div className="card">
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${props.imagelink})` }}
                ></div>
                <h2>{props.name}</h2>
                <p>{props.fragrance}</p>
                <p>{props.description.slice(0, 30) + "..."}</p>
            </div>
        </Link>
    );
};
export default Cards;
