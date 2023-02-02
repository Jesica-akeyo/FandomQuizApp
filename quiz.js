//Question bank
var questionBank= [
    {
        question : 'Which is Noeul\'s correct name',
        option : ['Nutarat Tangwai', 'Nuttarrat Tangwayi', 'Nuttarat Tangwai', 'Nattarat Tangwai'],
        answer : 'Nuttarat Tangwai'
    },
    {
        question : 'Which is the correct name of Boss ',
        option : ['Chaikamom Sermsongwitaya','Chaikamon Sermsongwittaya','Chaikamoon Samsonwitaya','Chaikamon Sermsonwitaya'],
        answer : 'Chaikamon Sermsongwittaya'
    },
    {
        question : 'When are Boss and Noeul\'s birthday respectively',
        option : ['6 July, 18 May','7 July, 20 May','6 April, 18 July','18 May, 6 July'],
        answer : '6 July, 18 May'
    },
    {
        question : 'What did Noeul study in the university',
        option : ['Communication arts','Journalism','Business Administration','Engineering'],
        answer : 'Business Administration'
    },
    {
        question : 'which university did Boss attend',
        option : ['Bangkok University','Chulalongkorn University','Assumption University','Thammasat University'],
        answer : 'Bangkok University'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();