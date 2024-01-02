const pOneBtn = document.querySelector("#pOneBtn");
const pTwoBtn = document.querySelector("#pTwoBtn");
const resetBtn = document.querySelector("#resetBtn");
const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const targetInp = document.querySelector("#targetNum");

pOneBtn.addEventListener("click", () => {
    scoreOne.innerText = parseInt(scoreOne.innerText) + 1;
    if (scoreOne.innerText === targetInp.value) {
        scoreOne.classList.add("fontGreen");
        scoreTwo.classList.add("fontRed");
        pOneBtn.disabled = true;
        pTwoBtn.disabled = true;
    }
})

pTwoBtn.addEventListener("click", () => {
    scoreTwo.innerText = parseInt(scoreTwo.innerText) + 1;
    if (scoreTwo.innerText === targetInp.value) {
        scoreTwo.classList.add("fontGreen");
        scoreOne.classList.add("fontRed");
        pOneBtn.disabled = true;
        pTwoBtn.disabled = true;
    }
})

resetBtn.addEventListener("click", reset)

targetInp.addEventListener("change", reset)

function reset () {
    scoreOne.innerText = "0";
    scoreTwo.innerText = "0";
    scoreOne.classList.remove("fontGreen", "fontRed");
    scoreTwo.classList.remove("fontGreen", "fontRed");
    pOneBtn.disabled = false;
    pTwoBtn.disabled = false;
}