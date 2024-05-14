let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el")
let count = 0;
let savedCounts = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    savedCounts.push(count); // Store the current count in the array
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    calculateTotal();
}

function sumIncrementalInputs(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        const input = parseFloat(inputs[i]);
        if (!isNaN(input)) {
            sum += input;
        }
    }
    return sum;
}

function calculateTotal() {
    const totalSum = sumIncrementalInputs(savedCounts);
    totalEl.textContent = "Total carb count: " + totalSum; // Display total sum
    
    // Display total sum wherever you want, e.g., on the page
}

calculateTotal();

// Example usage:
// Call calculateTotal() whenever you want to calculate and display the total sum

