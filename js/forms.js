document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Basic Validation
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const consent = document.getElementById('consent');

            // Reset errors
            document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

            if (!fullName.value.trim()) {
                showError(fullName, 'Name is required');
                isValid = false;
            }

            if (!email.value.trim() || !validateEmail(email.value)) {
                showError(email, 'Valid email is required');
                isValid = false;
            }

            if (!phone.value.trim()) {
                showError(phone, 'Phone number is required');
                isValid = false;
            }

            if (!consent.checked) {
                alert('Please agree to the privacy policy.');
                isValid = false;
            }

            if (isValid) {
                // Simulate submission
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;

                setTimeout(() => {
                    form.style.display = 'none';
                    successMsg.style.display = 'block';
                    window.scrollTo({ top: successMsg.offsetTop - 100, behavior: 'smooth' });
                }, 1500);
            }
        });
    }
});

function showError(input, message) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-msg');
    if (error) {
        error.innerText = message;
        error.style.display = 'block';
    }
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
