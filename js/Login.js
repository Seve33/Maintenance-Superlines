// login.js

// Temporary user database
const mockUsers = [
  // Admin users
  { username: "admin1", password: " ", position: "admin" },
  { username: "admin2", password: " ", position: "admin" },

  // Manager users
  { username: "manager1", password: " ", position: "manager" },
  { username: "manager2", password: " ", position: "manager" },

  // Bus Driver users
  { username: "driver1", password: " ", position: "busdriver" },
  { username: "driver2", password: " ", position: "busdriver" },

  // Maintenance users
  { username: "maint1", password: " ", position: "maintenance" },
  { username: "maint2", password: " ", position: "maintenance" },
];

document.addEventListener("DOMContentLoaded", function () {
  // UI Elements
  const loginBtn = document.getElementById("login");
  const registerBtn = document.getElementById("register");
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");

  // Form switching animation
  loginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.remove("active");
    loginBtn.style.background = "rgba(23, 43, 224, 0.801)";
    registerBtn.style.background = "rgb(243, 243, 243)";
  });

  registerBtn.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    registerForm.classList.add("active");
    registerBtn.style.background = "rgba(23, 43, 224, 0.801)";
    loginBtn.style.background = "rgb(243, 243, 243)";
  });

  // Login handling
  function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errorDiv = document.getElementById("loginError");

    // Find user in mock database
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Store user info in sessionStorage
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          position: user.position,
        })
      );

      // Redirect based on position
      switch (user.position) {
        case "admin":
          window.location.href = "Admin.html";
          break;
        case "manager":
          window.location.href = "Manager.html";
          break;
        case "busdriver":
          window.location.href = "BusDriver.html";
          break;
        case "maintenance":
          window.location.href = "Maintenance.html";
          break;
        default:
          errorDiv.textContent = "Invalid user position";
      }
    } else {
      errorDiv.textContent = "Invalid username or password";
    }
  }

  // Registration handling
  function handleRegister(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const errorDiv = document.getElementById("registerError");

    // Validate password length
    if (formData.get("password").length < 6) {
      errorDiv.textContent = "Password must be at least 6 characters long";
      return;
    }

    // Check if username already exists
    if (mockUsers.find((u) => u.username === formData.get("username"))) {
      errorDiv.textContent = "Username already exists";
      return;
    }

    // Create new user object
    const newUser = {
      username: formData.get("username"),
      password: formData.get("password"),
      position: formData.get("position"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      middleName: formData.get("middleName"),
      address: formData.get("address"),
      birthday: formData.get("birthday"),
      email: formData.get("email"),
      contact: formData.get("contact"),
    };

    // Add new user to the mock database
    mockUsers.push(newUser);

    // Show success message and reset form
    alert("Registration successful! Please login with your credentials.");
    form.reset();
    loginBtn.click(); // Switch back to the login form
  }

  // Add form submit event listeners
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document
    .getElementById("registerForm")
    .addEventListener("submit", handleRegister);
});
