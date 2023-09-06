const Cards = (props) => {
    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${props.imagelink})` }}
            ></div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};
export default Cards;
