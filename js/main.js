document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleIcon = mobileToggle ? mobileToggle.querySelector('i') : null;

    // Create/Reference Overlay
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        if (toggleIcon) toggleIcon.classList.replace('ph-x', 'ph-list');
        // Close all mobile dropdowns
        document.querySelectorAll('.mobile-dropdown-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.mobile-nav-link i.ph-minus').forEach(icon => icon.classList.replace('ph-minus', 'ph-plus'));
    };

    const mobileToggles = document.querySelectorAll('.mobile-toggle');
    if (mobileToggles.length > 0 && mobileMenu) {
        mobileToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const isActive = mobileMenu.classList.toggle('active');
                overlay.classList.toggle('active', isActive);

                if (isActive) {
                    if (toggleIcon) toggleIcon.classList.replace('ph-list', 'ph-x');
                    document.body.style.overflow = 'hidden';
                } else {
                    closeMenu();
                }
            });
        });

        // Close on overlay click
        overlay.addEventListener('click', closeMenu);

        // Close on Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // 1.1 Mobile Dropdown Accorions
    const mobileDropdownToggles = document.querySelectorAll('[data-toggle]');
    mobileDropdownToggles.forEach(toggler => {
        toggler.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggler.getAttribute('data-toggle');
            const content = document.getElementById(targetId);
            const icon = toggler.querySelector('i');

            if (content) {
                const isActive = content.classList.contains('active');

                // Close others if desired (optional, keeping it simple for now)

                content.classList.toggle('active');
                if (icon) {
                    if (icon.classList.contains('ph-plus')) {
                        icon.classList.replace('ph-plus', 'ph-minus');
                    } else {
                        icon.classList.replace('ph-minus', 'ph-plus');
                    }
                }
            }
        });
    });

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

    // 5. Active Nav Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        // Remove active class from all first to avoid conflicts with static HTML
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }

        // Handle special case for Home/Index
        if ((currentPath === 'index.html' || currentPath === '') && href === 'index.html') {
            link.classList.add('active');
        }
    });
});
