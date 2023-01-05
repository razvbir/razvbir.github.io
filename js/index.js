// let meow = {};

// fetch("data/meow.json")
//   .then(r => r.json())
//   .then(e => meow = e);

let meow = {
  "skills": [
    "Meowing in the hallway",
    "Waking up the neighbours",
    "Hunting chicken out of plates",
    "Asking to go out when I don't want out",
    "Singing like a broken violin whenever I feel like it"
  ],
  "languages": [
    {
      "language": "Romeownian",
      "level": "native"
    },
    {
      "language": "Meowglish",
      "level": "advanced"
    },
    {
      "language": "Meowdarin",
      "level": "intermeowdiate"
    },
    {
      "language": "Italian",
      "level": "beginner"
    }
  ]
}

router(window.location.hash.substring(1));
