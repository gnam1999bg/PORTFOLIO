const LEVELS = [
    // =====================================================
    // LEVELS 1-3: BEE SCHOOL
    // Teach the player about bees and basic line drawing
    // =====================================================
    {
        id: 1,
        name: "First Friend",
        dog: { x: 0.5, y: 0.7 },
        threats: [
            { type: 'bee', x: 0.5, y: 0.05, count: 1, delay: 0, speed: 1 }
        ],
        environment: [],
        ink: 1200,
        starThresholds: [0.7, 0.5, 0.3],
        surviveTime: 6,
        description: "Draw a line above the dog to block the bee!"
    },
    {
        id: 2,
        name: "Double Trouble",
        dog: { x: 0.5, y: 0.6 },
        threats: [
            { type: 'bee', x: 0.2, y: 0.05, count: 1, delay: 0, speed: 1.2 },
            { type: 'bee', x: 0.8, y: 0.05, count: 1, delay: 1, speed: 1.2 }
        ],
        environment: [],
        ink: 1100,
        starThresholds: [0.7, 0.5, 0.3],
        surviveTime: 7,
        description: "Two bees from different directions. One line might not be enough!"
    },
    {
        id: 3,
        name: "The Swarm Begins",
        dog: { x: 0.25, y: 0.75 },
        threats: [
            { type: 'bee', x: 0.75, y: 0.1, count: 3, delay: 1.5, speed: 1.5 }
        ],
        environment: [],
        ink: 1000,
        starThresholds: [0.7, 0.5, 0.3],
        surviveTime: 8,
        description: "A stream of bees! Build a wall to the dog's right."
    },

    // =====================================================
    // LEVELS 4-6: LAVA SCHOOL
    // Introduce lava zones and lava drops
    // =====================================================
    {
        id: 4,
        name: "Floor is Lava",
        dog: { x: 0.5, y: 0.5 },
        threats: [
            { type: 'lava', x: 0.0, y: 0.85, w: 1.0, h: 0.15 },
            { type: 'bee', x: 0.5, y: 0.02, count: 2, delay: 2, speed: 1.3 }
        ],
        environment: [
            { type: 'platform', x: 0.35, y: 0.55, w: 0.3, h: 0.03 }
        ],
        ink: 1000,
        starThresholds: [0.7, 0.5, 0.3],
        surviveTime: 8,
        description: "The floor is lava! The dog is safe on a platform -- just block the bees."
    },
    {
        id: 5,
        name: "Drip, Drip, Drip",
        dog: { x: 0.5, y: 0.8 },
        threats: [
            { type: 'lavaDrop', x: 0.35, y: 0.05, delay: 0.5 },
            { type: 'lavaDrop', x: 0.5, y: 0.05, delay: 1.5 },
            { type: 'lavaDrop', x: 0.65, y: 0.05, delay: 2.5 }
        ],
        environment: [],
        ink: 900,
        starThresholds: [0.7, 0.5, 0.3],
        surviveTime: 8,
        description: "Lava drips from above! Draw a shelter to catch them all."
    },
    {
        id: 6,
        name: "Lava Gauntlet",
        dog: { x: 0.15, y: 0.5 },
        threats: [
            { type: 'lava', x: 0.3, y: 0.0, w: 0.06, h: 1.0 },
            { type: 'lava', x: 0.6, y: 0.0, w: 0.06, h: 1.0 },
            { type: 'bee', x: 0.85, y: 0.5, count: 2, delay: 2, speed: 1.5 },
            { type: 'lavaDrop', x: 0.15, y: 0.02, delay: 1 }
        ],
        environment: [],
        ink: 950,
        starThresholds: [0.65, 0.45, 0.25],
        surviveTime: 8,
        description: "Lava walls create corridors. Block the bees AND the drip above!"
    },

    // =====================================================
    // LEVELS 7-9: SPIKES + COMBOS
    // Introduce spikes, combine with previous threats
    // =====================================================
    {
        id: 7,
        name: "Pointy Problems",
        dog: { x: 0.5, y: 0.35 },
        threats: [
            { type: 'spike', x: 0.3, y: 0.55, size: 0.04 },
            { type: 'spike', x: 0.5, y: 0.55, size: 0.04 },
            { type: 'spike', x: 0.7, y: 0.55, size: 0.04 },
            { type: 'bee', x: 0.1, y: 0.35, count: 2, delay: 1.5, speed: 1.6 },
            { type: 'bee', x: 0.9, y: 0.35, count: 2, delay: 2, speed: 1.6 }
        ],
        environment: [
            { type: 'platform', x: 0.2, y: 0.5, w: 0.6, h: 0.03 }
        ],
        ink: 900,
        starThresholds: [0.65, 0.45, 0.25],
        surviveTime: 9,
        description: "Spikes below, bees from both sides. Protect the flanks!"
    },
    {
        id: 8,
        name: "The Funnel",
        dog: { x: 0.5, y: 0.85 },
        threats: [
            { type: 'spike', x: 0.2, y: 0.5, size: 0.035 },
            { type: 'spike', x: 0.35, y: 0.4, size: 0.035 },
            { type: 'spike', x: 0.65, y: 0.4, size: 0.035 },
            { type: 'spike', x: 0.8, y: 0.5, size: 0.035 },
            { type: 'lavaDrop', x: 0.4, y: 0.02, delay: 0.5 },
            { type: 'lavaDrop', x: 0.5, y: 0.02, delay: 1.5 },
            { type: 'lavaDrop', x: 0.6, y: 0.02, delay: 2.5 },
            { type: 'bee', x: 0.5, y: 0.05, count: 1, delay: 0, speed: 2 }
        ],
        environment: [],
        ink: 850,
        starThresholds: [0.6, 0.4, 0.2],
        surviveTime: 9,
        description: "Spikes narrow the safe zone. One clever roof can block everything from above."
    },
    {
        id: 9,
        name: "Corner Pocket",
        dog: { x: 0.9, y: 0.9 },
        threats: [
            { type: 'bee', x: 0.1, y: 0.1, count: 3, delay: 1.2, speed: 1.8 },
            { type: 'spike', x: 0.7, y: 0.7, size: 0.04 },
            { type: 'spike', x: 0.85, y: 0.7, size: 0.04 },
            { type: 'lava', x: 0.0, y: 0.92, w: 0.75, h: 0.08 },
            { type: 'lavaDrop', x: 0.9, y: 0.02, delay: 1 },
            { type: 'lavaDrop', x: 0.85, y: 0.02, delay: 3 }
        ],
        environment: [],
        ink: 800,
        starThresholds: [0.6, 0.4, 0.2],
        surviveTime: 10,
        description: "Cornered! Threats from every angle. Build an L-shaped shelter."
    },

    // =====================================================
    // LEVELS 10-12: BOMBS + EVERYTHING
    // Full chaos, all threat types combined
    // =====================================================
    {
        id: 10,
        name: "Incoming!",
        dog: { x: 0.5, y: 0.8 },
        threats: [
            { type: 'bomb', x: 0.3, y: 0.05, delay: 1 },
            { type: 'bomb', x: 0.7, y: 0.05, delay: 3 },
            { type: 'bee', x: 0.05, y: 0.4, count: 2, delay: 2, speed: 1.8 }
        ],
        environment: [],
        ink: 850,
        starThresholds: [0.6, 0.4, 0.2],
        surviveTime: 10,
        description: "Bombs away! Catch them on a barrier before they reach the dog."
    },
    {
        id: 11,
        name: "Danger Zone",
        dog: { x: 0.5, y: 0.55 },
        threats: [
            { type: 'bomb', x: 0.2, y: 0.02, delay: 0.5 },
            { type: 'bomb', x: 0.5, y: 0.02, delay: 2 },
            { type: 'bomb', x: 0.8, y: 0.02, delay: 3.5 },
            { type: 'lava', x: 0.0, y: 0.88, w: 1.0, h: 0.12 },
            { type: 'bee', x: 0.05, y: 0.3, count: 2, delay: 1.5, speed: 2 },
            { type: 'bee', x: 0.95, y: 0.6, count: 2, delay: 2, speed: 2 },
            { type: 'spike', x: 0.35, y: 0.72, size: 0.03 },
            { type: 'spike', x: 0.65, y: 0.72, size: 0.03 }
        ],
        environment: [
            { type: 'platform', x: 0.3, y: 0.6, w: 0.4, h: 0.03 }
        ],
        ink: 750,
        starThresholds: [0.55, 0.35, 0.2],
        surviveTime: 11,
        description: "Bombs, bees, lava, and spikes. Build smart -- ink is limited!"
    },
    {
        id: 12,
        name: "The Last Stand",
        dog: { x: 0.5, y: 0.5 },
        threats: [
            { type: 'bee', x: 0.05, y: 0.2, count: 3, delay: 1, speed: 2.5 },
            { type: 'bee', x: 0.95, y: 0.8, count: 3, delay: 1.2, speed: 2.5 },
            { type: 'bomb', x: 0.3, y: 0.02, delay: 1 },
            { type: 'bomb', x: 0.5, y: 0.02, delay: 2.5 },
            { type: 'bomb', x: 0.7, y: 0.02, delay: 4 },
            { type: 'lavaDrop', x: 0.4, y: 0.02, delay: 0.5 },
            { type: 'lavaDrop', x: 0.6, y: 0.02, delay: 1.5 },
            { type: 'spike', x: 0.25, y: 0.65, size: 0.035 },
            { type: 'spike', x: 0.5, y: 0.7, size: 0.035 },
            { type: 'spike', x: 0.75, y: 0.65, size: 0.035 },
            { type: 'lava', x: 0.0, y: 0.92, w: 0.4, h: 0.08 },
            { type: 'lava', x: 0.6, y: 0.92, w: 0.4, h: 0.08 }
        ],
        environment: [
            { type: 'platform', x: 0.35, y: 0.55, w: 0.3, h: 0.02 }
        ],
        ink: 700,
        starThresholds: [0.5, 0.3, 0.15],
        surviveTime: 12,
        description: "Everything at once! Draw a fortress and pray. Good luck!"
    }
];
