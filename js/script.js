document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId, closeId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId),
            close = document.getElementById(closeId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener("click", () => {
                // show navbar
                nav.classList.toggle("show");
                // change icon
                toggle.classList.toggle("bx-x");
                // add padding to body
                bodypd.classList.toggle("body-pd");
                // add padding to header
                headerpd.classList.toggle("body-pd");
            });
        }
        if (toggle && nav && bodypd && headerpd && close) {
            close.addEventListener("click", () => {
                // show navbar
                nav.classList.toggle("show");
                // change icon
                toggle.classList.toggle("bx-x");
                // add padding to body
                bodypd.classList.toggle("body-pd");
                // add padding to header
                headerpd.classList.toggle("body-pd");
            });
        }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header", "close");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
        if (linkColor) {
            linkColor.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    //Header Time
    function jam() {
        setInterval(function () {
            var waktu = new Date();
            var jam = document.getElementById("jam");
            var hours = waktu.getHours();
            var minutes = waktu.getMinutes();
            var seconds = waktu.getSeconds();

            if (waktu.getHours() < 10) {
                hours = "0" + waktu.getHours();
            }
            if (waktu.getMinutes() < 10) {
                minutes = "0" + waktu.getMinutes();
            }
            if (waktu.getSeconds() < 10) {
                seconds = "0" + waktu.getSeconds();
            }
            jam.innerHTML = "<span>" + hours + " : " + "</span>" + "<span>" + minutes + " : " + "</span>" + "<span>" + seconds + "</span>";
        }, 1000);
    }

    jam();
});
