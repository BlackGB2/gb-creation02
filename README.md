# ✦ GB Portfolio — Ultra-Clean Modern Tech Portfolio with Sanity CMS

A high-craft, modern personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

Engineered with an ultra-clean modern aesthetic: pure crisp white (`#FFFFFF`), deep charcoal typography (`#111111`), soft gray tactile surfaces (`#F3F4F6`), hairline borders (`#E5E7EB`), and an interactive animated micro-dot particle wave canvas.

---

## ✨ Features & Craft Highlights

- **Visual Signature**:
  - **Animated Micro-Dot Particle Wave**: Delicate, multi-colored micro-dots rendered on an HTML5 Canvas with fluid sine harmonics, mouse proximity repulsion, and seamless edge fade into pure white space.
  - **Announcement Pill Badge**: Centered top badge with glowing status beacon (`Available for Freelance & New Projects ->`).
  - **Pill-Shaped CTAs**: Solid black primary action with smooth hover state, paired with soft gray secondary action.
- **Superior UX & Micro-Interactions**:
  - Sticky glassmorphism top navigation with active route pill and mobile drawer menu.
  - Interactive Work page with category filter tabs and real-time project count badges.
  - Clickable **Project Detail Modal** displaying full case studies, tech stack, client, year, live preview links, and deliverables checklist.
  - One-click **Copy-to-Clipboard** button for email and phone number with instant animated `"Copied!"` toast feedback.
  - Validated interactive contact form with loading spinner and submission confirmation state.
  - Crisp rounded corners (`rounded-2xl` / `rounded-3xl`), aspect-ratio photo containers, and smooth hover zoom effects.
- **5 Dedicated Pages**:
  - `Home`: Announcement badge, hero section, interactive particle wave, brand avatar, dual CTAs, and featured work preview.
  - `About Me`: Profile photo, personal story, key numbers/stats, skills categorized by discipline, and 4-step workflow methodology.
  - `Education`: Academic degrees, honors, and verified technical certifications in a structured card timeline layout with badges.
  - `Work`: Filterable project grid with 6 realistic sample portfolio projects and interactive case study modals.
  - `Contact`: Direct email and phone with instant copy buttons, location, timezone, and interactive project inquiry form.
- **Zero-Friction Fallback**:
  - Pre-populated with hyper-realistic, beautiful sample content and high-res photography across all 5 pages.
  - Works **100% out of the box** even before you create a Sanity account!
- **Embedded Sanity Studio (`/studio`)**:
  - Full Sanity CMS content management studio embedded directly inside the app. No separate server required.

---

## 🚀 Quick Start (Running Locally in 30 Seconds)

You do **not** need a Sanity account to start exploring. The portfolio automatically uses rich built-in mock data:

```bash
# 1. Install dependencies (if not already installed)
npm install --legacy-peer-deps

# 2. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- Visit [http://localhost:3000/work](http://localhost:3000/work) to see the filterable projects and detail modal.
- Visit [http://localhost:3000/about](http://localhost:3000/about) to see the profile, story, and skills.
- Visit [http://localhost:3000/education](http://localhost:3000/education) to see the academic milestones.
- Visit [http://localhost:3000/contact](http://localhost:3000/contact) to test the copy buttons and contact form.
- Visit [http://localhost:3000/studio](http://localhost:3000/studio) to view the embedded Sanity Studio.

---

## 🛠️ Step-by-Step Beginner Guide: Connecting Sanity CMS

When you are ready to connect your own Sanity dataset and edit all texts, photos, and links through a visual CMS interface:

### Step 1: Create a Free Sanity Account & Project
1. Go to [https://www.sanity.io](https://www.sanity.io) and sign up (free forever tier).
2. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage) and click **"Create Project"**.
3. Name your project (e.g. `My Portfolio`) and choose the free plan.
4. Copy your **Project ID** from the project dashboard.

### Step 2: Configure `.env.local`
Open the `.env.local` file in the root of this project and fill in your Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
SANITY_API_TOKEN=your_token_from_step_3
```

