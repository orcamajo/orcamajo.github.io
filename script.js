// Modal Functionality
const floatingIcons = document.querySelectorAll('.floating-icon');
const modals = document.querySelectorAll('.modal');
const modalBackdrops = document.querySelectorAll('.modal-backdrop');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Open modal when clicking floating icons
floatingIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const modalId = `modal-${icon.dataset.modal}`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    });
});

// Close modal functions
function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
}

// Close on backdrop click
modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', closeAllModals);
});

// Close on close button click
modalCloseButtons.forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Console greeting
console.log('%c Welcome to Jonathan Martin\'s Portfolio! ',
    'background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; font-size: 14px; padding: 10px; border-radius: 5px;');
