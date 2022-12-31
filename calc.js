//global variable
populateNumber = '';
recognizeNumber= '';
holder = ''; 
h= '';
answer= '';

// storing all variables in javascript
let number = document.querySelectorAll(".number") ;
let operate = document.querySelectorAll(".operate");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let point = document.querySelector(".point");

let passive =document.querySelector(".passive");
let active =document.querySelector(".active");

//function to populate
number.forEach((num) => num.addEventListener("click", function(e){
   populate(e.target.textContent)
   active.textContent = populateNumber;
}))

function populate(pop){
    if(populateNumber.length < 7){
     populateNumber += pop;}
  }

// choose operator
operate.forEach((oper) => oper.addEventListener("click", function(e){
   h = e.target.textContent;
   deal(e.target.textContent);
}))

function deal(oper){
 handler = oper;
 recognizeNumber = populateNumber;
 passive.textContent = recognizeNumber + '' + handler;
  populateNumber = "";
  active.textContent = '';  
}

equal.addEventListener("click", () => {
  if (recognizeNumber != '' && populateNumber != '' ) 
       operateFunc(h,recognizeNumber,populateNumber)
       display();
  });

function display(){
  passive.textContent = "";
  answer = round(answer)
  answer = answer.toString();
  b = answer.slice(0, 7) +'...' ;
  if (answer.length <=7 ){
  active.textContent = answer;
  }
  else{
    active.textContent = b;
  }  
}
function round (ans){
  return Math.round(ans * 1000) / 1000;
}

// creating calculation functions
  function add(a, b) {
    answer = a + b ;
    return answer;
  }

  function substract(a, b) {
    answer = a - b ;
    return answer;
  }
  
  function multiply(a, b) {
    answer = a * b;
    return answer;
  }
  
  function divide(a, b) {
    answer = a / b;
    return answer
  }

 //operate function
  function operateFunc(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return substract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }

  clear.addEventListener("click", () => {
    populateNumber = '';
    recognizeNumber= '';
    holder = ''; 
    h= '';
    answer='';
    passive.textContent = "";
    active.textContent = 0;  
    });
  
    point.addEventListener("click", () => {
      console.log('me')
     containDot();
    });

    function containDot(){
      if(!populateNumber.includes(".")){
       populateNumber += ".";}
    }