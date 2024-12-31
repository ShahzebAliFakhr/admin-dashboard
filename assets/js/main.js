document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('[data-toggle="collapse"]');
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-button');
    const toggleIcon = document.getElementById('toggleIcon');
    const dropdownContent =  document.getElementById('dropdowncontant');
    const touch = document.getElementById('touch');
    const slide = document.querySelector('.slide');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSelector = toggle.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);
    
            // Toggle the "show" class on the target element
            if (targetElement.classList.contains('show')) {
                targetElement.classList.remove('show');
            } else {
                // Close other open dropdowns (optional)
                const parent = targetElement.getAttribute('data-parent');
                if (parent) {
                    const parentElement = document.querySelector(parent);
                    const openDropdowns = parentElement.querySelectorAll('.collapse.show');
                    openDropdowns.forEach(dropdown => dropdown.classList.remove('show'));
                }
    
                targetElement.classList.add('show');
            }
            });
        });
    

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('bi-chevron-left');
            toggleIcon.classList.add('bi-chevron-right');
        } else {
            toggleIcon.classList.remove('bi-chevron-right');
            toggleIcon.classList.add('bi-chevron-left');
        }
        
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});
