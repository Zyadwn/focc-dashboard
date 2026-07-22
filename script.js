function updateClock() {

const now = new Date();

document.getElementById("localTime").innerHTML =
now.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});

document.getElementById("zuluTime").innerHTML =
now.toLocaleTimeString("en-GB", {
timeZone: "UTC",
hour: "2-digit",
minute: "2-digit"
});

document.getElementById("gregorianDate").innerHTML =
now.toLocaleDateString("en-GB", {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric"
});

document.getElementById("hijriDate").innerHTML =
new Intl.DateTimeFormat(
'en-TN-u-ca-islamic',
{
day:'numeric',
month:'long',
year:'numeric'
}
).format(now);

}

updateClock();

setInterval(updateClock,1000);