const questions = document.querySelectorAll(".dropdown_question");

function dropdown_button() {
    questions.forEach(question => {
        question.addEventListener("click", function() {
            const plus = question.children[0]
            const minus = question.children[1]
            const anwser = question.nextElementSibling
            if (plus.style.display === "none") {
                anwser.style.maxHeight = "0px";
                plus.style.display = "block";
                minus.style.display = "none";
            } else {
                anwser.style.maxHeight = "100px";
                plus.style.display = "none";
                minus.style.display = "block";
            }
        });
    });
}

dropdown_button();
dropdown_anwser()
