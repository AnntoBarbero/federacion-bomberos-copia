/* =========================================================
   INFORMACIÓN DE ZONAS
========================================================= */
/* =========================================================
   PERSONAS DEL ORGANIGRAMA
========================================================= */

const personasOrganigrama = {

    "andres-adoubert": {
        nombre: "Andrés Audubert",
        cargo: "Director Escuela de capacitación",
        foto: "../img/organigrama/Andres_Audubert.PNG",
        asociacion:"Altaliva Roca"
    },

    "perez-campana": {
        nombre: "S. Pérez Campana",
        cargo: "Vicedirector Escuela de capacitación ",
        foto: "../img/organigrama/Sebastian_Perez.PNG",
        asociacion: "Trenel"
    },

    "gabriela-paoli": {
        nombre: "Gabriela Paoli",
        cargo: "Coord. Departamentos",
        foto: "../img/organigrama/Gabriela_Paoli.PNG",
        asociacion:"Realicó"
    },

    "carla-gonzalez": {
        nombre: "Carla González",
        cargo: "Regional Norte/Oeste",
        foto: "../img/organigrama/Carla_Gonzales.PNG"
    },

    "daniela-marin": {
        nombre: "Daniela Marín",
        cargo: "Coordinadora Regional Sur",
        foto: "../img/organigrama/Daniela_Marin.PNG",
        asociacion: "Alpachiri"
    },


    /* =========================
       ZONAS
    ========================= */

    "cesar-verna": {
        nombre: "Cesar Verna",
        cargo: "Director",
        zona: "Zona 1",
        asociacion: "Alta Italia",
        foto: "../img/organigrama/Cesar_Verna.PNG"
    },

    "ignacio-chiurazzi": {
        nombre: "Ignacio Chiurazzi",
        cargo: "Director",
        zona: "Zona 2",
        asociacion: "",
        foto: "../img/organigrama/Ignacio_Chiurazzi.PNG"
    },

    "heber-yrigoyen": {
        nombre: "Heber Yrigoyen",
        cargo: "Director",
        zona: "Zona 3",
        asociacion: "Victorica",
        foto: "../img/organigrama/Heber_Yrigoyen.PNG"
    },

    "jorge-fredes": {
        nombre: "J. Fredes Fdez.",
        cargo: "Director",
        zona: "Zona 4",
        asociacion: "Anguil",
        foto: "../img/organigrama/Jorgelina_Fernandez.PNG"
    },

    "mariela-munoz": {
        nombre: "Mariela Muñoz",
        cargo: "Directora",
        zona: "Zona 5",
        asociacion: "Toay",
        foto: "../img/organigrama/Mariela_Munioz.PNG"
    },

    "eliana-cleman": {
        nombre: "Eliana Cleman",
        cargo: "Directora",
        zona: "Zona 6",
        asociacion: "",
        foto: "../img/organigrama/Eliana_Cleman.PNG"
    }

};

/* =========================================================
   MODAL DE PERSONAS
========================================================= */

const modalPersona =
    document.getElementById("modal-persona");

const contenidoPersona =
    document.getElementById("contenido-persona");

const cerrarPersona =
    document.getElementById("cerrar-persona");


/* =========================================================
   ABRIR PERSONA
========================================================= */

document.querySelectorAll(".persona-organigrama").forEach(persona => {

    persona.addEventListener("click", function () {

        const idPersona = this.dataset.persona;

        const personaData =
            personasOrganigrama[idPersona];

        if (!personaData) return;

        mostrarPersona(personaData);

    });

});


/* =========================================================
   MOSTRAR PERSONA
========================================================= */

