// ============================================
// CONFIGURACIÓN
// ============================================

// Cambiar estos valores a tu número de WhatsApp y correo
const WHATSAPP_NUMBER = "18495245714"; // Formato: 521234567890 (para México)
const BUSINESS_EMAIL = "darlinkrd@gmail.com";
const BUSINESS_PHONE = "+1 849-524-5714";

// ============================================
// FUNCIONES DE NAVEGACIÓN Y SCROLL
// ============================================

function scrollToContacto() {
    const contactoSection = document.getElementById('contacto');
    contactoSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPlanes() {
    const planesSection = document.getElementById('planes');
    planesSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProblema() {
    const problemaSection = document.getElementById('problema');
    problemaSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggleBtn = document.querySelector('.navbar-toggle i');

    // Toggle active class
    navMenu.classList.toggle('active');

    // Change icon (optional but nice)
    if (navMenu.classList.contains('active')) {
        toggleBtn.classList.remove('ri-menu-line');
        toggleBtn.classList.add('ri-close-line');
    } else {
        toggleBtn.classList.remove('ri-close-line');
        toggleBtn.classList.add('ri-menu-line');
    }
}

// Close menu when clicking a link (Mobile)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            const toggleBtn = document.querySelector('.navbar-toggle i');

            // Check if menu is open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');

                // Reset icon
                if (toggleBtn) {
                    toggleBtn.classList.remove('ri-close-line');
                    toggleBtn.classList.add('ri-menu-line');
                }
            }
        });
    });
});

// ============================================
// WHATSAPP INTEGRATION
// ============================================

function contactarWhatsapp(plan = 'Info') {
    let mensaje = '';

    switch (plan) {
        case 'Starter':
            mensaje = `Hola, me gustaría obtener más información sobre el plan Starter ($99). ¿Cuáles son los próximos pasos?`;
            break;
        case 'Plus':
            mensaje = `Hola, me interesa el plan Plus ($149). Me parece la opción ideal para mi negocio.`;
            break;
        case 'Profesional':
            mensaje = `Hola, estoy interesado en el plan Profesional ($199). Me gustaría conocer los detalles y comenzar el proceso.`;
            break;
        default:
            mensaje = `Hola, me gustaría obtener información sobre los servicios de WebIA para mi negocio.`;
    }

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;

    // Abrir en nueva ventana
    window.open(urlWhatsApp, '_blank');
}

// ============================================
// FAQ TOGGLE
// ============================================

function toggleFAQ(element) {
    const answer = element.nextElementSibling;

    // Cerrar todas las otras preguntas
    document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== element) {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        }
    });

    // Toggle la pregunta actual
    element.classList.toggle('active');
    answer.classList.toggle('active');
}

// ============================================
// CONTACTO FORM SUBMISSION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactoForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener valores del formulario
            const nombre = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const telefono = this.querySelector('input[type="tel"]').value;
            const mensaje = this.querySelector('textarea').value;

            // Crear mensaje de WhatsApp
            const textoWhatsApp = `
*Nuevo contacto desde WebIA*

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono}
*Mensaje:* ${mensaje}
            `.trim();

            const mensajeCodificado = encodeURIComponent(textoWhatsApp);
            const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;

            // Mostrar confirmación (opcional)
            alert('¡Gracias! Te redirigiremos a WhatsApp para confirmar tu mensaje.');

            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');

            // Limpiar formulario
            this.reset();
        });
    }
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('card-appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todas las tarjetas
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.problem-card, .plan-card, .testimonio-card').forEach(card => {
        observer.observe(card);
    });
});

// ============================================
// CONTADOR DE ESTADÍSTICAS (OPCIONAL)
// ============================================

function animarNumeros() {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const originalText = stat.innerText;
        const valor = parseInt(originalText);

        if (!isNaN(valor)) {
            // Determine suffix (e.g., " días", "%", or empty)
            const suffix = originalText.replace(valor.toString(), '').trim();
            const hasPercent = originalText.includes('%');

            let actual = 0;
            const incremento = Math.ceil(valor / 50);

            const timer = setInterval(() => {
                actual += incremento;
                if (actual >= valor) {
                    actual = valor;
                    clearInterval(timer);
                }
                // Reconstruct string with original suffix/context if needed
                if (hasPercent) {
                    stat.innerText = actual + '%';
                } else if (suffix) {
                    stat.innerText = actual + ' ' + suffix;
                } else {
                    stat.innerText = actual;
                }
            }, 30);
        }
    });
}

// Animar números cuando se vea la sección hero
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const observerStats = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            animarNumeros();
            observerStats.unobserve(heroStats);
        }
    });
    observerStats.observe(heroStats);
}

// ============================================
// SMOOTH SCROLL PARA LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// VALIDACIÓN DE FORMULARIOS
// ============================================

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarTelefono(telefono) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(telefono);
}

// ============================================
// COPIAR A PORTAPAPELES (OPCIONAL)
// ============================================

function copiarAlPortapapeles(texto) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Copiado al portapapeles: ' + texto);
        });
    } else {
        // Para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copiado al portapapeles');
    }
}

// ============================================
// TRACKING Y ANALYTICS (OPCIONAL)
// ============================================

// Rastrear clics en botones CTA
document.querySelectorAll('.btn-cta').forEach(btn => {
    btn.addEventListener('click', function () {
        console.log('CTA Button clicked: ', this.innerText);
        // Si tienes Google Analytics, puedes agregar:
        // gtag('event', 'click_cta', { 'cta_text': this.innerText });
    });
});

// ============================================
// DETECCIÓN DE MOBILE
// ============================================

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Si es mobile, optimizar algunas cosas
if (isMobile()) {
    document.body.classList.add('is-mobile');
}

// ============================================
// EFECTOS DE HOVER (OPCIONAL)
// ============================================

// Agregar efecto de "ripple" a botones
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Crear efecto ripple (opcional, requiere CSS adicional)
    });
});

// ============================================
// DARK MODE TOGGLE (OPCIONAL)
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============================================
// MODAL PARA FORMULARIOS (OPCIONAL)
// ============================================

function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ============================================
// INIT
// ============================================

console.log('Darlink - Tu web en dias');
