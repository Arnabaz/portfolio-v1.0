/*
    I - Création des slides du carousel de projets
*/
function createSlideProject() {
    try {
        /* Déclaration des variables :*/
        // URL des badges
        const badge = {
            HTML5: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            CSS3: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            Sass: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
            Git: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
            GitHub: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
            JavaScript:
                "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            React: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            NodeJS: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
            ExpressJS:
                "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
            MongoDB:
                "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
            MySQL: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
        };

        /* 
            Création de la classe Project (propriétés et méthodes) 
            On utilise la classe Project pour créer la slide de notre projet. Les propriétés de la classe correspondent
            aux différents éléments de la slide du projet et les méthodes permettent de créer ces différents éléments.
        */
        class Project {
            constructor(
                title,
                type,
                imgSrc,
                description,
                badgeList,
                skillsList,
                link
            ) {
                // Déclaration des propriétés :
                this.title = title;
                this.type = type;
                this.imgSrc = imgSrc;
                this.description = description;
                this.badgeList = badgeList;
                this.skillsList = skillsList;
                this.link = link;

                // Appel des méthodes :
                this.createProjectSlide();
            }

            // Déclaration des méthodes :
            // Création des slides pour chaque projet
            createProjectSlide() {
                let container = document.querySelector(".carousel");
                let slideProject = `
    <article class="project__card">
        <h3>${this.title}</h3>
        <h4>${this.type}</h4>
        <figure><img src="${this.imgSrc}" alt="Projet ${this.title}" /></figure>
        <p>
            ${this.description}
        </p>
        <h5>Compétences développées</h5>
        <ul>
        ${this.skillsList
            .map((skill) => {
                return "<li>" + `${skill}` + "</li>";
            })
            .join(" ")}
        </ul>
        <div class="project-badges">${this.badgeList
            .map((imgBadgeSrc) => {
                return (
                    '<img src="' +
                    `${imgBadgeSrc}` +
                    '" alt="Badge ' +
                    `${this.addAltBadge(`${imgBadgeSrc}`)}` +
                    '" />'
                );
            })
            .join(" ")}</div>
        <a
            href="${this.link}"
            tabindex="-1"
            >En savoir plus</a
        >
    </article>
        `;

                container.innerHTML += slideProject;
            }

            // Pour ajouter un attribut alt aux badges
            addAltBadge(projectBadge) {
                if (projectBadge === badge.HTML5) {
                    return "HTML5";
                } else if (projectBadge === badge.CSS3) {
                    return "CSS3";
                } else if (projectBadge === badge.Sass) {
                    return "Sass";
                } else if (projectBadge === badge.Git) {
                    return "Git";
                } else if (projectBadge === badge.GitHub) {
                    return "GitHub";
                } else if (projectBadge === badge.JavaScript) {
                    return "JavaScript";
                } else if (projectBadge === badge.React) {
                    return "React";
                } else if (projectBadge === badge.NodeJS) {
                    return "Node.js";
                } else if (projectBadge === badge.ExpressJS) {
                    return "Express.js";
                } else if (projectBadge === badge.MongoDB) {
                    return "MongoDB";
                } else if (projectBadge === badge.MySQL) {
                    return "MySQL";
                } else return "";
            }
        }

        /* Ajout des projets (--- POUR AJOUTER LES PROJETS C'EST DANS CETTE PARTIE ---) */
        new Project(
            "Reservia",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/reservia_XL.webp",
            "Intégration du contenu d’une maquette dans un site web de réservation de vacances.",
            [badge.HTML5, badge.CSS3, badge.Git, badge.GitHub],
            [
                "Utilisez un système de gestion de versions pour le suivi du projet et son hébergement,",
                "Mettre en place son environnement Front-End",
                "Intégrer du contenu conformément à une maquette",
                "Implémenter une interface responsive.",
            ],
            "https://github.com/Arnabaz/ClementVallet_2_17062021"
        );

        new Project(
            "Ohmyfood!",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/ohmyfood_XL.webp",
            "Dynamiser l’interface d’une application d’avis gastronomique avec des animations CSS.",
            [badge.HTML5, badge.CSS3, badge.Sass, badge.Git, badge.GitHub],
            [
                "Mettre en oeuvre des effets CSS graphiques avancés,",
                "Mettre en place une structure de navigation pour un site web,",
                "Assurer la cohérence graphique d'un site web.",
            ],
            "https://github.com/Arnabaz/ClementVallet_3_17062021"
        );

        new Project(
            "La chouette agence",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/la_chouette_agence_XL.webp",
            "Optimisation des performances techniques, du référencement et de l’accessibilité du site web d’une agence web.",
            [badge.HTML5, badge.CSS3, badge.Git, badge.GitHub],
            [
                "Assurer l'accessibilité d'un site web,",
                "Ecrire un code HTML et CSS maintenable,",
                "Optimiser le référencement d'un site web,",
                "Réaliser une recherche des bonnes pratiques en développement web,",
                "Optimiser la taille et la vitesse d'un site web.",
            ],
            "https://github.com/Arnabaz/ClementVallet_4_17062021"
        );

        new Project(
            "Orinoco",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/orinoco_XL.webp",
            "Développer l’interface complète d’un site e-commerce.",
            [
                badge.HTML5,
                badge.CSS3,
                badge.Sass,
                badge.JavaScript,
                badge.Git,
                badge.GitHub,
            ],
            [
                "Interagir avec un web service avec JavaScript,",
                "Valider des données issues de sources externes,",
                "Créer un plan de test pour une application,",
                "Gérer des évènements JavaScript.",
            ],
            "https://github.com/Arnabaz/ClementVallet_5_17062021"
        );

        new Project(
            "Hot Takes",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/hot_takes_XL.webp",
            "Développer une API pour une application de notation de sauces piquantes.",
            [
                badge.HTML5,
                badge.CSS3,
                badge.JavaScript,
                badge.NodeJS,
                badge.ExpressJS,
                badge.MongoDB,
                badge.Git,
                badge.GitHub,
            ],
            [
                "Mettre en oeuvre des opérations CRUD de manière sécurisée,",
                "Stocker des données de manière sécurisée,",
                "Implémenter un modèle logique de données conformément à la réglementation.",
            ],
            "https://github.com/Arnabaz/ClementVallet_6_17062021"
        );

        new Project(
            "Groupomania",
            "Projet d'apprentissage (OpenClassrooms)",
            "./images/groupomania_XL.webp",
            "Développer une application complète d’un réseau social interne d’entreprise.",
            [
                badge.HTML5,
                badge.CSS3,
                badge.Sass,
                badge.JavaScript,
                badge.React,
                badge.NodeJS,
                badge.ExpressJS,
                badge.MySQL,
                badge.Git,
                badge.GitHub,
            ],
            [
                "Authentifier un utilisateur et maintenir sa session,",
                "Personnaliser le contenu envoyé à un client web,",
                "Gérer un stockage de données à l'aide de SQL,",
                "Implémenter un stockage de données sécurisé en utilisant SQL.",
            ],
            "https://github.com/Arnabaz/ClementVallet_7_17062021"
        );
        // ***---**** AJOUTER VOS PROJETS ICI avec new Project ***---***
    } catch (e) {
        console.error(e);
    }
}

