function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Here you can add logic to check the username and password if needed
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the credentials are correct (simple example)
    if (username === "username" && password === "asdfqwerlk") {
      // Redirect to the home page if credentials are correct
      console.log("Login successful!");
      sessionStorage.setItem("username", username);
      window.location.href = "Homepage.html";
    } else {
      alert("Invalid username or password");
    }
  }
