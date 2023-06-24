let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment()
{
    console.log("Button was clicked! ");
    count++;
    countEl.innerText = count;
    console.log(count);
}

function save()
{
    let countStr = " " +count+ " - ";
    saveEl.textContent += countStr;
    console.log(count);
}

function reset()
{
    console.log("Resetting values!");
    count = 0;
    countEl.textContent = count;
    console.log(count);
}