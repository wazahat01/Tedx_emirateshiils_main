# TEDxEmiratesHills — Official Website (Static & Optimized)

This repository contains the ultra-lightweight, high-speed static conversion of the official [TEDxEmiratesHills](https://tedxemirateshills.com/) website.

## 🚀 Key Highlights

- **Pure Static Architecture**: Zero PHP, zero database, zero heavy plugins, ultra-fast TTFB and load times.
- **Image Optimization**: All 53 images converted to modern WebP / optimized PNG, reducing payload from **27.43 MB down to 1.84 MB (93.3% savings)**.
- **Identical Layout & Content**: Exact match of the WordPress design, typography, brand colors (`#eb0028`, `#111115`, `#ffffff`), speaker line-up, guest honors, performers, partners, ticketing, and media gallery.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and desktop viewports.
- **Interconnected Ecosystem**: Directly connected with the multi-year event archive at `https://event.tedxemirateshills.com`.

## 📁 Project Structure

```
Tedx-Emirates-Hills-Main/
├── index.html                  # Official 2026 Homepage with all 14 sections
├── media.html                  # Media & Photo Gallery (42 curated event photos)
├── CNAME                       # Domain routing (tedxemirateshills.com)
├── assets/
│   ├── css/
│   │   └── style.css           # Clean, modular CSS design system
│   ├── js/
│   │   └── main.js             # Vanilla JS: preloader, nav spy, mobile menu, modals, lightbox
│   └── images/
│       ├── common/             # Logo, favicon, hero banner, feature graphics
│       ├── speakers/           # 12 Speakers, Chief Guest, 3 Performers
│       ├── team/               # Organizer & Co-organizer
│       ├── partners/           # 8 Sponsor & partner logos
│       └── gallery/            # 42 High-resolution compressed event photos
└── README.md
```

## 🌐 Deploying to Hostinger via Git

To connect this repository to Hostinger hPanel:

1. **Log in to Hostinger hPanel**: Navigate to **Websites** &rarr; Select `tedxemirateshills.com` &rarr; **Manage**.
2. **Open Git Deployment**: Search for **Git** in the left sidebar or top search bar.
3. **Configure Git Repository**:
   - **Repository**: Paste your GitHub clone URL (e.g., `https://github.com/wazahat01/Tedx_emirateshills_main.git`).
   - **Branch**: `main`.
   - **Install Path**: `public_html` (root directory for the main domain).
4. **Click "Create" / "Deploy"**: Hostinger will clone and deploy the files directly to `public_html`.
5. **Auto-Deployment (Webhook)**:
   - Copy the Hostinger Webhook URL provided in the Git settings.
   - In your GitHub repository, go to **Settings** &rarr; **Webhooks** &rarr; **Add webhook**.
   - Paste the URL and select `application/json`.
   - Now any future push to `main` will automatically deploy live in seconds!

## 🤝 Credits & Copyright

- **Organization**: TEDxEmiratesHills (Operated under license from TED).
- **Developed by**: [Skylark Edge](https://skylarkedge.in).
