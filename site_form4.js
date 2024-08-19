document.getElementById('siteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);
    const dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });

    // Convert form data to JSON
    const jsonData = JSON.stringify(dataObject, null, 2);

    // Create a Blob from the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form_data.json';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);

    // Show a success message
    alert('Form submitted successfully! The form data has been saved as form_data.json.');
});
