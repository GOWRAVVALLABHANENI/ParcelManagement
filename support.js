const username = sessionStorage.getItem("username");
if (username) {
    document.getElementById("usernameDisplay").textContent = username;
} else {
    window.location.href = "index.html"; // Redirect to login if no username found
}

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function() {
    sessionStorage.removeItem("username"); // Clear session data
    window.location.href = "index.html"; // Redirect to login page
});
