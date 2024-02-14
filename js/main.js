// Global Variables
var counter = 0;
var moves = 0;
var currDivId = 0;
var phrase = 0
var yes_button = document.getElementById("yes");
var no_button = document.getElementById("no");
var button_div_1 = document.getElementById("button-spot-1");
var button_div_2 = document.getElementById("button-spot-2");
var svg = '<svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>'

var phrases = [
    "Are you sure?",
    "Wait, really?",
    "You actually say 'Yes'?",
    "You don't gotta pity me",
    "Wait!",
    "I'm getting a lil stressed",
    "Gosh really?",
    "I'm blushing!",
    "But do you really wanna?",
    "Last chance!",
    "Last chance x2!"
];

no_button.addEventListener("click", function() {
    // Redirect to a different HTML page
    window.location.href = "../html/no.html";
});

function moveLocation() {
    var num = Math.floor(Math.random() * 8) + 1;
    while (num == currDivId) {
        num = Math.floor(Math.random() * 8) + 1;
    }
    currDivId = num;
    return num;
}

// Define the event handler
function moveButton() {
    var no_button = document.getElementById("no");

    // Move the button to the target div
    var targetDiv = document.getElementById("div-"+moveLocation());
    targetDiv.appendChild(yes_button);

    // Increment the counter
    moves++;
    yes_button.style.width = "" + (125 - 5  * moves) + "px";
    yes_button.style.height = "" + (100 - 5 * moves) + "px";

    // If the counter reaches 10, remove the event listener
    if (moves == 10) {
        yes_button.removeEventListener("mouseover", moveButton);
    }
}

// Define the event handler
document.getElementById("yes").addEventListener('click', (event) => {
    counter++;
    var oldPadding = yes_button.style.padding;

    switch(counter) {
        case 1:
            no_button.style.width = "" + (125 + 50 * counter) + "px";
            no_button.style.height = "" + (100 + 50 * counter) + "px";
            yes_button.innerText = phrases[phrase];
            phrase++;
            break;
        case 2:
            no_button.style.width = "" + (125 + 50 * counter) + "px";
            no_button.style.height = "" + (100 + 50 * counter) + "px";
            yes_button.innerText = phrases[phrase];
            phrase++;
            break;
        case 3:
            no_button.style.width = "" + (125 + 50 * counter) + "px";
            no_button.style.height = "" + (100 + 50 * counter) + "px";
            yes_button.innerText = phrases[phrase];
            phrase++;
            break;
        case 4:
            no_button.style.width = "" + (125 + 50 * counter) + "px";
            no_button.style.height = "" + (100 + 50 * counter) + "px";
            yes_button.innerText = phrases[phrase];
            phrase++;
            break;
        case 5:
            no_button.style.width = "" + (125 + 50 * counter) + "px";
            no_button.style.height = "" + (100 + 50 * counter) + "px";
            yes_button.innerText = phrases[phrase];
            phrase++;
            moveButton();
            yes_button.addEventListener("mouseover", moveButton);
            break;
        case 6:
            no_button.style.width = "125px";
            no_button.style.height = "100px";
            no_button.style.backgroundColor = "red";
            yes_button.style.width = "125px";
            yes_button.style.height = "100px";
            yes_button.innerHTML = svg+" Yes";
            yes_button.style.backgroundColor = "green";
            button_div_1.appendChild(yes_button);
            break;
        case 7:
            yes_button.style.backgroundColor = "green";
            no_button.style.backgroundColor = "green";
            button_div_1.appendChild(no_button);
            button_div_2.appendChild(yes_button);
            break;
        case 8:
            yes_button.style.backgroundColor = "green";
            no_button.style.backgroundColor = "red";
            button_div_1.appendChild(yes_button);
            button_div_2.appendChild(no_button);
            break;
        case 9:
            yes_button.style.backgroundColor = "red";
            no_button.style.backgroundColor = "red";
            button_div_1.appendChild(no_button);
            button_div_2.appendChild(yes_button);
            break;
        case 10:
            yes_button.style.backgroundColor = "green";
            no_button.style.backgroundColor = "red";
            button_div_1.appendChild(yes_button);
            button_div_2.appendChild(no_button);
            break;
        case 11:
            yes_button.style.backgroundColor = "red";
            no_button.style.backgroundColor = "green";
            button_div_1.appendChild(yes_button);
            button_div_2.appendChild(no_button);
            no_button.innerText = "No";
            yes_button.innerText = "Yes";
            break;
        case 12:
            yes_button.style.backgroundColor = "green";
            no_button.style.backgroundColor = "green";
            button_div_1.appendChild(no_button);
            button_div_2.appendChild(yes_button);
            no_button.innerHTML = svg+" No";
            yes_button.innerText = "Yes";
            break;
        case 13:
            yes_button.style.backgroundColor = "green";
            no_button.style.backgroundColor = "red";
            button_div_1.appendChild(yes_button);
            button_div_2.appendChild(no_button);
            yes_button.innerHTML = svg+" Yes";
            no_button.innerText = "No";
            break;
        case 14:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 15:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 16:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 17:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 18:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 19:
            yes_button.innerText = phrases[phrase];
            phrase++;
            var targetDiv = document.getElementById("div-"+moveLocation());
            targetDiv.appendChild(yes_button);
            break;
        case 20:
            yes_button.innerText = "";
            button_div_1.appendChild(yes_button);
            no_button.innerText = "No";
            no_button.style.width = "85vw";
            no_button.style.height = "85vh";
            yes_button.style.width = "10px";
            yes_button.style.height = "10px";
            yes_button.style.padding = "0px";
            break;
        case 21:
            no_button.innerText = "No";
            no_button.style.width = "125px";
            no_button.style.height = "100px";
            yes_button.innerText = "Yes";
            yes_button.style.width = "125px";
            yes_button.style.height = "100px";
            yes_button.style.padding = oldPadding;
            yes_button.style.display = "none";
            // Set a timer to run after 5 seconds
            setTimeout(function() {
                // Show the button
                yes_button.addEventListener("click", function() {
                    // Redirect to a different HTML page
                    window.location.href = "../html/yes.html";
                });
                yes_button.style.display = "block";
            }, 10000);
            break;
        default:
            // Pass
    }
})
