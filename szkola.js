let pudelko = prompt("lubish info? Tak/Nie");

if (pudelko === "tak") {
   alert("Super! Cieszę się, że lubisz info!");
} else {
   alert("Zrozumiałem, że nie lubisz info.");
}

let wiek = prompt("ile masz lat?");


if (wiek < 18) {
   alert("ale jesteś młody!");
} 
    else if (wiek >= 18) 
   alert("ale jesteś dorosły!");

    let javascript = prompt("javascript jest Łatwy?");


if (javascript  === "tak") {
   alert("super, a mi nie bardzo wychodzi");
} else if (javascript  === "nie") {
   alert("Zrozumiałem, że javascript nie jest Łatwy.");
}
else {
   alert("????");
}


let count = 0;

const countDisplay = document.getElementById("count");
const clickButton = document.getElementById("click-button");

clickButton.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = count;
});

const countDisplay2 = document.getElementById("count");
// ...

const clickButton2 = document.getElementById("click-button2");
clickButton2.addEventListener("click", () => {
    count *= 2;
    countDisplay2.textContent = count;
});

const clickButton3 = document.getElementById("click-button3");
clickButton3.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});

const clickButton4 = document.getElementById("click-button4");
clickButton4.addEventListener("click", () => {
    alert("Koniec gry!");
});