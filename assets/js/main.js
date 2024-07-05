document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    if (document.body.classList.contains('home')) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                header.classList.add("show");
            } else {
                header.classList.remove("show");
            }
        });
    } else {
        header.classList.add("show");
    }
});