const informacionZonas = {

    1: {
        responsable: "C. Verna",
        nombre: "Zona 1",
        regional: "Regional Norte/Oeste",
        descripcion:
            "Información correspondiente a la Zona 1 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    },

    2: {
        responsable: "I. Chiurazzi",
        nombre: "Zona 2",
        regional: "Regional Norte/Oeste",
        descripcion:
            "Información correspondiente a la Zona 2 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    },

    3: {
        responsable: "H. Yrigoyen",
        nombre: "Zona 3",
        regional: "Regional Norte/Oeste",
        descripcion:
            "Información correspondiente a la Zona 3 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    },

    4: {
        responsable: "J. Fredes Fdez.",
        nombre: "Zona 4",
        regional: "Regional Sur",
        descripcion:
            "Información correspondiente a la Zona 4 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    },

    5: {
        responsable: "M. Muñoz",
        nombre: "Zona 5",
        regional: "Regional Sur",
        descripcion:
            "Información correspondiente a la Zona 5 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    },

    6: {
        responsable: "E. Cleman",
        nombre: "Zona 6",
        regional: "Regional Sur",
        descripcion:
            "Información correspondiente a la Zona 6 de la Escuela de Capacitación.",
        cuarteles:
            "Capacitación correspondiente a las asociaciones y cuarteles de la zona."
    }

};


const botonesZona =
    document.querySelectorAll(".zona-org");

const contenedorInfo =
    document.getElementById("informacion-zona");


botonesZona.forEach(boton => {

    boton.addEventListener("click", function(){

        const numeroZona =
            this.dataset.zona;

        const zona =
            informacionZonas[numeroZona];


        // SACAR ACTIVA DE TODAS
        botonesZona.forEach(btn => {

            btn.classList.remove("activa");

        });


        // ACTIVAR LA SELECCIONADA
        this.classList.add("activa");


        // MOSTRAR INFORMACIÓN
        contenedorInfo.innerHTML = `

            <div class="zona-info-card">

                <div class="zona-info-header">

                    <div class="zona-info-icon">

                        <i class="fa-solid fa-fire-flame-curved"></i>

                    </div>

                    <div>

                        <h3>
                            ${zona.nombre}
                        </h3>

                        <span>
                            ${zona.regional}
                        </span>

                    </div>

                </div>


                <div class="zona-info-contenido">


                    <div class="info-item">

                        <strong>

                            <i class="fa-solid fa-user-tie"></i>

                            Responsable

                        </strong>

                        ${zona.responsable}

                    </div>


                    <div class="info-item">

                        <strong>

                            <i class="fa-solid fa-location-dot"></i>

                            Región

                        </strong>

                        ${zona.regional}

                    </div>


                    <div class="info-item">

                        <strong>

                            <i class="fa-solid fa-graduation-cap"></i>

                            Capacitación

                        </strong>

                        ${zona.descripcion}

                    </div>


                    <div class="info-item">

                        <strong>

                            <i class="fa-solid fa-building"></i>

                            Asociaciones

                        </strong>

                        ${zona.cuarteles}

                    </div>


                </div>

            </div>

        `;


        // LLEVAR AL USUARIO HACIA LA INFORMACIÓN
        contenedorInfo.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});