const Cards = (props) => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.imagelink} alt={props.title} />
            <p>$ {props.price}</p>
            <p>{props.description}</p>
        </div>
    );
};
export default Cards;
