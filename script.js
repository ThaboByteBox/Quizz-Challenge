//const arrQuestionText = { 1:"What is the Capital City of Romania",2:"What is the Capital City of Finland",3: "What is the Capital Cityof France"}
// 
const arrQuestionText = [
    {"question": "What is the Capital City of Romania", "answer": "Bucharest", ifAsked : false },
    {"question": "What is the Capital City of Finland", "answer": "Helsinki", ifAsked : false  },
    {"question": "What is the Capital City of France", "answer": "Paris", ifAsked: false}
]
let displayEl = document.getElementById("questionText")
let qHealthEl = document.getElementById("questionHealth")
document.getElementById("firstAnswer").style.visibility = "hidden"
document.getElementById("secondAnswer").style.visibility = "hidden"
document.getElementById("thirdAnswer").style.visibility = "hidden"
document.getElementById("playAgain").style.visibility = "hidden"
document.getElementById("tryagain").style.visibility = "hidden"
let iRandomNumber = 0
iRandomNumber = Math.floor( Math.random()*2)
let firtsQuestion = arrQuestionText[iRandomNumber]["question"]
let correctAnswer = ""



/**
 * enables the visibilty of the other buttons and hides the Begin game
 * @returns  Question from the arrQuestionTex array
 */
function beginQuiz() {
        document.getElementById("firstAnswer").style.visibility = "visible"
        document.getElementById("secondAnswer").style.visibility = "visible"
        document.getElementById("thirdAnswer").style.visibility = "visible"
    
        document.getElementById("firstAnswer").innerText = arrQuestionText[0]["answer"]
        document.getElementById("secondAnswer").innerText = arrQuestionText[1]["answer"]
        document.getElementById("thirdAnswer").innerText = arrQuestionText[2]["answer"]
    
        document.getElementById("startQuiz").style.visibility = "hidden"
        
       // console.log(Object.value(arrQuestionText))   
       displayEl.textContent = firtsQuestion + "?"  
       if (firtsQuestion == arrQuestionText[iRandomNumber]["question"]) {
        correctAnswer = arrQuestionText[iRandomNumber]["answer"]
    } else {
        correctAnswer = ""
    }    
}   
   
    






/**
 * Loads the value of the guess and check if the guess is correct 
 */
function firstAnswerGuess() {  
   if(correctAnswer == arrQuestionText[0]["answer"] ) {
    qHealthEl.textContent = "Correct!"
   } else {
    qHealthEl.textContent = "Incorrect! The correct answer is: " + correctAnswer
   }
   document.getElementById("firstAnswer").style.visibility = "hidden"
   document.getElementById("secondAnswer").style.visibility = "hidden"
   document.getElementById("thirdAnswer").style.visibility = "hidden"
   if (qHealthEl.textContent == "Correct!") {
    document.getElementById("playAgain").style.visibility = "visible"
    arrQuestionText[0][ifAsked]= true
   } else {
    alert("Try Again") 
    document.getElementById("tryagain").style.visibility = "visible" 
 }
}

function secondAnswerGuess () {     
   if(correctAnswer == arrQuestionText[1]["answer"]) {
    qHealthEl.textContent = "Correct!"
   } else {
    qHealthEl.textContent = "Incorrect! The correct answer is: " + correctAnswer
   }
   document.getElementById("firstAnswer").style.visibility = "hidden"
   document.getElementById("secondAnswer").style.visibility = "hidden"
   document.getElementById("thirdAnswer").style.visibility = "hidden"
   if (qHealthEl.textContent == "Correct!") {
    document.getElementById("playAgain").style.visibility = "visible"
    arrQuestionText[1][ifAsked] = true
   } else {
    alert("Try Again")  
    document.getElementById("tryagain").style.visibility = "visible"
 }
}

function thirdAnswerGuess () {
    if(correctAnswer == arrQuestionText[2]["answer"] ) {
        qHealthEl.textContent = "Correct!"
       } else {
        qHealthEl.textContent = "Incorrect! The correct answer is: " + correctAnswer
       }
    document.getElementById("firstAnswer").style.visibility = "hidden"
    document.getElementById("secondAnswer").style.visibility = "hidden"
    document.getElementById("thirdAnswer").style.visibility = "hidden" 
   if (qHealthEl.textContent == "Correct!") {
    document.getElementById("playAgain").style.visibility = "visible"
    arrQuestionText[2][ifAsked] = true
   } else {
    alert("Try Again")  
    document.getElementById("tryagain").style.visibility = "visible"
 }
    
}

function tryAgain() {
    iRandomNumber = Math.floor( Math.random()*2) + 1
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

function playAgain() {    
    if (arrQuestionText[0][ifAsked] = true) {
        function randomNumber (min, max) {
           return Math.floor(Math.random() * (min -max + 1) + min)
        }
        iRandomNumber = randomNumber(1,2)
    } else if (arrQuestionText[1][ifAsked] = true) {
            function randomNumber (min, max, exclude) {
                return Math.floor(Math.random() * (min - max +1) +min)
            }
        iRandomNumber = randomNumber(0,2,1)
    } 
    else if (arrQuestionText[2][ifAsked]) {
            function randomNumber (min, max) {
                return Math.floor(Math.random() * (min - max + 1) + min)
            }
        iRandomNumber = randomNumber(0,1)
    } else {
     alert("all questions have been answered")
    }
   
    displayEl.textContent = firtsQuestion + "?"  
    if (firtsQuestion == arrQuestionText[iRandomNumber]["question"]) {
     correctAnswer = arrQuestionText[iRandomNumber]["answer"]
 } else {
     correctAnswer = ""
 }    
 
 document.getElementById("firstAnswer").style.visibility = "visible"
 document.getElementById("secondAnswer").style.visibility = "visible"
 document.getElementById("thirdAnswer").style.visibility = "visible"
 document.getElementById("tryagain").style.visibility = "hidden"
}
