export const Top = () => {
    return (
        <div className="about-top">
            <div className="about-title-1">
                THE STORY
                <br />
                OF
            </div>
            <div className="about-title-2">
                <i>Floral Poison Ivy</i>
            </div>
        </div>
    );
};

const Aboutus = () => {
    return (
        <div className="about-us">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            quidem doloremque sed officia inventore impedit expedita aperiam
            animi voluptates dolores iusto, magni labore laboriosam eum repellat
            veniam laborum soluta eligendi?
        </div>
    );
};

const Profiles = () => {
    return (
        <div className="about-profiles">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quasi doloremque ipsam libero beatae totam nulla
                amet eveniet, iste saepe eius incidunt voluptates itaque omnis!
            </div>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                quisquam.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, dignissimos quisquam obcaecati ratione debitis,
                voluptatibus aliquid repellat sint perspiciatis vero corrupti
                soluta quaerat cumque. Autem ad ullam ex in numquam officia
                aliquid, molestias rerum quos!
            </div>
        </div>
    );
};

const Visions = () => {
    return (
        <div className="about-visions">
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                in reiciendis sequi, praesentium corrupti earum unde voluptatem
                consequuntur eos ullam?
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                minima veritatis quos quis eaque adipisci.
            </div>
        </div>
    );
};
const About = () => {
    return (
        <>
            <Top />
            <Aboutus />
            <Profiles />
            <Visions />
        </>
    );
};
export default About;
