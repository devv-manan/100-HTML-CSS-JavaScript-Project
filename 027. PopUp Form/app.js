let close = document.getElementById("close");
let open = document.getElementById("open");
let modal = document.getElementById("modal");

open.addEventListener("click", () => {
    modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show-modal");
    }
});
