let mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

let themeDir = "./themes/founders/";

// .copy( themeDir + 'src/assets', themeDir + 'static/dist/assets')

// mix.webpackConfig({
//     resolve: {
//         extensions: [".json"],
//         modules: [
//         path.resolve(__dirname, 'node_modules'),
//         ]
//     }
// });

mix
    .js( themeDir + 'src/js/app.js', themeDir + 'static/dist/js')
    .sass( themeDir +'src/scss/app.scss', themeDir + 'static/dist/css')
    .tailwind();
        
if (mix.inProduction()) {
    mix.purgeCss({
        enabled: mix.inProduction(),

        folders: [themeDir+'/dist/static/css'],
        
        globs: [
            //hugo must run so we can have its compiled html files to search for tags
            //after that, we can run hugo [server] again to copy the new purged css from the theme
            path.join(__dirname, './public/**/*.html'),
        ],

        extensions: ['html'],

        extractors: [
            {
                extractor: class {
                    static extract(content) {
                        return content.match(/[A-z0-9-:\/]+/g)
                    }
                },
                extensions: ['html']
            }
        ]
    });
}