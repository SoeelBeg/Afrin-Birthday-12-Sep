/* =========================
   ELEMENTS
========================= */

const openingScreen =
    document.getElementById("openingScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const loaderBar =
    document.getElementById("loaderBar");

const fireworks =
    document.getElementById("fireworks");

const balloons =
    document.getElementById("balloons");


/* =========================
   LOADING ANIMATION
========================= */

let progress = 0;

const loading = setInterval(() => {

    progress++;

    loaderBar.style.width =
        progress + "%";


    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            openingScreen.style.opacity = "0";

            openingScreen.style.visibility =
                "hidden";

            birthdayScreen.style.display =
                "block";


            startCelebration();

        }, 700);

    }

}, 30);


/* =========================
   START CELEBRATION
========================= */

function startCelebration() {

    createFireworks();

    createBalloons();

    setInterval(() => {

        createFirework();

    }, 1200);

    setInterval(() => {

        createBalloon();

    }, 1800);
}


/* =========================
   FIREWORKS
========================= */

function createFireworks() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            createFirework();

        }, i * 500);
    }
}


function createFirework() {

    const firework =
        document.createElement("div");

    firework.classList.add(
        "firework"
    );


    const x =
        Math.random() * 100;

    const y =
        10 + Math.random() * 55;


    firework.style.left =
        x + "%";

    firework.style.top =
        y + "%";


    const colors = [
        "#ff4fd8",
        "#72e7ff",
        "#ffe66d",
        "#ffffff",
        "#9d6bff"
    ];

    const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    firework.style.background =
        color;

    firework.style.boxShadow =
        `0 0 12px 5px ${color}`;


    fireworks.appendChild(
        firework
    );


    setTimeout(() => {

        firework.remove();

    }, 1500);
}


/* =========================
   BALLOONS
========================= */

function createBalloons() {

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            createBalloon();

        }, i * 500);
    }
}


function createBalloon() {

    const balloon =
        document.createElement("div");

    balloon.classList.add(
        "balloon"
    );


    balloon.style.left =
        Math.random() * 95 + "%";


    const colors = [
        "#ff4fd8",
        "#7b2cff",
        "#00d4ff",
        "#ffe66d",
        "#ff6b6b"
    ];


    const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    balloon.style.background =
        color;


    balloon.style.boxShadow =
        `0 0 15px ${color}`;


    balloon.style.animationDuration =
        (8 + Math.random() * 5) +
        "s";


    balloons.appendChild(
        balloon
    );


    setTimeout(() => {

        balloon.remove();

    }, 14000);
}