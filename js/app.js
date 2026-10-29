/* =========================================================
   LÓGICA DE LA PÁGINA
   Normalmente no hace falta tocar este archivo:
   - los productos se editan en productos.js
   - los datos de contacto en config.js
   ========================================================= */

// Lista de productos (se llena al cargar la página)
let productos = [];

// Lo que eligió la persona en el catálogo
let categoriaActual = "todos";
let textoBuscado = "";

/* ---------- Funciones de ayuda ---------- */

// Convierte 15000 en "$ 15.000" (formato argentino, sin centavos)
const formatoPesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

function mostrarPrecio(precio) {
  return precio === null ? "Consultar precio" : formatoPesos.format(precio);
}

// Arma el link de WhatsApp con un mensaje ya escrito.
// encodeURIComponent convierte espacios, tildes y signos (?, $, !)
// a un formato que se puede poner en una dirección web.
function linkWhatsApp(mensaje) {
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

function mensajeProducto(producto) {
  // .replace cambia el espacio "especial" del formato de pesos por uno común
  const precio = producto.precio === null ? "" : " (" + formatoPesos.format(producto.precio).replace(/\u00a0/g, " ") + ")";
  if (!producto.disponible) {
    return "Hola Altos del mate! Me interesa el producto: " + producto.nombre + precio + ". Vi que está sin stock, ¿cuándo vuelve a estar disponible?";
  }
  return "Hola Altos del mate! Me interesa el producto: " + producto.nombre + precio + ". ¿Está disponible?";
}

// Saca tildes y pasa a minúsculas, para que buscar "barbacua" encuentre "Barbacuá"
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Evita que un texto con símbolos como < o & rompa el HTML
function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Tarjetas de producto ---------- */

// Devuelve el HTML de UNA tarjeta.
// Es un <button> para que se pueda abrir también con el teclado.
function crearTarjeta(producto) {
  const sinStock = !producto.disponible;
  return `
    <button class="tarjeta ${sinStock ? "tarjeta--sin-stock" : ""}" data-id="${producto.id}"
            aria-label="Ver detalle de ${escapar(producto.nombre)}">
      ${sinStock ? '<span class="etiqueta-stock">Sin stock</span>' : ""}
      <img class="tarjeta__imagen" src="${escapar(producto.imagen)}" alt="${escapar(producto.nombre)}" loading="lazy" width="400" height="400">
      <span class="tarjeta__cuerpo">
        <span class="tarjeta__categoria">${escapar(CATEGORIAS[producto.categoria] || producto.categoria)}</span>
        <span class="tarjeta__nombre">${escapar(producto.nombre)}</span>
        <span class="tarjeta__precio">${mostrarPrecio(producto.precio)}</span>
      </span>
    </button>`;
}

function mostrarDestacados() {
  const destacados = productos.filter(p => p.destacado);
  document.getElementById("grilla-destacados").innerHTML = destacados.map(crearTarjeta).join("");
}

/* ---------- Catálogo: filtros y buscador ---------- */

function crearFiltros() {
  // Solo mostramos categorías que tengan al menos un producto
  const usadas = Object.keys(CATEGORIAS).filter(clave =>
    productos.some(p => p.categoria === clave)
  );
  const botones = [["todos", "Todos"], ...usadas.map(clave => [clave, CATEGORIAS[clave]])];

  // aria-pressed le indica a los lectores de pantalla qué botón está activo
  document.getElementById("filtros").innerHTML = botones
    .map(([clave, texto]) =>
      `<button class="filtro" data-categoria="${clave}" aria-pressed="${clave === categoriaActual}">${escapar(texto)}</button>`
    )
    .join("");
}

function mostrarCatalogo() {
  const buscado = normalizar(textoBuscado.trim());

  const visibles = productos.filter(p => {
    const coincideCategoria = categoriaActual === "todos" || p.categoria === categoriaActual;
    const coincideTexto = normalizar(p.nombre).includes(buscado);
    return coincideCategoria && coincideTexto;
  });

  const grilla = document.getElementById("grilla-catalogo");
  grilla.innerHTML = visibles.length
    ? visibles.map(crearTarjeta).join("")
    : '<p class="sin-resultados">No encontramos productos. Probá con otra búsqueda o escribinos por WhatsApp.</p>';

  document.getElementById("resultado").textContent =
    visibles.length === 1 ? "1 producto" : visibles.length + " productos";
}

/* ---------- Modal de detalle ---------- */

const modal = document.getElementById("modal");

function abrirModal(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  document.getElementById("modal-imagen").src = producto.imagen;
  document.getElementById("modal-imagen").alt = producto.nombre;
  document.getElementById("modal-categoria").textContent = CATEGORIAS[producto.categoria] || producto.categoria;
  document.getElementById("modal-nombre").textContent = producto.nombre;
  document.getElementById("modal-descripcion").textContent = producto.descripcion;

  const precio = document.getElementById("modal-precio");
  precio.textContent = mostrarPrecio(producto.precio);
  if (!producto.disponible) {
    precio.insertAdjacentHTML("beforeend", ' <span class="modal__stock">Sin stock</span>');
  }

  const boton = document.getElementById("modal-whatsapp");
  boton.href = linkWhatsApp(mensajeProducto(producto));
  boton.textContent = producto.disponible ? "Consultar por WhatsApp" : "Avisame cuando haya stock";

  modal.showModal(); // abre la ventana (y la tecla Esc la cierra sola)
}

document.getElementById("modal-cerrar").addEventListener("click", () => modal.close());

// Si tocan el fondo oscuro (fuera de la ventana), se cierra
modal.addEventListener("click", evento => {
  if (evento.target === modal) modal.close();
});

/* ---------- Menú hamburguesa (celular) ---------- */

const menuBoton = document.getElementById("menu-boton");
const menu = document.getElementById("menu");

function cambiarMenu(abrir) {
  menu.classList.toggle("abierto", abrir);
  menuBoton.setAttribute("aria-expanded", abrir);
  menuBoton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
}

menuBoton.addEventListener("click", () => cambiarMenu(!menu.classList.contains("abierto")));
// Al tocar una opción, el menú se cierra
menu.addEventListener("click", evento => {
  if (evento.target.tagName === "A") cambiarMenu(false);
});

/* ---------- Eventos del catálogo ---------- */

// Clic en cualquier tarjeta (de destacados o del catálogo) → abre el detalle
document.addEventListener("click", evento => {
  const tarjeta = evento.target.closest(".tarjeta");
  if (tarjeta) abrirModal(Number(tarjeta.dataset.id));
});

document.getElementById("filtros").addEventListener("click", evento => {
  const boton = evento.target.closest(".filtro");
  if (!boton) return;
  categoriaActual = boton.dataset.categoria;
  document.querySelectorAll(".filtro").forEach(b =>
    b.setAttribute("aria-pressed", b === boton)
  );
  mostrarCatalogo();
});

// "input" se dispara cada vez que se escribe una letra
document.getElementById("buscador").addEventListener("input", evento => {
  textoBuscado = evento.target.value;
  mostrarCatalogo();
});

/* ---------- Links de contacto y año del pie ---------- */

function configurarContacto() {
  const whatsappGeneral = linkWhatsApp(CONFIG.mensajeGeneral);
  const instagram = "https://instagram.com/" + CONFIG.instagram;

  document.getElementById("whatsapp-flotante").href = whatsappGeneral;
  document.getElementById("contacto-whatsapp").href = whatsappGeneral;
  document.getElementById("pie-whatsapp").href = whatsappGeneral;
  document.getElementById("contacto-email").href = "mailto:" + CONFIG.email;
  document.getElementById("contacto-instagram").href = instagram;
  document.getElementById("pie-instagram").href = instagram;

  document.getElementById("anio").textContent = new Date().getFullYear();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  configurarContacto();
  try {
    productos = await obtenerProductos(); // "await" = esperá a que lleguen los productos
  } catch (error) {
    console.error("No se pudieron cargar los productos:", error);
    document.getElementById("grilla-catalogo").innerHTML =
      '<p class="sin-resultados">No pudimos cargar los productos. Escribinos por WhatsApp.</p>';
    return;
  }
  mostrarDestacados();
  crearFiltros();
  mostrarCatalogo();
}

iniciar();
