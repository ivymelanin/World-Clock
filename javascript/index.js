function updateTime() {

    //los angeles
    let losAngeles = document.querySelector("#losAngeles");
    if (losAngeles) {
        let losAngelesDate = losAngeles.querySelector("#date");
        let losAngelesTime = losAngeles.querySelector("#time");
        let currentTime = moment().tz("America/Los_Angeles");

        losAngelesDate.innerHTML = currentTime.format("MMMM Do YYYY");
        losAngelesTime.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
    }
    // sydeny
    let sydney = document.querySelector("#sydney");
    if (sydney) {
        let sydneyDate = sydney.querySelector("#date");
        let sydneyTime = sydney.querySelector("#time");
        let currentTim = moment().tz("Australia/Sydney");

        sydneyDate.innerHTML = currentTim.format("MMMM Do YYYY");
        sydneyTime.innerHTML = currentTim.format("h:mm:ss [<small>]A[</small>]");
    }
    //new york
    let newYork = document.querySelector("#newYork");
    if (newYork) {
        let newYorkDate = newYork.querySelector("#date");
        let newYorkTime = newYork.querySelector("#time");
        let currentTi = moment().tz("America/New_York");

        newYorkDate.innerHTML = currentTi.format("MMMM Do YYYY");
        newYorkTime.innerHTML = currentTi.format("h:mm:ss [<small>]A[</small>]");
    }
}
 
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#cities");
    cityElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityTimeZone}</h2>
        <div class="date" id="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time" id="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>
    `;

}

updateTime();
setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#names");
citiesElement.addEventListener("change", updateCity);