import Card from "features/ui/Cards";

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-heading">Lorem Heading One</h1>
            <p className="hero-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                exercitationem tenetur, itaque dolorem!
            </p>
        </div>
    );
};

const Featured = () => {
    return (
        <div className="featured">
            <Card
                title={"Handmaiden Secret"}
                imagelink={
                    "https://butterflybeautyshop.files.wordpress.com/2015/02/candle-bath-salts-from-lavender-oil.jpg"
                }
                description={"Evergreen Lavendar"}
            />
            <Card
                title={"Secret Admire"}
                imagelink={
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F8841137%2Fr%2Fil%2F931ed7%2F1127687844%2Fil_fullxfull.1127687844_o1lo.jpg&f=1&nofb=1&ipt=ad826c41dfcd9252bf7ad8e024829c68c3f3878d8c631088ad8e5bb03a824075&ipo=images"
                }
                description={"Hint of Cherry, Tomato, Grapes"}
            />
            <Card
                title={"Lime The Bold"}
                imagelink={
                    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0163%2F3546%2Fproducts%2Flime_green_floating_candles_1024x1024.gif%3Fv%3D1365893562&f=1&nofb=1&ipt=2768fb52c4643aeb2deeb7249ca1a0fc061974c5b54eb77b465254275f328dc2&ipo=images"
                }
                description={"Exquisite Blend of Lime, Bayleaf, Turmeric"}
            />
        </div>
    );
};

const DeliveryInfo = () => {
    return (
        <div className="delivery-info">
            <img src="/images/delivery.png" alt="" />
            <div className="delivery-text">
                Free Delivery<sup>*</sup>
            </div>
        </div>
    );
};

const Story = () => {
    return (
        <div className="our-story">
            <h2>Our Story</h2>
            <div className="story">
                <div className="story-image"></div>
                <article>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Et in distinctio totam corrupti nemo! Dignissimos
                        reprehenderit quis ab quisquam maxime porro eveniet?
                        Delectus, ab vel.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquam laboriosam iusto officiis ipsam quae vitae
                        enim quam neque fugit consequatur quas repudiandae rerum
                        excepturi earum et, debitis quos! Obcaecati, dolorum?
                    </p>
                </article>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Hero />
            <DeliveryInfo />
            <Featured />
            <Story />
        </>
    );
};
export default Home;
