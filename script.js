document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle1');
    const menu = document.querySelector('.menu1');
    
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            menu.style.height = 'auto';
        } else {
            menu.style.height = '0';
        }
    });
});
