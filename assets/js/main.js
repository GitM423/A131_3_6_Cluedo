const suspectsArray = [
    mrGreen = {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "mrGreen",
        color: "green"
    },
    drOrchid = {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "drOrchid",
        color: "white"
    },
    profPlum = {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "profPlum",
        color: "purple"
    },
    missScarlet = {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "missScarlet",
        color: "red"
    },
    mrsPeacock = {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "mrsPeacock",
        color: "blue"
    },
    mrMustard = {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "mrMustard",
        color: "yellow"
    }
]

const weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },
    {
        name: "poison",
        weight: 2,
    },
    {
        name: "axe",
        weight: 15,
    },
    {
        name: "bat",
        weight: 13,
    },
    {
        name: "trophy",
        weight: 25,
    },
    {
        name: "pistol",
        weight: 20,
    }
]

const roomsArray = [
    {
        name: "Dining Room"
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    }
]

function selectRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}

function revealMystery(object) {
    console.log(`${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`)
    document.getElementById("image").innerHTML = `<img src="assets/img/${object.suspect.image}.jpg" alt="${object.suspect.image}">`
    document.getElementById("content").innerHTML = `<b>${object.suspect.firstName} ${object.suspect.lastName}</b> killed Mr. Boddy using the <b>${object.weapon.name}</b> in the <b>${object.room.name}</b>!`
}
