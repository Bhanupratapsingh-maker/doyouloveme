const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;

// These are the texts from your video
const noTexts = [
    "Please think again! 🙄",
    "Ek aur baar Soch lo! 🤔",
    "Man jao na! Kitna bhav khaogi 🥺",
    "Boht pitai hogi 😤",
    "Beautiful pls Man jao na! ❤️",
    "Last chance! 😭"
];

// Action when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I knew it! You Love me a lot 😘";
    gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    
    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Action when "No" is clicked
noBtn.addEventListener("click", () => {
    if (clickCount < noTexts.length) {
        question.innerHTML = noTexts[clickCount];
        clickCount++;
    } else {
        question.innerHTML = "Just say Yes already! 😡";
    }

    // Optional: Make the Yes button bigger every time No is clicked
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.2}px`;
    
    // Optional: Change the image to a sad/angry one temporarily
    gif.src = "https://media.tenor.com/K2s47X5fCsgAAAAi/bubu-dudu-sseeyall.gif"; 
});