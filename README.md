# Macrowan Hardware — Clean Cloudflare Pages Site

Mobile-first React/Vite storefront based on the approved Macrowan Hardware preview.

Business detail supplied for this build:
- Name: Macrowan Hardware
- Phone: 077 740 4044
- Location: intentionally left unconfirmed; the site contains a map/location placeholder for later confirmation.

Product/category direction supplied for the build:
- Building materials
- Home appliances
- Stoves / gas stoves
- Electrical products
- Gas equipment
- Tools and hardware
- Bicycles
- Home and kitchen products

The preview image is not used anywhere in the site. Each section uses its own relevant image.

Deploy:
1. npm install
2. npm run build
3. Cloudflare Pages: build command `npm run build`, output directory `dist`.

## Catalogue (corrected)
- Exactly 33 products from the client list, defined in `src/catalogue.js` (single source for cards, search, cart and the WhatsApp message).
- Price ranges stay ranges (Solar Flood Lights, Subwoofers, Sound Bars) and are excluded from the cart total; Gas Pipes are $1 per metre with quantity in metres.
- Products without a verified photo show a "Photo coming soon" placeholder — see PRODUCT-IMAGE-SOURCING.md.
- `npm run audit` verifies the catalogue against `docs/client-product-list.txt`.
