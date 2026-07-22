function updateClock() {

const now = new Date();

// Local Time
document.getElementById("localTime").textContent =
now.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});

// Zulu Time
document.getElementById("zuluTime").textContent =
now.toLocaleTimeString("en-GB", {
timeZone: "UTC",
hour: "2-digit",
minute: "2-digit"
});

// Gregorian Date
document.getElementById("gregorianDate").textContent =
now.toLocaleDateString("en-GB", {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric"
});

}

updateClock();
setInterval(updateClock,1000);

// Temporary Information
// Weather (temporary)
document.getElementById("weather").textContent = "Jeddah 37°C";

// Runway
fetch("runway.txt")
.then(response => response.text())
.then(text => {
document.getElementById("runway").textContent = text;
});

// Operational Information
fetch("operational-information.txt")
.then(response => response.text())
.then(text => {
document.getElementById("airportInfo").textContent = text;
});

// Notice Board
fetch("notice.txt")
.then(response => response.text())
.then(text => {
document.getElementById("notice").textContent = text;
});