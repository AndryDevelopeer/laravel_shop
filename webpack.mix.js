const mix = require('laravel-mix');

/* admin */
mix.js('resources/js/app.js', 'public/js/admin-app.js')
    .css('resources/adminlte/plugins/select2/css/select2.min.css', 'public/css/admin-app.css')
    .css('resources/adminlte/plugins/fontawesome-free/css/all.min.css', 'public/css/admin-app.css')
    .css('resources/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css', 'public/css/admin-app.css')
    .css('resources/adminlte/plugins/dropzone/min/dropzone.min.css', 'public/css/admin-app.css')
    .css('resources/adminlte/dist/css/adminlte.css', 'public/css/admin-app.css')
    .css('resources/css/app.css', 'public/css/admin-app.css')
    .js([
        'resources/adminlte/dist/js/adminlte.js',
        'resources/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js',
        'resources/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
        'resources/adminlte/plugins/jquery-mousewheel/jquery.mousewheel.js',
        'resources/adminlte/plugins/raphael/raphael.min.js',
        'resources/adminlte/plugins/select2/js/select2.full.min.js',
        'resources/adminlte/plugins/dropzone/dropzone.js',
        'resources/adminlte/plugins/bs-custom-file-input/bs-custom-file-input.js',
    ], 'public/js/admin-app.js');

/* site */
mix.js('resources/vue/app.js', 'public/js/app.js')
    .css('resources/css/bootstrap.css', 'public/css/main.css')
    .vue()
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly:true
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    });