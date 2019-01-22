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

_Basics_
- Base template file: `baseof.html` (`./themes/founders/layouts/_default/baseof.html`)

- Hugo generates pages based on the `.md` files in the `content` directory

- The layout for each page is determined using the frontmatter variable, `layout`.

- Layouts are stored in the `themes/founders/layouts/page` directory

- Build pages using components found in `./themes/founders/layouts/partials`

_Add a page_

1. Run `hugo add new-page-name.md` Hugo will use the filename as the page handle.
2. Add a new layout to the `themes/founders/layouts/page`. 
3. Reference the layout in the markdown file (only title and layout are required variables):

```
layout: how-it-works
```

4. Run `yarn do` to start developing, or `yarn hugo` to generate production files in `public`



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


