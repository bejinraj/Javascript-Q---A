let questions = [
  {
    id: 1,
    ques: "How old are you?",
    optionA: "18",
    optionB: "20",
    optionC: "27",
    optionD: "25",
    ans: "27",
  },
  {
    id: 2,
    ques: "How old are you?",
    optionA: "18",
    optionB: "20",
    optionC: "27",
    optionD: "25",
    ans: "18",
  },
  {
    id: 3,
    ques: "How old are you?",
    optionA: "18",
    optionB: "20",
    optionC: "27",
    optionD: "25",
    ans: "25",
  },
];

const quesContainer = document.getElementById("ques-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const marks = document.getElementById("marks");
const tryAgain = document.getElementById("try-again");

let mark = 0;

let render = () => {
  for (const obj of questions) {
    let container = `
      <div id="ans-container-${obj.id}" class="container">
        <h3>${obj.id}. ${obj.ques}</h3>
        <div class="radio-btn">
          <input type="radio" name="${obj.id}" value="${obj.optionA}" id="a-${obj.id}" />
          <label for="a-${obj.id}">${obj.optionA}</label>
        </div>
        <div class="radio-btn">
          <input type="radio" name="${obj.id}" value="${obj.optionB}" id="b-${obj.id}" />
          <label for="b-${obj.id}">${obj.optionB}</label>
        </div>
        <div class="radio-btn">
          <input type="radio" name="${obj.id}" value="${obj.optionC}" id="c-${obj.id}" />
          <label for="c-${obj.id}">${obj.optionC}</label>
        </div>
        <div class="radio-btn">
          <input type="radio" name="${obj.id}" value="${obj.optionD}" id="d-${obj.id}" />
          <label for="d-${obj.id}">${obj.optionD}</label>
        </div>
        <div>
          <h2 id="answer-${obj.id}"  class="hide">Answer : <span>${obj.ans}</span> </h2>
        </div>
      </div>
  `;
    quesContainer.innerHTML += container;
  }

  submitBtn.addEventListener("click", () => {
    resultContainer.classList.remove("hide");
    for (let obj of questions) {
      const a = document.getElementById(`a-${obj.id}`);
      const b = document.getElementById(`b-${obj.id}`);
      const c = document.getElementById(`c-${obj.id}`);
      const d = document.getElementById(`d-${obj.id}`);
      const answer = document.getElementById(`answer-${obj.id}`);
      const ansContainer = document.getElementById(`ans-container-${obj.id}`);

      answer.classList.remove("hide");

      if (a.checked) {
        if (a.value == obj.ans) {
          ansContainer.style.backgroundColor = "#D0F5BE";
          answer.classList.add("correct");
          mark++;
        } else if (a.value !== obj.answer) {
          answer.classList.add("incorrect");
          ansContainer.style.backgroundColor = "#FEA1A1";
        }
      } else if (b.checked) {
        if (b.value == obj.ans) {
          ansContainer.style.backgroundColor = "#D0F5BE";
          answer.classList.add("correct");
          mark++;
        } else if (b.value !== obj.answer) {
          answer.classList.add("incorrect");
          ansContainer.style.backgroundColor = "#FEA1A1";
        }
      } else if (c.checked) {
        if (c.value == obj.ans) {
          ansContainer.style.backgroundColor = "#D0F5BE";
          answer.classList.add("correct");
          mark++;
        } else if (c.value !== obj.answer) {
          answer.classList.add("incorrect");
          ansContainer.style.backgroundColor = "#FEA1A1";
        }
      } else if (d.checked) {
        if (d.value == obj.ans) {
          ansContainer.style.backgroundColor = "#D0F5BE";
          answer.classList.add("correct");
          mark++;
        } else if (d.value !== obj.answer) {
          answer.classList.add("incorrect");
          ansContainer.style.backgroundColor = "#FEA1A1";
        }
      } else {
        alert("Select all answers");
      }
      marks.innerHTML = `${mark}/${questions.length}`;
    }
  });

  tryBtn.addEventListener("click", () => {
    location.reload();
  });
};
render();
