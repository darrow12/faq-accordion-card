import "./styles/css/global.css";

const questions = document.querySelectorAll(".faq__item");

questions.forEach( (question) => {
  const btn = question.querySelector('.faq__question-button');

  btn.addEventListener("click", () => {
    questions.forEach( (item) => {
      if (item !== question) {
        item.classList.remove("active");
      }
    });

    question.classList.toggle("active");
  })
})
