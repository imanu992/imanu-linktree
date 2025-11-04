document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();

    yearSpan.textContent = currentYear;
});