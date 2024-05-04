//your code here!

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');

    // Function to add items to the list
    function addItems(numItems) {
        for (let i = 0; i < numItems; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Initially load 10 items
    addItems(10);

    // Function to check if the user has scrolled to the bottom of the list
    function checkScroll() {
        // Detect if the user has scrolled to the bottom of the list
        if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) { // Using a small threshold to trigger before exactly reaching the bottom
            addItems(2); // Add 2 more items if at the bottom
        }
    }

    // Add scroll event listener to the list
    list.addEventListener('scroll', checkScroll);
});
