console.log("Menu script loaded");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded");
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        console.log("Menu elements found");

        // Prevent default just in case
        menuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Menu toggle clicked");

            nav.classList.toggle('active');

            // Switch icon between bars and times (X)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    } else {
        console.error("Menu elements NOT found. Toggle:", menuToggle, "Nav:", nav);
    }
});
