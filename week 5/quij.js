const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["Mount Everest", "K2", "Makalu", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Venus", "Saturn", "Jupiter", "Mars"],
        answer: "Jupiter"
    }
];


let quizhtml='';
for(let i=0; i<questions.length;i++){
    quizhtml += "<p>" + questions[i].question + "</p>"; 

    for(let j=0; j<questions[i].options.length; j++){
        quizhtml += "<label>"
        quizhtml += "<input type='radio' " + "value = '" + questions[i].options[j] + "'>"
        quizhtml += questions[i].options[j];
        quizhtml += "</label>" 
        console.log(quizhtml);

    }
}

document.getElementById("quiz").innerHTML = quizhtml;
