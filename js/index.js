import meow from "../data/meow.js";
import Helper from "./Helper.js";

(() => {
    let skillsEl = document.getElementById('skills-list');

    for (let skill of meow.skills) {
        skillsEl.appendChild(Helper.createListItem(skill));
    }
})();

(() => {
    let langEl = document.getElementById('languages-list');

    for (let lang of meow.languages) {
        langEl.appendChild(Helper.createTableRow(lang));
    }
})();

// let meow = new Audio("sounds/MeowOne.mp3");
// meow.play();

// fetch("data/meow.json")
//     .then(response => response.json())
//     .then(data => console.log(data));