function updateTime() {

    //los angeles
    let losAngeles = document.querySelector("#losAngeles");
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let currentTime = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = currentTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = currentTime.form("h:mm:ss [<small>]A[</small>]");

    // sydeny
    let sydney = document.querySelector("#sydney");
    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");
    let currentTim = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = currentTim.format("MMMM Do YYYY");
    sydneyTime.innerHTML = currentTim.form("h:mm:ss [<small>]A[</small>]");

    //new york
    let newYork = document.querySelector("#newYork");
    let newYorkDate = newYork.querySelector(".date");
    let newYorkTime = newYork.querySelector(".time");
    let currentTi = moment().tz("America/New_York");

    newYorkDate.innerHTML = currentTi.format("MMMM Do YYYY");
    newYorkTime.innerHTML = currentTi.form("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);