// Select elements
const counter = document.querySelectorAll('.countNumbers > h1'); // Selects all counter display elements
const increment = document.querySelector('#increment'); // Increment button
const resetAll = document.querySelector('#resetAll');   // Reset button
const decrement = document.querySelector('#decrement'); // Decrement button

// Increment button event listener
increment.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents default form behavior, if any
    counter.forEach((count) => {
        // Converts current count text to integer, increments it by 1, and updates the display
        count.textContent = parseInt(count.textContent) + 1;
    });
});

// Decrement button event listener
decrement.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default form behavior, if any
    counter.forEach((count) => {
        let currentCount = parseInt(count.textContent); // Gets current count value
        if (currentCount > 0) { // Ensures count does not go below 0
            count.textContent = currentCount - 1; // Decreases count by 1
        }
    });
});

// Reset button event listener
resetAll.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents default form behavior, if any
    counter.forEach((resetAll) => {
        resetAll.textContent = 0; // Resets count display to 0
    });
});

console.log(2+2)