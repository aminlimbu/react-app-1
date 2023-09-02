import Card from "./ui/Cards";

const Featured = () => {
    return (
        <div className="featured">
            <Card
                title={"Handmaiden Secret"}
                imagelink={
                    "https://butterflybeautyshop.files.wordpress.com/2015/02/candle-bath-salts-from-lavender-oil.jpg"
                }
                price={2.99}
                description={"lavendar sented"}
            />
            <Card
                title={"Secret Admire"}
                imagelink={
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F8841137%2Fr%2Fil%2F931ed7%2F1127687844%2Fil_fullxfull.1127687844_o1lo.jpg&f=1&nofb=1&ipt=ad826c41dfcd9252bf7ad8e024829c68c3f3878d8c631088ad8e5bb03a824075&ipo=images"
                }
                price={5.99}
                description={"Hint of Cherry, Tomato, Grapes"}
            />
            <Card
                title={"Lime the bold"}
                imagelink={
                    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0163%2F3546%2Fproducts%2Flime_green_floating_candles_1024x1024.gif%3Fv%3D1365893562&f=1&nofb=1&ipt=2768fb52c4643aeb2deeb7249ca1a0fc061974c5b54eb77b465254275f328dc2&ipo=images"
                }
                price={2.99}
                description={"Lime, bayleaf, turmeric"}
            />
        </div>
    );
};
export default Featured;
