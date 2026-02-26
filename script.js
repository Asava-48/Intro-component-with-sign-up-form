const formSubmit = document.querySelector(".learn-form");
const inputs = document.querySelectorAll(".input-group input");
const errorIcon = document.querySelectorAll(".error-icon");
const errorMessage = document.querySelectorAll(".error-message");



formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input, index) => {
    const value = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (value === "") {
     errorIcon[index].style.display = "block";
     errorMessage[index].setAttribute("aria-hidden", "false");
     input.parentElement.classList.add("error-active");

    } else if(index === 2 && !emailPattern.test(value)){
     errorIcon[index].style.display = "block";
     errorMessage[index].setAttribute("aria-hidden", "false");
     input.parentElement.classList.add("error-active");
    }else {
      errorIcon[index].style.display = "none";
      errorMessage[index].setAttribute("aria-hidden", "true");
      input.parentElement.classList.remove("error-active");
    }
  });
});