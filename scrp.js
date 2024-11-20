document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado con éxito!');
    });

    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.previousElementSibling.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.previousElementSibling.classList.remove('active');
            }
        });
    });
});