/* 
    II - Création du carousel de projet (merci Grafikart !)
*/
function createCarousel() {
    /* Déclaration des variables :*/
    let slidesToScroll = 1;
    let slidesVisible = 1;
    let currentItem = 0;
    let carousel = document.querySelector(".carousel");
    let container;
    let children = [];
    let moveCallbacks = [];

    // OPTIONS du carousel - Boolean
    /*
    Pagination : Système de pagination en bas du carousel qui affiche la slide active et montre la position de la slide active par rapport aux autres slides du carousel
    PaginationClick : Permet de cliquer sur le système de pagination pour atteindre une slide du carousel plus rapidement
    Navigation : Système de navigation du carousel avec les flèches
    Loop : Système de boucle du carousel - Lorsqu'on arrive à la dernière slide, cela permet de revenir à la 1ère slide en "continuant" à scroller. De même, si on est sur la 1ère slide et que l'on veut scroller avant, on va directement à la dernière slide du carousel.
    carouselTouch : interface tactile avec gestion du scroll
    */
    let pagination = true;
    let navigation = true;
    let loop = true;
    let carouselTouch = false;

    /* Modification du DOM :*/
    function onReadyCarousel() {
        children = [].slice.call(carousel.children);
        container = document.createElement("div");
        container.setAttribute("class", "carousel__container");
        carousel.appendChild(container);
        children.map((child) => {
            container.appendChild(child);
        });

        carousel.setAttribute("tabindex", "0"); // Pour pouvoir utiliser la tabulation et naviguer avec dans le carousel
        setStyle();
    }

    /* Définition des fonctions : */
    // Application du style du carousel
    function setStyle() {
        let ratio = children.length / slidesVisible;
        container.style.width = ratio * 100 + "%";
        container.style.display = "flex";
        children.forEach((item) => {
            item.style.width = 100 / slidesVisible / ratio + "%";
        });
    }

    // Création du système de navigation du carousel (les flèches)
    function createNavigation() {
        let nextButton = document.createElement("div");
        let prevButton = document.createElement("div");
        nextButton.setAttribute("class", "carousel__btn--next");
        prevButton.setAttribute("class", "carousel__btn--prev");
        carousel.appendChild(nextButton);
        carousel.appendChild(prevButton);
        nextButton.addEventListener("click", next);
        prevButton.addEventListener("click", prev);
        if (loop) {
            return;
        } else {
            onMove((index) => {
                if (index === 0) {
                    prevButton.classList.add("carousel__btn--hidden");
                } else {
                    prevButton.classList.remove("carousel__btn--hidden");
                }
                if (children[currentItem + slidesVisible] === undefined) {
                    nextButton.classList.add("carousel__btn--hidden");
                } else {
                    nextButton.classList.remove("carousel__btn--hidden");
                }
            });
        }
    }

    // Création du système de pagination du carousel (les "points" sous les slides)
    function createPagination() {
        let paginationElement = document.createElement("div");
        paginationElement.setAttribute("class", "carousel__pagination");
        let buttons = [];
        carousel.appendChild(paginationElement);
        for (let i = 0; i < children.length; i = i + slidesToScroll) {
            let button = document.createElement("div");
            button.setAttribute("class", "carousel__pagination--btn");
            paginationElement.appendChild(button);
            buttons.push(button);
        }
        onMove((index) => {
            let activeButton = buttons[Math.floor(index / slidesToScroll)];
            if (activeButton) {
                buttons.forEach((button) =>
                    button.classList.remove("carousel__pagination--btn__active")
                );
                activeButton.classList.add("carousel__pagination--btn__active");
            }
        });
    }

    // Pour aller à la slide suivante
    function next() {
        goToItem(currentItem + slidesToScroll);
    }

    // Pour aller à la slide précédente
    function prev() {
        goToItem(currentItem - slidesToScroll);
    }

    // Pour aller à une slide précise (utile dans le système de boucle)
    function goToItem(index) {
        if (index < 0) {
            if (loop) {
                index = children.length - slidesVisible;
            } else {
                return;
            }
        } else if (
            index >= children.length ||
            (children[currentItem + slidesVisible] === undefined &&
                index > currentItem)
        ) {
            if (loop) {
                index = 0;
            } else {
                return;
            }
        }
        let translateX = (index * -100) / children.length;
        container.style.transform = "translate3d(" + translateX + "%, 0, 0)";
        currentItem = index;
        moveCallbacks.forEach((cb) => cb(index));
    }

    //
    function onMove(cb) {
        moveCallbacks.push(cb);
    }

    // Pour faire bouger une slide
    function translateFunction(percent) {
        container.style.transform = "translate3d(" + percent + "%, 0, 0)";
    }

    // Création de l'interface tactile du carousel
    function addCarouselTouch() {
        // Déclaration des variables
        let origin;
        let translate;
        let lastTranslate;
        let containerWidth = container.offsetWidth;
        let width = containerWidth;
        let carouselWidth = carousel.offsetWidth;

        // Gestion des évènements
        container.addEventListener("dragstart", (e) => e.preventDefault());
        container.addEventListener("mousedown", startDrag);
        container.addEventListener("touchstart", startDrag);
        window.addEventListener("mousemove", drag);
        window.addEventListener("touchmove", drag);
        window.addEventListener("touchend", endDrag);
        window.addEventListener("mouseup", endDrag);
        window.addEventListener("touchcancel", endDrag);

        // Déclaration des fonctions
        // Pour gérer lorsqu'on commence à toucher
        function startDrag(e) {
            origin = { x: e.screenX, y: e.screenY };
            console.log(e);
            if (e.touches) {
                if (e.touches.length > 1) {
                    return;
                } else {
                    e = e.touches[0];
                }
            }
            container.style.transition = "none";
        }

        // Pour gérer lorsqu'on se déplace
        function drag(e) {
            if (origin) {
                let point = e.touches ? e.touches[0] : e;
                translate = {
                    x: point.screenX - origin.x,
                    y: point.screenY - origin.y,
                };
                if (e.touches && Math.abs(translate.x) > Math.abs.translate.y) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                let baseTranslate = (currentItem * -100) / children.length;
                lastTranslate = translate;
                translateFunction(baseTranslate + (100 * translate.x) / width);
            }
        }
        // Pour gérer lorsqu'on arrête de toucher l'écran
        function endDrag() {
            if (origin && lastTranslate) {
                container.style.transition = "";
                if (Math.abs(lastTranslate.x / carouselWidth) > 0.2) {
                    if (lastTranslate.x < 0) {
                        next();
                    } else {
                        prev();
                    }
                } else {
                    goToItem(currentItem);
                }
            }
            origin = null;
        }
    }
    function onWindowResize() {
        if (window.innerWidth <= 1024) {
            slidesVisible = 1;
            slidesToScroll = 1;
        }
    }
    /* Appel des fonctions :*/
    onReadyCarousel();
    onWindowResize();
    window.addEventListener("resize", onWindowResize());
    if (navigation) {
        createNavigation();
    }
    if (pagination) {
        createPagination();
    }
    if (carouselTouch) {
        addCarouselTouch();
    }
    moveCallbacks.forEach((cb) => cb(0));

    carousel.addEventListener("keyup", (e) => {
        if (e.key === "ArrowRight" || e.key === "Right") {
            next();
        } else if (e.key === "ArrowLeft" || e.key === "Left") {
            prev();
        }
    });
}

/* Appel des fonctions :*/
createSlideProject();
createCarousel();