function mostrarPersona(persona) {

    contenidoPersona.innerHTML = `

        <div class="perfil-persona">

            <div class="foto-persona">

                <img
                    src="${persona.foto}"
                    alt="${persona.nombre}"
                    onerror="this.src='../img/organigrama/sin-foto.PNG';">

            </div>


            <div class="datos-persona">

                <h2>
                    ${persona.nombre}
                </h2>

                <p class="cargo-persona-modal">

                    <i class="fa-solid fa-user-tie"></i>

                    ${persona.cargo}

                </p>


                ${
                    persona.zona
                    ?
                    `
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        ${persona.zona}
                    </p>
                    `
                    :
                    ""
                }


                ${
                    persona.asociacion
                    ?
                    `
                    <p>
                        <i class="fa-solid fa-building"></i>
                        Asociación: ${persona.asociacion}
                    </p>
                    `
                    :
                    ""
                }

            </div>

        </div>

    `;


    modalPersona.classList.add("mostrar");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CERRAR
========================================================= */

cerrarPersona.addEventListener(
    "click",
    cerrarModalPersona
);


function cerrarModalPersona() {

    modalPersona.classList.remove("mostrar");

    document.body.style.overflow = "";

}


/* =========================================================
   CERRAR HACIENDO CLICK AFUERA
========================================================= */

modalPersona.addEventListener("click", function (e) {

    if (e.target === modalPersona) {

        cerrarModalPersona();

    }

});


/* =========================================================
   ESC
========================================================= */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        cerrarModalPersona();

    }

});

const informacionZonas = {

    1: {
        nombre: "Escuela Zonal 1",
        correo: "zona1escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Cesar Verna"
            },
            {
                cargo: "Vice Director",
                nombre: "Daniel Tobares"
            },
            {
                cargo: "Secretario",
                nombre: "Matias Suarez"
            },
            {
                cargo: "Pro Secretaria",
                nombre: "María Cortaberria"
            }
        ],

        cuarteles: [
            "Alta Italia",
            "Bernardo de Larroude y Sarah",
            "Intendente Alvear",
            "Rancul",
            "Realicó"
        ]
    },


    2: {
        nombre: "Escuela Zonal 2",
        correo: "zona2escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Ignacio Chiruazzi"
            },
            {
                cargo: "Vice Directora",
                nombre: "Hilda Luna"
            },
            {
                cargo: "Secretario",
                nombre: "Renzo Odetti"
            },
            {
                cargo: "Pro Secretario",
                nombre: "Daniel Altamirano"
            }
        ],

        cuarteles: [
            "Arata",
            "Caleufú",
            "Embajador Martini",
            "Ingeniero Luiggi",
            "La Maruja",
            "Parera"
        ]
    },


    3: {
        nombre: "Escuela Zonal 3",
        correo: "zona3escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Heber Yrigoyen"
            },
            {
                cargo: "Vice Directora",
                nombre: "Fiama Picco"
            },
            {
                cargo: "Secretaria",
                nombre: "Patricia Molina"
            },
            {
                cargo: "Pro Secretaria",
                nombre: "Graciela Rojas"
            }
        ],

        cuarteles: [
            "25 de Mayo",
            "Algarrobo del Águila",
            "Eduardo Castex",
            "General Pico",
            "Santa Isabel",
            "Trenel",
            "Victorica"
        ]
    },


    4: {
        nombre: "Escuela Zonal 4",
        correo: "zona4escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Directora",
                nombre: "Jorgelina Fernandez"
            },
            {
                cargo: "Vice Director",
                nombre: "Gustavo Arias"
            },
            {
                cargo: "Secretaria",
                nombre: "Silvina Abbona"
            },
            {
                cargo: "Pro Secretario",
                nombre: "Fernando Arias"
            }
        ],

        cuarteles: [
            "Anguil",
            "Catriló",
            "Colonia Barón",
            "Lonquimay",
            "Miguel Cané",
            "Quemú Quemú",
            "Winifreda"
        ]
    },


    5: {
        nombre: "Escuela Zonal 5",
        correo: "zona5escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Directora",
                nombre: "Mariela Muñoz"
            },
            {
                cargo: "Vice Director",
                nombre: "Milton Heit"
            },
            {
                cargo: "Secretaria",
                nombre: "Nora Ozan"
            },
            {
                cargo: "Pro Secretaria",
                nombre: "Mariana Burgui"
            }
        ],

        cuarteles: [
            "Alpachiri",
            "Altaliva Roca",
            "Doblas",
            "Guatraché",
            "Macachín",
            "Miguel Riglos",
            "Toay"
        ]
    },


    6: {
        nombre: "Escuela Zonal 6",
        correo: "zona6escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Directora",
                nombre: "Eliana Cleman"
            },
            {
                cargo: "Vice Director",
                nombre: "Lautaro Urbanovich"
            },
            {
                cargo: "Secretaria",
                nombre: "Pamela Lambercht"
            },
            {
                cargo: "Pro Secretaria",
                nombre: "Flor Catalan"
            }
        ],

        cuarteles: [
            "Bernasconi",
            "Casa de Piedra",
            "General Acha",
            "General San Martín",
            "Jacinto Arauz",
            "La Adela"
        ]
    }

};


