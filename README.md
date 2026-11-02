# Humi Naturals - Moisture for the culture

> Celebrating natural hair with nourishing, chemical-free products for curls, coils and textured hair in South Africa.

Live Site: `http://127.0.0.1:5500/index.html` (VS Code Live Server)

## Tech Stack
- HTML5, CSS3 (Fraunces + Inter fonts)
- JavaScript (Vanilla) - Fetch API, DOM Manipulation
- JSON - Dynamic product data
- Google Fonts, Flexbox & CSS Grid

## Project Structure

## Features (Part 3 Requirements)

### 2.2 Dynamic Content with Fetch API
- Products loaded from `products.json` via `fetch()`
- Async/Await with fallback data if fetch fails
- File: `script.js` > `loadProducts()`

### Search & Filter
- Real-time search by name/category/description
- Filter buttons: Curls, Coils, Waves, Show All
- No results handling

### Other Features
- Responsive design (mobile, tablet, desktop)
- Lightbox enlarged product image on click
- Cart counter (JS)
- Sticky header
- Form validation (enquiries.html)
- Google Map embed (contacts.html)

## Changelog

### [v1.5.0] - 2026-05-13 - Shop Page Fix - FINAL
#### Fixed
- **Critical: Shop All Products stuck on "Loading products..."**
    - Root cause: `products.json` file missing from root folder
    - `script.js` fetch was failing with no fallback UI
    - Fix: Created `products.json` with 6 products (Curls, Coils, Waves)
    - Added try/catch with fallback data in `loadProducts()`
    - Added console error logging for debugging
- Removed broken `<img>Enlarged product image` placeholder text at bottom of shop
- Implemented proper Lightbox modal for product zoom (click image to enlarge)
- Added `data-category` attribute for filtering
- Added empty state "No products found" message
- Added visible note if products.json not found

#### Added
- `products.json` - 6 products with id, name, price, category, image, description, ingredients
- Lightbox HTML/CSS/JS in shop.html
- Search functionality (real-time input listener)
- Filter buttons active state styling

### [v1.4.0] - 2026-05-13 - Hero Image Crop Bug Fix
#### Fixed
- **Critical: Hero image showing "HUMI NATU" cropped instead of full "HUMI NATURALS"**
    - Root cause: `.hero-image img { object-fit: cover; }` in style.css
    - `cover` was zooming and cropping logo to fill 520x440px box
    - Fix: Changed to `object-fit: contain;` + `object-position: center;`
    - Added white background `background: #ffffff;` + `padding: 20px;`
    - Added `border-radius: 24px` and box-shadow to prevent green placeholder box
- Removed duplicate `background-image: url('humi-logo.jpg')` that was causing double load
- Fixed header logo stretched issue - added fixed 38x38px size

#### Added
- Inline emergency override CSS in index.html with `!important` to force fix even if style.css cached
- `onerror` fallback for images: `onerror="this.src='humi-logo.jpg'"`

### [v1.3.0] - 2026-05-13 - About Page
#### Added
- New `about.html` - Brand story, values (100% Natural, Proudly SA, Moisture First)
- Sections: Hero, Our Story (2-col), What We Believe (3 cards), Join Family CTA
- Consistent header/footer across all pages
- Styled to match index.html theme

#### Fixed
- About page had same hero crop bug - applied contain fix

### [v1.2.0] - 2026-05-13 - Main Layout & CSS Overhaul
#### Added
- Full `style.css` rewrite with CSS variables (:root)
- Sticky header with box-shadow
- Product grid with hover lift effect
- Responsive breakpoints (800px, 500px)
- Button styles .btn-primary and .btn-outline

#### Fixed
- Removed green square placeholder - was caused by empty image src or missing _images folder
- Footer grid breaking on mobile - added responsive columns

### [v1.1.0] - 2026-05-12 - Initial Shop Structure
#### Added
- `shop.html` skeleton with Search input and filter buttons
- `index.html` with hero "Moisture for the culture"
- Placeholder product cards
- Reference to products.json (but file not yet created)

#### Known Issues at this version
- Hero shows HUMI NATU cropped
- Shop shows Loading products forever
- Green box instead of product images

### [v1.0.0] - Initial Commit
- Basic HTML files
- Logo humi-logo.jpg added
- _images folder with product photos

## How to Run
1. Clone repo: `git clone https://github.com/YOURUSERNAME/Humi-Naturals.git`
2. Open in VS Code
3. Right-click `index.html` > Open with Live Server (needs to be http://127.0.0.1:5500 for fetch to work, not file://)
4. Navigate to Shop to test Fetch API

## Lecturer Notes - Part 3 Requirement 2.2
The line "Dynamic content loaded from products.json using JavaScript Fetch API - Part 3 Requirement 2.2" in shop.html proves Fetch implementation. 
For final customer version, it can be removed or commented as `<!-- Part 3 Req 2.2 -->`. The fetch logic is in `script.js` lines 15-35.

## Author
Humi Naturals - Pretoria, South Africa
Student Project - Natural Hair E-commerce
Contact: hello@huminaturals.co.za

## License
MIT - Student Project
