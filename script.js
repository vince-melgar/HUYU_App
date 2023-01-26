//sign In
const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");
const aSignIn = document.querySelector(".a_signIn");
// register
const modal_r = document.querySelector(".modal_register");
const closeBtn_r = document.querySelector(".close_register");
const aRegister = document.querySelector(".a_register");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

aRegister.addEventListener("click", openModalR);
closeBtn_r.addEventListener("click", closeModalR);
window.addEventListener("click", outsideClickR);

aSignIn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
  modal_r.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

function openModalR() {
  modal_r.style.display = "block";
  modal.style.display = "none";
}

function closeModalR() {
  modal_r.style.display = "none";
}

function outsideClickR(e) {
  if (e.target == modal_r) {
    closeModalR();
  }
}

const eyeSign = document.querySelector("#eye_sign");
const eyePass = document.querySelector("#eye_pass");
const eyeCpass = document.querySelector("#eye_cpass");

//register
const register = document.querySelector("#register");
const passwordReg = document.querySelector("#passwordReg");
const passwordRegError = document.querySelector("#passwordRegError");
const emailReg = document.querySelector("#emailReg");
const emailRegError = document.querySelector("#emailRegError");
const confirmRegPassword = document.querySelector("#confirmRegPassword");
const confirmPasswordRegError = document.querySelector(
  "#confirmPasswordRegError"
);
const regBtn = document.querySelector("#reg");

//sign in
const emailSignIn = document.querySelector("#emailSignIn");
const emailSignInError = document.querySelector("#emailSignInError");
const passwordSignIn = document.querySelector("#passwordSignIn");
const passwordSignInError = document.querySelector("#passwordSignInError");
const signInLink = document.querySelector("#signInLink");

const validateEmail = () => {
  let errorCount = 0;
  const emailValue = emailSignIn.value.trim();
  const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  emailSignInError.innerText = "";

  if (!emailValue) {
    emailSignInError.innerText = "Email is required";
    errorCount++;
  } else if (!emailValidator.test(emailValue)) {
    emailSignInError.innerText = "Please enter a valid email";
    errorCount++;
  }

  return errorCount === 0;
};

const validateEmailReg = () => {
  let errorCount = 0;
  const value = emailReg.value.trim();
  const validator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!value) {
    emailRegError.innerText = "Email is required";
    errorCount++;
  }

  if (!validator.test(value)) {
    emailRegError.innerText = "Please enter a valid email";
    errorCount++;
  }
  return errorCount === 0;
};

const validatePassword = (type) => {
  let value = "";
  let errorCount = 0;
  let error = null;
  if (type === "signIn") {
    value = passwordSignIn.value.trim();
    error = passwordSignInError;
  } else {
    value = passwordReg.value.trim();
    error = passwordRegError;
  }
  const passwordValidator = /^[a-zA-Z]\w{3,14}$/;
  error.innerText = "";
  if (!value) {
    error.innerText = "Password is required";
    errorCount++;
  }

  if (!passwordValidator.test(value)) {
    error.innerText =
      "Password must contain at least 5 characters, a digit, a symbol, and an uppercase letter";
    errorCount++;
  }

  return errorCount === 0;
};

const validateConfirmPassword = () => {
  let errorCount = 0;
  const value = passwordReg.value.trim();
  const confirmPassword = confirmRegPassword.value.trim();
  confirmPasswordRegError.innerText = "";

  if (value !== confirmPassword) {
    confirmPasswordRegError.innerText = "Password does not match";
    errorCount++;
  }

  return errorCount === 0;
};

register.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = validateEmailReg();
  const password = validatePassword();
  const confirm_password = validateConfirmPassword();

  if (email && password && confirm_password) {
    alert("Successfully registered! You can now sign in.");

    // open sign in modal
    signInLink.click();
  }
});

logIn.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = validateEmail();
  const password = validatePassword("signIn");

  if (email && password) {
    alert("Successfully sign in!");
    window.location.replace("./Home2.html");
  }
});

eyeSign.addEventListener("click", () => {
  const type = passwordSignIn.getAttribute("type");
  if (type == "text") {
    passwordSignIn.setAttribute("type", "password");
    eyeSign.className = "fa fa-eye-slash";
  } else {
    passwordSignIn.setAttribute("type", "text");
    eyeSign.className = "fa fa-eye";
  }
});

eyePass.addEventListener("click", () => {
  const type = passwordReg.getAttribute("type");
  if (type == "text") {
    passwordReg.setAttribute("type", "password");
    eyePass.className = "fa fa-eye-slash";
  } else {
    passwordReg.setAttribute("type", "text");
    eyePass.className = "fa fa-eye";
  }
});

eyeCpass.addEventListener("click", () => {
  const type = confirmRegPassword.getAttribute("type");
  if (type == "text") {
    confirmRegPassword.setAttribute("type", "password");
    eyeCpass.className = "fa fa-eye-slash";
  } else {
    confirmRegPassword.setAttribute("type", "text");
    eyeCpass.className = "fa fa-eye";
  }
});
