let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");
let toggleBtn = document.querySelector(".toggle");

// -------- Toggle Between Login & Signup Forms --------
toggleBtn.addEventListener("click", function () {
  if (loginForm.style.display === "none") {
    // Show login
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    toggleBtn.innerText = "Don’t have an account? Signup";
  } else {
    // Show signup
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    toggleBtn.innerText = "Already have an account? Login";
  }
});

// -------- Handle Login Submit --------
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear fields
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";

  alert("You successfully submitted the form!");
});

// -------- Handle Signup Submit --------
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear fields
  document.getElementById("signupUser").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPass").value = "";

  alert("You successfully submitted the form!");
});
