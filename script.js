// Password strength checker
document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.getElementById("password-strength");
    const message = document.getElementById("password-message");
    const strengthMeter = document.getElementById("strength-bar");
  
    // Check the strength
    const strength = checkPasswordStrength(password);
  
    // Update the UI based on strength
    strengthIndicator.textContent = strength.message;
    strengthIndicator.className = strength.class;
    message.textContent = strength.detail;
  
    // Update the progress bar
    strengthMeter.style.width = strength.width + "%";
    strengthMeter.style.backgroundColor = strength.color;
  });
  
  function checkPasswordStrength(password) {
    let strength = {
      message: "Enter a password",
      class: "",
      detail: "The password must contain at least 6 characters",
      width: 0,
      color: "red",
    };
  
    if (password.length > 5) {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      // Determine password strength based on criteria
      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength.message = "Strong";
        strength.class = "strong";
        strength.detail = "Your password is strong!";
        strength.width = 100;
        strength.color = "green";
      } else if (hasUpperCase && hasLowerCase && (hasNumbers || hasSpecialChars)) {
        strength.message = "Medium";
        strength.class = "medium";
        strength.detail = "Your password is medium strength.";
        strength.width = 60;
        strength.color = "orange";
      } else {
        strength.message = "Weak";
        strength.class = "weak";
        strength.detail =
          "Your password is too weak. Try adding numbers, special characters, and mix of cases.";
        strength.width = 30;
        strength.color = "red";
      }
    } else {
      strength.message = "Too short";
      strength.class = "weak";
      strength.detail = "Password should be at least 6 characters.";
      strength.width = 10;
      strength.color = "red";
    }
  
    return strength;
  }
  
  // Mouse parallax effect
  document.addEventListener("mousemove", function (e) {
    const parallaxElements = document.querySelectorAll(".parallax");
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    // Adjust for the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || 0.05;
  
      const xOffset = (mouseX - centerX) * speed;
      const yOffset = (mouseY - centerY) * speed;
  
      element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
  