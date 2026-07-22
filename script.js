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
document.getElementById("weather").textContent = "Jeddah 37°C";
document.getElementById("runway").textContent = "34L / 16R";
document.getElementById("airportInfo").textContent =
"Terminal 1 • North Terminal • Hajj Terminal";
document.getElementById("notice").textContent =
"Welcome to FOCC";