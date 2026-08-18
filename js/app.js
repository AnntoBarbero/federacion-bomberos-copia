async function cargarComponentes() {
    try {
        const esHome =
            window.location.pathname.endsWith("/") ||
            window.location.pathname.endsWith("index.html");

        const rutaComponentes = esHome
            ? "components/"
            : "../components/";

        // =========================
        // NAVBAR
        // =========================

        const navbar = await fetch(rutaComponentes + "navbar.html");

        if (!navbar.ok) {
            throw new Error("No se pudo cargar el navbar.");
        }

        document.getElementById("navbar-container").innerHTML =
            await navbar.text();


        // =========================
        // FOOTER
        // =========================

        const footer = await fetch(rutaComponentes + "footer.html");

        if (!footer.ok) {
            throw new Error("No se pudo cargar el footer.");
        }

        document.getElementById("footer-container").innerHTML =
            await footer.text();


        // =========================
        // RUTAS
        // =========================

        corregirRutas();


        // =========================
        // MENÚ
        // =========================

        iniciarMenu();


        // =========================
        // HEADER
        // =========================

        const header = document.querySelector(".header");

        if (!esHome && header) {
            header.classList.add("interno");
        }

    } catch (error) {
        console.error("Error al cargar componentes:", error);
    }
}


// ======================================================
// CORREGIR RUTAS DEL NAVBAR Y FOOTER
// ======================================================

function corregirRutas() {

    const esHome =
        window.location.pathname.endsWith("/") ||
        window.location.pathname.endsWith("index.html");

    const prefijo = esHome ? "" : "../";


    // =========================
    // ENLACES
    // =========================

    document
        .querySelectorAll("#navbar-container a, #footer-container a")
        .forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            if (
                href.startsWith("http") ||
                href.startsWith("#") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:")
            ) {
                return;
            }

            link.setAttribute("href", prefijo + href);
        });


    // =========================
    // IMÁGENES
    // =========================

    document
        .querySelectorAll("#navbar-container img, #footer-container img")
        .forEach(img => {

            const src = img.getAttribute("src");

            if (!src) return;

            img.setAttribute("src", prefijo + src);
        });
}


// ======================================================
// MENÚ
// ======================================================

function iniciarMenu() {

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");


    // =========================
    // MENÚ HAMBURGUESA
    // =========================

    if (toggle && menu) {

        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }


    // =========================
    // DROPDOWNS
    // =========================

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        const titulo = dropdown.querySelector(":scope > a");

        if (!titulo) return;

        titulo.addEventListener("click", function (event) {

            if (window.innerWidth <= 992) {

                event.preventDefault();

                dropdowns.forEach(item => {

                    if (item !== dropdown) {
                        item.classList.remove("active");
                    }

                });

                dropdown.classList.toggle("active");
            }

        });

    });


    // =========================
    // CERRAR MENÚ AL ELEGIR
    // =========================

    const enlacesSubmenu = document.querySelectorAll(".submenu a");

    enlacesSubmenu.forEach(link => {

        link.addEventListener("click", () => {

            if (menu) {
                menu.classList.remove("active");
            }

        });

    });

}


// ======================================================
// CARGAR COMPONENTES
// ======================================================

cargarComponentes();


// ======================================================
// NAVBAR AL HACER SCROLL
// ======================================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});