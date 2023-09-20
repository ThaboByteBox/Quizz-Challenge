
const arrQuestionText = [
    { "question": "What is the Capital City of Romania", "answer": "Bucharest", ifAsked: true },
    { "question": "What is the Capital City of Finland", "answer": "Helsinki", ifAsked: true },
    { "question": "What is the Capital City of France", "answer": "Paris", ifAsked: true }
]
document.getElementById("playAgain").style.visibility = "hidden"
document.getElementById("tryagain").style.visibility = "hidden"
document.getElementById("firstOption").style.visibility = "hidden"
document.getElementById("secondOption").style.visibility = "hidden"
document.getElementById("thirdOption").style.visibility = "hidden"
let randomIndexer = questionIndex()
function questionIndex() {
    let randomNumber = Math.floor(Math.random() * 3) 
    return randomNumber
}
function retrieveAnswer () {
 let AnswerIndexer = randomIndexer
 let correctAnswer = ""
 let questionAsked = askedQuestion()
 if (questionAsked == arrQuestionText[AnswerIndexer]["question"]) {
    correctAnswer = arrQuestionText[AnswerIndexer]["answer"]
} else {
    correctAnswer = ""
} 
return correctAnswer
}

function askedQuestion () {
    let questionIndexer = randomIndexer
    let questionAsked = arrQuestionText[questionIndexer]["question"]
    return questionAsked
}
//console.log(askedQuestion())
/**
 * enables the visibilty of the other buttons and hides the Begin game
 * @returns  Question from the arrQuestionTex array
 */
function beginQuizHandler() {
    
    document.getElementById("firstOption").textContent = arrQuestionText[0]["answer"]
    document.getElementById("secondOption").textContent = arrQuestionText[1]["answer"]
    document.getElementById("thirdOption").textContent = arrQuestionText[2]["answer"]
    document.getElementById("firstOption").style.visibility = "visible"
    document.getElementById("secondOption").style.visibility = "visible"
    document.getElementById("thirdOption").style.visibility = "visible"
    document.getElementById("startQuiz").style.visibility = "hidden"
    let questionDisplayEl = document.getElementById("questionText")
    
    questionDisplayEl.innerHTML = askedQuestion() + "?"
    
}




function loadFeedback () {
    
    let questionFeedbackEl = document.getElementById("questionFeedback")
    questionFeedbackEl.innerHTML = "Correct!"   
    document.getElementById("firstOption").style.visibility = "hidden"
    document.getElementById("secondOption").style.visibility = "hidden"
    document.getElementById("thirdOption").style.visibility = "hidden"
    if (questionFeedbackEl.textContent == "Correct!") {
        document.getElementById("playAgain").style.visibility = "visible"
    } 
}

/**
 * Loads the value of the guess and check if the guess is correct 
 */

function checkAnswer(val){
   let correctAnswer = retrieveAnswer ()
   let compareAnswer = val
   let feedback = document.getElementById("questionFeedback") 
   if ( compareAnswer == correctAnswer) {
        correctAnswer = ""
        loadFeedback()
   } else {
    feedback.innerHTML = "Incorrect, Try Again!"
    document.getElementById("tryagain").style.visibility = "visible"
   }

}

function tryAgain (){
    let tryAgainIndex = questionIndex()
    retrieveAnswer()
    let correctAnswer = retrieveAnswer()
    let questionDisplayEl = document.getElementById("questionText")
    let feedbackDisplayEl = document.getElementById("questionFeedback")
    let questionAsked = arrQuestionText[tryAgainIndex]["question"]
    feedbackDisplayEl.innerHTML = ""
    questionDisplayEl.innerHTML = arrQuestionText[tryAgainIndex]["question"] + "?"
    document.getElementById("firstOption").style.visibility = "visible"
    document.getElementById("secondOption").style.visibility = "visible"
    document.getElementById("thirdOption").style.visibility = "visible" 
    if (questionAsked == arrQuestionText[tryAgainIndex]["question"]) {
        correctAnswer = arrQuestionText[tryAgainIndex]["answer"]
    } else {
        correctAnswer = ""
    }     
}
function tryAgainHandler() {
    tryAgain()
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
