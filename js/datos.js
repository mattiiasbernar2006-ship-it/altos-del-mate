/* =========================================================
   OBTENER PRODUCTOS
   ---------------------------------------------------------
   Toda la página pide los productos SOLO a través de esta
   función. Hoy los saca del archivo productos.js.

   Cuando conectemos Supabase, vamos a cambiar únicamente el
   contenido de esta función para que los traiga de la base
   de datos. El resto del código no se entera del cambio.

   Es "async" (asíncrona) porque leer de una base de datos por
   internet tarda un ratito: así la página ya está preparada
   para esperar la respuesta.
   ========================================================= */
async function obtenerProductos() {
  return PRODUCTOS;
}
