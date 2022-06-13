// if condition to change color of the border from an image when clicked and then remove it when clicked again
function changeBorderColorOfThePictureOnClick() {
    let changeBorder = 
    document.querySelector("#forest").addEventListener("click", function (changeBorder) {    
        if (changeBorder.target.style.border == "") {
            changeBorder.target.style.border = "15px solid red";
        } else {
            changeBorder.target.style.border= "";
        }
    }
    );
}
changeBorderColorOfThePictureOnClick();


