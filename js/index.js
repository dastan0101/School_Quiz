const body = document.querySelector("body"),
 toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
})