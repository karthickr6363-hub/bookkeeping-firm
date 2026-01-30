document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleIcon = mobileToggle ? mobileToggle.querySelector('i') : null;

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            // Change icon
            if (mobileMenu.classList.contains('active')) {
                if (toggleIcon) toggleIcon.classList.replace('ph-list', 'ph-x');
            } else {
                if (toggleIcon) toggleIcon.classList.replace('ph-x', 'ph-list');
            }
        });
    }

    // 2. Sticky Header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Check local storage
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.querySelector('i').classList.replace('ph-moon', 'ph-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isDark = htmlEl.getAttribute('data-theme') === 'dark';
            if (isDark) {
                htmlEl.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.querySelector('i').classList.replace('ph-sun', 'ph-moon');
            } else {
                htmlEl.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.querySelector('i').classList.replace('ph-moon', 'ph-sun');
            }
        });
    }

    // 4. RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');

    // Check local storage for RTL
    const currentDir = localStorage.getItem('dir') || 'ltr';
    if (currentDir === 'rtl') {
        htmlEl.setAttribute('dir', 'rtl');
        htmlEl.classList.add('rtl');
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isRtl = htmlEl.getAttribute('dir') === 'rtl';
            if (isRtl) {
                htmlEl.setAttribute('dir', 'ltr');
                htmlEl.classList.remove('rtl');
                localStorage.setItem('dir', 'ltr');
            } else {
                htmlEl.setAttribute('dir', 'rtl');
                htmlEl.classList.add('rtl');
                localStorage.setItem('dir', 'rtl');
            }
        });
    }
});
