const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const answerArrows = document.querySelectorAll(".arrow");

mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
    } else {
        mobileMenu.classList.add("show");
    }
});

for (let item of answerArrows) {
    item.addEventListener("click", () => {
        let answerText = document.querySelector(`.answer.${item.classList[1]}`)
        let question = document.querySelector(`.question-text.${item.classList[1]}`);
        if (answerText.classList.contains("answer-show")) {
            answerText.classList.remove("answer-show");
            item.style.transform = "initial";
            question.style.color = "initial";
            question.style.background = "initial";
        } else {
            answerText.classList.add("answer-show");
            item.style.transform = "rotate(180deg)";
            question.style.color = "#61A199";
            question.style.background = "rgba(97, 161, 153, 0.15)";
        }
    });
}