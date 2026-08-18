/* =========================================================
   INFORMACIÓN DE ZONAS
========================================================= */

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
                nombre: "Fiama Pico"
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
        correo: "",

        conduccion: [],

        instructores: [
            "Julian Zalazar"
        ],

        colaboradores: []
    },


    vehicular: {
        nombre: "Dpto. Rescate Vehicular",
        correo: "",

        conduccion: [],

        instructores: [
            "Jorge Ruiz"
        ],

        colaboradores: []
    },


    cuerdas: {
        nombre: "Dpto. Rescate con Cuerdas",
        correo: "",

        conduccion: [],

        instructores: [
            "Marcelo Martínez"
        ],

        colaboradores: []
    },


    forestales: {
        nombre: "Dpto. Inc. Forestales",
        correo: "",

        conduccion: [],

        instructores: [
            "Juan Serraino"
        ],

        colaboradores: []
    },


    peligrosos: {
        nombre: "Dpto. Mat. Peligrosos",
        correo: "",

        conduccion: [],

        instructores: [
            "Roberto Sacco"
        ],

        colaboradores: []
    },


    sci: {
        nombre: "Dpto. SCI",
        correo: "",

        conduccion: [],

        instructores: [
            "Alina Tosco"
        ],

        colaboradores: []
    },


    canes: {
        nombre: "Dpto. Búsq./Rescate Canes",
        correo: "",

        conduccion: [],

        instructores: [
            "Pamela Ávalo"
        ],

        colaboradores: []
    },


    acuatico: {
        nombre: "Dpto. Rescate Acuático",
        correo: "",

        conduccion: [],

        instructores: [
            "David Rojas"
        ],

        colaboradores: []
    },


    protocolo: {
        nombre: "Dpto. Protocolo y Ceremonial",
        correo: "",

        conduccion: [],

        instructores: [
            "Roque Martínez"
        ],

        colaboradores: []
    },


    seguridad: {
        nombre: "Dpto. Seg. Bomberil",
        correo: "",

        conduccion: [],

        instructores: [
            "Jazmín Bailo"
        ],

        colaboradores: []
    },


    bombas: {
        nombre: "Dpto. Op. de Bombas",
        correo: "",

        conduccion: [],

        instructores: [
            "Martín Meringer"
        ],

        colaboradores: []
    },


    psicologia: {
        nombre: "Dpto. Psicología Emergencia",
        correo: "",

        conduccion: [],

        instructores: [
            "Gabriela Paoli"
        ],

        colaboradores: []
    },


    estructuras: {
        nombre: "Dpto. Búsq./Rescate Estructuras",
        correo: "",

        conduccion: [],

        instructores: [
            "Daniela Marín"
        ],

        colaboradores: []
    },


    cadetes: {
        nombre: "Dpto. Cadetes",
        correo: "",

        conduccion: [],

        instructores: [
            "Leandro Cortejarena"
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


/* =========================================================
   CERRAR ESPECIALIDAD
========================================================= */

function cerrarModalEspecialidad() {

    modalEspecialidad.classList.remove("mostrar");

    document.body.style.overflow = "";

}


/* =========================================================
   CLICK FUERA DE LA VENTANA
========================================================= */

modalEspecialidad.addEventListener("click", function (e) {

    if (e.target === modalEspecialidad) {

        cerrarModalEspecialidad();

    }

});


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        if (modalEspecialidad.classList.contains("mostrar")) {

            cerrarModalEspecialidad();

        }

        else if (informacionZona.classList.contains("mostrar")) {

            cerrarZona();

        }

    }

});