// Pour afficher/masquer le menu déroulant
function menuToggle() {
    const menuBarsElement = document.querySelector(".menu-toggle");
    const menuElement = document.querySelector(".menu-navbar");
    const menuLinkElement = document.querySelectorAll(".menu-navbar_link");
    const mainElement = document.querySelector("main");
    const footerElement = document.querySelector(".footer");
    const logoElement = document.querySelector(".logo-link");

    menuBarsElement.addEventListener("click", () => {
        // Ajout de la classe folded pour le menu
        if (menuElement.classList.contains("folded")) {
            menuElement.classList.replace("folded", "unfolded");
        } else {
            menuElement.classList.replace("unfolded", "folded");
        }
        // Ajout de la classe folded pour le logo
        if (logoElement.classList.contains("folded")) {
            logoElement.classList.replace("folded", "unfolded");
        } else {
            logoElement.classList.replace("unfolded", "folded");
        }
        // Ajout de la classe toggled à l'élément icone menu
        if (menuBarsElement.classList.contains("toggled")) {
            menuBarsElement.classList.remove("toggled");
        } else {
            menuBarsElement.classList.add("toggled");
        }
        // Ajout de la classe stucked au body (pour bloquer le défilement de la page)
        if (document.body.classList.contains("stucked")) {
            document.body.classList.remove("stucked");
        } else {
            document.body.classList.add("stucked");
        }
        // Ajout de la classe blur à l'élément main pour flouter l'arrière plan du menu
        if (mainElement.classList.contains("blur")) {
            mainElement.classList.remove("blur");
        } else {
            mainElement.classList.add("blur");
        }
        // Ajout de la classe blur à l'élément footer pour flouter l'arrière plan du menu
        if (footerElement.classList.contains("blur")) {
            footerElement.classList.remove("blur");
        } else {
            footerElement.classList.add("blur");
        }
    });
    // Pour retirer le blocage de scroll de l'écran après avoir sélectionné un lien du menu
    menuLinkElement.forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("stucked");
            menuElement.classList.replace("unfolded", "folded");
            menuBarsElement.classList.remove("toggled");
            mainElement.classList.remove("blur");
            footerElement.classList.remove("blur");
            logoElement.classList.replace("folded", "unfolded");
        });
    });
}

menuToggle();

