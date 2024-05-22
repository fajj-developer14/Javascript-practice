const numBtns = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const dotBtn = document.querySelector("#dotBtn");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const modBtn = document.querySelector("#modBtn");
const operators = [plusBtn, minusBtn, divideBtn, modBtn];
const delBtn = document.querySelector("#deleteBtn");
const acBtn = document.querySelector("#acBtn");
const eqaulsBtn = document.querySelector("#equalsBtn");
let isEqualed = false;


for(let btn of numBtns) {
    btn.addEventListener("click", () => {
        if (isEqualed) {
            screen.innerText = btn.innerText;
            isEqualed = false;
        }
        else {
            screen.innerText += btn.innerText;
        }
    })
}

dotBtn.addEventListener("click", () => {
    if (isEqualed) {
        screen.innerText = ".";
        isEqualed = false;
    }
    else {
        screen.innerText += ".";
    }
})

multiplyBtn.addEventListener("click", () => {
    if (isEqualed) {
        screen.innerText = "*";
        isEqualed = false;
        }
    else {
        screen.innerText += "*";
        }
})

for (let operator of operators) {
    operator.addEventListener("click", () => {
        if (isEqualed) {
            screen.innerText = operator.innerText;
            isEqualed = false;
        }
        else {
            screen.innerText += operator.innerText;
        }
    })
}

delBtn.addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0,-1);
})


acBtn.addEventListener("click", () => {
    screen.innerText = "";
})

eqaulsBtn.addEventListener("click", () => {
    try {
        let answer = math.evaluate(screen.innerText);
        screen.innerText = answer;
    }
    catch {
        screen.innerText = "Error!"
    }
    isEqualed = true;
})