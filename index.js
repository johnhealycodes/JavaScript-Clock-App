function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h >= 9) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s} ${session}`;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").innerContext = time;

    setTimeout(showTime, 1000);
}

showTime()

function showDay() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let todaysDate = `${month} ${day}th, ${year}`;

    document.getElementById("MyDateDisplay").innerText = todaysDate
    document.getElementById("MyDateDisplay").innerContext = todaysDate
}

showDay()