// Base de datos local de entrenadores con sus respectivas fotos
const entrenadoresData = {
    hillman: { nombre: "Seymour Hillman", foto: "hillman.webp" },
    lina: { nombre: "Aquilina 'Lina' Schiller", foto: "lina.webp" },
    travis: { nombre: "Percival Travis", foto: "travis.webp" }
};

function mostrarModo(modo) {
    document.getElementById("pantalla-menu").style.display = "none";
    
    if (modo === 'adivinar-jugador') {
        document.getElementById("pantalla-juego").style.display = "block";
    } else if (modo === 'crear-equipo') {
        document.getElementById("pantalla-creador-equipo").style.display = "block";
        actualizarFotoEntrenador(); // Carga el entrenador por defecto
        cambiarFormacionCampo();    // Dibuja la alineación por defecto
       } else if (modo === 'adivinar-tecnica') {
        document.getElementById("pantalla-tecnicas").style.display = "block";
    } else if (modo === 'duelos') {
        document.getElementById("pantalla-duelos").style.display = "block";
        iniciarDuelos();
    }
}

function mostrarMenu() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-creador-equipo").style.display = "none";
    document.getElementById("pantalla-tecnicas").style.display = "none";
        document.getElementById("pantalla-duelos").style.display = "none";
     document.getElementById("pantalla-menu").style.display = "grid";


// CAMBIAR FOTO DEL ENTRENADOR EN TIEMPO REAL
function actualizarFotoEntrenador() {
    const selector = document.getElementById("select-entrenador").value;
    const info = entrenadoresData[selector];
    
    const previewDiv = document.getElementById("preview-foto-entrenador");
    const textoNombre = document.getElementById("nombre-entrenador-texto");
    
    if(info) {
        textoNombre.innerText = info.nombre;
        previewDiv.innerHTML = `<img src="${info.foto}" style="width:100%; height:100%; object-fit:cover;">`;
    }
}

// GENERADOR DINÁMICO DE HUECOS (SLOTS) SEGÚN LA FORMACIÓN TÁCTICA
function cambiarFormacionCampo() {
    const formacion = document.getElementById("select-alineacion").value;
    
    let numDefensas = 4;
    let numMedios = 4;
    let numDelanteros = 2;
    
    if (formacion === "433") {
        numDefensas = 4; numMedios = 3; numDelanteros = 3;
    } else if (formacion === "343") {
        numDefensas = 3; numMedios = 4; numDelanteros = 3;
    }

    // Dibujar cada línea del campo de juego
    dibujarLineaPosicion("contenedor-delanteros", "Delantero", "DL", numDelanteros);
    dibujarLineaPosicion("contenedor-mediocampistas", "Centrocampista", "MD", numMedios);
    dibujarLineaPosicion("contenedor-defensas", "Defensa", "DF", numDefensas);
    dibujarLineaPosicion("contenedor-portero", "Portero", "PR", 1);

    // Volver a activar los buscadores predictivos sobre las casillas nuevas creadas
    activarBuscadoresCampo();
}

function dibujarLineaPosicion(idContenedor, posicionReal, prefijoLabel, cantidad) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = ""; // Limpiar los antiguos slots

    for (let i = 1; i <= cantidad; i++) {
        const slot = document.createElement("div");
        slot.className = "slot-jugador";
        slot.setAttribute("data-posicion", posicionReal);
        
        slot.innerHTML = `
            <div class="vista-foto-slot" id="foto-${prefijoLabel.toLowerCase()}${i}">❔</div>
            <input type="text" class="busc-campo" id="input-${prefijoLabel.toLowerCase()}${i}" placeholder="Buscar ${prefijoLabel}..." autocomplete="off">
            <div class="sugerencias-campo" style="display:none;"></div>
        `;
        contenedor.appendChild(slot);
    }
}

