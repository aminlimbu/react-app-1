export const getCandleImage = (color) => {
    switch (color) {
        case "Yellow":
            return "../../images/yellow-candle.jpeg";
        case "Blue":
            return "../../images/blue-candle.jpeg";
        case "Purple":
            return "../../images/purple-candles.jpeg";
        case "Red":
            return "../../images/red-candle.jpeg";
        case "Green":
            return "../../images/green-candles.jpeg";
        default:
            return "Image not found";
    }
};
