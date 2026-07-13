This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
becta-logistics
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ manifest.ts
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ [locale]
│     ├─ about
│     │  └─ page.tsx
│     ├─ contact
│     │  └─ page.tsx
│     ├─ fleet
│     │  └─ page.tsx
│     ├─ layout.tsx
│     ├─ loading.tsx
│     ├─ news
│     │  ├─ page.tsx
│     │  └─ [slug]
│     │     └─ page.tsx
│     ├─ page.tsx
│     ├─ projects
│     │  └─ page.tsx
│     └─ services
│        └─ page.tsx
├─ CLAUDE.md
├─ components
│  ├─ cards
│  ├─ common
│  │  └─ page-banner
│  │     ├─ breadcrumb.tsx
│  │     └─ page-banner.tsx
│  ├─ layout
│  │  ├─ footer
│  │  │  ├─ copyright.tsx
│  │  │  ├─ footer-certifications.tsx
│  │  │  ├─ footer-contact.tsx
│  │  │  ├─ footer-links.tsx
│  │  │  ├─ footer-logo.tsx
│  │  │  └─ footer.tsx
│  │  └─ header
│  │     ├─ header.tsx
│  │     ├─ index.ts
│  │     ├─ mobile-menu.tsx
│  │     └─ navbar.tsx
│  ├─ loading
│  │  ├─ loading-link.tsx
│  │  ├─ loading-logo.tsx
│  │  ├─ loading-screen.tsx
│  │  ├─ page-transition.tsx
│  │  └─ transition-provider.tsx
│  ├─ sections
│  │  ├─ about
│  │  │  ├─ about-content.tsx
│  │  │  ├─ about-image.tsx
│  │  │  ├─ about.tsx
│  │  │  └─ feature-item.tsx
│  │  ├─ contact
│  │  │  ├─ contact-form.tsx
│  │  │  ├─ contact-info.tsx
│  │  │  ├─ office-leaflet.tsx
│  │  │  └─ office-map.tsx
│  │  ├─ cta
│  │  │  ├─ cta-content.tsx
│  │  │  ├─ cta.tsx
│  │  │  ├─ video-button.tsx
│  │  │  └─ video-modal.tsx
│  │  ├─ featured-projects
│  │  │  ├─ featured-header.tsx
│  │  │  ├─ featured-list.tsx
│  │  │  ├─ featured-main.tsx
│  │  │  ├─ featured-projects.tsx
│  │  │  └─ project-item.tsx
│  │  ├─ fleet
│  │  │  ├─ fleet-card.tsx
│  │  │  ├─ fleet-header.tsx
│  │  │  ├─ fleet-navigation.tsx
│  │  │  ├─ fleet-slider.tsx
│  │  │  └─ fleet.tsx
│  │  ├─ hero
│  │  │  ├─ hero-content.tsx
│  │  │  ├─ hero-image.tsx
│  │  │  ├─ hero-scroll.tsx
│  │  │  ├─ hero-slider.tsx
│  │  │  ├─ hero-stats.tsx
│  │  │  └─ hero.tsx
│  │  ├─ journey
│  │  │  ├─ journey-header.tsx
│  │  │  ├─ journey-item.tsx
│  │  │  ├─ journey-timeline.tsx
│  │  │  └─ journey.tsx
│  │  ├─ news
│  │  │  ├─ dummy-news.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ news-card.tsx
│  │  │  ├─ news-grid.tsx
│  │  │  ├─ news-hero.tsx
│  │  │  ├─ news-pagination.tsx
│  │  │  └─ news-sidebar.tsx
│  │  ├─ news-detail
│  │  │  ├─ article-content.tsx
│  │  │  ├─ article-header.tsx
│  │  │  ├─ article-share.tsx
│  │  │  └─ author-card.tsx
│  │  ├─ services
│  │  │  ├─ service-card.tsx
│  │  │  ├─ service-grid.tsx
│  │  │  ├─ service-header.tsx
│  │  │  └─ services.tsx
│  │  └─ trusted-clients
│  │     └─ trusted-clients.tsx
│  ├─ shared
│  │  ├─ carousel
│  │  │  └─ carousel.tsx
│  │  ├─ language-switcher.tsx
│  │  └─ logo.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ container.tsx
│     ├─ dialog.tsx
│     ├─ grid.tsx
│     ├─ heading.tsx
│     ├─ index.ts
│     ├─ input.tsx
│     ├─ section.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ stack.tsx
│     └─ stat.tsx
├─ components.json
├─ config
│  └─ site.ts
├─ constants
│  ├─ fleet.ts
│  ├─ hero.ts
│  ├─ journey.ts
│  ├─ navigation.ts
│  ├─ projects.ts
│  └─ services.ts
├─ eslint.config.mjs
├─ hooks
│  ├─ index.ts
│  └─ use-scroll.ts
├─ i18n
│  ├─ navigation.ts
│  ├─ request.ts
│  └─ routing.ts
├─ lib
│  ├─ seo.ts
│  └─ utils.ts
├─ messages
│  ├─ en.json
│  └─ id.json
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ proxy.ts
├─ public
│  ├─ certifications
│  │  ├─ iso-14001.png
│  │  ├─ iso-45001.png
│  │  └─ iso-9001.png
│  ├─ clients
│  │  ├─ adaro.png
│  │  ├─ freeport.png
│  │  ├─ pama.png
│  │  ├─ pertamina.png
│  │  ├─ pln.png
│  │  └─ wika.png
│  ├─ cta
│  │  └─ cta-bg.png
│  ├─ file.svg
│  ├─ fleet
│  │  ├─ lct-01.png
│  │  ├─ lct-02.png
│  │  ├─ lct-03.png
│  │  ├─ lct-04.png
│  │  └─ lct-05.png
│  ├─ globe.svg
│  ├─ hero
│  │  ├─ hero-1.png
│  │  ├─ hero-2.png
│  │  └─ hero-3.png
│  ├─ journey
│  │  ├─ bridge.png
│  │  ├─ heavy.png
│  │  ├─ mining.png
│  │  ├─ New folder
│  │  │  ├─ bridge.png
│  │  │  ├─ heavy.png
│  │  │  ├─ mining.png
│  │  │  ├─ nickel.png
│  │  │  └─ offshore.png
│  │  ├─ nickel.png
│  │  └─ offshore.png
│  ├─ logo
│  │  ├─ footer-logo-white.png
│  │  ├─ footer-logo.png
│  │  └─ logo.png
│  ├─ marker
│  │  └─ marker-gold.svg
│  ├─ next.svg
│  ├─ projects
│  │  ├─ project-1.png
│  │  ├─ project-2.png
│  │  ├─ project-3.png
│  │  └─ project-4.png
│  ├─ services
│  │  ├─ heavy-equipment.png
│  │  ├─ lct-charter.png
│  │  ├─ marine-logistics.png
│  │  ├─ offshore-support.png
│  │  ├─ port-delivery.png
│  │  └─ project-cargo.png
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
└─ tsconfig.json

