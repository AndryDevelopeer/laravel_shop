const mix = require('laravel-mix');

/* admin */
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', []);

/* site */
mix.css("resources/vue/assets/css/bootstrap.5.1.1.min.css", 'public/css/main.css', [])
    .css("resources/vue/assets/fonts/flaticon.css", 'public/css/main.css', [])
    .css("resources/vue/assets/css/plugin/slick.css", 'public/css/main.css', [])
    .css("resources/vue/assets/css/plugin/magnific-popup.css", 'public/css/main.css', [])
    .css("resources/vue/assets/css/plugin/nice-select.v1.0.css", 'public/css/main.css', [])
    .css("resources/vue/assets/css/plugin/animate.css", 'public/css/main.css', [])
    .css("resources/vue/assets/css/style.css", 'public/css/main.css', [])
    .js([
        "resources/js/main.js",
        "resources/js/plugin/wow.v1.3.0.min.js",
        'resources/js/jquery.v3.6.0.min.js',
        "resources/js/popper.v2.9.3.min.js",
        "resources/js/bootstrap.v5.1.1.min",
        "resources/js/plugin/jquery-ui.min.js",
        "resources/js/plugin/jarallax.min.js",
        "resources/js/plugin/isotope.js",
        "resources/js/plugin/slick.min.js",
        "resources/js/plugin/jquery.magnific-popup.min.js",
        "resources/js/plugin/tweenMax.min.js",
        "resources/js/plugin/nice-select.v1.0.min.js",
        "resources/js/plugin/jquery.countdown.min.js",
    ], 'public/js/main.js');

mix.js('resources/vue/app.js', 'public/js/vue-app.js')
    .vue();