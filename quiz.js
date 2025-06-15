let incorrectAttempts = 0;
function checkAnswer() {
    let correctAnswer = "4";
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        document.getElementById("feedback").innerHTML = "Please select an answer.";
        return;
    }

    function disableInput() {
        let radioButtons = document.querySelectorAll('input[name="quiz"]');
        radioButtons.forEach(button => {
            button.disabled = true; // Disable all radio buttons
           document.getElementById("submit-answer").disabled = true; // Disable submit button 
        });
    }
    let userAnswer = selectedOption.value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerHTML = "Correct! Well done.";
        document.getElementById("feedback").classList.add("success");
        document.getElementById("feedback").classList.remove("error");
        disableInput(); // Disable input after correct answer
    } else {
        incorrectAttempts++;
        if (incorrectAttempts >= 2) {
            document.getElementById("feedback").innerHTML = "Incorrect. You have reached the maximum attempts. <br> The correct answer is 4.";
            document.getElementById("feedback").classList.add("error");
            document.getElementById("feedback").classList.remove("success");
            disableInput(); // Disable input after maximum attempts
            return;
        }else {
            document.getElementById("feedback").innerHTML = "That's Incorrect. Try again!";
            document.getElementById("feedback").classList.add("error");
            document.getElementById("feedback").classList.remove("success");
        }
        
    }
}
// function resetQuiz() {
//     document.querySelector('input[name="quiz"]:checked').checked = false;
//     incorrectAttempts = 0;
//     let radioButtons = document.querySelectorAll('input[name="quiz"]');
//     radioButtons.forEach(button => {
//         button.disabled = false; // Re-Enable all radio buttons
//     });
//     document.getElementById("submit-answer").disabled = false; // Re-Enable submit button
//     document.getElementById("feedback").innerHTML = "";
// }

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
document.getElementById("reset-quiz").addEventListener("click", resetQuiz);