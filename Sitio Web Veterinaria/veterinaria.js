/* ============================================
   VETERINARIA HUELLITAS
   JAVASCRIPT
============================================ */


/* MENÚ MÓVIL */

const btnMenu =
    document.getElementById("btnMenu");

const menuMovil =
    document.getElementById("menuMovil");


btnMenu.addEventListener("click", function () {

    menuMovil.classList.toggle("activo");

});


document
    .querySelectorAll(".menu-movil a")
    .forEach(enlace => {

        enlace.addEventListener("click", function () {

            menuMovil.classList.remove("activo");

        });

    });


/* ACORDEÓN */

const acordeones =
    document.querySelectorAll(".acordeon-item");


acordeones.forEach(item => {

    const boton =
        item.querySelector(".acordeon-titulo");

    boton.addEventListener("click", function () {

        const estabaActivo =
            item.classList.contains("activo");


        acordeones.forEach(otro => {

            otro.classList.remove("activo");

            const simbolo =
                otro.querySelector(".acordeon-titulo b");

            simbolo.textContent = "+";

        });


        if (!estabaActivo) {

            item.classList.add("activo");

            const simbolo =
                item.querySelector(".acordeon-titulo b");

            simbolo.textContent = "−";

        }

    });

});


/* DATOS DE SERVICIOS */

const servicios = {

    consulta: {

        titulo: "Consulta General",

        icono: "🩺",

        descripcion:
            "Atendemos a todas las mascotas que requieren una evaluación médica básica para cuidar y mantener su salud.",

        subtitulo:
            "¿Qué ofrecemos?",

        lista: [

            "Valoración integral del estado de salud de tu mascota.",

            "Diagnóstico preliminar de enfermedades comunes.",

            "Recomendaciones médicas.",

            "Tratamientos iniciales.",

            "Derivación a servicios especializados cuando sea necesario."

        ]

    },


    vacunacion: {

        titulo: "Vacunación",

        icono: "💉",

        descripcion:
            "Protegemos a tus mascotas mediante un adecuado control de vacunación, ayudando a prevenir diferentes enfermedades y mantenerlas saludables.",

        subtitulo:
            "¿Por qué vacunar?",

        lista: [

            "Previene enfermedades graves y contagiosas.",

            "Protege a tu mascota y a las personas que la rodean.",

            "Es un requisito para viajes, adopciones y registros legales.",

            "Promueve una mejor prevención de enfermedades."

        ]

    },


    esterilizacion: {

        titulo: "Esterilización de Mascotas",

        icono: "✂️",

        descripcion:
            "La esterilización es un acto de amor y responsabilidad. Ayuda a controlar la sobrepoblación de animales y mejorar su calidad de vida.",

        subtitulo:
            "Beneficios de esterilizar",

        lista: [

            "Previene camadas no deseadas.",

            "Reduce el abandono de animales.",

            "Disminuye el riesgo de ciertos tipos de cáncer.",

            "Disminuye comportamientos agresivos.",

            "Mejora la salud general y longevidad."

        ]

    }

};


/* ABRIR SERVICIO */

function abrirServicio(tipo) {

    const servicio =
        servicios[tipo];

    const modal =
        document.getElementById("modalServicio");

    const contenido =
        document.getElementById("contenidoServicio");


    contenido.innerHTML = `

        <div style="
            width:60px;
            height:60px;
            background:#fff4c7;
            border-radius:18px;
            display:grid;
            place-items:center;
            font-size:28px;
        ">
            ${servicio.icono}
        </div>

        <h2>
            ${servicio.titulo}
        </h2>

        <p>
            ${servicio.descripcion}
        </p>

        <h3 style="
            color:#183b56;
            margin-top:25px;
            margin-bottom:10px;
        ">
            ${servicio.subtitulo}
        </h3>

        <ul class="modal-lista">

            ${servicio.lista
                .map(elemento => `
                    <li>🐾 ${elemento}</li>
                `)
                .join("")}

        </ul>

        <a
            href="#cita"
            onclick="cerrarServicio()"
            class="btn-principal"
            style="
                display:inline-block;
                margin-top:10px;
            ">
            📅 Solicitar cita
        </a>
    `;


    modal.classList.add("activo");

}


/* CERRAR SERVICIO */

function cerrarServicio() {

    document
        .getElementById("modalServicio")
        .classList.remove("activo");

}


/* CERRAR MODAL HACIENDO CLICK AFUERA */

document
    .getElementById("modalServicio")
    .addEventListener("click", function (evento) {

        if (evento.target === this) {

            cerrarServicio();

        }

    });


/* FORMULARIO DE CITA */

const formularioCita =
    document.getElementById("formCita");


formularioCita.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nombre =
            this.querySelector(
                'input[placeholder="Nombre completo"]'
            ).value;

        const mascota =
            this.querySelector(
                'input[placeholder="Nombre de tu mascota"]'
            ).value;


        mostrarMensaje(
            `¡Cita solicitada para ${mascota}! 🐾`
        );


        this.reset();

    }
);


/* FECHA MÍNIMA */

const fecha =
    document.getElementById("fechaCita");


const hoy =
    new Date();


const año =
    hoy.getFullYear();


const mes =
    String(
        hoy.getMonth() + 1
    ).padStart(2, "0");


const dia =
    String(
        hoy.getDate()
    ).padStart(2, "0");


fecha.min =
    `${año}-${mes}-${dia}`;


/* MENSAJE */

function mostrarMensaje(texto) {

    const mensaje =
        document.getElementById("mensaje");


    mensaje.textContent =
        texto;


    mensaje.classList.add("mostrar");


    setTimeout(function () {

        mensaje.classList.remove("mostrar");

    }, 3000);

}


/* BOTÓN SUBIR */

const btnArriba =
    document.getElementById("btnArriba");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            btnArriba.classList.add("mostrar");

        } else {

            btnArriba.classList.remove("mostrar");

        }

    }
);


btnArriba.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ANIMACIÓN AL ENTRAR */

const elementos =
    document.querySelectorAll(
        ".servicio-card, .cuidado-card, .contacto-card, .beneficio"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .12
        }
    );


elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity .6s ease, transform .6s ease";

    observador.observe(elemento);

});


/* CERRAR MODAL CON ESC */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            cerrarServicio();

        }

    }
);