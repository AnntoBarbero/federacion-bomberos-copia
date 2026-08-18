/* FUNCIÓN PRINCIPAL: CARGAR NAVBAR Y FOOTER
    1. Detectar si estamos en la página principal o en una página interna.
    2. Buscar y cargar navbar.html.
    3. Buscar y cargar footer.html.
    4. Corregir las rutas de enlaces e imágenes.
    5. Activar el funcionamiento del menú.
    6. Agregar la clase "interno" al header en páginas internas. 
*/

//Detectar si estamos en la página principal
async function cargarComponentes() {
    try {
        const esHome =
            window.location.pathname.endsWith("/") ||
            window.location.pathname.endsWith("index.html");

        const rutaComponentes = esHome
            ? "components/"
            : "../components/";

        // NAVBAR, busco el archivo navbar.html dentro de components
        const navbar = await fetch(rutaComponentes + "navbar.html");
        //Compruebo si el navbar se cargó correctamente
        if (!navbar.ok) {
            throw new Error("No se pudo cargar el navbar.");
        }
        //Inserta el navbar dentro de la página
        document.getElementById("navbar-container").innerHTML =
            await navbar.text();

        // FOOTER, busco el archivo footer.html 
        const footer = await fetch(rutaComponentes + "footer.html"); 
        //Compruebo si el footer se cargó correctamente
        if (!footer.ok) {
            throw new Error("No se pudo cargar el footer.");
        }
        //Inserta el footer dentro de la página
        document.getElementById("footer-container").innerHTML =
            await footer.text();

        // RUTAS, corrige enlaces <a> e imagenes <img>
        corregirRutas();

        // MENÚ, activa el botón hamburgues, dropdowns y cierre del menú al seleccionar una opción
        iniciarMenu();

        // HEADER
        const header = document.querySelector(".header");
        //Agrega la clase interno para darle estilo distinto en las páginas internas
        if (!esHome && header) {
            header.classList.add("interno");
        }

    } catch (error) {
        console.error("Error al cargar componentes:", error);
    }
}

// CORREGIR RUTAS DEL NAVBAR Y FOOTER
function corregirRutas() {
    //Veo si estoy en el home
    const esHome =
        window.location.pathname.endsWith("/") ||
        window.location.pathname.endsWith("index.html");

    const prefijo = esHome ? "" : "../";

    // ENLACES, busco los enlaces <a> que esten en el navbar o footer
    document
        .querySelectorAll("#navbar-container a, #footer-container a")
        .forEach(link => {
            //obtengo la ruta del enlace
            const href = link.getAttribute("href");
            //si el enlace no tiene href, no hace nada
            if (!href) return;
            //No modifico enlaces especiales
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

    // IMÁGENES, busco las imagenes dentro del navbar y footer
    document
        .querySelectorAll("#navbar-container img, #footer-container img")
        .forEach(img => {

            const src = img.getAttribute("src");

            if (!src) return;

            img.setAttribute("src", prefijo + src);
        });
}

// MENÚ, hace funcionar el menú hamburgesa, el desplegable/dropdown y el cierre del menú al seleccionar una opción
function iniciarMenu() {

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    // MENÚ HAMBURGUESA
    if (toggle && menu) {

        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // DROPDOWNS
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

    // CERRAR MENÚ AL ELEGIR
    const enlacesSubmenu = document.querySelectorAll(".submenu a");

    enlacesSubmenu.forEach(link => {

        link.addEventListener("click", () => {

            if (menu) {
                menu.classList.remove("active");
            }

        });

    });

}

// CARGAR COMPONENTES, se cargan automáticamente el navbar.html y el footer.html
cargarComponentes();

// NAVBAR AL HACER SCROLL, para controlar el comportamiento del header cuando el usuario baja por la página
window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});