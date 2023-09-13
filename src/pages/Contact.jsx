import address from "../resources/contacts";

const Contact = () => {
    return (
        <div className="contact-us">
            <div className="contact-hero">Contact us</div>
            <div className="contact-details">
                <div className="address-container">
                    <div className="address">
                        <h2>Address:</h2>
                        <ul>
                            <li>{address.street}</li>
                        </ul>
                    </div>
                    <div className="contacts">Contacts</div>
                </div>
                <div className="map-container">Map</div>
            </div>
        </div>
    );
};
export default Contact;
