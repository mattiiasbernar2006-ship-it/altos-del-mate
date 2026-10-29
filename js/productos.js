/* =========================================================
   PRODUCTOS DE ALTOS DEL MATE
   ---------------------------------------------------------
   Este es el ÚNICO archivo que tenés que tocar para agregar,
   editar o quitar productos. Cada producto va entre { } y
   separado del siguiente con una coma.

   Campos de cada producto:
   - id:          número único (no repetir)
   - nombre:      texto entre comillas
   - categoria:   una de las claves de CATEGORIAS (ver abajo)
   - precio:      número SIN puntos ni $ (ej: 15000). Si ponés null
                  se muestra "Consultar precio"
   - descripcion: texto entre comillas
   - imagen:      ruta de la foto (ej: "img/productos/mi-foto.jpg")
   - disponible:  true (hay stock) o false (muestra "Sin stock")
   - destacado:   true (aparece en "Los más elegidos") o false
   ========================================================= */

/* Categorías: la clave (izquierda) es la que usás en cada producto,
   el texto (derecha) es lo que se ve en los botones de filtro.
   El orden de acá es el orden de los botones. */
const CATEGORIAS = {
  mates: "Mates",
  bombillas: "Bombillas",
  materas: "Materas",
  termos: "Termos",
  yerberas: "Yerberas y azucareras",
  yerbas: "Yerbas",
  kits: "Kits y combos"
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Mate imperial de calabaza",
    categoria: "mates",
    precio: 38000,
    descripcion: "Calabaza seleccionada forrada en cuero, con virola de alpaca cincelada a mano. Un clásico que dura toda la vida.",
    imagen: "img/productos/mate-imperial-calabaza.svg",
    disponible: true,
    destacado: true
  },
  {
    id: 2,
    nombre: "Mate torpedo de calabaza",
    categoria: "mates",
    precio: 22000,
    descripcion: "Forma torpedo, ideal para la yerba con palo. Forrado en cuero vacuno con costura artesanal.",
    imagen: "img/productos/mate-torpedo-calabaza.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 3,
    nombre: "Mate de madera de algarrobo",
    categoria: "mates",
    precio: 12500,
    descripcion: "Torneado en algarrobo, una madera noble que le da un sabor suave al mate. Curado listo para usar.",
    imagen: "img/productos/mate-madera-algarrobo.svg",
    disponible: true,
    destacado: true
  },
  {
    id: 4,
    nombre: "Mate de vidrio forrado en cuero",
    categoria: "mates",
    precio: 9800,
    descripcion: "No necesita curado y no guarda sabores. Forrado en cuero para que no queme las manos.",
    imagen: "img/productos/mate-vidrio-cuero.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 5,
    nombre: "Mate de cerámica artesanal",
    categoria: "mates",
    precio: 14500,
    descripcion: "Pieza única de cerámica esmaltada, hecha a mano. Fácil de limpiar y con colores tierra.",
    imagen: "img/productos/mate-ceramica-artesanal.svg",
    disponible: false,
    destacado: false
  },
  {
    id: 6,
    nombre: "Mate de acero térmico",
    categoria: "mates",
    precio: 16900,
    descripcion: "Doble pared de acero inoxidable: mantiene la temperatura y no se rompe. Perfecto para viajar.",
    imagen: "img/productos/mate-acero-termico.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 7,
    nombre: "Bombilla de alpaca pico de loro",
    categoria: "bombillas",
    precio: 18000,
    descripcion: "Bombilla de alpaca con pico de loro y filtro desarmable para una limpieza fácil.",
    imagen: "img/productos/bombilla-alpaca-pico-loro.svg",
    disponible: true,
    destacado: true
  },
  {
    id: 8,
    nombre: "Bombilla de acero con resorte",
    categoria: "bombillas",
    precio: 6500,
    descripcion: "Acero inoxidable con filtro de resorte, que no se tapa. Resistente y para todos los días.",
    imagen: "img/productos/bombilla-acero-resorte.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 9,
    nombre: "Matera de cuero marrón",
    categoria: "materas",
    precio: 45000,
    descripcion: "Matera de cuero genuino con lugar para termo de 1 litro, mate, yerbera y azucarera. Correa regulable.",
    imagen: "img/productos/matera-cuero-marron.svg",
    disponible: true,
    destacado: true
  },
  {
    id: 10,
    nombre: "Termo de acero 1 litro",
    categoria: "termos",
    precio: 52000,
    descripcion: "Acero inoxidable con pico cebador. Mantiene el agua caliente hasta 24 horas.",
    imagen: "img/productos/termo-acero-1l.svg",
    disponible: true,
    destacado: true
  },
  {
    id: 11,
    nombre: "Set yerbera y azucarera de lata",
    categoria: "yerberas",
    precio: 11000,
    descripcion: "Par de latas con tapa y pico vertedor, para llevar todo en la matera.",
    imagen: "img/productos/set-yerbera-azucarera.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 12,
    nombre: "Yerba orgánica 1 kg",
    categoria: "yerbas",
    precio: 7900,
    descripcion: "Yerba mate orgánica certificada, con palo, de sabor suave y duradero.",
    imagen: "img/productos/yerba-organica-1kg.svg",
    disponible: true,
    destacado: false
  },
  {
    id: 13,
    nombre: "Yerba barbacuá 500 g",
    categoria: "yerbas",
    precio: 6200,
    descripcion: "Secada con el método barbacuá, a leña. Sabor ahumado e intenso.",
    imagen: "img/productos/yerba-barbacua-500g.svg",
    disponible: false,
    destacado: false
  },
  {
    id: 14,
    nombre: "Kit matero completo",
    categoria: "kits",
    precio: null, // null = se muestra "Consultar precio"
    descripcion: "Matera de cuero, termo de 1 litro, mate imperial, bombilla de alpaca, yerbera y azucarera. El regalo perfecto.",
    imagen: "img/productos/kit-matero-completo.svg",
    disponible: true,
    destacado: true
  }
];
