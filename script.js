// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I really appreciate your feedback.");
    document.getElementById("contactForm").reset();
});