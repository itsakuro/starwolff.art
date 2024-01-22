// CURRENT HIRE STATUS
let currentHireStatus = true; // TRUE -> available for work | FALSE -> not available

const hireStatus = document.getElementById("hire-status-text");
const hireStatusWrapper = document.getElementById("hire-status");
const hireStatusIcon = document.getElementById("hire-status-icon");

let displayHireStatus = true;

function getHireStatus() {
    if (currentHireStatus) {
        hireStatusIcon.style.fill = "#17D0AF";
        hireStatus.innerHTML = "Available for work";
        if (!hireStatusWrapper.classList.contains("status-free")) {
            hireStatusWrapper.classList.add("status-free")
        }
    } else {
        hireStatusIcon.style.fill = "#FF2048";
        hireStatus.innerHTML = "Currently at capacity";
        if (!hireStatusWrapper.classList.contains("status-busy")) {
            hireStatusWrapper.classList.add("status-busy")
        }
    }
}

getHireStatus();

hireStatusWrapper.addEventListener("mouseover", () => {
    if (currentHireStatus) {
        displayHireStatus = false;
        hireStatus.innerHTML = "Click here for details";
    }
});

hireStatusWrapper.addEventListener("mouseout", () => {
    displayHireStatus = true;
    getHireStatus();
});