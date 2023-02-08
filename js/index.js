const body = document.querySelector("body"),
 toggle = body.querySelector(".toggle");

 var menu = document.getElementsByClassName("menu");
 for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
 }

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
})