```
```
becta-logistics
├─ AGENTS.md
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ manifest.ts
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ [locale]
│     ├─ about
│     │  └─ page.tsx
│     ├─ contact
│     │  └─ page.tsx
│     ├─ fleet
│     │  └─ page.tsx
│     ├─ layout.tsx
│     ├─ loading.tsx
│     ├─ news
│     │  ├─ page.tsx
│     │  └─ [slug]
│     │     └─ page.tsx
│     ├─ page.tsx
│     ├─ projects
│     │  └─ page.tsx
│     └─ services
│        └─ page.tsx
├─ CLAUDE.md
├─ components
│  ├─ cards
│  ├─ common
│  │  └─ page-banner
│  │     ├─ breadcrumb.tsx
│  │     └─ page-banner.tsx
│  ├─ layout
│  │  ├─ footer
│  │  │  ├─ copyright.tsx
│  │  │  ├─ footer-certifications.tsx
│  │  │  ├─ footer-contact.tsx
│  │  │  ├─ footer-links.tsx
│  │  │  ├─ footer-logo.tsx
│  │  │  └─ footer.tsx
│  │  └─ header
│  │     ├─ header.tsx
│  │     ├─ index.ts
│  │     ├─ mobile-menu.tsx
│  │     └─ navbar.tsx
│  ├─ loading
│  │  ├─ loading-link.tsx
│  │  ├─ loading-logo.tsx
│  │  ├─ loading-screen.tsx
│  │  ├─ page-transition.tsx
│  │  └─ transition-provider.tsx
│  ├─ sections
│  │  ├─ about
│  │  │  ├─ about-content.tsx
│  │  │  ├─ about-image.tsx
│  │  │  ├─ about.tsx
│  │  │  └─ feature-item.tsx
│  │  ├─ contact
│  │  │  ├─ contact-form.tsx
│  │  │  ├─ contact-info.tsx
│  │  │  ├─ office-leaflet.tsx
│  │  │  └─ office-map.tsx
│  │  ├─ cta
│  │  │  ├─ cta-content.tsx
│  │  │  ├─ cta.tsx
│  │  │  ├─ video-button.tsx
│  │  │  └─ video-modal.tsx
│  │  ├─ featured-projects
│  │  │  ├─ featured-header.tsx
│  │  │  ├─ featured-list.tsx
│  │  │  ├─ featured-main.tsx
│  │  │  ├─ featured-projects.tsx
│  │  │  └─ project-item.tsx
│  │  ├─ fleet
│  │  │  ├─ fleet-card.tsx
│  │  │  ├─ fleet-header.tsx
│  │  │  ├─ fleet-navigation.tsx
│  │  │  ├─ fleet-slider.tsx
│  │  │  └─ fleet.tsx
│  │  ├─ hero
│  │  │  ├─ hero-content.tsx
│  │  │  ├─ hero-image.tsx
│  │  │  ├─ hero-scroll.tsx
│  │  │  ├─ hero-slider.tsx
│  │  │  ├─ hero-stats.tsx
│  │  │  └─ hero.tsx
│  │  ├─ journey
│  │  │  ├─ journey-header.tsx
│  │  │  ├─ journey-item.tsx
│  │  │  ├─ journey-timeline.tsx
│  │  │  └─ journey.tsx
│  │  ├─ news
│  │  │  ├─ dummy-news.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ news-card.tsx
│  │  │  ├─ news-grid.tsx
│  │  │  ├─ news-hero.tsx
│  │  │  ├─ news-pagination.tsx
│  │  │  └─ news-sidebar.tsx
│  │  ├─ news-detail
│  │  │  ├─ article-content.tsx
│  │  │  ├─ article-header.tsx
│  │  │  ├─ article-share.tsx
│  │  │  └─ author-card.tsx
│  │  ├─ services
│  │  │  ├─ service-card.tsx
│  │  │  ├─ service-grid.tsx
│  │  │  ├─ service-header.tsx
│  │  │  └─ services.tsx
│  │  └─ trusted-clients
│  │     └─ trusted-clients.tsx
│  ├─ shared
│  │  ├─ carousel
│  │  │  └─ carousel.tsx
│  │  ├─ language-switcher.tsx
│  │  └─ logo.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ container.tsx
│     ├─ dialog.tsx
│     ├─ grid.tsx
│     ├─ heading.tsx
│     ├─ index.ts
│     ├─ input.tsx
│     ├─ section.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ stack.tsx
│     └─ stat.tsx
├─ components.json
├─ config
│  └─ site.ts
├─ constants
│  ├─ fleet.ts
│  ├─ hero.ts
│  ├─ journey.ts
│  ├─ navigation.ts
│  ├─ projects.ts
│  └─ services.ts
├─ data
├─ eslint.config.mjs
├─ hooks
│  ├─ index.ts
│  └─ use-scroll.ts
├─ i18n
│  ├─ navigation.ts
│  ├─ request.ts
│  └─ routing.ts
├─ lib
│  ├─ seo.ts
│  └─ utils.ts
├─ messages
│  ├─ en.json
│  └─ id.json
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ providers
├─ proxy.ts
├─ public
│  ├─ certifications
│  │  ├─ iso-14001.png
│  │  ├─ iso-45001.png
│  │  └─ iso-9001.png
│  ├─ clients
│  │  ├─ adaro.png
│  │  ├─ freeport.png
│  │  ├─ pama.png
│  │  ├─ pertamina.png
│  │  ├─ pln.png
│  │  └─ wika.png
│  ├─ cta
│  │  └─ cta-bg.png
│  ├─ file.svg
│  ├─ fleet
│  │  ├─ lct-01.png
│  │  ├─ lct-02.png
│  │  ├─ lct-03.png
│  │  ├─ lct-04.png
│  │  └─ lct-05.png
│  ├─ globe.svg
│  ├─ hero
│  │  ├─ hero-1.png
│  │  ├─ hero-2.png
│  │  └─ hero-3.png
│  ├─ journey
│  │  ├─ bridge.png
│  │  ├─ heavy.png
│  │  ├─ mining.png
│  │  ├─ New folder
│  │  │  ├─ bridge.png
│  │  │  ├─ heavy.png
│  │  │  ├─ mining.png
│  │  │  ├─ nickel.png
│  │  │  └─ offshore.png
│  │  ├─ nickel.png
│  │  └─ offshore.png
│  ├─ logo
│  │  ├─ footer-logo-white.png
│  │  ├─ footer-logo.png
│  │  └─ logo.png
│  ├─ marker
│  │  └─ marker-gold.svg
│  ├─ next.svg
│  ├─ projects
│  │  ├─ project-1.png
│  │  ├─ project-2.png
│  │  ├─ project-3.png
│  │  └─ project-4.png
│  ├─ services
│  │  ├─ heavy-equipment.png
│  │  ├─ lct-charter.png
│  │  ├─ marine-logistics.png
│  │  ├─ offshore-support.png
│  │  ├─ port-delivery.png
│  │  └─ project-cargo.png
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
└─ tsconfig.json

```