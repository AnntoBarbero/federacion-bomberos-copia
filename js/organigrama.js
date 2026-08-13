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

        equipo: [],

        cuarteles: []
    },


    3: {
        nombre: "Escuela Zonal 3",
        correo: "zona3escuelabvlp@gmail.com",

        equipo: [],

        cuarteles: []
    },


    4: {
        nombre: "Escuela Zonal 4",
        correo: "zona4escuelabvlp@gmail.com",

        equipo: [],

        cuarteles: []
    },


    5: {
        nombre: "Escuela Zonal 5",
        correo: "zona5escuelabvlp@gmail.com",

        equipo: [],

        cuarteles: []
    },


    6: {
        nombre: "Escuela Zonal 6",
        correo: "zona6escuelabvlp@gmail.com",

        equipo: [],

        cuarteles: []
    }

};


// ELEMENTOS
const botonesZona = document.querySelectorAll(".zona-org");
const informacionZona = document.getElementById("informacion-zona");


// ABRIR INFORMACIÓN DE ZONA
botonesZona.forEach(boton => {

    boton.addEventListener("click", () => {

        const numeroZona = boton.dataset.zona;

        const zona = informacionZonas[numeroZona];

        if (!zona) return;


        // EQUIPO
        let equipoHTML = "";

        if (zona.equipo.length > 0) {

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


        // CUARTELES
        let cuartelesHTML = "";

        if (zona.cuarteles.length > 0) {

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


        // MOSTRAR VENTANA
        informacionZona.innerHTML = `

            <div class="ventana-zona">

                <button
                    class="cerrar-zona"
                    id="cerrar-zona">

                    <i class="fa-solid fa-xmark"></i>

                </button>


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


        // MOSTRAR
        informacionZona.classList.add("modal-zona");


        // CERRAR
        document
            .getElementById("cerrar-zona")
            .addEventListener("click", cerrarZona);


    });

});


// CERRAR VENTANA
function cerrarZona() {

    informacionZona.classList.remove("modal-zona");

}


// CERRAR HACIENDO CLICK FUERA
informacionZona.addEventListener("click", function(e) {

    if (e.target === informacionZona) {

        cerrarZona();

    }

});


// CERRAR CON ESC
document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        cerrarZona();

    }

});