// PROGRAMACIÓN DE LOS BUSCADORES INTERNOS DEL CAMPO
function activarBuscadoresCampo() {
    const slots = document.querySelectorAll(".slot-jugador");

    slots.forEach(slot => {
        const input = slot.querySelector(".busc-campo");
        const sugerenciasDiv = slot.querySelector(".sugerencias-campo");
        const fotoDiv = slot.querySelector(".vista-foto-slot");
        const posRequerida = slot.getAttribute("data-posicion");

        if (input.dataset.activo === "true") return;
        input.dataset.activo = "true";

        input.addEventListener("input", () => {
            const texto = input.value.toLowerCase();
            sugerenciasDiv.innerHTML = "";
            if (!texto) {
                sugerenciasDiv.style.display = "none";
                return;
            }

            // Filtra los personajes globales de script.js
            const filtrados = jugadores.filter(j => 
                j.posicion === posRequerida && 
                j.nombre.toLowerCase().includes(texto)
            );

            if (filtrados.length === 0) {
                sugerenciasDiv.style.display = "none";
                return;
            }

            sugerenciasDiv.style.display = "block";

            filtrados.forEach(j => {
                const item = document.createElement("div");
                item.style.padding = "6px";
                item.style.cursor = "pointer";
                item.style.display = "flex";
                item.style.alignItems = "center";
                item.style.borderBottom = "1px solid #3a506b";
                item.style.background = "#1c2541";
                
                const imgHtml = j.foto ? `<img src="${j.foto}" style="width:20px; height:20px; border-radius:3px; margin-right:6px; object-fit:cover;">` : '';
                item.innerHTML = `${imgHtml}<span>${j.nombre}</span>`;

                item.addEventListener("click", () => {
                    input.value = j.nombre;
                    sugerenciasDiv.innerHTML = "";
                    sugerenciasDiv.style.display = "none";
                    if (j.foto) {
                        fotoDiv.innerHTML = `<img src="${j.foto}" style="width:100%; height:100%; object-fit:cover;">`;
                    }
                });

                sugerenciasDiv.appendChild(item);
            });
        });

        document.addEventListener("click", (e) => {
            if (!slot.contains(e.target)) {
                sugerenciasDiv.innerHTML = "";
                sugerenciasDiv.style.display = "none";
            }
        });
    });
}

function exportarAlineacion() {
    const nombreEquipo = document.getElementById("input-nombre-equipo").value || "Mi Equipo Ideal";
    const entrenadorSelect = document.getElementById("select-entrenador").value;
    const entrenadorNombre = entrenadoresData[entrenadorSelect].nombre;
    const formacionTexto = document.getElementById("select-alineacion").options[document.getElementById("select-alineacion").selectedIndex].text;

    let mensaje = `📋 ${nombreEquipo.toUpperCase()} 📋\n`;
    mensaje += `👴 Entrenador: ${entrenadorNombre}\n`;
    mensaje += `📐 Táctica: ${formacionTexto}\n\n`;

    const inputs = document.querySelectorAll(".busc-campo");
    mensaje += `⚽ JUGADORES ELEGIDOS:\n`;
    inputs.forEach(inp => {
        if (inp.value) {
            mensaje += `   - ${inp.value}\n`;
        }
    });

    alert(mensaje);
}
// ------------------------------------------------------------------
// MODO 4: ¿QUIÉN ES MEJOR? (DUELOS IE 1 Y 2 - SIN REPETICIONES)
// ------------------------------------------------------------------
const duelosPersonalizados = [
    { jugador1: "Axel Blaze", p1: 53, jugador2: "Shawn Froste", p2: 47 },
    { jugador1: "Mark Evans", p1: 56, jugador2: "Nelson Rockwell", p2: 44 },
    { jugador1: "Jude Sharp", p1: 58, jugador2: "Caleb Stonewall", p2: 42 },
    { jugador1: "Byron Love", p1: 44, jugador2: "Xavier Foster", p2: 56 },
    { jugador1: "Claude Beacons", p1: 51, jugador2: "Bryce Whitingale", p2: 49 },
    { jugador1: "Dave Quagmire", p1: 57, jugador2: "Joseph King", p2: 43 },
    { jugador1: "Nathan Swift", p1: 54, jugador2: "Hurley Kane", p2: 46 },
    { jugador1: "Jordan Greenway", p1: 43, jugador2: "Erik Eagle", p2: 57 },
    { jugador1: "David Samford", p1: 56, jugador2: "Kevin Dragonfly", p2: 44 },
    { jugador1: "Isabelle Trick", p1: 58, jugador2: "Wilbur Watkins", p2: 42 },
    { jugador1: "Jack Wallside", p1: 55, jugador2: "Scott Banyan", p2: 45 },
    { jugador1: "Darren LaChance", p1: 59, jugador2: "Thomas Feldt", p2: 41 },
    { jugador1: "Bobby Shearer", p1: 54, jugador2: "Malcolm Night", p2: 46 },
    { jugador1: "Victoria Vanguard", p1: 53, jugador2: "Suzette Hartland", p2: 47 },
    { jugador1: "Albert Denver", p1: 52, jugador2: "Ben North", p2: 48 },
    { jugador1: "Zeke Valanche", p1: 55, jugador2: "Carrie McCuring", p2: 45 },
    { jugador1: "Marvin Murdock", p1: 52, jugador2: "Thomas Murdock", p2: 48 },
    { jugador1: "Seymour Hillman", p1: 62, jugador2: "Paul Siddon", p2: 38 },
    { jugador1: "Nigel August", p1: 51, jugador2: "Grant Cook", p2: 49 },
    { jugador1: "Shadow Cimmerian", p1: 53, jugador2: "William Glass", p2: 47 }
];

