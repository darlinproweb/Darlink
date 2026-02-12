# 🔧 CAMBIOS COMUNES EN 5 MINUTOS

Guía rápida para personalizar tu página sin saber de código.

---

## 1. CAMBIAR NOMBRE DE LA EMPRESA

### Paso 1: Abre `index.html` con editor de texto
```
Windows: Click derecho → Abrir con → Notepad++
Mac: Click derecho → Abrir con → TextEdit
```

### Paso 2: Busca (Ctrl+F o Cmd+F)
```
Busca: <h1 class="logo">WebIA</h1>
```

### Paso 3: Reemplaza
```
Cambiar de: <h1 class="logo">WebIA</h1>
Cambiar a:  <h1 class="logo">Tu Empresa</h1>
```

### Paso 4: Guarda
```
Ctrl+S (Windows) o Cmd+S (Mac)
```

### Paso 5: Prueba
```
Doble-click index.html
Verifica que aparezca tu nombre
```

---

## 2. CAMBIAR NÚMERO DE WHATSAPP

### Paso 1: Abre `script.js`

### Paso 2: Busca (Ctrl+F)
```
Busca: const WHATSAPP_NUMBER = "1234567890"
```

### Paso 3: Reemplaza
```
De:  const WHATSAPP_NUMBER = "1234567890"
A:   const WHATSAPP_NUMBER = "521234567890"  (tu número)
```

### Formato según país:
```
México:      52 + número sin 01 (521234567890)
Colombia:    57 + número (573001234567)
Argentina:   54 + número (5491234567890)
España:      34 + número (34912345678)
USA:         1 + número (13015551234)
Otros:       código_país + número_celular
```

### Paso 4: Prueba
```
Abre index.html en navegador
Click "Solicitar Ahora"
Debe abrir WhatsApp con tu número
```

---

## 3. CAMBIAR PRECIOS DE PLANES

### Paso 1: Abre `index.html`

### Paso 2: Busca
```
Starter:     Busca: <span class="amount">50</span>
Profesional: Busca: <span class="amount">200</span>
E-commerce:  Busca: <span class="amount">450</span>
```

### Paso 3: Reemplaza
```
Starter:     Cambiar 50 a tu precio
Profesional: Cambiar 200 a tu precio
E-commerce:  Cambiar 450 a tu precio
```

### Paso 4: Guarda y prueba
```
Ctrl+S
Doble-click index.html
Verifica que aparezcan los precios correctos
```

---

## 4. CAMBIAR COLORS (BRAND COLORS)

### Paso 1: Abre `styles.css`

### Paso 2: Busca sección VARIABLES (línea 1-20)
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    ...
}
```

### Paso 3: Reemplaza colores
```css
De: --primary-color: #2563eb;  (Azul)
A:  --primary-color: #FF6B6B;  (Rojo)
    (usa hexadecimal de tu color)
