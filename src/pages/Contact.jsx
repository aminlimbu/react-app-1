import address from "../resources/contacts";

function CreateContacts(contact) {
    const contacts = [];
    Object.keys(contact).forEach((key) => {
        contacts.push(<li key={key}>{contact[key]}</li>);
    });
    return contacts.map((contact) => contact);
}

const Contact = () => {
    const mapStyles = {
        minWidth: "350px",
        maxWidth: "600px",
        width: "100%",
        height: "100%",
        minHeight: "250px",
        border: "0",
    };
    return (
        <div className="contact-us">
            <div className="contact-hero">Contact us</div>
            <div className="contact-details">
                <div className="address-container">
                    <address className="address">
                        <div className="address-icon">
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                        </div>
                        <div>
                            <h2>Address:</h2>
                            <ul>
                                <li>{address.street}</li>
                                <li>{address.city}</li>
                                <li>{address.state}</li>
                                <li>{address.postal_code}</li>
                            </ul>
                        </div>
                    </address>
                    <div className="contacts">
                        <div className="address-icon">
                            <span className="material-symbols-outlined">
                                call
                            </span>
                        </div>
                        <div className="contacts">
                            <ul>{CreateContacts(address.contacts)}</ul>
                        </div>
                    </div>
                    <div className="email-container">
                        <div className="email-icon">
                            <span className="material-symbols-outlined">
                                mail
                            </span>
                        </div>
                        <div className="email">
                            <ul>
                                <li>info@reactappone.com.au</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4173671982035!2d144.94666619999998!3d-37.8036919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d39126e8911%3A0x9a4b5ab6cd5aa026!2sElm%20St%2C%20North%20Melbourne%20VIC%203051!5e0!3m2!1sen!2sau!4v1694647198320!5m2!1sen!2sau"
                        // allowfullscreen=""
                        loading="lazy"
                        style={mapStyles}
                        //referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
export default Contact;
