// Safe DOM element handling
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const primaryNav = document.getElementById('primary-nav');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', () => {
            const isExpanded = primaryNav.classList.toggle('active');
            menuButton.setAttribute('aria-expanded', isExpanded);
            menuButton.classList.toggle('open'); // Optional: for styling the button (e.g., hamburger icon)
        });
    }

    // Dynamic footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dynamic "Last Modified" date, nicely formatted
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModified.toLocaleString();
    }

    // Check for missing images and create placeholders
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            this.src = `https://placehold.co/${this.width}x${this.height}/f0f0f0/666/png?text=Missing+Image`;
            this.alt = 'Placeholder: ' + this.alt;
        };
    });
});
