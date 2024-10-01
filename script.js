// Quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
        explanation: "The capital of France is Paris."
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "George Orwell", "J.K. Rowling", "Mark Twain"],
        correctAnswer: 0,
        explanation: "'To Kill a Mockingbird' was written by Harper Lee."
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Mars"],
        correctAnswer: 1,
        explanation: "Jupiter is the largest planet in our solar system."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let isExplanationShown = false;

const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const explanationContainer = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

// Load the first question
loadQuestion();

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Dynamically change the title to show the current question number
    const quizTitle = document.querySelector('h1');
    quizTitle.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    
    // Show question
    questionContainer.textContent = currentQuestion.question;
    
    // Show choices
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Check if the correct answer is chosen
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        explanationContainer.textContent = "Correct! " + currentQuestion.explanation;
    } else {
        explanationContainer.textContent = "Incorrect. " + currentQuestion.explanation;
    }

    isExplanationShown = true;
    nextButton.classList.remove("hidden");

    // Disable choices after answering
    const buttons = choicesContainer.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add("hidden");
    choicesContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    explanationContainer.classList.add("hidden");
    
    scoreContainer.classList.remove("hidden");
    scoreContainer.textContent = `Your score: ${score} out of ${quizData.length}`;
}

function resetState() {
    explanationContainer.textContent = "";
    nextButton.classList.add("hidden");
    choicesContainer.innerHTML = "";
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (isExplanationShown) {
        isExplanationShown = false;
        nextQuestion();
    }
});
