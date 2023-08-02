let name = document.querySelector("#myName");
let inputName = prompt("Adınız Nedir");

name.innerHTML = inputName;

function clock() {
    let saatDOM = document.querySelector("#myClock");
    let date = new  Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[date.getDay()];

    saatDOM.innerHTML = `${hours}:${minutes}:${seconds},${day}`;

    setTimeout(saatGuncelle, 1000);
}

clock();