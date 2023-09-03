const Cards = (props) => {
    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${props.imagelink})` }}
            >
                {/* <img src={props.imagelink} alt={props.title} /> */}
            </div>
            <h2>{props.title}</h2>
            <p>$ {props.price}</p>
            <p>{props.description}</p>
        </div>
    );
};
export default Cards;
