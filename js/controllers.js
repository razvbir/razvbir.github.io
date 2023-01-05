
let IndexController = {
    'homeAction':() => {
        console.log('home');
    },
    'languagesAction':() => {
        let langEl = document.getElementById('languages-list');

        if (langEl.childElementCount > 1) return;

        for (let lang of meow.languages) {
            langEl.appendChild(createTableRow(lang));
        }
    },
    'skillsAction': () => {
        let skillsEl = document.getElementById('skills-list');

        if (skillsEl.childElementCount !== 0) return;

        for (let skill of meow.skills) {
            skillsEl.appendChild(createListItem(skill));
        }
    },
};
