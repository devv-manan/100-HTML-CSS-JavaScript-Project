const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        eye.classList.add("active");
    } else {
        input.type = "password";
        eye.classList.remove("active");
    }
});