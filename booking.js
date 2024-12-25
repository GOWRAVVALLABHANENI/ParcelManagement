// Pre-populate sender details from sessionStorage (assuming sessionStorage has this info)
window.onload = function() {
    const senderName = sessionStorage.getItem("username"); // Assuming username is stored in sessionStorage
    const senderAddress = "123 Sender St, City, Country"; // Hardcoded for this example
    const senderContact = "1234567890"; // Hardcoded for this example

    document.getElementById("senderName").value = senderName;
    document.getElementById("senderAddress").value = senderAddress;
    document.getElementById("senderContact").value = senderContact;
};

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Validation logic
    const form = document.getElementById('bookingForm');
    let valid = true;

    // Example validation for Receiver's Name
    const receiverName = document.getElementById("receiverName").value;
    if (!receiverName) {
        valid = false;
        document.getElementById("receiverNameError").textContent = "Receiver's Name is required.";
    }
    const receiverAddress = document.getElementById("receiverAddress").value;
    if (!receiverAddress) {
        valid = false;
        document.getElementById("receiverAddressError").textContent = "Receiver's Address is required.";
    }
    const receiverPin = document.getElementById("receiverPin").value;
    if (!receiverPin) {
        valid = false;
        document.getElementById("receiverPinError").textContent = "Receiver's Pin Code is required.";
    }
    const receiverContact = document.getElementById("receiverContact").value;
    if (!receiverContact) {
        valid = false;
        document.getElementById("receiverContactError").textContent = "Receiver's contact is required.";
    }
    const parcelWeight = document.getElementById("parcelWeight").value;
    if (!parcelWeight) {
        valid = false;
        document.getElementById("parcelWeightError").textContent = "parcel weight is required.";
    }

    // Add similar validation for other fields here...

    // If all fields are valid, submit the form or show success message
    if (valid) {

        alert("Booking submitted successfully!");
        window.location.href = "paymentpage.html"; 
        // Here you can also send the data to the server or perform further actions
    }
}
