# KoolCats — Pastel Landing Page Template

A responsive, playful cat-community landing page built with semantic HTML, custom CSS, Bootstrap 5, and a small vanilla JavaScript file.

## Design direction
- Pastel lavender, warm cream, and soft pink palette
- Friendly typography and rounded cards
- CSS-drawn cat illustration (no bundled cat photographs required)
- Responsive navigation, feature cards, how-it-works steps, sample plans, FAQ accordion, and demo sign-up form
- Keyboard-friendly controls, accessible labels, reduced-motion support, and mobile breakpoints

## Project structure
```
KoolCats/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/          # Original repository assets; not required by this redesign
└── README.md
```

## Run locally
1. Download or clone the repository.
2. Open `index.html` in a modern browser. For the best local workflow, use VS Code with Live Server.
3. An internet connection is used for Bootstrap, Bootstrap Icons, and Google Fonts CDNs.

## Customise
- **Colours and typography:** edit the CSS custom properties at the top of `css/style.css`.
- **Text, navigation, plans and FAQ:** edit `index.html`.
- **Form behaviour:** edit `js/script.js`. The current form is a front-end demonstration and does not store email addresses or process payments.
- **Branding:** replace KoolCats name, copy, icon and sample prices with your own details before launching.

## Important before publishing or selling
This is a static front-end template, not a complete production service. Sign-up, account management, mailing-list collection, social links, and payments need real destinations or backend integrations. All plan names, features, testimonials and prices are sample copy and should be replaced with truthful information for your own project.

The redesign avoids depending on the old repository's image files. Those existing assets are retained in the repository but are not used by the redesigned page; verify their individual licences before redistributing them. If you add any photos, logos, fonts, or other third-party assets, confirm you have the right to redistribute them with a commercial template. Bootstrap, Bootstrap Icons and Google Fonts are loaded from their respective CDNs; review their terms and availability for your intended distribution.

## Tech used
- HTML5
- CSS3 (custom properties, grid/flexbox, media queries)
- Bootstrap 5.3
- Bootstrap Icons
- Vanilla JavaScript
