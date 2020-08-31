const mobileMenuBtn = document.querySelector(".mobile-navigation-button");
const mobileMenu = document.querySelector(".mobile-menu");
const answerArrows = document.querySelectorAll(".questions-list-item__arrow");

mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
    } else {
        mobileMenu.classList.add("show");
    }
});

for (let item of answerArrows) {
    item.addEventListener("click", () => {
        let answerText = document.querySelector(`.questions-list-item__answer.${item.classList[1]}`)
        let question = document.querySelector(`.questions-list-item__text.${item.classList[1]}`);
        if (answerText.classList.contains("questions-list-item__answer__show")) {
            answerText.classList.remove("questions-list-item__answer__show");
            item.style.transform = "initial";
            question.style.color = "initial";
            question.style.background = "initial";
        } else {
            answerText.classList.add("questions-list-item__answer__show");
            item.style.transform = "rotate(180deg)";
            question.style.color = "#61A199";
            question.style.background = "rgba(97, 161, 153, 0.15)";
        }
    });
}