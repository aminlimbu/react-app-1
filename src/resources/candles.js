const candles = [
    {
        name: "Sandalwood Sunrise",
        description: "A beautiful Red candle with a Sandalwood fragrance.",
        burn_time: 3,
        colour: "Yellow",
        fragrance: "Lavender",
        height: 13,
        width: 7,
        depth: 10,
        collection: ["romance"],
        featured: "Yes",
    },
    {
        name: "Vanilla Dreams",
        description: "A beautiful Red candle with a Vanilla fragrance.",
        burn_time: 9,
        colour: "Blue",
        fragrance: "Sandalwood",
        height: 15,
        width: 6,
        depth: 10,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Rose Bliss",
        description: "A beautiful Purple candle with a Rose fragrance.",
        burn_time: 10,
        colour: "Green",
        fragrance: "Lavender",
        height: 5,
        width: 8,
        depth: 5,
        collection: ["zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Lavender Meadows",
        description: "A beautiful Green candle with a Rose fragrance.",
        burn_time: 4,
        colour: "Purple",
        fragrance: "Lavender",
        height: 6,
        width: 5,
        depth: 8,
        collection: ["romance", "zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Blue Serenity",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 5,
        colour: "Red",
        fragrance: "Rose",
        height: 5,
        width: 9,
        depth: 8,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Green Enchantment",
        description: "A beautiful Green candle with a Lavender fragrance.",
        burn_time: 10,
        colour: "Yellow",
        fragrance: "Vanilla",
        height: 7,
        width: 5,
        depth: 8,
        collection: ["romance", "zodiac"],
        featured: "Yes",
    },
    {
        name: "Yellow Delight",
        description: "A beautiful Yellow candle with a Vanilla fragrance.",
        burn_time: 10,
        colour: "Blue",
        fragrance: "Lavender",
        height: 5,
        width: 9,
        depth: 5,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Lavender Elegance",
        description: "A beautiful Yellow candle with a Lavender fragrance.",
        burn_time: 9,
        colour: "Yellow",
        fragrance: "Lavender",
        height: 13,
        width: 5,
        depth: 9,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Vanilla Twilight",
        description: "A beautiful Red candle with a Vanilla fragrance.",
        burn_time: 9,
        colour: "Blue",
        fragrance: "Sandalwood",
        height: 15,
        width: 6,
        depth: 6,
        collection: ["zodiac"],
        featured: "No",
    },
    {
        name: "Lavender Serenity",
        description: "A beautiful Blue candle with a Lavender fragrance.",
        burn_time: 5,
        colour: "Purple",
        fragrance: "Sandalwood",
        height: 6,
        width: 6,
        depth: 9,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Rose Harmony",
        description: "A beautiful Purple candle with a Rose fragrance.",
        burn_time: 5,
        colour: "Purple",
        fragrance: "Lavender",
        height: 10,
        width: 9,
        depth: 10,
        collection: ["zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Rose Essence",
        description: "A beautiful Blue candle with a Rose fragrance.",
        burn_time: 9,
        colour: "Blue",
        fragrance: "Lavender",
        height: 14,
        width: 7,
        depth: 9,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Rose Tranquility",
        description: "A beautiful Purple candle with a Rose fragrance.",
        burn_time: 10,
        colour: "Green",
        fragrance: "Lavender",
        height: 15,
        width: 7,
        depth: 6,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Rose Ivy",
        description: "A beautiful Red candle with a Rose fragrance.",
        burn_time: 4,
        colour: "Purple",
        fragrance: "Lavender",
        height: 7,
        width: 8,
        depth: 7,
        collection: ["zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Lavender Dreams",
        description: "A beautiful Yellow candle with a Lavender fragrance.",
        burn_time: 9,
        colour: "Purple",
        fragrance: "Sandalwood",
        height: 9,
        width: 8,
        depth: 10,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Vanilla Toxicity",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 3,
        colour: "Red",
        fragrance: "Sandalwood",
        height: 6,
        width: 9,
        depth: 7,
        collection: ["romance", "zodiac"],
        featured: "Yes",
    },
    {
        name: "Vanilla Secret",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 4,
        colour: "Green",
        fragrance: "Rose",
        height: 8,
        width: 8,
        depth: 5,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Sandalwood Breeze",
        description: "A beautiful Blue candle with a Sandalwood fragrance.",
        burn_time: 7,
        colour: "Yellow",
        fragrance: "Rose",
        height: 15,
        width: 8,
        depth: 7,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Vanilla Delight",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 8,
        colour: "Red",
        fragrance: "Rose",
        height: 6,
        width: 8,
        depth: 6,
        collection: ["zodiac"],
        featured: "No",
    },
    {
        name: "Rose Serenity",
        description: "A beautiful Blue candle with a Rose fragrance.",
        burn_time: 6,
        colour: "Red",
        fragrance: "Lavender",
        height: 11,
        width: 9,
        depth: 10,
        collection: ["romance", "zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Lavender Enchantment",
        description: "A beautiful Green candle with a Lavender fragrance.",
        burn_time: 5,
        colour: "Purple",
        fragrance: "Vanilla",
        height: 12,
        width: 5,
        depth: 6,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Sandalwood Sunset",
        description: "A beautiful Yellow candle with a Sandalwood fragrance.",
        burn_time: 4,
        colour: "Green",
        fragrance: "Lavender",
        height: 5,
        width: 10,
        depth: 9,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Rose Ambiance",
        description: "A beautiful Blue candle with a Rose fragrance.",
        burn_time: 8,
        colour: "Green",
        fragrance: "Rose",
        height: 6,
        width: 9,
        depth: 6,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Vanilla Bliss",
        description: "A beautiful Green candle with a Vanilla fragrance.",
        burn_time: 6,
        colour: "Purple",
        fragrance: "Rose",
        height: 13,
        width: 8,
        depth: 10,
        collection: ["zodiac"],
        featured: "Yes",
    },
    {
        name: "Vanilla Sunset",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 4,
        colour: "Green",
        fragrance: "Vanilla",
        height: 8,
        width: 8,
        depth: 5,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Rose Breeze",
        description: "A beautiful Green candle with a Rose fragrance.",
        burn_time: 3,
        colour: "Purple",
        fragrance: "Rose",
        height: 14,
        width: 5,
        depth: 6,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Vanilla Tranquility",
        description: "A beautiful Yellow candle with a Rose fragrance.",
        burn_time: 6,
        colour: "Red",
        fragrance: "Vanilla",
        height: 8,
        width: 10,
        depth: 6,
        collection: ["zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Sandalwood Delight",
        description: "A beautiful Yellow candle with a Sandalwood fragrance.",
        burn_time: 9,
        colour: "Purple",
        fragrance: "Lavender",
        height: 14,
        width: 8,
        depth: 6,
        collection: ["signature", "zodiac"],
        featured: "No",
    },
    {
        name: "Sandalwood Falls",
        description: "A beautiful Red candle with a Sandalwood fragrance.",
        burn_time: 7,
        colour: "Green",
        fragrance: "Vanilla",
        height: 10,
        width: 9,
        depth: 8,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Vanilla Serenity",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 8,
        colour: "Blue",
        fragrance: "Sandalwood",
        height: 12,
        width: 6,
        depth: 5,
        collection: ["romance"],
        featured: "Yes",
    },
    {
        name: "Lavender Bliss",
        description: "A beautiful Purple candle with a Rose fragrance.",
        burn_time: 4,
        colour: "Yellow",
        fragrance: "Lavender",
        height: 11,
        width: 5,
        depth: 6,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Vanilla Scerinity",
        description: "A beautiful Blue candle with a Vanilla fragrance.",
        burn_time: 10,
        colour: "Red",
        fragrance: "Vanilla",
        height: 13,
        width: 7,
        depth: 10,
        collection: ["zodiac"],
        featured: "No",
    },
    {
        name: "Rose Elegance",
        description: "A beautiful Green candle with a Rose fragrance.",
        burn_time: 3,
        colour: "Red",
        fragrance: "Sandalwood",
        height: 14,
        width: 9,
        depth: 7,
        collection: ["romance", "zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Lavender Delight",
        description: "A beautiful Yellow candle with a Sandalwood fragrance.",
        burn_time: 4,
        colour: "Green",
        fragrance: "Vanilla",
        height: 11,
        width: 9,
        depth: 5,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Rose Obsession",
        description: "A beautiful Yellow candle with a Rose fragrance.",
        burn_time: 6,
        colour: "Red",
        fragrance: "Rose",
        height: 5,
        width: 8,
        depth: 6,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Lavender Enchantress",
        description: "A beautiful Green candle with a Lavender fragrance.",
        burn_time: 6,
        colour: "Yellow",
        fragrance: "Vanilla",
        height: 9,
        width: 5,
        depth: 7,
        collection: ["zodiac", "signature"],
        featured: "Yes",
    },
    {
        name: "Sandalwood Touch",
        description: "A beautiful Purple candle with a Sandalwood fragrance.",
        burn_time: 7,
        colour: "Purple",
        fragrance: "Rose",
        height: 9,
        width: 7,
        depth: 8,
        collection: ["signature", "zodiac"],
        featured: "No",
    },
    {
        name: "Lavender Harmony",
        description: "A beautiful Purple candle with a Lavender fragrance.",
        burn_time: 8,
        colour: "Blue",
        fragrance: "Lavender",
        height: 5,
        width: 5,
        depth: 8,
        collection: ["romance", "zodiac"],
        featured: "Yes",
    },
    {
        name: "Vanilla Extract",
        description: "A beautiful Yellow candle with a Rose fragrance.",
        burn_time: 3,
        colour: "Green",
        fragrance: "Rose",
        height: 7,
        width: 6,
        depth: 6,
        collection: ["romance", "zodiac"],
        featured: "No",
    },
    {
        name: "Sandalwood Serenity",
        description: "A beautiful Purple candle with a Sandalwood fragrance.",
        burn_time: 4,
        colour: "Purple",
        fragrance: "Lavender",
        height: 6,
        width: 7,
        depth: 10,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Rose Enchantment",
        description: "A beautiful Purple candle with a Rose fragrance.",
        burn_time: 6,
        colour: "Yellow",
        fragrance: "Vanilla",
        height: 5,
        width: 7,
        depth: 5,
        collection: ["romance", "zodiac"],
        featured: "Yes",
    },
    {
        name: "Sandalwood Humid",
        description: "A beautiful Green candle with a Rose fragrance.",
        burn_time: 6,
        colour: "Purple",
        fragrance: "Lavender",
        height: 15,
        width: 7,
        depth: 8,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Vanilla Elegance",
        description: "A beautiful Yellow candle with a Vanilla fragrance.",
        burn_time: 6,
        colour: "Yellow",
        fragrance: "Sandalwood",
        height: 7,
        width: 6,
        depth: 5,
        collection: ["romance"],
        featured: "Yes",
    },
    {
        name: "Blue Delight",
        description: "A beautiful Blue candle with a Sandalwood fragrance.",
        burn_time: 3,
        colour: "Red",
        fragrance: "Sandalwood",
        height: 9,
        width: 10,
        depth: 8,
        collection: ["romance"],
        featured: "No",
    },
    {
        name: "Sandalwood Harmony",
        description: "A beautiful Yellow candle with a Sandalwood fragrance.",
        burn_time: 9,
        colour: "Green",
        fragrance: "Sandalwood",
        height: 5,
        width: 10,
        depth: 10,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Rose Delight",
        description: "A beautiful Red candle with a Rose fragrance.",
        burn_time: 9,
        colour: "Yellow",
        fragrance: "Vanilla",
        height: 11,
        width: 9,
        depth: 5,
        collection: ["signature"],
        featured: "No",
    },
    {
        name: "Sandalwood Elegance",
        description: "A beautiful Blue candle with a Sandalwood fragrance.",
        burn_time: 8,
        colour: "Green",
        fragrance: "Sandalwood",
        height: 14,
        width: 6,
        depth: 6,
        collection: ["zodiac"],
        featured: "Yes",
    },
    {
        name: "Vanilla Breeze",
        description: "A beautiful Green candle with a Vanilla fragrance.",
        burn_time: 4,
        colour: "Yellow",
        fragrance: "Sandalwood",
        height: 7,
        width: 7,
        depth: 7,
        collection: ["romance", "zodiac", "signature"],
        featured: "No",
    },
    {
        name: "Sandalwood Bliss",
        description: "A beautiful Blue candle with a Sandalwood fragrance.",
        burn_time: 9,
        colour: "Green",
        fragrance: "Lavender",
        height: 12,
        width: 6,
        depth: 10,
        collection: ["zodiac", "zodiac"],
        featured: "No",
    },
    {
        name: "Vanilla Harmony",
        description: "A beautiful Purple candle with a Vanilla fragrance.",
        burn_time: 8,
        colour: "Blue",
        fragrance: "Vanilla",
        height: 11,
        width: 10,
        depth: 8,
        collection: ["signature"],
        featured: "No",
    },
];

export default candles;
