# 🚀 GUÍA DE DESPLIEGUE Y HOSTING

## Cómo poner tu página web en vivo en diferentes plataformas

---

## 1. OPCIÓN MÁS FÁCIL: Vercel (Recomendado) ⭐

### Ventajas:
✅ Gratuito (para proyectos pequeños)
✅ Deploy en 1 minuto
✅ HTTPS automático
✅ Dominio personalizado
✅ Muy rápido (CDN global)
✅ Actualizaciones automáticas

### Pasos:

#### 1.1 Preparar archivos en GitHub
```bash
# 1. Crear una carpeta para el proyecto
mkdir webia
cd webia

# 2. Copiar los 3 archivos (index.html, styles.css, script.js)

# 3. Inicializar Git (si no lo tienes)
git init
git add .
git commit -m "WebIA landing page"

# 4. Crear repositorio en GitHub.com
# ... crear en https://github.com/new

# 5. Subir a GitHub
git branch -M main
git remote add origin https://github.com/TU_USUARIO/webia.git
git push -u origin main
```

#### 1.2 Deploy en Vercel
```
1. Ir a: https://vercel.com
2. Sign up (puedes usar tu cuenta GitHub)
3. Click "Add New..." → "Project"
4. Seleccionar tu repositorio "webia"
5. Click "Deploy"
6. ¡Listo! Tu página estará en: webia.vercel.app
```

#### 1.3 Agregar dominio personalizado
```
1. En Vercel → Settings → Domains
2. Añadir tu dominio personalizado (ejemplo: webia.com)
3. Seguir instrucciones de DNS
4. Esperar 24-48 horas para propagación
```

---

## 2. ALTERNATIVA: Netlify

### Ventajas
✅ Igual de fácil que Vercel
✅ Build más rápido
✅ Mejor para sites estáticos
✅ Gratuito

### Pasos:
```
1. Ir a: https://app.netlify.com
2. Drag & drop tu carpeta (o conectar GitHub)
3. Configurar settings
4. Deploy automático
```

**Resultado:** webia.netlify.app

---

## 3. TRADICIONAL: Cpanel + FTP (Hosting compartido)

Útil si ya tienes hosting contratado.

### Proveedores populares (México/Latinoamérica):
- **Hostgator.mx** - Económico, buen soporte
- **Bluehost.com** - WordPress-friendly
- **SiteGround** - Premium
- **Nomadhost.com** - Local
- **A2 Hosting** - Muy rápido
- **HostEarth** - Económico
- **Ionos** - Dominio + hosting barato

### Pasos generales:

#### Comprar hosting y dominio
```
1. Elegir proveedor
2. Comprar plan (mínimo $5-10/mes)
3. Comprar dominio si no lo tienes
4. Recibir credenciales FTP
```

#### Uploadar archivos por FTP
```
Descargar cliente FTP:
- FileZilla (gratuito, recomendado)
- WinSCP (Windows)
- Cyberduck (Mac)

Pasos:
1. Abrir FileZilla
2. File → Site Manager → New Site
3. Host: ftp.tudominio.com
4. User: tu_usuario
5. Password: tu_contraseña
6. Click "Connect"
7. Navegar a carpeta "public_html"
8. Arrastra index.html, styles.css, script.js
9. ¡Listo!
```

**Resultado:** tudominio.com

---

## 4. CON SERVIDOR PROPIO: Digital Ocean / Linode

Para más control y escalabilidad.

### Requisitos:
- Conocimientos básicos de terminal
- ~$5-10/mes
- SSH access

### Pasos básicos:
```bash
# 1. Crear droplet en Digital Ocean
# 2. SSH a tu servidor
ssh root@tu_ip

# 3. Instalar nginx
apt update
apt install nginx

# 4. Copiar archivos a /var/www/html/
# (y dar permisos correctos)

# 5. Configurar nginx
# ... (requiere config nginx)

# 6. Dominio (apuntar DNS a IP del servidor)
```

**Resultado:** tudominio.com (muy rápido)

---

## 5. SIN CÓDIGO: Wix / Squarespace / WordPress.com

Si prefieres no tocar código.

### Wix:
```
1. Copia el contenido de index.html
2. Crea secciones en Wix
3. Pega el contenido
4. Personaliza con el editor
```

### Squarespace:
```
Similar a Wix, más diseño
Más caro ($12-27/mes)
Mejor para portfolios
```

### WordPress.com:
```
Crea un blog
Adds secciones manualmente
Instala plugins si necesitas
```

---

## 6. CONFIG RECOMENDADA POR CASO

