const data = {
  1: {
    rank: 1,
    player : "Steph Curry",
    team: "Warriors",
    position: "PG",
    rating: 97,
    height: "6'3",
    description: "Offensive Threat"
  },
  2: {
    rank: 2,
    player : "LeBron James",
    team: "Lakers",
    position: "SF",
    rating: 97,
    height: "6'9",
    description: "2-Way Slashing Playmaker"
  },
  3: {
    rank: 3,
    player : "Kawhi Leonard",
    team: "Clippers",
    position: "SF",
    rating: 96,
    height: "6'7",
    description: "2-Way Scoring Machine"
  },
  4: {
    rank: 4,
    player : "Giannis Antetokounmpo",
    team: "Bucks",
    position: "PF",
    rating: 96,
    height: "6'11",
    description: "2-Way Slashing Playmaker"
  },
  5: {
    rank: 5,
    player : "Kevin Durant",
    team: "Nets",
    position: "SF",
    rating: 96,
    height: "6'10",
    description: "2-Way Scoring Machine"
  },
  6: {
    rank: 6,
    player : "Nikola Jokic",
    team: "Nuggets",
    position: "C",
    rating: 96,
    height: "7'0",
    description: "Mid-Range Maestro"
  },
  7: {
    rank: 7,
    player : "James Harden",
    team: "Nets",
    position: "SG",
    rating: 95,
    height: "6'5",
    description: "Offensive Threat"
  },
  8: {
    rank: 8,
    player : "Joel Embiid",
    team: "76ers",
    position: "C",
    rating: 95,
    height: "7'0",
    description: "Paint Beast"
  },
  9: {
    rank: 9,
    player : "Luka Doncic",
    team: "Mavericks",
    position: "SG",
    rating: 94,
    height: "6'7",
    description: "Inside-Out Playmaker"
  },
  10: {
    rank: 10,
    player : "Damian Lillard",
    team: "Trail Blazers",
    position: "PG",
    rating: 94,
    height: "6'2",
    description: "Offensive Threat"
  },
  11: {
    rank: 11,
    player : "Anthony Davis",
    team: "Lakers",
    position: "PF",
    rating: 93,
    height: "6'10",
    description: "Interior Force"
  },
  12: {
    rank: 12,
    player : "Jimmy Butler",
    team: "Heat",
    position: "SG",
    rating: 92,
    height: "6'7",
    description: "2-Way Slashing Playmaker"
  },
  13: {
    rank: 13,
    player : "Kyrie Irving",
    team: "Nets",
    position: "PG",
    rating: 91,
    height: "6'2",
    description: "Offensive Threat"
  },
  14: {
    rank: 14,
    player : "Zion Williamson",
    team: "Pelicans",
    position: "PF",
    rating: 90,
    height: "6'6",
    description: "Slashing Four"
  },
  15: {
    rank: 15,
    player : "Bradley Beal",
    team: "Wizards",
    position: "SG",
    rating: 90,
    height: "6'3",
    description: "Scoring Machine"
  },
  16: {
    rank: 16,
    player : "Jayson Tatum",
    team: "Celtics",
    position: "SF",
    rating: 90,
    height: "6'8",
    description: "Floor-Spacing Slasher"
  },
  17: {
    rank: 17,
    player : "Chris Paul",
    team: "Suns",
    position: "PG",
    rating: 89,
    height: "6'0",
    description: "Playmaking Shot Creator"
  },
  18: {
    rank: 18,
    player : "Julius Randle",
    team: "Knicks",
    position: "PF",
    rating: 89,
    height: "6'8",
    description: "Slashing Four"
  },
  19: {
    rank: 19,
    player : "Klay Thompson",
    team: "Warriors",
    position: "SG",
    rating: 89,
    height: "6'6",
    description: "2-Way 3-Level Scorer"
  },
  20: {
    rank: 20,
    player : "Devin Booker",
    team: "Suns",
    position: "SG",
    rating: 89,
    height: "6'5",
    description: "Scoring Machine"
  },
  21: {
    rank: 21,
    player : "Donovan Mitchell",
    team: "Jazz",
    position: "SG",
    rating: 88,
    height: "6'1",
    description: "Scoring Machine"
  },
  22: {
    rank: 22,
    player : "Rudy Gobert",
    team: "Jazz",
    position: "C",
    rating: 88,
    height: "7'1",
    description: "Glass-Cleaning Lockdown"
  },
  23: {
    rank: 23,
    player : "Zach LaVine",
    team: "Bulls",
    position: "SG",
    rating: 88,
    height: "6'6",
    description: "Floor-Spacing Slasher"
  },
  24: {
    rank: 24,
    player : "Karl-Anthony Towns",
    team: "Twolves",
    position: "C",
    rating: 88,
    height: "6'11",
    description: "Inside-Out Scorer"
  },
  25: {
    rank: 25,
    player : "Paul George",
    team: "Clippers",
    position: "SF",
    rating: 88,
    height: "6'9",
    description: "2-Way Inside-Out Scorer"
  },
  26: {
    rank: 26,
    player : "Russell Westbrook",
    team: "Wizards",
    position: "PG",
    rating: 88,
    height: "6'3",
    description: "2-Way Slashing Playmaker"
  },
  27: {
    rank: 27,
    player : "Domantas Sabonis",
    team: "Pacers",
    position: "PF",
    rating: 87,
    height: "6'11",
    description: "Mid-Range Finisher"
  },
  28: {
    rank: 28,
    player : "Tobias Harris",
    team: "76ers",
    position: "PF",
    rating: 87,
    height: "6'8",
    description: "Inside-Out Scorer"
  },
  29: {
    rank: 29,
    player : "Shai Gilgeous-Alexander",
    team: "Thunder",
    position: "PG",
    rating: 87,
    height: "6'5",
    description: "Mid-Range Slasher"
  },
  30: {
    rank: 30,
    player : "De’Aaron Fox",
    team: "Kings",
    position: "PG",
    rating: 87,
    height: "6'3",
    description: "Slashing Playmaker"
  },
  31: {
    rank: 31,
    player : "Bam Adebayo",
    team: "Heat",
    position: "C",
    rating: 87,
    height: "6'9",
    description: "Interior Force"
  },
  32: {
    rank: 32,
    player : "Trae Young",
    team: "Hawks",
    position: "PG",
    rating: 87,
    height: "6'1",
    description: "Offensive Threat"
  },
  33: {
    rank: 33,
    player : "Nikola Vucevic",
    team: "Magic",
    position: "C",
    rating: 87,
    height: "6'11",
    description: "Mid-Range Finisher"
  },
  34: {
    rank: 34,
    player : "DeMar DeRozan",
    team: "Spurs",
    position: "SG",
    rating: 87,
    height: "6'6",
    description: "Mid-Range Slasher"
  },
  35: {
    rank: 35,
    player : "Jaylen Brown",
    team: "Celtics",
    position: "SG",
    rating: 87,
    height: "6'6",
    description: "2-Way Scoring Machine"
  },
  36: {
    rank: 36,
    player : "Clint Capela",
    team: "Hawks",
    position: "C",
    rating: 86,
    height: "6'10",
    description: "Glass-Cleaning Lockdown"
  },
  37: {
    rank: 37,
    player : "C.J. McCollum",
    team: "Trail Blazers",
    position: "SG",
    rating: 86,
    height: "6'3",
    description: "Shot Creator"
  },
  38: {
    rank: 38,
    player : "Jrue Holiday",
    team: "Pelicans",
    position: "SG",
    rating: 86,
    height: "6'3",
    description: "2-Way Tempo Pusher"
  },
  39: {
    rank: 39,
    player : "Kristaps Porzingis",
    team: "Mavericks",
    position: "PF",
    rating: 86,
    height: "7'3",
    description: "2-Way Inside-Out Scorer"
  },
  40: {
    rank: 40,
    player : "Ben Simmons",
    team: "76ers",
    position: "SF",
    rating: 86,
    height: "6'10",
    description: "2-Way Slashing Playmaker"
  },
  41: {
    rank: 41,
    player : "Jamal Murray",
    team: "Nuggets",
    position: "PG",
    rating: 86,
    height: "6'4",
    description: "Offensive Threat"
  },
  42: {
    rank: 42,
    player : "LaMelo Ball",
    team: "Hornets",
    position: "PG",
    rating: 85,
    height: "6'7",
    description: "Playmaker"
  },
  43: {
    rank: 43,
    player : "Deandre Ayton",
    team: "Suns",
    position: "C",
    rating: 85,
    height: "6'11",
    description: "Glass-Cleaning Finisher"
  },
  44: {
    rank: 44,
    player : "Brandon Ingram",
    team: "Pelicans",
    position: "SF",
    rating: 85,
    height: "6'7",
    description: "Floor-Spacing Slasher"
  },
  45: {
    rank: 45,
    player : "Khris Middleton",
    team: "Bucks",
    position: "SF",
    rating: 85,
    height: "6'7",
    description: "2-Way 3-Level Scorer"
  },
  46: {
    rank: 46,
    player : "John Collins",
    team: "Hawks",
    position: "PF",
    rating: 85,
    height: "6'9",
    description: "Inside-Out Scorer"
  },
  47: {
    rank: 47,
    player : "Ja Morant",
    team: "Grizzlies",
    position: "PG",
    rating: 85,
    height: "6'3",
    description: "Inside-Out Playmaker"
  },
  48: {
    rank: 48,
    player : "Jarrett Allen",
    team: "Nets",
    position: "C",
    rating: 84,
    height: "6'11",
    description: "Glass-Cleaning Lockdown"
  },
  49: {
    rank: 49,
    player : "Fred VanVleet",
    team: "Raptors",
    position: "PG",
    rating: 84,
    height: "6'1",
    description: "2-Way 3PT Playmaker"
  },
  50: {
    rank: 50,
    player : "Christian Wood",
    team: "Rockets",
    position: "PF",
    rating: 84,
    height: "6'10",
    description: "Inside-Out Scorer"
  },
  51: {
    rank: 51,
    player : "Mike Conley",
    team: "Jazz",
    position: "PG",
    rating: 84,
    height: "6'1",
    description: "2-Way 3PT Playmaker"
  },
  52: {
    rank: 52,
    player : "T.J. Warren",
    team: "Pacers",
    position: "SF",
    rating: 84,
    height: "6'8",
    description: "3-Level Scorer"
  },
  53: {
    rank: 53,
    player : "Michael Porter Jr.",
    team: "Nuggets",
    position: "SF",
    rating: 84,
    height: "6'10",
    description: "3PT Specialist"
  },
  54: {
    rank: 54,
    player : "Collin Sexton",
    team: "Cavaliers",
    position: "PG",
    rating: 83,
    height: "6'1",
    description: "Scoring Machine"
  },
  55: {
    rank: 55,
    player : "Montrezl Harrell",
    team: "Clippers",
    position: "PF",
    rating: 83,
    height: "6'7",
    description: "Interior Finisher"
  },
  56: {
    rank: 56,
    player : "Mikal Bridges",
    team: "Suns",
    position: "SG",
    rating: 83,
    height: "6'6",
    description: "3PT Specialist"
  },
  57: {
    rank: 57,
    player : "Jaren Jackson Jr.",
    team: "Grizzlies",
    position: "PF",
    rating: 83,
    height: "6'11",
    description: "2-Way Stretch Four"
  },
  58: {
    rank: 58,
    player : "Malcolm Brogdon",
    team: "Pacers",
    position: "PG",
    rating: 83,
    height: "6'5",
    description: "Mid-Range Playmaker"
  },
  59: {
    rank: 59,
    player : "Andre Drummond",
    team: "Cavaliers",
    position: "C",
    rating: 83,
    height: "6'10",
    description: "Paint Beast"
  },
  60: {
    rank: 60,
    player : "Jerami Grant",
    team: "Nuggets",
    position: "PF",
    rating: 83,
    height: "6'8",
    description: "Stretch Four"
  },
  61: {
    rank: 61,
    player : "Kyle Lowry",
    team: "Raptors",
    position: "PG",
    rating: 83,
    height: "6'0",
    description: "2-Way Slashing Playmaker"
  },
  62: {
    rank: 62,
    player : "Jonas Valanciunas",
    team: "Grizzlies",
    position: "C",
    rating: 83,
    height: "6'11",
    description: "Inside-Out Scorer"
  },
  63: {
    rank: 63,
    player : "Kemba Walker",
    team: "Celtics",
    position: "PG",
    rating: 83,
    height: "6'0",
    description: "Playmaking Shot Creator"
  },
  64: {
    rank: 64,
    player : "D’Angelo Russell",
    team: "Twolves",
    position: "PG",
    rating: 83,
    height: "6'4",
    description: "Offensive Threat"
  },
  65: {
    rank: 65,
    player : "Pascal Siakam",
    team: "Raptors",
    position: "PF",
    rating: 83,
    height: "6'9",
    description: "2-Way Inside-Out Scorer"
  },
  66: {
    rank: 66,
    player : "Spencer Dinwiddie",
    team: "Nets",
    position: "PG",
    rating: 83,
    height: "6'5",
    description: "Slashing Playmaker"
  },
  67: {
    rank: 67,
    player : "Gordon Hayward",
    team: "Celtics",
    position: "SF",
    rating: 83,
    height: "6'7",
    description: "3-Level Scorer"
  },
  68: {
    rank: 68,
    player : "Jonathan Isaac",
    team: "Magic",
    position: "SF",
    rating: 82,
    height: "6'11",
    description: "2-Way Mid-Range Shooter"
  },
  69: {
    rank: 69,
    player : "Richaun Holmes",
    team: "Kings",
    position: "C",
    rating: 82,
    height: "6'10",
    description: "Mid-Range Specialist"
  },
  70: {
    rank: 70,
    player : "Tyrese Haliburton",
    team: "Kings",
    position: "PG",
    rating: 82,
    height: "6'5",
    description: "Deep-Range Shot Creator"
  },
  71: {
    rank: 71,
    player : "Thaddeus Young",
    team: "Bulls",
    position: "PF",
    rating: 82,
    height: "6'8",
    description: "Inside-Out Scorer"
  },
  72: {
    rank: 72,
    player : "Mitchell Robinson",
    team: "Knicks",
    position: "C",
    rating: 82,
    height: "7'0",
    description: "Glass-Cleaning Lockdown"
  },
  73: {
    rank: 73,
    player : "Wendell Carter Jr.",
    team: "Bulls",
    position: "PF",
    rating: 82,
    height: "6'9",
    description: "Glass Cleaner"
  },
  74: {
    rank: 74,
    player : "Darius Garland",
    team: "Cavaliers",
    position: "PG",
    rating: 82,
    height: "6'1",
    description: "Offense Initiator"
  },
  75: {
    rank: 75,
    player : "Jordan Clarkson",
    team: "Jazz",
    position: "PG",
    rating: 82,
    height: "6'4",
    description: "Inside-Out Scorer"
  },
  76: {
    rank: 76,
    player : "Norman Powell",
    team: "Trail Blazers",
    position: "SF",
    rating: 82,
    height: "6'3",
    description: "Sharpshooter"
  },
  77: {
    rank: 77,
    player : "John Wall",
    team: "Rockets",
    position: "PG",
    rating: 82,
    height: "6'4",
    description: "2-Way Slashing Playmaker"
  },
  78: {
    rank: 78,
    player : "Caris LeVert",
    team: "Nets",
    position: "SG",
    rating: 82,
    height: "6'6",
    description: "Inside-Out Scorer"
  },
  79: {
    rank: 79,
    player : "Terry Rozier",
    team: "Hornets",
    position: "PG",
    rating: 82,
    height: "6'1",
    description: "3PT Playmaker"
  },
  80: {
    rank: 80,
    player : "Dejounte Murray",
    team: "Spurs",
    position: "PG",
    rating: 82,
    height: "6'4",
    description: "2-Way Scoring Machine"
  },
  81: {
    rank: 81,
    player : "Bobby Portis",
    team: "Knicks",
    position: "PF",
    rating: 81,
    height: "6'10",
    description: "Interior Finisher"
  },
  82: {
    rank: 82,
    player : "Anthony Edwards",
    team: "Twolves",
    position: "SG",
    rating: 81,
    height: "6'5",
    description: "Floor-Spacing Slasher"
  },
  83: {
    rank: 83,
    player : "Mason Plumlee",
    team: "Nuggets",
    position: "C",
    rating: 81,
    height: "6'11",
    description: "Mid-Range Finisher"
  },
  84: {
    rank: 84,
    player : "Brandon Clarke",
    team: "Grizzlies",
    position: "SF",
    rating: 81,
    height: "6'8",
    description: "Inside-Out Scorer"
  },
  85: {
    rank: 85,
    player : "Enes Kanter",
    team: "Celtics",
    position: "C",
    rating: 81,
    height: "6'10",
    description: "Glass-Cleaning Finisher"
  },
  86: {
    rank: 86,
    player : "Kyle Anderson",
    team: "Grizzlies",
    position: "SF",
    rating: 81,
    height: "6'9",
    description: "Mid-Range Shot Creator"
  },
  87: {
    rank: 87,
    player : "Derrick Rose",
    team: "Knicks",
    position: "PG",
    rating: 81,
    height: "6'2",
    description: "Slashing Playmaker"
  },
  88: {
    rank: 88,
    player : "Robert Williams",
    team: "Celtics",
    position: "PF",
    rating: 81,
    height: "6'8",
    description: "Glass Cleaner"
  },
  89: {
    rank: 89,
    player : "Serge Ibaka",
    team: "Clippers",
    position: "PF",
    rating: 81,
    height: "7'0",
    description: "3-Level Scorer"
  },
  90: {
    rank: 90,
    player : "Jalen Brunson",
    team: "Mavericks",
    position: "PG",
    rating: 81,
    height: "6'2",
    description: "Mid-Range Playmaker"
  },
  91: {
    rank: 91,
    player : "Al Horford",
    team: "76ers",
    position: "C",
    rating: 81,
    height: "6'9",
    description: "2-Way Mid-Range Finisher"
  },
  92: {
    rank: 92,
    player : "LaMarcus Aldridge",
    team: "Spurs",
    position: "PF",
    rating: 81,
    height: "6'11",
    description: "3-Level Scorer"
  },
  93: {
    rank: 93,
    player : "Joe Ingles",
    team: "Jazz",
    position: "SF",
    rating: 81,
    height: "6'7",
    description: "3 & D Wing"
  },
  94: {
    rank: 94,
    player : "De’Andre Hunter",
    team: "Hawks",
    position: "SF",
    rating: 81,
    height: "6'7",
    description: "Mid-Range Specialist"
  },
  95: {
    rank: 95,
    player : "Victor Oladipo",
    team: "Pacers",
    position: "SG",
    rating: 80,
    height: "6'4",
    description: "2-Way Mid-Range Shooter"
  },
  96: {
    rank: 96,
    player : "Keldon Johnson",
    team: "Spurs",
    position: "SF",
    rating: 80,
    height: "6'5",
    description: "3PT Specialist"
  },
  97: {
    rank: 97,
    player : "Tim Hardaway Jr.",
    team: "Mavericks",
    position: "SG",
    rating: 80,
    height: "6'6",
    description: "Sharpshooter"
  },
  98: {
    rank: 98,
    player : "Myles Turner",
    team: "Pacers",
    position: "C",
    rating: 80,
    height: "6'11",
    description: "Interior Force"
  },
  99: {
    rank: 99,
    player : "Danilo Gallinari",
    team: "Hawks",
    position: "SF",
    rating: 80,
    height: "6'10",
    description: "Stretch Four"
  },
  100: {
    rank: 100,
    player : "Steven Adams",
    team: "Pelicans",
    position: "C",
    rating: 80,
    height: "6'11",
    description: "Paint Beast"
  }
}
module.exports = data