const checkbox = document.getElementById("join_toggle");
const checkbox_image = document.querySelector(
    'img[src="images/uncheckedbox.png"]'
);
const eye = document.getElementById("eye_toggle");
const radios = document.querySelectorAll(".radio_item");
const eye_image = document.querySelector('img[src="images/eye.png"]');
const male = document.getElementById("gender1");
const female = document.getElementById("gender2");
const unknown = document.getElementById("gender3");
const list_male = document.getElementById("list_male");
const list_female = document.getElementById("list_female");
const list_unknown = document.getElementById("list_unknown");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        checkbox_image.src = "images/checkedbox.png";
    } else {
        checkbox_image.src = "images/uncheckedbox.png";
    }
});

eye.addEventListener("change", () => {
    if (eye.checked) {
        eye_image.src = "images/eye2.png";
    } else {
        eye_image.src = "images/eye.png";
    }
});

radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
        if (male.checked) {
            list_male.className = "radio_item_checked";
            list_female.className = "radio_item";
            list_unknown.className = "radio_item";
        } else if (female.checked) {
            list_female.className = "radio_item_checked";
            list_unknown.className = "radio_item";
            list_male.className = "radio_item";
        } else if (unknown.checked) {
            list_unknown.className = "radio_item_checked";
            list_male.className = "radio_item";
            list_female.className = "radio_item";
        } else {
            list_male.className = "radio_item";
            list_female.className = "radio_item";
            list_unknown.className = "radio_item";
        }
    });
});
