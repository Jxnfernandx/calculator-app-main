const input = document.getElementById("input-text");

window.addEventListener("keydown", logKey);

const buttons = document.querySelectorAll(".keys, .function");
const keys = document.getElementById("input-container");

let displayedValue = 0;

function operate() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonValue = button.value;

            if (buttonValue === "reset") {
                displayedValue = "0";
            } else if (buttonValue === "del") {
                // Implement logic to delete characters if needed
            } else if (buttonValue === "=") {
                // Implement calculation logic if needed
                calculate();
            } else {
                if (displayedValue === "0") {
                    displayedValue = buttonValue;
                } else {
                    displayedValue += buttonValue;
                }
            }

            document.getElementById("input-text").textContent = displayedValue;
        });
    });

}
operate();
function logKey(e) {
    input.textContent += `${e.key}`;
  }