function signup() {
  let username = document.getElementById("signupUsername").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let message = document.getElementById("signupMessage");

  if (username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields";
    return;
  }

  localStorage.setItem("savedUsername", username);
  localStorage.setItem("savedPassword", password);

  message.style.color = "green";
  message.textContent = "Account created successfully";

  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000);
}

function login() {
  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let message = document.getElementById("loginMessage");

  let savedUsername = localStorage.getItem("savedUsername");
  let savedPassword = localStorage.getItem("savedPassword");

  if (username === savedUsername && password === savedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", username);

    message.style.color = "green";
    message.textContent = "Login successful";

    setTimeout(function () {
      window.location.href = "home.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Wrong username or password";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

window.onload = function () {
  let welcomeText = document.getElementById("welcomeText");

  if (welcomeText) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let currentUser = localStorage.getItem("currentUser");

    if (isLoggedIn === "true" && currentUser) {
      welcomeText.textContent = "Welcome, " + currentUser;
    } else {
      window.location.href = "index.html";
    }
  }
};
