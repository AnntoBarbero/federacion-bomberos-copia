// ========================================
// INFORMACIÓN DE LAS ZONAS
// ========================================

const zonas = {

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
            "Bernardo de Larroudé y Sarah",
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
                nombre: "Nombre del director"
            },
            {
                cargo: "Vice Director",
                nombre: "Nombre del vicedirector"
            }
        ],

        cuarteles: [
            "Cuartel 1",
            "Cuartel 2",
            "Cuartel 3"
        ]
    },


    3: {
        nombre: "Escuela Zonal 3",
        correo: "zona3escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Nombre del director"
            },
            {
                cargo: "Vice Director",
                nombre: "Nombre del vicedirector"
            }
        ],

        cuarteles: [
            "Cuartel 1",
            "Cuartel 2",
            "Cuartel 3"
        ]
    },


    4: {
        nombre: "Escuela Zonal 4",
        correo: "zona4escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Nombre del director"
            },
            {
                cargo: "Vice Director",
                nombre: "Nombre del vicedirector"
            }
        ],

        cuarteles: [
            "Cuartel 1",
            "Cuartel 2",
            "Cuartel 3"
        ]
    },


    5: {
        nombre: "Escuela Zonal 5",
        correo: "zona5escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Nombre del director"
            },
            {
                cargo: "Vice Director",
                nombre: "Nombre del vicedirector"
            }
        ],

        cuarteles: [
            "Cuartel 1",
            "Cuartel 2",
            "Cuartel 3"
        ]
    },


    6: {
        nombre: "Escuela Zonal 6",
        correo: "zona6escuelabvlp@gmail.com",

        equipo: [
            {
                cargo: "Director",
                nombre: "Nombre del director"
            },
            {
                cargo: "Vice Director",
                nombre: "Nombre del vicedirector"
            }
        ],

        cuarteles: [
            "Cuartel 1",
            "Cuartel 2",
            "Cuartel 3"
        ]
    }

};


// ========================================
// ELEMENTOS DEL MODAL
// ========================================

const modalZona =
    document.getElementById("modalZona");

const cerrarModalZona =
    document.getElementById("cerrarModalZona");

const modalZonaTitulo =
    document.getElementById("modalZonaTitulo");

const modalZonaCorreo =
    document.getElementById("modalZonaCorreo");

const modalZonaEquipo =
    document.getElementById("modalZonaEquipo");

const modalZonaCuarteles =
    document.getElementById("modalZonaCuarteles");


// ========================================
// BOTONES DE LAS ZONAS
// ========================================

const botonesZona =
    document.querySelectorAll(".zona-org");


botonesZona.forEach(boton => {

    boton.addEventListener("click", function () {

        const numeroZona =
            this.dataset.zona;

        const zona =
            zonas[numeroZona];

        if (!zona) return;


        // ========================================
        // TÍTULO
        // ========================================

        modalZonaTitulo.textContent =
            zona.nombre;


        // ========================================
        // CORREO
        // ========================================

        modalZonaCorreo.innerHTML = `
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:${zona.correo}">
                ${zona.correo}
            </a>
        `;


        // ========================================
        // EQUIPO
        // ========================================

        modalZonaEquipo.innerHTML = "";

        zona.equipo.forEach(persona => {

            modalZonaEquipo.innerHTML += `

                <div class="persona-zona">

                    <div class="persona-icono">

                        <i class="fa-solid fa-user"></i>

                    </div>

                    <div>

                        <span>
                            ${persona.cargo}
                        </span>

                        <strong>
                            ${persona.nombre}
                        </strong>

                    </div>

                </div>

            `;

        });


        // ========================================
        // CUARTELES
        // ========================================

        modalZonaCuarteles.innerHTML = "";

        zona.cuarteles.forEach(cuartel => {

            modalZonaCuarteles.innerHTML += `

                <div class="cuartel-zona">

                    <i class="fa-solid fa-building"></i>

                    <span>
                        ${cuartel}
                    </span>

                </div>

            `;

        });


        // ========================================
        // MOSTRAR MODAL
        // ========================================

        modalZona.classList.add("activo");

        document.body.classList.add("modal-abierto");

    });

});


// ========================================
// CERRAR MODAL
// ========================================

cerrarModalZona.addEventListener("click", cerrarModal);


function cerrarModal() {

    modalZona.classList.remove("activo");

    document.body.classList.remove("modal-abierto");

}


// ========================================
// CERRAR HACIENDO CLICK AFUERA
// ========================================

modalZona.addEventListener("click", function(e) {

    if (e.target === modalZona) {

        cerrarModal();

    }

});


// ========================================
// CERRAR CON ESC
// ========================================

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        cerrarModal();

    }

});