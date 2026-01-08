const form = document.getElementById("contactForm");
const error = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    error.textContent = "All fields are required";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Enter a valid email";
    return;
  }

  if (phone.length < 10) {
    error.textContent = "Enter a valid phone number";
    return;
  }

  alert("Message sent successfully! We will contact you soon.");
  form.reset();
  error.textContent = "";
});