/* =========================================================
   ELEMENTOS DE LAS ZONAS
========================================================= */

const botonesZona = document.querySelectorAll(".zona-org");
const informacionZona = document.getElementById("informacion-zona");


/* =========================================================
   ABRIR ZONA
========================================================= */

botonesZona.forEach(boton => {

    boton.addEventListener("click", function () {

        if (this.dataset.persona) return;

        const numeroZona = this.dataset.zona;

        const zona = informacionZonas[numeroZona];

        if (!zona) return;


        /* -----------------------------------------
           EQUIPO
        ----------------------------------------- */

        let equipoHTML = "";

        if (zona.equipo && zona.equipo.length > 0) {

            zona.equipo.forEach(persona => {

                equipoHTML += `
                    <div class="persona-zona">

                        <span class="cargo-persona">
                            ${persona.cargo}
                        </span>

                        <strong>
                            ${persona.nombre}
                        </strong>

                    </div>
                `;

            });

        } else {

            equipoHTML = `
                <p class="sin-datos">
                    Información próximamente disponible.
                </p>
            `;

        }


        /* -----------------------------------------
           CUARTELES
        ----------------------------------------- */

        let cuartelesHTML = "";

        if (zona.cuarteles && zona.cuarteles.length > 0) {

            zona.cuarteles.forEach(cuartel => {

                cuartelesHTML += `
                    <li>
                        <i class="fa-solid fa-fire-flame-curved"></i>
                        ${cuartel}
                    </li>
                `;

            });

        } else {

            cuartelesHTML = `
                <li class="sin-datos">
                    Información próximamente disponible.
                </li>
            `;

        }


        /* -----------------------------------------
           CONTENIDO DE LA VENTANA
        ----------------------------------------- */

        informacionZona.innerHTML = `

            <div class="ventana-zona">

                <button
                    type="button"
                    class="cerrar-zona"
                    aria-label="Cerrar">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <!-- CABECERA -->

                <div class="cabecera-zona">

                    <div class="icono-zona">
                        <i class="fa-solid fa-fire-flame-curved"></i>
                    </div>

                    <div>

                        <h2>
                            ${zona.nombre}
                        </h2>

                        <a href="mailto:${zona.correo}">
                            <i class="fa-solid fa-envelope"></i>
                            ${zona.correo}
                        </a>

                    </div>

                </div>


                <!-- CONTENIDO -->

                <div class="contenido-zona">


                    <!-- EQUIPO -->

                    <div class="bloque-zona">

                        <h3>
                            <i class="fa-solid fa-users"></i>
                            Equipo
                        </h3>

                        <div class="equipo-zona">
                            ${equipoHTML}
                        </div>

                    </div>


                    <!-- CUARTELES -->

                    <div class="bloque-zona">

                        <h3>
                            <i class="fa-solid fa-building"></i>
                            Cuarteles
                        </h3>

                        <ul class="lista-cuarteles-zona">
                            ${cuartelesHTML}
                        </ul>

                    </div>


                </div>

            </div>

        `;


        /* -----------------------------------------
           MOSTRAR
        ----------------------------------------- */

        informacionZona.classList.add("mostrar");

        document.body.style.overflow = "hidden";


        /* -----------------------------------------
           BOTÓN CERRAR
        ----------------------------------------- */

        const cerrar = informacionZona.querySelector(".cerrar-zona");

        if (cerrar) {

            cerrar.addEventListener("click", cerrarZona);

        }

    });

});


