// Set timestamp (Criteria 13)
document.getElementById('timestamp').value = new Date().toISOString();

// Animate cards sequentially (Criteria 15)
document.querySelectorAll('.card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

// Modal functionality (Criteria 12)
document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});