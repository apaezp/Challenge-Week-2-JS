let confirmPassword = document.getElementById("btn");

confirmPassword.addEventListener("click", function () {
  let passwordFirstButton = document.getElementById("password1").value;
  let passwordSecondButton = document.getElementById("password2").value;
  let passwordThirdButton = document.getElementById("password3").value;
  
  let password = Number(passwordFirstButton + passwordSecondButton + passwordThirdButton);

if (password == 911) {
  document.querySelector("p").innerHTML = "Password 1 is correct";
} else if (password == 714) {
  document.querySelector("p").innerHTML = "Password 2 is correct";
} else {
  document.querySelector("p").innerHTML = "Password is incorrect";
}

});

// password 1 911
// password 2 714
