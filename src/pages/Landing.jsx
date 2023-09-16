import { useParams } from "react-router-dom";
import candles from "resources/candles";
import { getCandleImage } from "../features/utils/images";

function displayInfo(id) {
    const item = candles.filter((i) => {
        return i.name === id;
    });
    const candleCollection = item[0].collection
        .map((string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        })
        .join(", ");

    return (
        <div className="landing-section">
            <div className="landing-image">
                <img src={getCandleImage(item[0].colour)} alt="candle"></img>
            </div>
            <div className="description">
                {item[0].description}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam incidunt nulla obcaecati.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur magni itaque eaque et. Illum expedita
                    assumenda, soluta, minus labore non similique, impedit cum
                    voluptatibus quod corporis ipsum rerum saepe a!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quisquam repudiandae, inventore nesciunt
                    similique ratione.
                </p>
            </div>
            <div className="specifications">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h2>Specifications</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Colour: </td>
                            <td>{item[0].colour}</td>
                        </tr>
                        <tr>
                            <td>Fragrance: </td>
                            <td>{item[0].fragrance}</td>
                        </tr>
                        <tr>
                            <td>Collection: </td>
                            <td>{candleCollection}</td>
                        </tr>
                        <tr>
                            <td>Burn Duration: </td>
                            <td>{item[0].burn_time + " Hours"}</td>
                        </tr>
                        <tr>
                            <td>Dimension: </td>
                            <td>
                                {item[0].height +
                                    " cm x " +
                                    item[0].width +
                                    " cm x " +
                                    item[0].depth +
                                    " cm"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const Landing = () => {
    let { id } = useParams();
    return (
        <div className="landing-container">
            <div className="product-title">
                <h1>{id}</h1>
            </div>
            {displayInfo(id)}
        </div>
    );
};
export default Landing;
