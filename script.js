let heroes = [
  ["Axe", "Tank"],
  ["Crystal Maiden", "Support"],
];
let heroesContainer = document.getElementById("heroesContainer");
let nameInput;
let classInput;

function displayHeroes() {
  heroesContainer.innerHTML = "";

  for (const [name, heroClass] of heroes) {
    let heroCard = document.createElement("div");
    heroCard.className = "heroCard";
    heroCard.innerHTML = `<h3 class="cardTitle">${name}</h3><p class="cardText">${heroClass}</p>`;
    heroesContainer.append(heroCard);
  }
}

function addHero() {
  nameInput = document.getElementById("heroName");
  classInput = document.getElementById("heroClass");

  const newHeroName = nameInput.value;
  const newHeroClass = classInput.value;

  if (newHeroName && newHeroClass) {
    heroes.push([newHeroName, newHeroClass]);
    displayHeroes();
    nameInput.value = "";
    classInput.value = "";
  } else {
    alert("Все поля обязательны для заполнения!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayHeroes();
  document.getElementById("addButton").onclick = addHero;
});
