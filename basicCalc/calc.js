let num1 = 5;
let num2 = 12;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let res = 0;
let sumEl = document.getElementById("sum-el");

function add()
{
    res=num1+num2;
    sumEl.textContent ="Sum : " + res;
    console.log(res);
}

function subtract()
{
    res=num1-num2;
    sumEl.textContent ="Subtraction: " + res;
    console.log(res);
}

function multiply()
{
    res=num1*num2;
    sumEl.textContent ="Multiplication: " + res;
    console.log(res);
}

function divide()
{
    res=num1/num2;
    sumEl.textContent ="Division: " + res;
    console.log(res);
}