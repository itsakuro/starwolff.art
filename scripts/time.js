const time = document.getElementById("time");
const timeWrapper = document.getElementById("time-wrapper");

let displayTime = true;

function getCurrentTimeCST() {
    const currentTimeCST = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    const now = new Date(currentTimeCST);
    
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';
    
    const timeCST = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return timeCST;
}

setInterval(() => {
    if (displayTime) {
        time.innerHTML = getCurrentTimeCST();
    }
}, 1);

timeWrapper.addEventListener("mouseover", () => {
    displayTime = false;
    time.innerHTML = "Central Time";
});

timeWrapper.addEventListener("mouseout", () => {
    displayTime = true;
});