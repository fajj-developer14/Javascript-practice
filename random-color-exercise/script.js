
const h1 = document.querySelector("h1")
const colorBtn = document.querySelector("#colorBtn");

colorBtn.addEventListener("click", () => {
    const [newColor, colorSum] = makeRandColor();

    document.body.style.backgroundColor = newColor;  
    colorBtn.style.backgroundColor = newColor;
    h1.innerText = newColor.toUpperCase();

    if(colorSum < 300) {
        h1.classList.add("whiteFont")
        colorBtn.classList.add("whiteFont", "borderWhite")
    }
    else {
        h1.classList.remove("whiteFont")
        colorBtn.classList.remove("whiteFont", "borderWhite")
    }

})

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const sum = r + g + b;

    return [`rgb(${r}, ${g}, ${b})`, sum] ;
}
