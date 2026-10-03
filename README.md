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

## Catalogue image and colour update
- Added locally bundled Macrowan product photos under `public/products/`.
- Mapped supplied images to the matching chainsaw, grass trimmer, angle grinder, spray-gun reference, gas regulator, and regulator-with-hose products.
- Added four electrical catalogue items: UK 3-pin plug adapter, universal travel adapter, extension power strip, and AC/DC power adapter.
- Added the LPG regulator-with-hose as a separate enquiry item.
- The catalogue now contains 38 products. New items without client-confirmed prices show “Enquire for price” and are handled safely in the cart and WhatsApp order message.
- Restored the site's orange-red accent colour across buttons, active filters, links, icons and highlighted text.
- Kept generic images for products without a confirmed matching client photo to avoid showing the wrong model or brand.
- The client photo of the ACC spray gun has a $45 tag while the original catalogue lists the spray gun at $35. The new product image is a visual reference; confirm the exact model and price before treating the listing as verified.