let votosDuelosGuardados = JSON.parse(localStorage.getItem("caravana_votos_duelos")) || [];
let dueloRespondido = false;

function iniciarDuelos() {
    votosDuelosGuardados = JSON.parse(localStorage.getItem("caravana_votos_duelos")) || [];
    cargarDueloActual();
    renderizarHistorialDuelos();
}

function obtenerDatosJugadorDuelo(nombre) {
    if (typeof jugadores !== "undefined" && Array.isArray(jugadores)) {
        const enLista = jugadores.find(j => j.nombre === nombre);
        if (enLista) return enLista;
    }
    return { nombre: nombre, posicion: "Jugador", equipo: "Inazuma Eleven", foto: "" };
}

function cargarDueloActual() {
    dueloRespondido = false;
    const indiceActual = votosDuelosGuardados.length;
    const zonaActiva = document.getElementById("zona-duelo-activo");
    const subtitulo = document.getElementById("subtitulo-duelos");

    if (indiceActual >= duelosPersonalizados.length) {
        zonaActiva.style.display = "none";
        subtitulo.innerText = "✅ Ya has completado todos los duelos. Este es tu historial bloqueado:";
        return;
    }

    zonaActiva.style.display = "flex";
    subtitulo.innerText = `Duelo ${indiceActual + 1} de ${duelosPersonalizados.length} • Elige a tu favorito`;

    document.getElementById("duelo-porcentaje-1").style.display = "none";
    document.getElementById("duelo-porcentaje-2").style.display = "none";
    document.getElementById("duelo-card-1").style.borderColor = "#4cc9f0";
    document.getElementById("duelo-card-2").style.borderColor = "#4cc9f0";

    const duelo = duelosPersonalizados[indiceActual];
    const j1 = obtenerDatosJugadorDuelo(duelo.jugador1);
    const j2 = obtenerDatosJugadorDuelo(duelo.jugador2);

    document.getElementById("duelo-img-1").src = j1.foto;
    document.getElementById("duelo-nombre-1").innerText = j1.nombre;
    document.getElementById("duelo-posicion-1").innerText = j1.posicion || "";
    document.getElementById("duelo-equipo-1").innerText = j1.equipo || "";
    document.getElementById("duelo-porcentaje-1").innerText = duelo.p1 + "%";

    document.getElementById("duelo-img-2").src = j2.foto;
    document.getElementById("duelo-nombre-2").innerText = j2.nombre;
    document.getElementById("duelo-posicion-2").innerText = j2.posicion || "";
    document.getElementById("duelo-equipo-2").innerText = j2.equipo || "";
    document.getElementById("duelo-porcentaje-2").innerText = duelo.p2 + "%";
}

function elegirEnDuelo(opcion) {
    const indiceActual = votosDuelosGuardados.length;
    if (dueloRespondido || indiceActual >= duelosPersonalizados.length) return;
    dueloRespondido = true;

    const duelo = duelosPersonalizados[indiceActual];
    const elegido = opcion === 1 ? duelo.jugador1 : duelo.jugador2;
    const descartado = opcion === 1 ? duelo.jugador2 : duelo.jugador1;

    document.getElementById("duelo-porcentaje-1").style.display = "block";
    document.getElementById("duelo-porcentaje-2").style.display = "block";
    document.getElementById(opcion === 1 ? "duelo-card-1" : "duelo-card-2").style.borderColor = "#2a9d8f";

    votosDuelosGuardados.push({
        dueloNum: indiceActual + 1,
        elegido: elegido,
        descartado: descartado
    });
    localStorage.setItem("caravana_votos_duelos", JSON.stringify(votosDuelosGuardados));

    setTimeout(() => {
        cargarDueloActual();
        renderizarHistorialDuelos();
    }, 1100);
}

