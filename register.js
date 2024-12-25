document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('password').value;
    let errorMessages = [];

    // Validate Name (should not be empty)
    if (customerName.trim() === "") {
        errorMessages.push("Name is required.");
    }

    // Validate Email (basic email format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate Mobile (should be numeric and at least 10 digits)
    if (!/^\d{10}$/.test(mobile)) {
        errorMessages.push("Please enter a valid 10-digit mobile number.");
    }

    // Validate Password (should be at least 6 characters)
    if (password.length < 6 || password.length<30) {
        errorMessages.push("Password must be at least 6 characters long.");
    }
    if(password !== confirmpassword){
        errorMessages.push("Please enter correct password");
    }
    // Display errors or submit form
    const errorDiv = document.getElementById('errorMessages');
    if (errorMessages.length > 0) {
        errorDiv.innerHTML = errorMessages.join('<br/>');
    } else {
        // If no errors, submit the form
        const formData = {
            customerName,
            email,
            mobile,
            address,
            userId,
            password
        };

        fetch('/index.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful!');
                window.location.href = '/index.html';  // Redirect to login page
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }
});
