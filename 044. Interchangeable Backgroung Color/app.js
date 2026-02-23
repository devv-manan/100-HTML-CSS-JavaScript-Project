const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    body.className = "";
    body.classList.add(btn.value);
  });
});
