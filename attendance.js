document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    // Prevent the form from submitting in the traditional way
    const fullName = document.getElementById('fullName').value; 
    // Get the value from the input field
    if (fullName) {  // Check if the input is not empty
        const listItem = document.createElement('li'); 
         // Create a new list item element
        listItem.textContent = fullName;  
        // Set the text of the list item to the full name
        document.getElementById('attendeesList').appendChild(listItem);  
        // Add the list item to the unordered list
        document.getElementById('fullName').value = ''; 
         // Clear the input field after adding
    }
});