### Step 3: Generate a Sanity API Write Token
1. In your Sanity Project dashboard at [https://www.sanity.io/manage](https://www.sanity.io/manage):
   - Click on the **Settings** tab at the top.
   - In the left sidebar, click **API**.
   - Under **Tokens**, click **+ Add API token**.
   - Name it `Portfolio Seeder`, set Permissions to **Editor**, and click **Save**.
2. Copy the token and paste it into `.env.local` as `SANITY_API_TOKEN`.

### Step 4: Seed All 5 Pages with Sample Data in 1 Second!
Run the automated seed script:

```bash
npm run seed
```

This will automatically create and publish:
- `siteSettings`: Hero headline, subtitle, CTAs, announcement badge, and social links.
- `about`: Profile photo, bio, story, stats, and skills by category.
- `education`: 4 academic and certification milestones with badges.
- `project`: 6 complete portfolio projects with high-res photos, deliverables, and tags.
- `contact`: Email, phone, location, and availability notices.

### Step 5: Add CORS Origin (1-Click in Sanity)
To allow your local development server to read and edit data in Sanity:
1. In your Sanity dashboard under **Settings -> API -> CORS Origins**:
2. Click **+ Add CORS origin**.
3. Enter `http://localhost:3000` and check **Allow credentials**. Click **Save**.

### Step 6: Open Sanity Studio
Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) in your browser.
Log in with your Sanity account, and you will see all your portfolio documents ready to edit visually! Any changes you make in Sanity Studio will immediately reflect on the live website.

---

## 📁 Project Structure

```
├── data/
│   └── sanity-export.ndjson       # Ready-to-import Sanity dataset backup
├── scripts/
│   └── seed-sanity.js            # Automated 1-command Sanity seeding script
├── src/
│   ├── app/
│   │   ├── about/page.tsx        # Dedicated About Me page
│   │   ├── contact/page.tsx      # Dedicated Contact page (copy buttons & form)
│   │   ├── education/page.tsx    # Dedicated Education & Credentials page
│   │   ├── studio/[[...tool]]/   # Embedded Sanity Studio route (/studio)
│   │   ├── work/page.tsx         # Dedicated Projects page (filter & modal)
│   │   ├── globals.css           # Tailwind base & custom scrollbar styles
│   │   ├── layout.tsx            # Root layout with Inter font & Navbar/Footer
│   │   ├── not-found.tsx         # Clean 404 error page
│   │   └── page.tsx              # Home page with Particle Wave Hero
│   ├── components/
│   │   ├── ContactForm.tsx       # Validated inquiry form with interactive submit
│   │   ├── CopyButton.tsx        # 1-click clipboard copy with "Copied!" feedback
│   │   ├── Footer.tsx            # Minimalist footer with links & status indicator
│   │   ├── Navbar.tsx            # Sticky glassmorphism header & mobile drawer
│   │   ├── ParticleWave.tsx      # Interactive 60fps micro-dot canvas wave
│   │   ├── ProjectCard.tsx       # Hover zoom & lift project card
│   │   ├── ProjectModal.tsx      # High-res case study modal with deliverables
│   │   └── WorkGrid.tsx          # Filterable project category grid
│   ├── data/
│   │   └── mockData.ts           # Rich, realistic fallback dataset
│   └── sanity/
│       ├── client.ts             # Resilient Sanity client with query fallback
│       ├── dataService.ts        # Unified async data fetching service
│       ├── env.ts                # Sanity configuration variables
│       ├── image.ts              # Sanity responsive image URL builder
│       ├── queries.ts            # High-performance GROQ queries
│       └── schemaTypes/          # Full Sanity CMS schema definitions
│           ├── about.ts
│           ├── contact.ts
│           ├── education.ts
│           ├── index.ts
│           ├── project.ts
│           └── siteSettings.ts
├── .env.local                    # Local environment variables
├── .env.local.example            # Example environment template
├── next.config.mjs               # Next.js config with Unsplash & Sanity domains
├── package.json                  # Dependencies & scripts
├── sanity.config.ts              # Sanity Studio configuration
└── tailwind.config.js            # Custom color palette & geometric typography
```

---

## 🎨 Color Palette & Design Tokens

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `Background` | `#FFFFFF` | Crisp, pure white primary canvas |
| `Primary Text` | `#111111` | Deep charcoal / near-black high-contrast typography |
| `Surface` | `#F3F4F6` | Soft gray surfaces for secondary buttons, pills & cards |
| `Border` | `#E5E7EB` | Hairline borders for visual structure and separation |
| `Muted Text` | `#6B7280` | Body copy, secondary metadata, and timestamps |
| `Particle Colors`| `#3B82F6`, `#8B5CF6`, `#EC4899`, `#10B981` | Delicate micro-dot particle wave palette |

---

## 🚢 Deploying to Vercel

When you are ready to publish your portfolio to the world:

1. Push this project to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `your_project_id`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-03-01`
5. Click **Deploy**.
6. In your Sanity dashboard under **Settings -> API -> CORS Origins**, add your production Vercel domain (e.g. `https://my-portfolio.vercel.app`) with credentials enabled.

Your portfolio is now live with real-time CMS editing!
