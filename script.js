const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const usernameError = document.querySelector("#username-error");
const passwordError = document.querySelector("#password-error");
const formMessage = document.querySelector("#form-message");

const demoUsername = "admin";
const demoPassword = "Admin@123";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const usernameIsEmpty = username.length === 0;
  const passwordIsEmpty = password.length === 0;

  usernameError.textContent = usernameIsEmpty ? "Username is required." : "";
  passwordError.textContent = passwordIsEmpty ? "Password is required." : "";
  usernameInput.setAttribute("aria-invalid", String(usernameIsEmpty));
  passwordInput.setAttribute("aria-invalid", String(passwordIsEmpty));
  formMessage.textContent = "";
  formMessage.className = "form-message";

  if (usernameIsEmpty || passwordIsEmpty) {
    return;
  }

  if (username === demoUsername && password === demoPassword) {
    formMessage.textContent = "Login Successful";
    formMessage.classList.add("success");
  } else {
    formMessage.textContent = "Invalid username or password";
    formMessage.classList.add("failure");
  }
});
