// Select elements
const counter = document.querySelectorAll('.countNumbers > h1');
const increment = document.querySelector('#increment');
const resetAll = document.querySelector('#resetAll');
const decrement = document.querySelector('#decrement');

// increment button event listener
increment.addEventListener('click', (e) => {
    e.preventDefault();
    counter.forEach((count) => {
        count.textContent = parseInt(count.textContent) + 1;
    });
});

// Decrement button event listener
decrement.addEventListener("click", (e) => {
    e.preventDefault();
    counter.forEach((count) => {
        let currentCount = parseInt(count.textContent);
        if (currentCount > 0) {
            count.textContent = currentCount - 1;
        }
    });
});

// resetCounter button event listener
resetAll.addEventListener('click', (e) => {
    e.preventDefault();
    counter.forEach((resetAll) => {
        resetAll.textContent = 0;
    })
})