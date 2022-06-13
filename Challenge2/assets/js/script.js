let b = document.querySelector("button");

b.addEventListener("click", function () {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  let input3 = document.getElementById("number3").value;
  let message = document.querySelector("#message");

  let total = Number(input1) + Number(input2) + Number(input3);
  let totalStickers = document.querySelector("#total");
  totalStickers.innerHTML = total;

  if (total > 10) {
    message.innerHTML = "You have too many stickers!";
  } else if (total < 10) {
    message.innerHTML = "You have too few stickers!";
  } else {
    message.innerHTML = "Take your stickers! Nice work!";
  }
});
