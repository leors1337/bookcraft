# BookCraft — Turnkey Books / Кітап жасау қызметі

A responsive landing page for Rabiga Yskakbay, a specialist in full-cycle book translation and publishing. The project is a single-page portfolio website detailing her services, the workflow process, and showcasing a portfolio of published books. Project was implented for kazakh and russian language that was one of the requirement of client.

## 🎯 Project Features

* **Fully Responsive Web Design:** The website displays correctly on all devices — from wide desktop monitors to smartphone screens. It utilizes modern CSS Grid and Flexbox capabilities.
* **Custom Carousel (Slider):** A pure JavaScript slider built for the "Portfolio" section.
* Touch-swipe support for mobile devices and mouse drag functionality for PCs.
* Adaptive number of displayed books (from 4 on desktop to 1 on smartphones).
* Auto-play scrolling that pauses on hover.
* Smart synchronization of card sizes between CSS and JS to prevent bugs during screen resizing (accounts for the disappearing address bar in mobile browsers).


* **Complex UI Elements in Pure CSS:**
* **Pill-shaped language toggle (KAZ / RUS)** built without using standard checkboxes.
* **Timeline (Workflow):** A horizontal line connecting work stages on PC, which elegantly transforms into a vertical timeline on mobile devices using CSS Grid.
* Decorative heading underlines created with `::after` pseudo-elements.


* **Mobile Navigation:** A burger menu for smartphones and tablets with a smooth opening animation.
* **Scroll Observer (Intersection Observer):** The active menu link is automatically highlighted when scrolling to the corresponding section.

## 🛠 Technologies

* **HTML5:** Semantic markup.
* **CSS3:** Usage of CSS variables (`:root`) for the color palette, media queries (`@media`) for responsiveness, pseudo-elements, and smooth transitions.
* **Vanilla JavaScript (ES6+):** Logic for the carousel, mobile menu, and active navigation without relying on heavy third-party libraries (like jQuery).
* **Fonts:** Google Fonts (Playfair Display for headings, Inter for body text).
* **Icons:** FontAwesome (social media and contacts).

## 📂 Project Structure

* `index.html` — The main markup file (includes text in both Kazakh and Russian).
* `styles.css` — The stylesheet file.
* `index.js` — Logic for interactive elements (slider, burger menu, scroll observer).
* `/pics/` — Directory containing images (book covers, main photo).
* `favicon.ico` — The website's browser icon (a stylized letter "B").

## 🎨 Color Palette

The project uses a warm, "book-like" color scheme defined via CSS variables:

* `--cream` / `--cream-dark` — Cream shades for section backgrounds.
* `--warm-white` — Warm white for navigation and accents.
* `--brown` / `--brown-light` / `--brown-dark` — Brown shades for buttons, lines, and highlights.
* `--text-dark` / `--text-mid` / `--text-muted` — Text color hierarchy for optimal readability.