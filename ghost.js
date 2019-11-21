var count = 0;
var isgo = false;
var timer;

window.onload = function () {
    var ul_img = document.getElementsByClassName("ul_img")[0];
    var li_img = document.getElementsByClassName("li_img");
    showtime();
    function showtime() {
        timer = setInterval(function () {
            if (isgo == false) {
                count++;
                ul_img.style.transform = "translate(" + -1000 * count + "px)";
                if (count >= li_img.length - 1) {
                    count = li_img.length - 1;
                    isgo = true;
                }
            }
            else {
                count--;
                ul_img.style.transform = "translate(" + -1000 * count + "px)";
                if (count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
        }, 4000)
    }
}
