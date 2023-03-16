const numbutton = document.getElementsByName("number");
const operator = document.getElementsByName("operator");
const operatorneg = document.getElementById("operatorneg")
const equal = document.getElementsByName("equal") [0];
const allclear = document.getElementsByName("allclear")[0];

let answer = document.getElementById("answer");

let currentOp = '';
let prevOp = '';
let operations = undefined;

numbutton.forEach(function (button) {
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    }   
)
  
});



operator.forEach(function (button) {
    button.addEventListener('click', function(){
        selectOperation(button.innerText)
    }
)
});

operatorneg.addEventListener('click',function(){
    negative();
    setDisplay();
})

equal.addEventListener('click', function(){
    calculate();
    setDisplay();
    
})
allclear.addEventListener('click', function(){
    clear();
    setDisplay();
})

function selectOperation(op) {
    if(currentOp==='') return;
    if(prevOp!==''){
        calculate()
    }
    operations=op.toString();
    prevOp = currentOp;
    currentOp ='';
}

function calculate(){
    let calculo;
    const last = parseFloat(prevOp);
    const current = parseFloat(currentOp);
        if(isNaN(last) || isNaN(current)) return;
        switch (operations) {
            case '+':
                calculo= last + current;
                break;
            case '-':
                calculo= last - current;
                break;
             case 'x':
                calculo= last*current;
                break; 
             case '÷':
                calculo= last / current;
                break; 
             case '%':
                calculo= (last * current)/100;
                break;                
            default:
                return;
        }

        currentOp = calculo;
        prevOp= '';
}


function addNumber (num) {
    currentOp = currentOp.toString() + num.toString();
    setDisplay();
}



function clear(){
 currentOp = '';
 prevOp = '';
 operations = undefined;
} 

function negative(){
    currentOp = '-'+currentOp;
    setDisplay();
}

function setDisplay() {
    answer.value = currentOp;
    console.log(currentOp)
}


clear();