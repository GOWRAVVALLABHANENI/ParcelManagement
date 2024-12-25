let generatedBookingIds = new Set();

// Function to generate a unique 9-digit random booking ID
function generateUniqueBookingId() {
    let bookingId;
    do {
        bookingId = Math.floor(Math.random() * 900000000) + 100000000;  // Generates a 9-digit number
    } while (generatedBookingIds.has(bookingId)); // Check if it's already generated

    generatedBookingIds.add(bookingId); // Store the booking ID to avoid repetition
    return bookingId;
}
const username = sessionStorage.getItem("username");

if (!username) {
    
    window.location.href = "index.html"; 
} else {
    // Display the username in the welcome message
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay) {
        usernameDisplay.textContent = ` ${username}`;
    }
}

function logout() {
    alert("Logging out...");
    // Redirect to login page or home
    window.location.href = "login.html"; // Placeholder, adjust accordingly
}

// Function to show card details form
function goToCardDetails() {
    document.querySelector(".payment-details").style.display = "none";
    document.getElementById("cardDetailsForm").style.display = "block";
}

// Function to redirect to home page
function backToHome() {
    window.location.href = "booking.html"; 
}

// Function to handle the payment process
function makePayment() {
    // Simulating payment success, in real scenarios, payment gateway integration is required
    let cardNo = document.getElementById("cardNo").value;
    let cardHolderName = document.getElementById("cardHolderName").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvv = document.getElementById("cvv").value;

    // Basic validation (just for illustration purposes)
    if (cardNo.length !== 16 || cardHolderName === "" || expiryDate === "" || cvv.length !== 3) {
        alert("Please provide valid card details.");
        return;
    }
    let bookingId = generateUniqueBookingId();
    // If payment is successful
    document.getElementById("paymentMessage").style.display = "block";
    document.getElementById("paymentMessage").innerHTML = `Payment Successful!<br>Booking ID: ${bookingId}`;
    sessionStorage.setItem("bookingId", bookingId);
    setTimeout(() => {
        window.location.href = "invoice.html"; // Redirect to invoice page
    }, 2000); // Redirect after 2 seconds
}
