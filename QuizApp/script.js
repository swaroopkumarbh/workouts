let questions = [];
let questionId = 0;
let answers = [];
let inCorrectAnswers = [];
let json=[];
let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
let score=0;

/*function to fetch the Quiz Data from the API*/
async function fetchQuizData() {
  let url = "https://5f61e98889dbd70016e190bd.mockapi.io/api/get/questions/8000/QuizApp";
  let response = await fetch(url);
  let data = await response.json();
  questions = data;
}

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

/*function to Start the Quiz Game*/
async function startQuiz() {
  await fetchQuizData();
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

/*function to Navigate to next Question*/
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/*function to populate question in the screen*/
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

/*function to reset the question*/
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

/*function to choose the answer for question*/
function selectAnswer(event) {
  let selectedButton = event.target;
  let correct = selectedButton.dataset.correct;
  if(selectedButton.dataset.correct=="true"){
    score+=10;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    alert(`Your score is ${(score)}`)
    startButton.innerText = 'Restart Quiz';
    score=0;
    startButton.classList.remove('hide');
  }
}

/*function to change the style of screen based on the answer the user selected*/
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  }
}

/*function to reset the screen style*/
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}