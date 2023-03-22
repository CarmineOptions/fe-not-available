(() => {
    const timestamp = 1679615999000;
    const now = new Date().getTime();

    if (now > timestamp) {
        // if we're past the up time, do not show the up time
        return;
    }

    const timeElem = document.getElementById("time");
    const date = new Intl.DateTimeFormat("default", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZoneName: "short",
      }).format(timestamp);
    const msg = `The app will be back up on\n${date}`;
    timeElem.innerText = msg;
    timeElem.style.display = "";
})()
