const loginContainer = document.getElementById("loginContainer");
const formContent = document.getElementById("formContent");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const formError = document.getElementById("formError");
const resetButton = document.getElementById("resetButton");

formContent.addEventListener("submit", event => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) {
    formError.textContent = "Please enter both username and password.";
    return;
  }

  // Front-end demo only: any non-empty credentials show the success state.
  // Connect a real authentication API before using this in production.
  formError.textContent = "";
  loginContainer.classList.add("is-success");
});

resetButton.addEventListener("click", () => {
  loginContainer.classList.remove("is-success");
  formContent.reset();
  formError.textContent = "";
  usernameInput.focus();
});

[usernameInput, passwordInput].forEach(input => {
  input.addEventListener("input", () => {
    if (formError.textContent) formError.textContent = "";
  });
});
