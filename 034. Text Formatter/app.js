const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

inputField.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputField.value)
);
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("uppercase")) {
            if (btn.classList.contains("active")) {
                outputField.innerHTML = outputField.dataset.originalText;
                btn.classList.remove("active");
            } else {
                outputField.dataset.originalText = outputField.innerHTML;
                outputField.innerHTML = outputField.innerHTML.toUpperCase();
                btn.classList.add("active");
            }

        } else if (btn.classList.contains("lowercase")) {
            if (btn.classList.contains("active")) {
                outputField.innerHTML = outputField.dataset.originalText;
                btn.classList.remove("active");
            } else {
                outputField.dataset.originalText = outputField.innerHTML;
                outputField.innerHTML = outputField.innerHTML.toLowerCase();
                btn.classList.add("active");
            }

        } else if (btn.classList.contains("capitalize")) {
            if (btn.classList.contains("active")) {
                outputField.innerHTML = outputField.dataset.originalText;
                btn.classList.remove("active");
            } else {
                outputField.dataset.originalText = outputField.innerHTML;
                outputField.innerHTML =
                    outputField.innerHTML.charAt(0).toUpperCase() +
                    outputField.innerHTML.slice(1).toLowerCase();
                btn.classList.add("active");
            }
            
        } else if (btn.classList.contains("bold")) {
            outputField.style.fontWeight =
                outputField.style.fontWeight === "900" ? "normal" : "900";

        } else if (btn.classList.contains("italic")) {
            outputField.style.fontStyle =
                outputField.style.fontStyle === "italic" ? "normal" : "italic";

        } else if (btn.classList.contains("underline")) {
            outputField.style.textDecoration =
                outputField.style.textDecoration === "underline" ? "none" : "underline";
        }
    });
});