/* =========================================================
   CERRAR ZONA
========================================================= */

function cerrarZona() {

    informacionZona.classList.remove("mostrar");

    document.body.style.overflow = "";

}


/* =========================================================
   CERRAR ZONA HACIENDO CLICK FUERA
========================================================= */

informacionZona.addEventListener("click", function (e) {

    if (e.target === informacionZona) {

        cerrarZona();

    }

});


/* =========================================================
   DEPARTAMENTOS DE ESPECIALIDADES
========================================================= */

const especialidades = {

    fuego: {
        nombre: "Dpto. Fuego",
        correo: "fuegoescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Lucas Pellegrino"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Emanuel Escudero"
            }
        ],

        instructores: [
            "Lucio Ciampoli",
            "Heber Yrigoyen",
            "Graciela Rojas",
            "Daniel Tobares",
            "Martín Pereyra"
        ],

        colaboradores: [
            "Claudio Ostertag",
            "Erica Ortiz"
        ]
    },


    socorrismo: {
        nombre: "Dpto. Socorrismo",
        correo: "socorrismoescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Julian Zalazar"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Martín Torres"
            }
        ],

        instructores: [
            "Hilda Luna",
            "Eliana Clemann",
            "Mariana Burgui",
            "Ignacio Chiurazzi",
            "Juan Calfuan",
            "Fiama Picco"
        ],

        colaboradores: [
            "Sol Puhl",
            "Patricia Perez",
            "Azul Brilz",
            "Natan Gonzales"
        ]
    },


    vehicular: {
        nombre: "Dpto. Rescate Vehicular",
        correo: "rescatevehicularescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Jorge Ruiz"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Cesar Verna"
            },
            {
                cargo: "Secretario",
                nombre: "Andrés Audubert"
            },
            {
                cargo: "Secretaria Pedagógica",
                nombre: "Mariela Muñoz"
            }
        ],

        instructores: [
            "Edgardo Velastini",
            "Nestor Aguirre",
            "Jose Hevia",
            "Mauro Herrera"
        ],

        colaboradores: []
    },


    cuerdas: {
        nombre: "Dpto. Rescate con Cuerdas",
        correo: "rescateconcuerdasescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Marcelo Martinez"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Uciel Serraino"
            }
        ],

        instructores: [
            "Gerardo Salvatori",
            "Veronica Santander",
            "Evelyn Selalles",
            "Pablo Peralta"
        ],

        colaboradores: []
    },


    forestales: {
        nombre: "Dpto. Inc. Forestales",
        correo: "iforestalescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Juan Serraino"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Julio Córdoba"
            }
        ],

        instructores: [
            "Walter Berger",
            "Nicolas Jerez",
            "Melisa Welch"
        ],

        colaboradores: [
            "Federico Justiniano",
            "Alma Tassone",
            "Carlos Torres",
            "Pamela Ávalos",
            "Benjamin Leonar",
            "Ayelen Hollman",
            "Nora Ozan"
        ]
    },


    peligrosos: {
        nombre: "Dpto. Mat. Peligrosos",
        correo: "matpelescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Roberto Sacco"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Lis Rearte"
            }
        ],

        instructores: [
            "Pablo Calderon",
            "Marcos Venetti",
            "Elias Guillermo",
            "Enzo Ojeda"
        ],

        colaboradores: []
    },


    sci: {
        nombre: "Dpto. SCI",
        correo: "comandoescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinadora",
                nombre: "Alina Tosco"
            }
        ],

        instructores: [
            "Roberto Torres",
            "Walter Berger",
            "Damian Bollak"
        ],

        colaboradores: [
            "Lourdes Bender",
            "Silvina Abbona"
        ]
    },


    canes: {
        nombre: "Dpto. Búsq./Rescate Canes",
        correo: "k9escuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinadora",
                nombre: "Pamela Ávalo"
            }
        ],

        instructores: [],

        colaboradores: []
    },


    acuatico: {
        nombre: "Dpto. Rescate Acuático",
        correo: "resacuaticoescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "David Rojas"
            }
        ],

        instructores: [
            "Ricardo Balduzzi",
            "Cesar Solano",
            "Celso Retamales",
            "Fabio Fernández"
        ],

        colaboradores: [
            "Raul Fibiger",
            "Anabela Laborde"
        ]
    },


    protocolo: {
        nombre: "Dpto. Protocolo y Ceremonial",
        correo: "protocoloescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Roque Martinez"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Juan Tome"
            }
        ],

        instructores: [
            "Celeste Escudero",
            "Marcos Vernetti",
            "Juan Cerda"
        ],

        colaboradores: []
    },


    seguridad: {
        nombre: "Dpto. Seg. Bomberil",
        correo: "seguridadescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinadora",
                nombre: "Jazmín Bailo"
            }
        ],

        instructores: [
            "Maria Morell",
            "Patricia Molina",
            "Maria Montalbano"
        ],

        colaboradores: [
            "Andrea Montalbano"
        ]
    },


    bombas: {
        nombre: "Dpto. Op. de Bombas",
        correo: "conduccionescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Martín Meringer"
            }
        ],

        instructores: [
            "Santiago Elizarriaga",
            "Pablo Pollo",
            "German Garin",
            "Oscar Zabala",
            "Javier Bogarin"
        ],

        colaboradores: []
    },


    psicologia: {
        nombre: "Dpto. Psicología Emergencia",
        correo: "psicologiaescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinadora",
                nombre: "Gabriela Paoli"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Ariel Irusta"
            }
        ],

        instructores: [],

        colaboradores: []
    },


    estructuras: {
        nombre: "Dpto. Búsq./Rescate Estructuras",
        correo: "brecescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinadora",
                nombre: "Daniela Marin"
            },
            {
                cargo: "Sub Coordinador",
                nombre: "Fabian Perrone"
            }
        ],

        instructores: [
            "Alexis Cuello"
        ],

        colaboradores: [
            "Yesica Fernández"
        ]
    },


    cadetes: {
        nombre: "Dpto. Cadetes",
        correo: "cadetesescuelabvlp@gmail.com",

        conduccion: [
            {
                cargo: "Coordinador",
                nombre: "Leandro Cortejarena"
            },
            {
                cargo: "Secretario",
                nombre: "Juan Nicolas Martin"
            }
        ],

        instructores: [
            "Eliana Cleman",
            "Juan Pereyra",
            "Debora Ydraste",
            "Camila Sauco"
        ],

        colaboradores: []
    }

};


