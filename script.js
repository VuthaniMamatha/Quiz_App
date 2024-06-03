const questions=[
    {
      question: "How many fingers do you have in your hands?",
      answers: [
        {text:"5",correct:false},
        {text: "10",correct:false},
        {text: "8",correct:true},
        {text:"12",correct:false},
      ]
    },
    {
      question: "How many months of a year have 28 days?",
      answers: [
        {text:"1",correct:false},
        {text: "12",correct:true},
        {text: "6",correct:false},
        {text:"0",correct:false},
      ]
    },
    {
        question: "If you divide 40 by half and add ten, what will be the result?",
        answers: [
          {text:"30",correct:false},
          {text: "40",correct:false},
          {text: "90",correct:true},
          {text:"20",correct:false},
        ]
      },
      {
        question: "If you overtake the second person in a sprint race, what will be your new place in the race?",
        answers: [
          {text:"First",correct:false},
          {text: "Second",correct:true},
          {text: "Third",correct:false},
          {text:"Based on competitors",correct:false},
        ]
      },
      {
        question: "What will be your place, if you overtake the last person in the sprint race?",
        answers: [
          {text:"The place before the last",correct:false},
          {text: "The last place",correct:false},
          {text: "It depends on the number of competitors",correct:false},
          {text:"The question is wrong",correct:true},
        ]
      },
      {
        question: "There are 3 doctors in a hospital. They say we have a brother named Robert. But Robert says I don't have any brother. Who is lying?",
        answers: [
          {text:"Robert",correct:false},
          {text: "Doctors",correct:false},
          {text: "No one",correct:true},
          {text:"All of them",correct:false},
        ]
      },
      {
        question: "There are 45 mangoes in your basket. You take three out of the basket. How many mangoes are left?",
        answers:[
            {text:"3",correct:false},
            {text: "45",correct:true},
            {text: "43",correct:false},
            {text:"I do not eat mangoes",correct:false}, 
        ]
      },
      {
        question:"Tuesday,Sam and Peter went to a restaurant to eat lunch.After eating lunch,they paid the bill. But Sam and Peter did not pay the bill.so who did?",
        answers:[
            {text:"They know the manager",correct:false },
            {text: "It was free",correct:false},
            {text: "Their friend, Tuesday",correct:true},
            {text:"Nobody",correct:false}, 
        ]
      },
      {
        question: "I have keys but no locks. I have space but no room. You can enter but cant go outside.What am I?",
        answers:[
            {text:"piano",correct:false},
            {text: "Keyboard",correct:true},
            {text: "Mushroom",correct:false},
            {text:"House",correct:false}, 
        ]
      },
      {
        question: "If a car key would open a car, and a house key would open a house, then what key could open a banana?",
        answers: [
          {text:"Human",correct:false},
          {text: "Donkey",correct:false},
          {text: "Monkey",correct:true},
          {text:"Turkey",correct:false},
        ]
      },
      {
        question: "What can point in every direction but cant reach the destination by itself?",
        answers: [
          {text:"Ship",correct:false},
          {text: "Finger",correct:true},
          {text: "Arrow",correct:false},
          {text:"Signal",correct:false},
        ]
      },
      {
        question: "What has six faces, but does not wear a makeup. It also has 21 eyes, but cant see?",
        answers: [
          {text:"Octopus",correct:false},
          {text: "No such things",correct:false},
          {text: "Dice",correct:true},
          {text:"Aliens",correct:false},
        ]
      },
      {
        question: "Before Mount Everest was discovered, what was the highest mountain on earth?",
        answers: [
          {text:"Annapurna",correct:false},
          {text: "No highest mountain",correct:false},
          {text: "Mount Everest",correct:true},
          {text:"Kailash Mountains",correct:false},
        ]
      },
      {
        question: "I weigh nothing, but you can still see me. If you put me in a bucket. I make the bucket lighter. What am I?",
        answers: [
          {text:"An air",correct:false},
          {text: "A sponge",correct:false},
          {text: "A hole",correct:true},
          {text:"Light",correct:false},
        ]
      },
      {
        question: "Why do birds fly south for the winter?",
        answers: [
          {text:"They like south",correct:false},
          {text: "Because its winter",correct:false},
          {text: "Its too far to walk",correct:true},
          {text:"None of the above",correct:false},
        ]
      }
];
const questionElement=document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true"
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();











