
let availablePages = [
    'home','skills','languages'
];

function router(pageName) {
    let currentPage = 'home';

    if (availablePages.includes(pageName)) {
        currentPage = pageName;
    }

    console.log(currentPage);

    let action = currentPage + 'Action';
    if (typeof IndexController[action] === "function") {
        // playMeowSound();

        hidePages();
        IndexController[action]();
        showPage(currentPage);
    } else {
        console.error(`${action} was not found`);
    }
}
