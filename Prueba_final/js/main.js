const headerToggle = document.getElementById('header-toggle'),
    mian = document.getElementById('main'),
    navClose = document.getElementById('nav-close')


/*=== MOSTRAR MENU ===*/

if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        mian.classList.add('show-menu')
    })
}


/*=== OCULTAR MENU ===*/
if (navClose) {
    navClose.addEventListener('click', () => {
        mian.classList.remove('show-menu')
    })
}

/*==== FUNCIONALIDAD MENU DESPLEGADO (OPCIONES) ====*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const main = document.getElementById('main')
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== CAMBIO HEADER AL DAR SCROLL ====*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrolly >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SCROLL SECCIONES - OPCION ACTIVA MENU DESPLEGABLE =====*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => { 
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offseTop - 58,
            sectionId = current.getAttribute('id')
        sectionClass = document.querySelector('.nav__manu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/////////////////////////////////////////////////////
