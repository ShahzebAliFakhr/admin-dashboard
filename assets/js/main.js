document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('[data-toggle="collapse"]');
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.toggle-button');
    const toggleIcon = document.getElementById('toggleIcon');
    const collapsibleItems = document.querySelectorAll('.nav-item > a[data-toggle="collapse"]');

    collapsibleItems.forEach((menuItem) => {
        const dropdown = menuItem.nextElementSibling;    
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();

            if (sidebar.classList.contains('collapsed')) {
                const isVisible = dropdown.style.display === 'block';
                document.querySelectorAll('.sidebar.collapsed .collapse').forEach((item) => {
                    item.style.display = 'none';
                });

                dropdown.style.display = isVisible ? 'none' : 'block';

                if (!isVisible) {
                    const parentRect = menuItem.getBoundingClientRect();
                    dropdown.style.top = `${parentRect.top}px`;
                }
            }
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
    });

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSelector = toggle.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);
    
            if (targetElement.classList.contains('show')) {
                targetElement.classList.remove('show');
            } else {
                
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
