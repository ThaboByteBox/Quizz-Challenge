
const arrQuestionText = [
    { "question": "What is the Capital City of Romania", "answer": "Bucharest", ifAsked: true },
    { "question": "What is the Capital City of Finland", "answer": "Helsinki", ifAsked: true },
    { "question": "What is the Capital City of France", "answer": "Paris", ifAsked: true }
]
document.getElementById("playAgain").style.visibility = "hidden"
document.getElementById("tryagain").style.visibility = "hidden"

function questionIndex() {
    let randomNumber = Math.floor(Math.random() * 2)
    return randomNumber
}
function retrieveAnswer () {
 let indexer = questionIndex()
 let correctAnswer = ""
 if (askedQuestion() == arrQuestionText[indexer]["question"]) {
    correctAnswer = arrQuestionText[indexer]["answer"]
} else {
    correctAnswer = ""
} 
return correctAnswer
}

function askedQuestion () {
    let indexer = questionIndex()
    let questionAsked = arrQuestionText[indexer]["question"]
    return questionAsked
}

/**
 * enables the visibilty of the other buttons and hides the Begin game
 * @returns  Question from the arrQuestionTex array
 */
function beginQuizHandler() {
    
    document.getElementById("firstOption").innerText = arrQuestionText[0]["answer"]
    document.getElementById("secondOption").innerText = arrQuestionText[1]["answer"]
    document.getElementById("thirdOption").innerText = arrQuestionText[2]["answer"]
    document.getElementById("startQuiz").style.visibility = "hidden"
    document.getElementById("playAgain").style.visibility = "visible"
    document.getElementById("tryagain").style.visibility = "visible"

    let questionDisplayEl = document.getElementById("questionText")
    
    
    questionDisplayEl.innerHTML = askedQuestion() + "?"
    
}




function loadAnswer () {
    let correctAnswer = retrieveAnswer()
    let indexer = 0
    let questionFeedbackEl = document.getElementById("questionFeedback")
    if (correctAnswer == arrQuestionText[indexer]["answer"]) {
        questionFeedbackEl.innerHTML = "Correct!"
    } else {
        questionFeedbackEl.innerHTML = "Incorrect! The correct answer is: " + correctAnswer
    }   
    document.getElementById("firstOption").style.visibility = "hidden"
    document.getElementById("secondOption").style.visibility = "hidden"
    document.getElementById("thirdOption").style.visibility = "hidden"
    if (questionFeedbackEl == "Correct!") {
        document.getElementById("playAgain").style.visibility = "visible"
        arrQuestionText[indexer].ifAsked = true
    } else {
        alert("Try Again")
        document.getElementById("tryagain").style.visibility = "visible"
    }
}

/**
 * Loads the value of the guess and check if the guess is correct 
 */
function firstOption() {
    loadAnswer()
}

function secondOption() {
    if (correctAnswer == arrQuestionText[1]["answer"]) {
        qHealthEl.textContent = "Correct!"
    } else {
        qHealthEl.textContent = "Incorrect! The correct answer is: " + correctAnswer
    }
    document.getElementById("firstAnswer").style.visibility = "hidden"
    document.getElementById("secondAnswer").style.visibility = "hidden"
    document.getElementById("thirdAnswer").style.visibility = "hidden"
    if (qHealthEl.textContent == "Correct!") {
        document.getElementById("playAgain").style.visibility = "visible"
        arrQuestionText[1].ifAsked = true
    } else {
        alert("Try Again")
        document.getElementById("tryagain").style.visibility = "visible"
    }
}

function thirdOption() {
    if (correctAnswer == arrQuestionText[2]["answer"]) {
        qHealthEl.textContent = "Correct!"
    } else {
        qHealthEl.textContent = "Incorrect! The correct answer is: " + correctAnswer
    }
    document.getElementById("firstAnswer").style.visibility = "hidden"
    document.getElementById("secondAnswer").style.visibility = "hidden"
    document.getElementById("thirdAnswer").style.visibility = "hidden"
    if (qHealthEl.textContent == "Correct!") {
        document.getElementById("playAgain").style.visibility = "visible"
        arrQuestionText[2].ifAsked = true
    } else {
        alert("Try Again")
        document.getElementById("tryagain").style.visibility = "visible"
    }

}

function tryAgain() {

    iRandomNumber = Math.floor(Math.random() * 2) + 1
    firtsQuestion = arrQuestionText[iRandomNumber]["question"]
    displayEl.textContent = firtsQuestion + "?"
    if (firtsQuestion == arrQuestionText[iRandomNumber]["question"]) {
        correctAnswer = arrQuestionText[iRandomNumber]["answer"]
    } else {
        correctAnswer = ""
    }
    document.getElementById("firstAnswer").style.visibility = "visible"
    document.getElementById("secondAnswer").style.visibility = "visible"
    document.getElementById("thirdAnswer").style.visibility = "visible"
    qHealthEl.textContent = ""
    document.getElementById("tryagain").style.visibility = "hidden"
}

let allQuestionsAsked = true
let randomIndex = 0
let stopAsking = 0
function nextQuestion() {

    for (const question of arrQuestionText) {
        if (!question.ifAsked) {
            allQuestionsAsked = false
            break
        }
    }

    if (!allQuestionsAsked) {
        do {
            randomIndex = Math.floor(Math.random() * arrQuestionText.length - 1)
        } while (arrQuestionText[iRandomNumber].ifAsked == false)
        arrQuestionText[iRandomNumber].ifAsked = true
        loadQuesion()
    } else {
        console.log("All Questions Have Been Asked")
    }


}


let nextQuestions1 = ""
function loadQuesion() {
    qHealthEl.textContent = ""
    if (arrQuestionText[iRandomNumber].ifAsked == true) {
        iRandomNumber = Math.floor(Math.random() * 2) + 1
        firtsQuestion = arrQuestionText[iRandomNumber]["question"]
        displayEl.textContent = firtsQuestion + "?"
        if (firtsQuestion == arrQuestionText[iRandomNumber]["question"]) {
            correctAnswer = arrQuestionText[iRandomNumber]["answer"]
        } else {
            correctAnswer = ""
        }
        document.getElementById("firstAnswer").style.visibility = "visible"
        document.getElementById("secondAnswer").style.visibility = "visible"
        document.getElementById("thirdAnswer").style.visibility = "visible"
        qHealthEl.textContent = ""
        document.getElementById("tryagain").style.visibility = "hidden"
    } else {
        alert("all questions have been asked")
    }
}
