(function() {
    "use strict";

    setInterval(function() {
        var opacity = getRandomInt(4, 10),
            spook = document.querySelectorAll(".spook");
            spook.forEach(function(el) {
                el.style.opacity = opacity / 10;
            });
    }, 1500)

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min);
    }
})();