// Formulaire de contact - Envoi de mail
function sendMail() {
    // Déclaration des variables
    let form = document.querySelector(".contact__form");
    let formInputName = document.getElementById("fullname");
    let formInputEmail = document.getElementById("email");
    let formTextareaMessage = document.getElementById("message");
    let formLabelName = document.querySelector(".label-form.label-name");
    let formLabelEmail = document.querySelector(".label-form.label-email");
    let formLabelMessage = document.querySelector(".label-form.label-message");
    let errorFormName = 0;
    let errorFormEmail = 0;
    let errorFormMessage = 0;
    let errorFormCount = 0;

    let regexName = /^[a-zàâäéèêëîïöôüûù ,.'-]{3,50}$/i;
    let regexEmail = /^\S+@\S+\.\S+$/;

    // Déclaration de fonction
    function errorFormCounter(a, b, c) {
        errorFormCount = a + b + c;
    }

    // Modification du DOM (création de l'élément span pour afficher les messages)
    let statusTxtElement = document.createElement("span");
    statusTxtElement.setAttribute("class", "contact__feedback--txt");
    form.appendChild(statusTxtElement);

    // Validation dynamique des inputs au niveau du frontend (avec des regex)
    // Fullname
    formInputName.addEventListener("input", (e) => {
        const nameValue = e.target.value;
        if (!regexName.test(nameValue)) {
            errorFormName++;
            formInputName.setAttribute(
                "class",
                "contact__form--input red-border"
            );
            formLabelName.setAttribute(
                "data-error",
                "Votre nom complet ne peut contenir que des lettres et les caractères spéciaux àâäéèêëîïöôüûù,.'-"
            );

            if (nameValue === "") {
                formLabelName.setAttribute(
                    "data-error",
                    "Veuillez remplir la case 'Nom complet'"
                );
            }
            if (nameValue.length < 3) {
                formLabelName.setAttribute(
                    "data-error",
                    "Votre nom complet doit contenir au moins 3 caractères."
                );
            }

            if (nameValue.length > 50) {
                formLabelName.setAttribute(
                    "data-error",
                    "Votre nom complet doit contenir entre 3 et 50 caractères."
                );
            }
        } else {
            if ((formInputName.classList.contains = "red-border")) {
                formInputName.setAttribute(
                    "class",
                    "contact__form--input green-border"
                );
                formLabelName.setAttribute("data-error", "");
            }
            errorFormName = 0;
        }
    });
    // Email
    formInputEmail.addEventListener("input", (e) => {
        const emailValue = e.target.value;
        if (!regexEmail.test(emailValue)) {
            errorFormEmail++;
            formInputEmail.setAttribute(
                "class",
                "contact__form--input red-border"
            );
            formLabelEmail.setAttribute(
                "data-error",
                "Votre email n'est pas valide."
            );

            if (emailValue === "") {
                formLabelEmail.setAttribute(
                    "data-error",
                    "Veuillez remplir la case 'Email'"
                );
            }
        } else {
            if ((formInputEmail.classList.contains = "red-border")) {
                formInputEmail.setAttribute(
                    "class",
                    "contact__form--input green-border"
                );
                formLabelEmail.setAttribute("data-error", "");
            }
            errorFormEmail = 0;
        }
    });
    // Message
    formTextareaMessage.addEventListener("input", (e) => {
        const messageValue = e.target.value;
        if (messageValue.length <= 10) {
            errorFormMessage++;
            formTextareaMessage.setAttribute(
                "class",
                "contact__form--textarea red-border"
            );
            formLabelMessage.setAttribute(
                "data-error",
                "Votre message doit contenir au moins 10 caractères."
            );
            if (messageValue === "") {
                formLabelMessage.setAttribute(
                    "data-error",
                    "Vous n'avez pas rédiger de message. Merci de remplir un message d'au moins 10 caractères."
                );
            }
        } else {
            if ((formTextareaMessage.classList.contains = "red-border")) {
                formTextareaMessage.setAttribute(
                    "class",
                    "contact__form--textarea green-border"
                );
                formLabelMessage.setAttribute("data-error", "");
            }
            errorFormMessage = 0;
        }
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        statusTxtElement.setAttribute(
            "class",
            "contact__feedback--txt form-ongoing"
        );
        statusTxtElement.innerText = "Traitement en cours ...";
        form.classList.add("disabled");

        // Prévention de certaines pratiques pour forcer le formulaire à envoyer un message
        if (formInputName.value === "") {
            errorFormName++;
        }
        if (formInputEmail.value === "") {
            errorFormEmail++;
        }
        if (formTextareaMessage.value === "") {
            errorFormMessage++;
        }

        // Appel de la fonction pour compter le nombre d'erreurs
        errorFormCounter(errorFormName, errorFormEmail, errorFormMessage);
        if (errorFormCount === 0) {
            // Si tous les inputs sont OK : envoi des data au backend (script PHP)
            let formData = new FormData(form);
            var myInit = {
                method: "POST",
                body: formData,
            };
            fetch("message.php", myInit)
                .then((response) => {
                    response.json().then((data) => {
                        form.reset();
                        statusTxtElement.setAttribute(
                            "class",
                            "contact__feedback--txt form-valid"
                        );
                        statusTxtElement.innerText = data.message;
                        if (
                            data.message ==
                                "Désolé mais votre message n'a pas été envoyé. Veuillez réessayer s'il vous plait." ||
                            data.message ==
                                "Veuillez entrer une adresse email valide." ||
                            data.message ==
                                "Veuillez remplir tous les champs requis du formulaire, merci."
                        ) {
                            statusTxtElement.setAttribute(
                                "class",
                                "contact__feedback--txt form-invalid"
                            );
                        }

                        setTimeout(() => {
                            statusTxtElement.innerText = "";
                            statusTxtElement.classList.remove("form-valid");
                            form.classList.remove("disabled");
                            formInputName.setAttribute(
                                "class",
                                "contact__form--input"
                            );
                            formInputEmail.setAttribute(
                                "class",
                                "contact__form--input"
                            );
                            formTextareaMessage.setAttribute(
                                "class",
                                "contact__form--textarea"
                            );
                        }, 3000);
                    });
                })
                .catch((error) => {
                    console.error(error);
                    statusTxtElement.setAttribute(
                        "class",
                        "contact__feedback--txt form-invalid"
                    );
                });
        } else {
            statusTxtElement.setAttribute(
                "class",
                "contact__feedback--txt form-invalid"
            );
            statusTxtElement.innerText =
                "Merci de remplir correctement le formulaire avant d'envoyer votre message.";
            form.classList.remove("disabled");
        }
    });
}
sendMail();

// Canvas - Section Presentation
let canvas = document.querySelector("#canvas");
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// Redimensionner le canvas si les dimensions de l'écran changent
canvas.height = canvasHeight;
canvas.width = canvasWidth;
window.addEventListener("resize", () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
});

// Création du canvas
let context = canvas.getContext("2d");

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 20,
};

// Création des pixels
let pixelArray = [];

class Pixel {
    constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2.5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        context.fillStyle = "white";
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}

function initPixels() {
    for (let i = 0; i < 1000; i++) {
        pixelArray.push(new Pixel());
    }
}

function animatePixels() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    handlePixels();
    requestAnimationFrame(animatePixels);
}

function handlePixels() {
    for (let i = 0; i < pixelArray.length; i++) {
        pixelArray[i].update();
        pixelArray[i].draw();
    }
}
initPixels();
animatePixels();
