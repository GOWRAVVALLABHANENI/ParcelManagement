 // Check if user is logged in, by checking sessionStorage
 const username = sessionStorage.getItem("username");
if (!username) {
     // If not logged in, redirect to the login page
     window.location.href = "index.html"; 
 } else {
    
     const usernameDisplay = document.getElementById("usernameDisplay");
     if (usernameDisplay) {
         usernameDisplay.textContent = ` ${username}`;
     }
 }

 // Home link - Redirect to the same page (reload)
 document.getElementById("homeLink").addEventListener("click", function() {
     window.location.reload();
 });

 // Booking Service link - Navigate to booking page (for demo, just a placeholder)
 document.getElementById("bookingLink").addEventListener("click", function() {
     window.location.href = "booking.html"; // Redirect to Booking Service page
 });

 // Tracking link - Navigate to tracking page
 document.getElementById("trackingLink").addEventListener("click", function() {
     window.location.href = "tracking.html"; // Redirect to Tracking page
 });

 // Previous Booking link - Navigate to Previous Booking page
 document.getElementById("previousBookingLink").addEventListener("click", function() {
     window.location.href = "previousBooking.html"; // Redirect to Previous Booking page
 });

 // Contact Support link - Navigate to support page
 document.getElementById("contactLink").addEventListener("click", function() {
     window.location.href = "support.html"; // Redirect to Support page
 });

 // Logout button - Clear session data and redirect to login page
 document.getElementById("logoutButton").addEventListener("click", function() {
     sessionStorage.removeItem("username"); // Clear session data
     window.location.href = "index.html"; // Redirect to login page
 });
