// 1. Створити сайт використовуючи swapi.dev.вибрати 1 з 6 проперті
//   (films, characters etc..)і зробити запит по них, вибрати одну з
// перших проперті що отримаєте і витягнувши з неї "url" - отримати
// конкретну(планету, фільм, персонажа) з всією інформацією про нього.
// Додати кнопку при натисканні на яку вивести всю наявну інформацію
// на екран красиво структуровано.

let node = null;
let mainUrl = "https://swapi.dev/api/films/";
let filmPlanet = null;
let input = (window.onload = function () {
  node = fetch(mainUrl)
    .then((response) => response.json())
    .then((result) => (node = result));
});

function test() {
  console.log(node);
  let result = node.results;
  for (let i = 0; i < result.length; i++) {
    if (result[0].planets) {
      if (result[0].planets[0]) {
        fetch(result[0].planets[0])
          .then((response) => response.json())
          .then((resultData) => (filmPlanet = resultData));
      }
      console.log(filmPlanet);
    }
  }
}

function showFilm() {
  console.log(filmPlanet);
  let ul = document.getElementById("main");
  for (key in filmPlanet) {
    let li = document.createElement("li");
    let planetField = document.createElement("p");
    planetField.innerHTML = key + ": " + filmPlanet[key];
    ul.appendChild(li);
    li.appendChild(planetField);
  }
}
// Ще доробляю друге завдання!
// 2. Використовуючи параметр серч, розробити
// сайт який буде з допомогою інпута робити пошук за конкретним
// параметром і виводити дані на сторінку. (якщо 1 знахідка - вивести
//   всю інфу про айтем, якщо більше 1 то вивести список по філду).
// let node = null;
// // let twoMainUrl =
// window.onload = function enteredByUser () {
// }
