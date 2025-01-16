document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Interactive Button Animations
  const buttons = document.querySelectorAll("button a");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
      button.style.transition = "transform 0.3s ease";
    });

    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  });

  // Contact Form Submission Handling
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Extract input values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate inputs
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Display a thank-you message
      alert("Thank you, ${name}! I'll respond to your message soon.");

      // Reset the form
      contactForm.reset();
    });
  }

  // Project Cards Hover Effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-10px)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Dynamic Background Color Change on Scroll
  const sections = document.querySelectorAll("section");
  const colors = [
    "#6a11cb",
    "#ff7e5f",
    "#43cea2",
    "#11998e",
  ];

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop - 50) {
        document.body.style.background = colors[index] || "#ffffff";
        document.body.style.transition = "background 0.5s ease";
      }
    });
  });
});