var button = document.getElementById("change-color-button");
button.addEventListener("click", function () {
    var body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