### Caso: Principiante, sin experiencia técnica
```
👉 RECOMENDACIÓN: Vercel o Netlify
├─ Gratuito
├─ Fácil
├─ Deploy automático
└─ Excelente velocidad
```

### Caso: Tengo hosting compartido contratado
```
👉 RECOMENDACIÓN: FTP a cPanel
├─ Usa lo que ya pagas
├─ Sencillo
├─ Soporte del proveedor
└─ Dominio tuyo
```

### Caso: Quiero máximo control y velocidad
```
👉 RECOMENDACIÓN: Digital Ocean + Nginx
├─ Control total
├─ Muy rápido
├─ Escalable
├─ Necesita conocimientos
```

### Caso: Quiero algo visual y sin código
```
👉 RECOMENDACIÓN: Wix o Squarespace
├─ Editor visual
├─ Plantillas bonitas
├─ Más caro
└─ Menos control
```

---

## 7. DOMINIOS: Dónde comprar

### Opciones:
1. **GoDaddy** - Conocida, buen soporte
2. **Namecheap** - Económica ($8.88/año)
3. **Google Domains** - Simple, integrada
4. **Ionos** - Muy barata ($0.99/año primer año)
5. **Tu proveedor de hosting** - Más fácil

### Precios típicos:
```
.com      = $10-15/año
.mx       = $12-20/año
.co       = $30-40/año
.app      = $12-15/año
.online   = $5-10/año
.site     = $2-5/año
```

### Recomendación:
> Si es un negocio serio: **.com o .com.mx** (~$12/año)
> Si es experimental: **.site o .online** (~$5/año)

---

## 8. EMAIL PROFESIONAL CON TU DOMINIO

Después de comprar dominio, crea email profesional:

### Opciones:

#### A. Mail alojado en hosting
```
Panel cPanel → Email Accounts
Crear: info@tudominio.com
Usuario: info
Contraseña: segura
```
✅ Incluido en hosting
✅ Ilimitados
❌ Interface básica

#### B. Google Workspace (Recomendado)
```
info@tudominio.com via Gmail
1. Comprar en: https://workspace.google.com
2. Enlazar dominio
3. Crear cuentas
Costo: $6/usuario/mes
```
✅ Gmail interface
✅ 30GB almacenaje
✅ Profesional

#### C. Zoho Mail (Económico)
```
Zoho.com → Mail
1. Crear cuenta free (hasta 5 usuarios)
2. Enlazar dominio
3. Crear usuarios
```
✅ Gratuito
✅ 5GB free, más por $2/mes
❌ Interface menos intuitiva

---

## 9. SSL HTTPS (SEGURIDAD)

Necesario para:
✅ Confianza del usuario
✅ Google lo requiere
✅ Formularios seguros
✅ WhatsApp API

### Por plataforma:

**Vercel/Netlify:**
```
Automático ✅
SSL incluido de gratis
https://tudominio.vercel.app automáticamente
```

**Cpanel (Hosting compartido):**
```
Panel → Certficados SSL
Click "Auto-generate"
Listo automático
```

**Digital Ocean:**
```
Terminal:
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d tudominio.com
```