```

### Dónde obtener códigos color:
```
→ Google: "color picker"
→ Sitio: colorpicker.com
→ Selecciona color → Copia hexadecimal (#XXXXXX)
```

### Ejemplo cambio completo:
```css
:root {
    --primary-color: #FF6B6B;      /* Cambié a rojo */
    --secondary-color: #4ECDC4;    /* Cambié a turquesa */
    --accent-color: #FFE66D;       /* Cambié a amarillo */
}
```

---

## 5. CAMBIAR TEXTO DE BOTONES

### Paso 1: Abre `index.html`

### Paso 2: Busca botón
```
Hero button:    Busca: "Solicitar Ahora"
Plan button:    Busca: "Contratar Plan"
Contacto:       Busca: "Hablar por WhatsApp"
```

### Paso 3: Reemplaza
```
De: <button>Solicitar Ahora</button>
A:  <button>Comenzar Gratis</button>
```

### Paso 4: Aplica cambio
```
1. Ctrl+S (guardar)
2. Doble-click index.html
3. Verifica que cambió el texto
```

---

## 6. CAMBIAR COPYS/TEXTOS PRINCIPALES

### Paso 1: Abre `index.html`

### Paso 2: Busca el texto que quieres cambiar
```
Hero title:  Busca: "Tu página web profesional"
Problema:    Busca: "¿Cuál es tu situación actual?"
Planes:      Busca: "Planes Simples y Transparentes"
```

### Paso 3: Reemplaza el texto
```html
De:  <h2>Tu página web profesional</h2>
A:   <h2>Tu presencia online en 7 días</h2>
```

### Paso 4: Guarda y verifica
```
Ctrl+S
Abre en navegador
Verifica que cambió
```

---

## 7. AGREGAR LOGO O IMAGEN

(Requiere un poco más de técnica)

### Paso 1: Coloca imagen en la carpeta
```
Copia tu logo a: c:\Users\Personal\Documents\Personal Project\
Nombre: logo.png (o logo.jpg)
```

### Paso 2: Abre `index.html`

### Paso 3: Busca dónde poner logo
```html
Después de: <h1 class="logo">WebIA</h1>
Agrega:    <img src="logo.png" alt="WebIA" style="max-width: 100px;">
```

### Paso 4: Personaliza tamaño
```html
Cambia: max-width: 100px;
A:      max-width: 150px;  (o el que quieras)
```

---

## 8. CAMBIAR EMAIL DE CONTACTO

### Paso 1: Abre `index.html`

### Paso 2: Busca
```
Busca: info@webia.com
```

### Paso 3: Reemplaza TODAS las instancias
```
De: info@webia.com
A:  tu_email@tudominio.com
```

### Paso 4: Guarda
```
Ctrl+S
```

---

## 9. AGREGAR NUEVO TESTIMONIO

### Paso 1: Abre `index.html`

### Paso 2: Busca sección TESTIMONIOS
```html
Busca: <section class="testimonios">
```

### Paso 3: Copia un testimonio existente
```html
<div class="testimonio-card">
    <div class="testimonio-header">
        <div class="testimonios-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonios-name">Carlos M. - Peluquería "Estilo Premium"</p>
    </div>
    <p class="testimonio-text">"Increíble..."</p>
</div>
```

### Paso 4: Pégalo y personaliza
```html
<div class="testimonio-card">
    <div class="testimonio-header">
        <div class="testimonios-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonios-name">Tu Cliente - Su Negocio</p>
    </div>
    <p class="testimonio-text">"Su mensaje positivo aquí..."</p>
</div>
```

### Paso 5: Guarda y verifica
```
Ctrl+S
Abre en navegador
Verifica que aparece el nuevo testimonio
```

---

## 10. CAMBIAR DURACIÓN DE ENTREGA (7 DÍAS)

### Paso 1: Abre `index.html`

### Paso 2: Busca todas las instancias
```
Busca: "7 días"
Reemplaza: "5 días" (o el tiempo que uses)
```

### Lugares donde aparece:
```
☐ Hero badge: "⚡ Entrega garantizada en 7 días"
☐ Hero stats: "7 días"
☐ Proceso paso 1: "Día 1-2"
☐ Proceso paso 2: "Día 3-5"
☐ Proceso paso 3: "Día 6"
☐ Proceso paso 4: "Día 7"
☐ Plan features: "Entrega en 7 días"
☐ FAQ: "¿Cómo funciona la garantía de 7 días?"
☐ Contacto: "Tu web está en vivo en 7 días"
```

---

## 11. CAMBIAR CANTIDAD DE SECCIONES EN PLANES

### Paso 1: Abre `index.html`

### Paso 2: Busca en planes
```html
Starter:      "Página web de 5 secciones"
Profesional:  "Página web de 10 secciones"
```

### Paso 3: Reemplaza
```html
De: "Página web de 5 secciones"
A:  "Página web de 8 secciones"
```

---

## 12. DESCATIVAR/OCULTAR UNA SECCIÓN

### Paso 1: Abre `index.html`

### Paso 2: Busca la sección
```html
Ejemplo: <section class="faq">
```

### Paso 3: Comenta (oculta) la sección
```html
Antse: <section class="faq">
        Contenido...
       </section>

Después: <!-- <section class="faq">
          Contenido...
         </section> -->
```

### O simplemente bórrala:
```
1. Selecciona toda la sección
2. Presiona Delete
3. Ctrl+S (guardar)
```

---

## 13. CAMBIAR FUENTE (TIPOGRAFÍA)

### Paso 1: Abre `styles.css`

### Paso 2: Busca
```css
body {
    font-family: 'Inter', sans-serif;
}
```

### Paso 3: Reemplaza
```css
font-family: 'Arial', sans-serif;  /* Normal */
font-family: 'Georgia', serif;     /* Clásica */
font-family: 'Comic Sans', cursive;/* Casual */
```

---

## 14. CAMBIAR IDIOMA A INGLÉS

### Paso 1: Abre `index.html`

### Busca y reemplaza TODO el texto
```html
De español: "Tu página web profesional"
A inglés:   "Your professional website"
```

### Lugares principales:
```
☐ Meta description
☐ Título (title tag)
☐ Hero section
☐ Problema section
☐ Solución section
☐ Planes
☐ Testimonios
☐ Footer
```

**Recomendación:** Usa Google Translate para ayudarte.

---

## 15. CAMBIAR ANCHO MÁXIMO DE PÁGINA

### Paso 1: Abre `styles.css`

### Paso 2: Busca `.container`
```css
.container {
    max-width: 1200px;
}
```

### Paso 3: Reemplaza
```css
max-width: 1400px;  /* Más ancho */
o
max-width: 1000px;  /* Más estrecho */
```

---

## 🚨 ERRORES COMUNES

### Error: La página no carga
```
❌ Problema: Archivo HTML dañado
✅ Solución: Revisa que no borres "<" o ">"
```

### Error: Color no cambia
```
❌ Problema: Colores mal formateados
✅ Solución: Usa formato #RRGGBB (ej: #FF0000)
```

### Error: Botón no funciona
```
❌ Problema: onclick="" incorrecto
✅ Solución: Verifica comillas cerradas onclick="función()"
```

### Error: Página se ve fea después de cambio
```
❌ Problema: Rompiste etiqueta HTML
✅ Solución: Ctrl+Z (deshacer) y intenta de nuevo
```

---

## ✅ CAMBIOS LISTOS PARA PRODUCCIÓN

Cuando hayas hecho todos los cambios, verifica:

```
☐ Nombre empresa correcto
☐ WhatsApp funciona
☐ Precios correctos
☐ Email correcto
☐ Teléfono correcto
☐ Colores están bien
☐ Sin errores ortográficos
☐ Página se ve bien en móvil
☐ Botones funcionan todos
```

---

## 🎬 PRÓXIMO PASO

Sube tu página personalizada a internet:

→ **Ver GUIA_HOSTING.md**

---

**Tip Final:** Cuando termines de hacer cambios, tómate 1 minuto en abrir la página en Tu navegador y probar TODOS los botones. Es más rápido que buscar errores después.

¡Éxito! 🎉