/* =========================================================
   ELEMENTOS DEL MODAL DE ESPECIALIDADES
========================================================= */

const modalEspecialidad =
    document.getElementById("modal-especialidad");

const contenidoEspecialidad =
    document.getElementById("contenido-especialidad");


/* =========================================================
   ABRIR ESPECIALIDAD
========================================================= */

document.querySelectorAll(".especialidad-card").forEach(boton => {

    boton.addEventListener("click", function () {

        const id = this.dataset.especialidad;

        const departamento = especialidades[id];

        if (!departamento) return;

        mostrarEspecialidad(departamento);

    });

});


/* =========================================================
   MOSTRAR ESPECIALIDAD
========================================================= */

function mostrarEspecialidad(departamento) {

    let conduccionHTML = "";
    let instructoresHTML = "";
    let colaboradoresHTML = "";


    /* -----------------------------------------
       CONDUCCIÓN
    ----------------------------------------- */

    if (
        departamento.conduccion &&
        departamento.conduccion.length > 0
    ) {

        departamento.conduccion.forEach(persona => {

            conduccionHTML += `
                <div class="persona-especialidad">

                    <span>
                        ${persona.cargo}
                    </span>

                    <strong>
                        ${persona.nombre}
                    </strong>

                </div>
            `;

        });

    }


    /* -----------------------------------------
       INSTRUCTORES
    ----------------------------------------- */

    if (
        departamento.instructores &&
        departamento.instructores.length > 0
    ) {

        departamento.instructores.forEach(persona => {

            instructoresHTML += `
                <li>
                    <i class="fa-solid fa-user"></i>
                    ${persona}
                </li>
            `;

        });

    }


    /* -----------------------------------------
       COLABORADORES
    ----------------------------------------- */

    if (
        departamento.colaboradores &&
        departamento.colaboradores.length > 0
    ) {

        departamento.colaboradores.forEach(persona => {

            colaboradoresHTML += `
                <li>
                    <i class="fa-solid fa-user"></i>
                    ${persona}
                </li>
            `;

        });

    }


    /* -----------------------------------------
       MODAL
    ----------------------------------------- */

    contenidoEspecialidad.innerHTML = `

        <div class="cabecera-especialidad">

            <div class="icono-especialidad">

                <i class="fa-solid fa-fire-flame-curved"></i>

            </div>

            <div>

                <h2>
                    ${departamento.nombre}
                </h2>

                ${
                    departamento.correo
                    ?
                    `
                    <a href="mailto:${departamento.correo}">
                        <i class="fa-solid fa-envelope"></i>
                        ${departamento.correo}
                    </a>
                    `
                    :
                    ""
                }

            </div>

        </div>


        <div class="contenido-especialidad">


            ${
                departamento.conduccion &&
                departamento.conduccion.length > 0
                ?
                `
                <div class="bloque-especialidad">

                    <h3>
                        <i class="fa-solid fa-user-tie"></i>
                        Conducción
                    </h3>

                    <div class="equipo-especialidad">
                        ${conduccionHTML}
                    </div>

                </div>
                `
                :
                ""
            }


            ${
                departamento.instructores &&
                departamento.instructores.length > 0
                ?
                `
                <div class="bloque-especialidad">

                    <h3>
                        <i class="fa-solid fa-chalkboard-user"></i>
                        Instructores/as
                    </h3>

                    <ul class="lista-especialidad">
                        ${instructoresHTML}
                    </ul>

                </div>
                `
                :
                ""
            }


            ${
                departamento.colaboradores &&
                departamento.colaboradores.length > 0
                ?
                `
                <div class="bloque-especialidad">

                    <h3>
                        <i class="fa-solid fa-users"></i>
                        Colaboradores/as
                    </h3>

                    <ul class="lista-especialidad">
                        ${colaboradoresHTML}
                    </ul>

                </div>
                `
                :
                ""
            }


        </div>

    `;


    /* -----------------------------------------
       ABRIR MODAL
    ----------------------------------------- */

    modalEspecialidad.classList.add("mostrar");

    document.body.style.overflow = "hidden";

}


const cerrarEspecialidad =
    document.getElementById("cerrar-especialidad");

cerrarEspecialidad.addEventListener(
    "click",
    cerrarModalEspecialidad
);


function cerrarModalEspecialidad() {

    modalEspecialidad.classList.remove("mostrar");

    document.body.style.overflow = "";

}

modalEspecialidad.addEventListener("click", function (e) {

    if (e.target === modalEspecialidad) {

        cerrarModalEspecialidad();

    }

});

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        cerrarModalEspecialidad();

    }

});
