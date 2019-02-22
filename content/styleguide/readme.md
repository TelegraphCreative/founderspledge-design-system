---
title: An Intro
slug: readme
draft: false
---
<div class="styleguide__content">
    <h3 id="layout-index">Layout Index</h3>
    <p>Powered by Laravel Mix, this site is built using Hugo to efficiently generate static html pages and webpack to handle assets.</p>
    <h2 id="local-environment">Local Environment</h2>
    <p><strong>Setup</strong></p>
    <p><strong>Install packages</strong> <code>yarn install</code></p>
    <p><strong>Install Hugo</strong> <code>brew install hugo</code></p>
    <p><strong>Development Mode</strong> <code>yarn do</code></p>
    <p>Starts a hugo server at <a href="http://localhost:1313/">http://localhost:1313/</a></p>
    <p><strong>Generate Distrubtion Files</strong> <code>yarn hugo</code></p>
    <h2 id="file-structure">File Structure</h2>
    <p>Development files are stored in the Hugo theme, <code>founders</code></p>
    <p><strong>Assets</strong></p>
    <table>
        <thead>
            <tr>
                <th align="left">Type</th>
                <th align="left">Path</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td align="left">JS Source</td>
                <td align="left"><code>./themes/founders/src/js/app.js</code></td>
            </tr>
            <tr>
                <td align="left">Sass Source</td>
                <td align="left"><code>./themes/founders/src/scss/app.scss</code></td>
            </tr>
            <tr>
                <td align="left">Fonts</td>
                <td align="left"><code>./themes/founders/src/assets/fonts</code></td>
            </tr>
            <tr>
                <td align="left">Favicons</td>
                <td align="left"><code>./themes/founders/src/assets/favicon</code></td>
            </tr>
            <tr>
                <td align="left">Images</td>
                <td align="left"><code>./themes/founders/static/img</code></td>
            </tr>
            <tr>
                <td align="left">Layouts</td>
                <td align="left"><code>./themes/founders/layouts</code></td>
            </tr>
        </tbody>
    </table>
    <p><strong>Layouts</strong></p>
    <p><em>Basics</em></p>
    <ul>
        <li>
            <p>Base template file: <code>baseof.html</code> (<code>./themes/founders/layouts/_default/baseof.html</code>)</p>
        </li>
        <li>
            <p>Hugo generates pages based on the <code>.md</code> files in the <code>content</code> directory</p>
        </li>
        <li>
            <p>The layout for each page is determined using the frontmatter variable, <code>layout</code>.</p>
        </li>
        <li>
            <p>Layouts are stored in the <code>themes/founders/layouts/page</code> directory</p>
        </li>
        <li>
            <p>Build pages using components found in <code>./themes/founders/layouts/partials</code></p>
        </li>
    </ul>
    <p><em>Add a page</em></p>
    <ol>
        <li>Run <code>hugo add new-page-name.md</code> Hugo will use the filename as the page handle.</li>
        <li>Add a new layout to the <code>themes/founders/layouts/page</code>.</li>
        <li>Reference the layout in the markdown file (only title and layout are required variables):</li>
    </ol>
    <pre><code>layout: how-it-works
    </code></pre>
    <ol>
        <li>Run <code>yarn do</code> to start developing, or <code>yarn hugo</code> to generate production files in <code>public</code></li>
    </ol>
    <h2 id="partials">Partials</h2>
    <table>
        <thead>
            <tr>
                <th align="left">Name</th>
                <th align="left">Path</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td align="left">Section Header</td>
                <td align="left"><code>./themes/founders/layouts/partials/section-header</code></td>
            </tr>
            <tr>
                <td align="left">Sub Section Header</td>
                <td align="left"><code>./themes/founders/layouts/partials/sub-section-header</code></td>
            </tr>
            <tr>
                <td align="left">Media Article</td>
                <td align="left"><code>./themes/founders/layouts/partials/media-article</code></td>
            </tr>
            <tr>
                <td align="left">Media Article –simple</td>
                <td align="left"><code>./themes/founders/layouts/partials/media-article--simple</code></td>
            </tr>
            <tr>
                <td align="left">Media Article –feature</td>
                <td align="left"><code>./themes/founders/layouts/partials/media-article--features</code></td>
            </tr>
            <tr>
                <td align="left">Headsup</td>
                <td align="left"><code>./themes/founders/layouts/partials/headsup--inline</code></td>
            </tr>
            <tr>
                <td align="left">Highlight Card</td>
                <td align="left"><code>./themes/founders/layouts/partials/highlight-card</code></td>
            </tr>
            <tr>
                <td align="left">Logo List</td>
                <td align="left"><code>./themes/founders/layouts/partials/logo-list</code></td>
            </tr>
        </tbody>
    </table>
    <h2 id="flip-cards">Flip Cards</h2>
    <p><strong>Types</strong></p>
    <ul>
        <li>-resource</li>
        <li>-press</li>
        <li>-feature</li>
        <li>-cta</li>
    </ul>
    <h4 id="resource-data-model">Resource Data Model:</h4>
    <pre><code>{
    "variation": "-resource",
    "icon": "icon-name.svg",
    "name": "Alleviate Poverty",
    "descr": "Giving money directly to those who most need it, so they can use it for what they most need it for",
    "link": {
    "variation": "link -underline",
        "text": "Read the Research",
        "url": "#"
    }
    }
    </code></pre>
    <h4 id="press-data-model">Press Data Model:</h4>
    <pre><code>{
    "variation": "-press",
    "logo": "/dist/assets/img/fpo-logo-01.jpg",
    "descr": "“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”",
    "link": {
    "variation": "link -underline",
        "text": "Read full article",
        "url": "#"
    }
    }
    </code></pre>
    <h4 id="feature-data-model">Feature Data Model:</h4>
    <pre><code>{
    "variation": "-feature",
    "icon": "arrow--r.svg",
    "name": "Generous Vaction Time",
    "detail": "London Office Only",
    "descr": "Giving money directly to those who most need it, so they can use it for what they most need it for",
    "link": false
    }
    </code></pre>
    <h4 id="cta-data-model">CTA Data Model:</h4>
    <pre><code>{
    "variation": "-cta",
    "name": "Hear from our community.",
    "descr": "Subheading connecting the giving to missions back to the community. Humans doing good for other humans—connectedness.",
    "url": "#"
    }
    </code></pre>
</div>