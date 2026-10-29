# Altos del mate 🧉

Página web de **Altos del mate**: catálogo de mates, bombillas, materas, termos, yerberas, yerbas y kits. Los clientes ven los productos y consultan por WhatsApp. Todavía no hay compra online.

Está hecha con **HTML, CSS y JavaScript puro**. No hay que instalar nada: se abre `index.html` con doble clic y funciona.

---

## 📁 Qué es cada archivo

```
altos-del-mate/
├── index.html            → La página: todas las secciones y sus textos
├── favicon.svg           → El iconito que aparece en la pestaña del navegador
├── README.md             → Esta guía
├── css/
│   └── estilos.css       → El diseño: colores, tipografías, tamaños, versión celular y compu
├── js/
│   ├── config.js         → Tus datos de contacto (WhatsApp, email, Instagram)
│   ├── productos.js      → ⭐ LA LISTA DE PRODUCTOS (el archivo que más vas a usar)
│   ├── datos.js          → La función que "trae" los productos (acá se conectará Supabase)
│   └── app.js            → La lógica: tarjetas, filtros, buscador, detalle, menú
└── img/
    ├── og-imagen.png     → Imagen que se ve al compartir el link por WhatsApp/redes
    └── productos/        → Fotos de los productos (hoy son provisorias)
```

> 💡 En el día a día vas a tocar casi siempre **`js/productos.js`** y **`js/config.js`**. El resto lo tocás solo si querés cambiar textos o el diseño.

---

## 📦 Cómo manejar los productos

Todo se hace en **`js/productos.js`**. Cada producto es un bloque entre `{ }` como este:

```js
{
  id: 15,
  nombre: "Mate de calabaza con virola de acero",
  categoria: "mates",
  precio: 19500,
  descripcion: "Calabaza forrada en cuero con virola de acero inoxidable.",
  imagen: "img/productos/mate-calabaza-virola-acero.jpg",
  disponible: true,
  destacado: false
},
```

| Campo | Qué poner |
|---|---|
| `id` | Un número que **no se repita** (usá el siguiente al último). |
| `nombre` | El nombre, entre comillas. |
| `categoria` | Una de estas: `mates`, `bombillas`, `materas`, `termos`, `yerberas`, `yerbas`, `kits`. |
| `precio` | Número **sin** `$` y **sin** puntos: `15000`, no `$15.000`. Si ponés `null`, aparece "Consultar precio". |
| `descripcion` | Texto entre comillas. |
| `imagen` | Ruta a la foto dentro de `img/productos/`. |
| `disponible` | `true` si hay stock, `false` para mostrar "Sin stock". |
| `destacado` | `true` para que aparezca arriba, en "Los más elegidos". |

### ➕ Agregar un producto
1. Abrí `js/productos.js` en VS Code.
2. Copiá un producto entero, desde la `{` hasta la `},` inclusive.
3. Pegalo antes del `];` final.
4. Cambiale el `id` (que no se repita) y el resto de los datos.
5. Fijate que **todos los productos menos el último terminen en coma** `},`.
6. Guardá (`Ctrl + S`) y recargá la página en el navegador (`F5`).

### ✏️ Editar un producto
Buscá el producto (`Ctrl + F` y escribí el nombre), cambiá lo que quieras, guardá y recargá.

### ➖ Quitar un producto
Borrá el bloque completo, desde la `{` hasta la `},`. Si no lo querés borrar del todo, mejor ponele `disponible: false`.

### 🏷️ Agregar o renombrar una categoría
Al principio de `productos.js` está `CATEGORIAS`. Agregá una línea, por ejemplo `accesorios: "Accesorios",` y usá `categoria: "accesorios"` en tus productos. El botón de filtro aparece solo.

### ⚠️ Si la página queda sin productos
Casi siempre es una coma o una comilla de más o de menos. Apretá `F12` en el navegador, andá a la pestaña **Console** y vas a ver en qué línea está el error. VS Code también marca en rojo la parte que tiene el problema.

---

## 📞 Cambiar WhatsApp, email e Instagram

Abrí **`js/config.js`**:

```js
whatsapp: "123456789",
email: "hola@altosdelmate.com.ar",
instagram: "altosdelmate",
```

- **WhatsApp:** va **solo con números**, en formato internacional. En Argentina es `549` + código de área sin el 0 + número sin el 15.
  Ejemplo: el (011) 15-2345-6789 se escribe `5491123456789`.
- **Email:** tu dirección completa.
- **Instagram:** tu usuario **sin** la `@`.

Se actualizan solos todos los botones: el flotante, el de contacto, el del pie y el de cada producto.

---

## 🎨 Cambiar los colores

Al principio de **`css/estilos.css`** están las variables de color:

```css
--verde-yerba: #3f5a2e;
--cuero: #6b4226;
--crema: #f8f1e4;
...
```

Cambiá el código (`#3f5a2e`) por el que quieras y cambia en toda la página. Para elegir colores podés usar el selector que aparece en VS Code al pasar el mouse sobre el cuadradito de color, o una página como [coolors.co](https://coolors.co).

> Cuidá el **contraste**: el texto oscuro va sobre fondos claros y el texto claro sobre fondos oscuros, así se lee bien.

Las tipografías están en `index.html` (el link de Google Fonts) y en `estilos.css` (`--fuente-titulos` y `--fuente-texto`).

---

## 🖼️ Reemplazar las imágenes de ejemplo

Las imágenes que dicen "FOTO PROVISORIA" están en `img/productos/`.

**Opción fácil (mismo nombre):**
1. Prepará tu foto, mejor si es **cuadrada** (por ejemplo 800×800 px) y liviana (menos de 300 KB; podés achicarla en [squoosh.app](https://squoosh.app)).
2. Guardala en `img/productos/`.
3. En `productos.js`, cambiá la línea `imagen` de ese producto, por ejemplo de `.svg` a `.jpg`:
   `imagen: "img/productos/termo-acero-1l.jpg",`
4. Borrá el `.svg` viejo si querés.

**Consejos:**
- Usá nombres en minúscula, sin espacios ni tildes: `mate-calabaza-negro.jpg` ✅, `Mate Calabaza Ñandú.JPG` ❌.
- Fondo claro y parejo, y buena luz natural: el catálogo queda mucho más prolijo.

**Imagen para compartir (`img/og-imagen.png`):** es lo que se ve al pasar el link por WhatsApp. Podés reemplazarla por otra de **1200×630 px** con el mismo nombre.

---

## ✍️ Cambiar textos (portada, Nosotros, etc.)

Están en **`index.html`**. Buscá la sección (por ejemplo `NOSOTROS`) y cambiá el texto que está entre las etiquetas `<p>` y `</p>`. Hay comentarios `<!-- ... -->` que marcan cada parte.

---

## 🌐 Publicación (GitHub Pages)

Cuando la página esté publicada, abrí `index.html` y en las etiquetas `og:image` y `og:url` cambiá `TU-USUARIO` por tu usuario de GitHub. Así WhatsApp muestra bien la imagen al compartir el link.

Para actualizar la página publicada, después de hacer cambios:

```bash
git add .
git commit -m "Describí acá qué cambiaste"
git push
```

En uno o dos minutos se ve el cambio online.

---

## 🚀 Próximos pasos posibles
- **Supabase:** cargar los productos desde una base de datos y editarlos desde un panel, sin tocar código. Solo hay que cambiar `js/datos.js`.
- **Carrito de consulta:** elegir varios productos y mandar un solo mensaje de WhatsApp con todos.
- **Dominio propio:** por ejemplo `altosdelmate.com.ar`.
