# Founders Pledge FED
## Hugo + Tailwind + SASS + PurgeCSS   

Powered by Laravel Mix, this site is built using Hugo to efficiently generate static html pages and webpack to handle the asset pipeline.

## Local Environment

**Setup**
```
yarn install
```

**Development Mode**
```
yarn do
```
Starts a hugo server at [http://localhost:1313/](http://localhost:1313/)


## File Structure
Development files are stored in the Hugo theme, `founders`

**Assets**

| Type | Path |
|:--|:--|
| JS Source | `./themes/founders/src/js/app.js`  |
| Sass Source | `./themes/founders/src/scss/app.scss`  |
| Fonts | `./themes/founders/src/assets/fonts`  |
| Favicons | `./themes/founders/src/assets/favicon`  |
| Images | `./themes/founders/static/img`  |
| Layouts | `./themes/founders/layouts`  |

**Layouts**
The base template file is `baseof.html` (`./themes/founders/layouts/_default/baseof.html`)
Because we're using Hugo as a minimal SSG tool, we've kept things streamlined by creating individual files for each page in the sitemap. 

For example, the community page is located in `./themes/founders/layouts/community/single.html`

Build pages using components found in `./themes/founders/layouts/partials`

**Partials**
| Name | Path |
|:--|:--|
| Page Header | `./themes/founders/layouts/partials/page-header` |
| Section Header | `./themes/founders/layouts/partials/section-header` |
| Media Article | `./themes/founders/layouts/partials/media-article` |
| Media Article --simple | `./themes/founders/layouts/partials/media-article--simple` |
| Media Article --feature | `./themes/founders/layouts/partials/media-article--features` |
| Headsup | `./themes/founders/layouts/partials/headsup--inline` |
| Highlight Card | `./themes/founders/layouts/partials/highlight-card` |
| Logo Parade | `./themes/founders/layouts/partials/logo-parade` |


