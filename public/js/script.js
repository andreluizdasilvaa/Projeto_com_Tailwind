document.addEventListener('DOMContentLoaded', ()=> {

    const imgSrcLarge = "../../assets/images/illustration-sign-up-desktop.svg";
    const imgSrcSmall = "../../assets/images/illustration-sign-up-mobile.svg";

    const imgElement = document.querySelector("#img");

    function updateImageSrc() {

        if (window.matchMedia("(max-width: 768px)").matches) {
            imgElement.src = imgSrcSmall; 
        } else {
            imgElement.src = imgSrcLarge; 
        }
    }

    window.addEventListener("load", updateImageSrc);

    window.addEventListener("resize", updateImageSrc);

    
    const form = document.getElementById("form");
    const btn_success = document.getElementById("btn_success");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const modal_primary = document.getElementById("modal_primary");
        const modal_success = document.getElementById("modal_success");
        const input_mail = document.getElementById("mail");
        const errors_text = document.getElementById("errors_text");

        if (input_mail.value.length == 0) {
            errors_text.innerHTML = "Digite alguma coisa";
            input_mail.classList.add("bg-[#FFE8E6]");
            input_mail.classList.add("border-red-500");
        } else if (input_mail.value.length < 8) {
            errors_text.innerHTML = "Error mail requisition";
            input_mail.classList.add("bg-[#FFE8E6]");
            input_mail.classList.add("border-red-500");
        } else {
            modal_primary.classList.add("hidden");
            modal_success.classList.remove("hidden");

            btn_success.addEventListener("click", () => {
                modal_primary.classList.remove("hidden");
                modal_success.classList.add("hidden");
            });
        }

        btn_success.addEventListener("click", () => {
            modal_primary.classList.remove("hidden");
            modal_success.classList.add("hidden");

            errors_text.innerHTML = null;
            input_mail.classList.remove("bg-[#FFE8E6]");
            input_mail.classList.remove("border-red-500");
        });
    })
});
