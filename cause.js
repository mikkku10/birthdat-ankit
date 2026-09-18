// =====================================
// REASONS DATABASE
// =====================================
const reasons = [

    {
        text: "Baby Ankit, tum bahut hi pyaare aur ache dil ke insaan ho. Tumse milkar hamesha ek apnapan sa mehsoos hota hai. ❤️",
        emoji: "🥰",
        gif: "gif1.gif"
    },

    {
        text: "Mujhe bahut khushi hoti hai ki tum meri  zindagi mein tum  ho. Tumhara ye pyara sa bond hamesha bana rahe. 💖",
        emoji: "🌸",
        gif: "gif2.gif"
    },

    {
        text: "Bhagwan tumhe hamesha khush rakhein, tumhari har wish poori ho aur tum zindagi mein bahut tarakki karo. ✨",
        emoji: "🙏",
        gif: "gif1.gif"
    },

    {
        text: "Hamesha aise hi haste-muskurate rehna aur apno ke saath khushiyan baantte rehna. Meri taraf se tumhe janamdin ki bahut saari pyaar bhari shubhkamnayein. 🎂❤️",
        emoji: "🎉",
        gif: "gif2.gif"
    },
    {
        text: "Again Happy birthday mokash ke daddy aapki laddo aapko wish kri hai . 💖",
        emoji: "🥰",
        gif: "gif1.gif"
    },


];



// =====================================
// VARIABLES
// =====================================

let currentReasonIndex = 0;

let isTransitioning = false;

const reasonsContainer =
    document.getElementById("reasons-container");

const shuffleButton =
    document.querySelector(".shuffle-button");

const reasonCounter =
    document.querySelector(".reason-counter");


// =====================================
// CREATE REASON CARD
// =====================================

function createReasonCard(reason) {

    const card =
        document.createElement("div");

    card.className =
        "reason-card";


    const text =
        document.createElement("div");

    text.className =
        "reason-text";

    text.innerHTML =
        `${reason.emoji} ${reason.text}`;


    const gifOverlay =
        document.createElement("div");

    gifOverlay.className =
        "gif-overlay";


    gifOverlay.innerHTML = `
        <img
            src="${reason.gif}"
            alt="Friendship Memory"
        >
    `;


    card.appendChild(text);

    card.appendChild(gifOverlay);

    reasonsContainer.appendChild(card);


    // GSAP animation

    gsap.from(card, {

        opacity: 0,

        y: 60,

        scale: 0.9,

        duration: 0.7,

        ease: "back.out(1.7)"

    });
}


// =====================================
// DISPLAY NEXT REASON
// =====================================

function displayNewReason() {

    if (isTransitioning) {
        return;
    }


    if (currentReasonIndex >= reasons.length) {

        goToStorylane();

        return;
    }


    isTransitioning = true;


    const reason =
        reasons[currentReasonIndex];


    createReasonCard(reason);


    reasonCounter.textContent =
        `Reason ${currentReasonIndex + 1} of ${reasons.length}`;


    currentReasonIndex++;


    createFloatingElement();


    // =================================
    // LAST REASON
    // =================================

    if (currentReasonIndex === reasons.length) {

        gsap.to(shuffleButton, {

            scale: 1.1,

            duration: 0.6,

            delay: 0.4,

            ease: "elastic.out(1, 0.5)",

            onComplete: function () {

                shuffleButton.textContent =
                    "Enter Our Storylane 💫";

                shuffleButton.classList.add(
                    "story-mode"
                );

                isTransitioning = false;

            }

        });

    } else {

        setTimeout(() => {

            isTransitioning = false;

        }, 600);

    }
}


// =====================================
// BUTTON CLICK
// =====================================

shuffleButton.addEventListener(
    "click",
    function () {

        // If all reasons are complete
        if (currentReasonIndex >= reasons.length) {

            goToStorylane();

            return;
        }


        // Button press animation

        gsap.to(shuffleButton, {

            scale: 0.9,

            duration: 0.1,

            yoyo: true,

            repeat: 1

        });


        displayNewReason();

    }
);


// =====================================
// GO TO STORYLANE
// =====================================

function goToStorylane() {

    isTransitioning = true;


    gsap.to("body", {

        opacity: 0,

        duration: 1,

        ease: "power2.inOut",

        onComplete: function () {

            window.location.href =
                "last.html";

        }

    });
}


// =====================================
// FLOATING ELEMENTS
// =====================================

function createFloatingElement() {

    const elements = [
        "🌸",
        "✨",
        "💖",
        "🦋",
        "⭐",
        "💕",
        "💗"
    ];


    const element =
        document.createElement("div");

    element.className =
        "floating";


    element.textContent =
        elements[
            Math.floor(
                Math.random() *
                elements.length
            )
        ];


    element.style.left =
        Math.random() *
        window.innerWidth +
        "px";


    element.style.top =
        Math.random() *
        window.innerHeight +
        "px";


    element.style.fontSize =
        (Math.random() * 20 + 15) +
        "px";


    document.body.appendChild(element);


    gsap.to(element, {

        y: -500,

        duration:
            Math.random() * 7 + 7,

        opacity: 0,

        onComplete: function () {

            element.remove();

        }

    });
}


// =====================================
// CUSTOM CURSOR
// =====================================

const cursor =
    document.querySelector(".custom-cursor");


document.addEventListener(
    "mousemove",
    function (event) {

        gsap.to(cursor, {

            x: event.clientX - 15,

            y: event.clientY - 15,

            duration: 0.2

        });

    }
);


// =====================================
// AUTOMATIC FLOATING ELEMENTS
// =====================================

setInterval(
    createFloatingElement,
    2000
);




















