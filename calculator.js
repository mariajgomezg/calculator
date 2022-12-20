const numberButton = document.getElementsByName('data-number')
const operationsButton = document.getElementsByName('data-opera')
const resultButton = document.getElementsByName('data-result') [0]
const deleteButton = document.getElementsByClassName('data-delete') [0]
let result = document.getElementById('result')
let currentCalc = ''
let previousCalc = ''
let operation = undefined

numberButton.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText)
    })
})

operationsButton.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText)
    })
})

resultButton.addEventListener('click', function(){
    calculate()
    refreshDisplay()
})

deleteButton.addEventListener('click', function(){
    reset()
    refreshDisplay()
})

function selectOperation(op){
    if(currentCalc==='')return
    if(previousCalc!==''){
        calculate()
    }
    operation = op.toString()
    previousCalc = currentCalc
    currentCalc = ''
}

function calculate(){
    let calculus 
    let previous = parseFloat(previousCalc)
    let current = parseFloat(currentCalc)
    switch(operation){
        case '+':
            calculus = previous + current
            break;
        case '-':
            calculus = previous - current
            break;
        case '*':
            calculus = previous * current
            break;
        case '/':
            calculus = previous / current
            break;
        default:
            return;
    }
    currentCalc = calculus
    operation = undefined
    previousCalc = ''
}

function addNumber(num){
    currentCalc = currentCalc.toString() + num.toString() 
    refreshDisplay()
}

function reset(){
    currentCalc = ''
    previousCalc = ''
    operation = undefined
}

function refreshDisplay(){
    result.value = currentCalc
}

reset()