const mix = require('laravel-mix');

/* admin */
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

/* site */
mix.js('resources/vue/app.js', 'public/js/vue-app.js')
    .css("resources/vue/assets/css/bootstrap.5.1.1.min.css", 'public/css/vue-app.css', [])
    .css("resources/vue/assets/fonts/flaticon.css", 'public/css/vue-app.css', [])
    .css("resources/vue/assets/css/plugin/slick.css", 'public/css/vue-app.css', [])
    .css("resources/vue/assets/css/plugin/magnific-popup.css", 'public/css/vue-app.css', [])
    .css("resources/vue/assets/css/plugin/nice-select.v1.0.css", 'public/css/vue-app.css', [])
    .css("resources/vue/assets/css/plugin/animate.css", 'public/css/vue-app.css', [])
    /*.css("resources/vue/assets/css/plugin/jquery-ui.min.css", 'public/css/vue-app.css', [])*/
    .css("resources/vue/assets/css/style.css", 'public/css/vue-app.css', [])
    .js([
/*        "resources/vue/assets/js/jqurey.v3.6.0.min.js",
        "resources/vue/assets/js/popper.v2.9.3.min.js",
        "resources/vue/assets/js/plugin/jarallax.min.js",
        "resources/vue/assets/js/plugin/isotope.js",
        "resources/vue/assets/js/plugin/tweenMax.min.js",
        "resources/vue/assets/js/plugin/nice-select.v1.0.min.js",
        "resources/vue/assets/js/plugin/wow.v1.3.0.min.js",
        "resources/vue/assets/js/main.js",*/
        /*      "resources/vue/assets/js/plugin/slick.min.js",
                "resources/vue/assets/js/plugin/jquery.magnific-popup.min.js",
                "resources/vue/assets/js/plugin/jquery.countdown.min.js",
                "resources/vue/assets/js/plugin/jquery-ui.min.js",
                "resources/vue/assets/js/bootstrap.v5.1.1.min.js",*/
    ], 'public/js/vue-app.js');