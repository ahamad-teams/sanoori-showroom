# Sanoori Trading Website Plan

## Goal
Build a bilingual, mobile-first digital showroom for Sanoori Trading that makes sanitary ware, tiles, and building materials easy to understand, browse, and discuss before purchase. The experience will avoid invented business claims, products, prices, availability, and contact details.

## Information architecture
- **Home:** immersive architectural opening, three editorial category previews, curated-product area, simple buying steps, help section, and final contact prompt.
- **Products:** searchable catalogue with four clear category controls: All, Sanitary Ware, Tiles, and Building Materials.
- **Product detail:** image gallery, verified product information, and a clear “contact to buy” action.
- **About:** concise, factual explanation of what Sanoori Trading supplies, who it serves, and how it helps.
- **Contact:** configured contact methods plus a short enquiry form. Until a real destination is provided, submission will clearly remain unavailable rather than pretending to send.
- Shared header, full-height accessible mobile menu, compact footer, not-found state, and route-specific metadata.

## Visual direction
- Quiet architectural showroom aesthetic using deep navy, warm white, restrained gold, and warm neutral surfaces.
- Large, relevant architectural imagery; image-led category compositions; precise grids; thin gold hairlines; editorial labels; generous but purposeful space.
- Refined display typography for English, highly readable Bengali typography, moderate corners, subtle borders, and restrained motion.
- Exactly two intentionally designed themes: light by default and dark, persisted without a visible flash.

## Experience and interaction
- Complete English and natural Bangla content from one translation system, with `Sanoori Trading` unchanged.
- Primary buying language changes naturally by context: “Contact to Buy,” “Talk to Us,” “কথা বলে কিনুন,” and “পণ্য কিনতে যোগাযোগ করুন.”
- “Shop Now” always opens Products; there will be no cart, checkout, login, wishlist, comparison, newsletter, chatbot, or fake commerce flow.
- Product search and category selection will stay simple. Empty, loading, missing-image, no-result, and error states will be intentional.
- Mobile menu will include focus trapping, Escape-to-close, body scroll lock, route-change close, large tap targets, and visible active states.
- Contact form will use visible labels and human validation messages. A real WhatsApp/mail destination can be wired once verified details arrive.

## Truthful content and assets
- Use the uploaded logo unchanged except for sizing and placement.
- Parse the uploaded catalogue and include only verified product names, categories, descriptions, IDs, specifications, and imagery it contains.
- No contact channel will be displayed until its real value is supplied.
- If catalogue assets are not yet available during implementation, product areas will use the approved branded empty state rather than fabricated products.
- Generate only supporting architectural/category imagery when needed; generated images will never be presented as real Sanoori products or showroom photography.

## Design system and implementation
- Define semantic light/dark color, typography, spacing, border, shadow, and motion tokens centrally.
- Build reusable controls and content patterns for navigation, buttons, language/theme switching, category and product presentation, forms, galleries, breadcrumbs, and system states.
- Create dedicated routes for Home, About, Products, Contact, and dynamic product details, with truthful unique titles, descriptions, Open Graph text, canonicals, and Twitter metadata.
- Add a skip link, one primary content landmark, logical headings, visible keyboard focus, labelled controls, reduced-motion support, and minimum 44px touch targets.
- Keep client code lean and images dimensionally stable, responsive, lazy-loaded below the first view, and appropriately cropped.

## Verification
- Review at 360, 390, 414, 768, 1024, 1280, and 1440+ widths, including Bangla text, dark theme, menus, search, form validation, and product navigation.
- Verify no horizontal overflow, overlap, clipped Bengali, hidden actions, broken images, false success messages, or inaccessible icon controls.
- Audit for WCAG 2.2 AA basics, keyboard use, reduced motion, and truthful content.
- Confirm route metadata, preview runtime, build health, and the absence of forbidden wording such as “Get a Quote,” “Request a Quote,” checkout, and cart language.

## Inputs still expected
- Current Sanoori Trading logo file.
- Product catalogue and any separate real product imagery.
- Verified contact details when ready; these can be added without changing the layout.
