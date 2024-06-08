const questions=[
{
    question:"Which of the following is not a valid way to declare a variable in JavaScript?",
    answers:[
        {text:'`var x = 10;`',correct:false},
        {text:'`let x = 10;`',correct:true},
        {text:'`const x = 10;`',correct:false},
        {text:'`variable x = 10;`',correct:false},
    ]
},
{
    question:"Which method is used to add a new element to the end of an array in JavaScript?",
    answers:[
        {text:'push()',correct:true},
        {text:'add()',correct:false},
        {text:'append()',correct:false},
        {text:'insert()',correct:false},
    ]
},
{
    question:"Which keyword is used to declare a function in JavaScript?",
    answers:[
        {text:'method',correct:false},
        {text:'define',correct:false},
        {text:'function',correct:true},
        {text:'func',correct:false},
    ]
},
{
    question:"What does the NaN keyword represent in JavaScript?",
    answers:[
        {text:'"Not a Number"',correct:true},
        {text:'"Null and Negative"',correct:false},
        {text:'"No Action Necessary"',correct:false},
        {text:'"Number and Null"',correct:false},
    ]
},
{
    question:"What is the purpose of the 'typeof' operator in JavaScript?",
    answers:[
        {text:'To check if a variable is defined or not.',correct:false},
        {text:'To convert a value to a string.',correct: false},
        {text:'To concatenate two strings.',correct:false},
        {text:'To determine the data type of a value.',correct: true},
    ]
}
]

const questionElement=document.getElementById("question");
const answerElement=document.getElementById("answers");
const nextBtn=document.getElementById("next-btn");
let currentIndx=0;
let score=0;
function startQuiz(){
    currentIndx=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentIndx];
    let qNo=currentIndx+1;
    questionElement.innerHTML=qNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const btn=document.createElement("button");
        btn.innerHTML=answer.text;
        btn.classList.add("btn");
        answerElement.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct=answer.correct;
        }
        btn.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextBtn.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}
function selectAnswer(e){
    const selected=e.target;
    const isCorrect=selected.dataset.correct==="true";
    if(isCorrect){
        selected.classList.add("correct");
        score++;
    }
    else{
        selected.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(btn=>
        {
            if(btn.dataset.correct==="true")
            {
                btn.classList.add("correct");
            }
            btn.disabled=true;
        })
        nextBtn.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`
    nextBtn.innerHTML="Attempt Again";
    nextBtn.style.display="block";
}
function handleNextButton(){
    currentIndx++;
    if(currentIndx < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentIndx<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
 