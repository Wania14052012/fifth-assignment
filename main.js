function updateDate() {
    document.getElementById("current-date").textContent = new Date().toDateString();
}
updateDate();

function completeTask(button) {
    let taskDiv = button.parentElement;
    let taskName = taskDiv.querySelector("h3").innerText;
    let currentTime = new Date().toLocaleTimeString();  // Get the current time only

    alert(`Task "${taskName}" is completed!`);

    let logEntry = document.createElement("li");
    logEntry.innerText = `You have completed the task: "${taskName}" at ${currentTime}`;  // Show only the time
    document.getElementById("activity-log").appendChild(logEntry);

    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.innerText = "Completed";
}

document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function () {
        completeTask(this);
    });
});

document.getElementById("clear-log").addEventListener("click", function () {
    document.getElementById("activity-log").innerHTML = "";
});

let taskCount = 6, upCount = 23;
document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function () {
        if (taskCount > 0) {
            document.querySelector(".decrease").innerText = --taskCount;
            document.querySelector(".increase").innerText = ++upCount;
        }
    });
});

let colors = ["#FFDDC1", "#FFCBCB", "#D5AAFF", "#AFCBFF", "#C1E1C1", "#FFF1BA", "#FFD1DC", "#E1D4FF"];
document.querySelector(".theme-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