function renderizarHistorialDuelos() {
    const contenedor = document.getElementById("historial-duelos");
    if (!contenedor) return;

    if (votosDuelosGuardados.length === 0) {
        contenedor.innerHTML = "";
        return;
    }

    let html = `<h3 style="color:#4cc9f0; border-bottom:1px solid #3a506b; padding-bottom:8px; margin-bottom:12px;">📋 Tu historial de elecciones (${votosDuelosGuardados.length}/${duelosPersonalizados.length})</h3>`;

    votosDuelosGuardados.forEach(v => {
        const jElegido = obtenerDatosJugadorDuelo(v.elegido);
        const jDescartado = obtenerDatosJugadorDuelo(v.descartado);

        html += `
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(11,19,43,0.9); border:1px solid #3a506b; border-radius:8px; padding:10px 14px; margin-bottom:8px;">
                <div style="display:flex; align-items:center; gap:10px; color:#52b788; font-weight:bold;">
                    <img src="${jElegido.foto}" style="width:36px; height:36px; border-radius:6px; object-fit:cover; border:2px solid #52b788;">
                    <span>✅ ${v.elegido}</span>
                </div>
                <span style="color:#6c757d; font-size:12px; font-weight:bold;">VS</span>
                <div style="display:flex; align-items:center; gap:10px; color:#adb5bd; opacity:0.65;">
                    <span>❌ ${v.descartado}</span>
                    <img src="${jDescartado.foto}" style="width:36px; height:36px; border-radius:6px; object-fit:cover; filter:grayscale(100%);">
                </div>
            </div>
        `;
    });
        contenedor.innerHTML = html;
} 
// ------------------------------------------------------------------
// ENCICLOPEDIA / BUSCADOR RÁPIDO DE JUGADORES
// ------------------------------------------------------------------
function abrirBuscadorEnciclopedia() {
    document.getElementById("modal-enciclopedia").style.display = "flex";
    document.getElementById("input-enciclopedia").value = "";
    document.getElementById("sugerencias-enciclopedia").style.display = "none";
    document.getElementById("ficha-enciclopedia").style.display = "none";
    setTimeout(() => document.getElementById("input-enciclopedia").focus(), 100);
}

function cerrarBuscadorEnciclopedia() {
    document.getElementById("modal-enciclopedia").style.display = "none";
}

function filtrarEnciclopedia() {
    const texto = document.getElementById("input-enciclopedia").value.toLowerCase().trim();
    const lista = document.getElementById("sugerencias-enciclopedia");
    lista.innerHTML = "";

    if (!texto || typeof jugadores === "undefined") {
        lista.style.display = "none";
        return;
    }

    const coincidencias = jugadores.filter(j => j.nombre.toLowerCase().includes(texto)).slice(0, 10);

    if (coincidencias.length === 0) {
        lista.style.display = "none";
        return;
    }

    lista.style.display = "block";
    coincidencias.forEach(j => {
        const item = document.createElement("div");
        item.className = "sugerencia-item";
   item.innerHTML = '<img src="' + j.foto + '" alt=""><span>' + j.nombre + '</span>';;
        item.onclick = () => mostrarFichaJugador(j);
        lista.appendChild(item);
    });
}

function mostrarFichaJugador(j) {
    document.getElementById("sugerencias-enciclopedia").style.display = "none";
    document.getElementById("input-enciclopedia").value = j.nombre;

    document.getElementById("ficha-foto").src = j.foto || "";
    document.getElementById("ficha-nombre").innerText = j.nombre;
    document.getElementById("ficha-equipo").innerText = j.equipo || "Desconocido";
    document.getElementById("ficha-posicion").innerText = j.posicion || "Desconocida";
    document.getElementById("ficha-elemento").innerText = j.elemento || "Desconocido";
    document.getElementById("ficha-saga").innerText = j.saga || "Inazuma Eleven";

    document.getElementById("ficha-enciclopedia").style.display = "block";
}
