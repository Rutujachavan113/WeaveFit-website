const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const forgotForm = document.getElementById("forgotForm");

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  forgotForm.classList.remove("active");
}

function showRegister() {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  forgotForm.classList.remove("active");
}

function showForgot() {
  forgotForm.classList.add("active");
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
}

/* LOGIN VALIDATION */
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const pass = loginPassword.value.trim();
  const error = document.getElementById("loginError");

  if (email === "" || pass === "") {
    error.textContent = "All fields are required";
    return;
  }

  if (pass.length < 6) {
    error.textContent = "Password must be at least 6 characters";
    return;
  }

  // SUCCESS → REDIRECT
  window.location.href = "homepage.html";
});

/* REGISTER VALIDATION + PASSWORD STRENGTH */
regPassword.addEventListener("input", function () {
  const text = document.getElementById("strengthText");
  const value = regPassword.value;

  if (value.length < 6) {
    text.textContent = "Weak password";
    text.style.color = "red";
  } else if (value.match(/[A-Z]/) && value.match(/[0-9]/)) {
    text.textContent = "Strong password";
    text.style.color = "green";
  } else {
    text.textContent = "Medium password";
    text.style.color = "orange";
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (regName.value === "" || regEmail.value === "" || regPassword.value === "") {
    document.getElementById("registerError").textContent = "All fields are required";
    return;
  }

  alert("Registered successfully! Please login.");
  showLogin();
});

/* FORGOT PASSWORD */
forgotForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (forgotEmail.value === "") {
    document.getElementById("forgotError").textContent = "Email required";
    return;
  }

  alert("Password reset link sent!");
  showLogin();
});

/* DEFAULT */
showLogin();
