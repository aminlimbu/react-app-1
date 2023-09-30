const candles = [
    {
        name: "Candle 1",
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
        name: "Candle 2",
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
        name: "Candle 3",
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
        name: "Candle 4",
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
        name: "Candle 5",
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
        name: "Candle 6",
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
        name: "Candle 7",
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
        name: "Candle 8",
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
        name: "Candle 9",
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
        name: "Candle 10",
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
        name: "Candle 11",
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
        name: "Candle 12",
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
        name: "Candle 13",
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
        name: "Candle 14",
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
        name: "Candle 15",
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
        name: "Candle 16",
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
        name: "Candle 17",
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
        name: "Candle 18",
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
        name: "Candle 19",
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
        name: "Candle 20",
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
        name: "Candle 21",
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
        name: "Candle 22",
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
        name: "Candle 23",
        description: "A beautiful Blue candle with a Rose fragrance.",
        burn_time: 8,
        colour: "Green",
        fragrance: "Rose",
        height: 6,
        width: 9,
        depth: 6,
        collection: ["romance", "zodiac"],
        featured: "NO",
    },
    {
        name: "Candle 24",
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
        name: "Candle 25",
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
        name: "Candle 26",
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
        name: "Candle 27",
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
        name: "Candle 28",
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
        name: "Candle 29",
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
        name: "Candle 30",
        description: "A beautiful Blue candle with a Rose fragrance.",
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
        name: "Candle 31",
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
        name: "Candle 32",
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
        name: "Candle 33",
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
        name: "Candle 34",
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
        name: "Candle 35",
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
        name: "Candle 36",
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
        name: "Candle 37",
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
        name: "Candle 38",
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
        name: "Candle 39",
        description: "A beautiful Yellow candle with a Vanilla fragrance.",
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
        name: "Candle 40",
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
        name: "Candle 41",
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
        name: "Candle 42",
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
        name: "Candle 43",
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
        name: "Candle 44",
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
        name: "Candle 45",
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
        name: "Candle 46",
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
        name: "Candle 47",
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
        name: "Candle 48",
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
        name: "Candle 49",
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
        name: "Candle 50",
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
