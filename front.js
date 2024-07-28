const quizData = [
  {
    question: "1)  HTML stands for",
    options: [
      "hyper text markup language",
      "hyper text manage language",
      "hidden text manage language",
      "hyper telly markup language",
    ],
    correct: 0,
  },
  {
    question: "2) CSS stand for",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question:
      "3) The property in CSS used to change the background color of an element is",
    options: ["bgcolor", "color", "background-color", "All of the above",],
    correct:2,
  },
  {
    question: "4) The CSS property used to control the element's font-size is ",
    options: ["text-style", "text-size", "font-size", "None of the above",],
    correct:1,
  },
];
 //step 2

const Ele= document.querySelectorAll(".answer");
const [queEle, option_1, option_2, option_3, option_4]=document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");

const subbtn=document.querySelector(".next");

let currentQuiz=0;
const score=0;

//step3

const loadQuiz=()=>{
    const{question,options}=quizData[currentQuiz];
    queEle.innerText=question;

    options.forEach((currOpt,index)=> window[`option_${index+1}`].innerText=currOpt)
    
};

loadQuiz();

const deselectaAns=()=>{
 return Ele.forEach((currentEle)=>currentEle.checkek=false);
};

subbtn.addEventListener("click",()=>{
   currentQuiz++;
   if(currentQuiz<quizData.length){
    deselectaAns();
    loadQuiz();
   }
});