**Costo típico:**
Free - $0 (Let's Encrypt)
Premium - $50-200/año

---

## 10. OPTIMIZACIÓN PRE-DEPLOY

Antes de publicar, optimiza:

### A. Comprimir imágenes
```bash
# Si agregas imágenes, comprimir primero
# Herramientas:
- TinyPNG.com (online, gratis)
- ImageOptim (Mac, gratuito)
- FileOptimizer (Windows, gratuito)
```

### B. Minificar CSS/JS
```bash
# Comprimir el código
# Online: minify-js.com
# O en terminal:
npm install -g minify
minify styles.css > styles.min.css
```

### C. Test de velocidad
```
Herramientas:
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://www.webpagetest.org

Metas:
✓ Mobile < 3 segundos
✓ Desktop < 2 segundos
✓ Lighthouse > 80
```

### D. Test responsivo
```
Revisar en:
☐ iPhone SE (pequeño)
☐ iPhone 12 (normal)
☐ iPad (tablet)
☐ Desktop 1920x1080
☐ Samsung Galaxy A12 (Android)

Tools:
- Responsively.app
- Chrome DevTools (F12)
```

---

## 11. CHECKLIST PRE-LANZAMIENTO

```markdown
☐ Cambié el número de WhatsApp en script.js
☐ Cambié el nombre de la empresa en index.html
☐ Cambié email y teléfono en footer
☐ Dioma correcto (español/inglés)
☐ Links internos funcionan (smooth scroll)
☐ Formulario envía sin errores
☐ Botones descargan / abren correctamente
☐ Página se ve bien en móvil
☐ Página se ve bien en desktop
☐ Velocidad carga es aceptable
☐ SEO básico configurado
☐ Google Analytics agregado (opcional)
☐ Texto sin errores ortográficos
☐ Colores son los correctos
☐ Testimonios son realistas
☐ Precios son correctos
☐ CTAs son claros
☐ SSL/HTTPS funcionan
☐ Dominio apunta correctamente
☐ Email profesional funciona
```

---

## 12. DESPUÉS DEL LANZAMIENTO

### Primeros días:
```
1. Prueba WhatsApp links (¿funcionan?)
2. Prueba formulario (¿llegan correos?)
3. Revisa Google PageSpeed (optimiza si <80)
4. Monitorea uptime (siempre online?)
5. Recibe primeros clientes 🎉
```

### Primera semana:
```
1. Instala Google Analytics
2. Instala Google Search Console
3. Envía XML sitemap a Google
4. Revisa los primeros resultados
5. Toma nota de feedback
```

### Primer mes:
```
1. Analiza datos (tráfico, conversiones)
2. A/B test de copy o colores
3. Optimiza CTAs que fallan
4. Documenta qué funciona
5. Escala lo que funciona
```

---

## 13. TROUBLESHOOTING COMÚN

### "Mi página no se ve"
```
☐ ¿Archivos están en carpeta correcta?
☐ ¿index.html es el archivo principal?
☐ ¿Permisos de archivo son 644?
☐ ¿DNS apunta al servidor correcto?
```

### "Los estilos no cargan (página sin color)"
```
❌ Problema típico: Ruta CSS incorrecta
✅ Solución:
   <link rel="stylesheet" href="styles.css">
   (debe estar en misma carpeta)
```

### "Los botones no funcionan"
```
❌ Problema: Scripts no cargan
✅ Solución:
   <script src="script.js"></script>
   (al final de </body>)
   
❌ Problema: Número WhatsApp incorrecto
✅ Solución:
   const WHATSAPP_NUMBER = "521234567890";
   (formato correcto para tu país)
```

### "El formulario no envía"
```
❌ Problema: Sin backend configurado
ℹ️ Actual: Abre WhatsApp
✅ Próximo: Agregar backend con
   - Formspree.io
   - SendGrid
   - EmailJS
```

---

## 14. PRÓXIMOS PASOS DESPUÉS DE LANZAR

### Corto plazo (1 semana):
- [ ] Compartir en redes sociales
- [ ] Invitar amigos a probar
- [ ] Recopilar feedback
- [ ] Hacer ajustes menores

### Mediano plazo (1 mes):
- [ ] Hacer 1-2 cambios de texto (A/B testing)
- [ ] Instalar analytics
- [ ] Optimizar SEO
- [ ] Crear más contenido

### Largo plazo (3+ meses):
- [ ] Blog integrado
- [ ] Más landing pages
- [ ] Email marketing
- [ ] Integración de CRM

---

## 15. COSTO TOTAL ESTIMADO

```
┌──────────────────────────┬────────┬─────────┐
│ Servicio                 │ Setup  │ Mensual │
├──────────────────────────┼────────┼─────────┤
│ Vercel/Netlify (GRATIS)  │ $0     │ $0      │
│ Dominio (anual)          │ $10    │ $1      │
│ Email Workspace          │ $0     │ $6      │
│ Analytics                │ $0     │ $0 free │
│                          │        │         │
│ TOTAL OPCIÓN 1 (GRATIS)  │ $10    │ $7      │
└──────────────────────────┴────────┴─────────┘

┌──────────────────────────┬────────┬─────────┐
│ Servicio                 │ Setup  │ Mensual │
├──────────────────────────┼────────┼─────────┤
│ Hosting compartido       │ $0     │ $5      │
│ Dominio (anual)          │ $10    │ $1      │
│ Email en hosting         │ $0     │ $0      │
│ SSL (Let's Encrypt)      │ $0     │ $0      │
│                          │        │         │
│ TOTAL OPCIÓN 2 (ECONÓMICA)│$10    │ $6      │
└──────────────────────────┴────────┴─────────┘
```

**Recomendación:** Empieza con Vercel (gratis) y escala si creces.

---

## SOPORTE Y RECURSOS

- **Vercel Docs:** vercel.com/docs
- **Netlify Docs:** docs.netlify.com
- **MDN Web Docs:** developer.mozilla.org
- **Stack Overflow:** stackoverflow.com
- **Google:** googl

e.com (siempre funciona 😄)

---

**Última actualización:** Febrero 2026  
**Versión:** 1.0

¡Tu página merece estar en vivo! 🚀
