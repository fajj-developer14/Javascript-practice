// https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/"

for(let i = 1; i <= 151; i++) {
    const pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    container.appendChild(pokemon)

    const newImg = document.createElement("img")
    newImg.src = `${baseURL}${i}.png`
    pokemon.append(newImg)

    const label = document.createElement("span")
    label.classList.add("label")
    label.innerText = `# ${i}`
    pokemon.append(label)
}