# Design Specification: Minimalist Developer Portfolio

Documented from the Google Stitch design system and screen specification for **Refined Dev Homepage** (`projects/2624173836717526022/screens/91516003688947668b1d4abe707f6c66`).

---

## 1. Color Palette & Tonal System

The portfolio uses a **pure dark tonal layer system** rather than drop shadows or heavy gradients. High contrast is preserved for primary titles, while metadata and descriptions use muted, accessible tones.

### Theme & Surfaces
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `background` / `surface` | `#0a0a0f` | Main canvas background (Level 0) |
| `surface-card` / `secondary-bg` | `#12121a` | Card & container fill (e.g. Currently card, Level 1) |
| `border-subtle` | `#1e1e2e` | 1px card borders, section rules, tag boundaries |
| `border-nav` | `#1e293b80` | Nav & footer border divider (`rgba(30, 41, 59, 0.5)`) |
| `nav-tint` | `#60a5fa05` | Subtle translucent tint for navbar / footer backdrop (`rgba(96, 165, 250, 0.02)`) |

### Brand & Interactive Accents
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `primary` | `#60a5fa` | Vibrant blue for subtitles, focus rings, hover links, accent indicators |
| `primary-container` | `#3b82f6` | Solid accent container fill |
| `primary-dim` | `#93c5fd` | Secondary blue accent |
| `secondary` | `#cdc0e9` | Muted lavender accent tone |
| `tertiary` | `#e7c365` | Warm amber highlight tone |

### Typography Colors
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `text-primary` (`on-surface`) | `#e6e0e9` / `#ffffff` | Primary headings, prominent titles, active text |
| `text-secondary` (`on-surface-variant`) | `#cbc4d2` / `#948e9c` | Body copy, subtitles, metadata, dates, tag labels |
| `text-accent` | `#60a5fa` | Role titles, interactive hover states |

---

## 2. Typography

Two primary font families are utilized:
- **Rubik** (Google Font): Geometric, slightly rounded modern sans-serif for headings and brand title.
- **Inter** (Google Font): Clean, neutral grotesque sans-serif for body copy, navigational links, and technical metadata.

### Typography Hierarchy

| Style Token | Font Family | Size | Weight | Line Height | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | Rubik | `48px` (`3rem`) | `700` (Bold) | `1.1` | `-0.02em` | Main page title / Logo |
| `headline-lg` | Rubik | `32px` (`2rem`) | `600` (SemiBold) | `1.2` | `-0.01em` | Section headings (`Selected Projects`, `Stack`, etc.) |
| `headline-lg-mobile`| Rubik | `28px` (`1.75rem`) | `600` (SemiBold) | `1.2` | `normal` | Mobile section headings |
| `body-md` | Inter | `16px` (`1rem`) | `400` / `500` | `1.6` | `normal` | Bio paragraph, card text, project titles |
| `body-sm` | Inter | `14px` (`0.875rem`)| `400` (Regular) | `1.5` | `normal` | Project descriptions, skill lists, dates, footer copy |
| `nav-link` | Inter | `15px` (`0.9375rem`)| `500` (Medium) | `1.0` | `normal` | Top navbar links |
| `label-caps` | Inter | `12px` (`0.75rem`)| `600` (SemiBold) | `1.0` | `0.05em` | Uppercase category labels (`CURRENTLY`, `FRONTEND`, etc.) |

---

## 3. Spacing & Layout Structure

The layout adheres to a **Fixed Centered Column** system that ensures readable line-length and a focused developer aesthetic.

- **Max Container Width**: `800px` (`max-w-[800px] mx-auto`)
- **Vertical Section Gap**: `8rem` (`128px` / `gap-32`) between primary sections on desktop, scaling to `4rem` (`64px`) on mobile
- **Page Padding**: `1.25rem` (`20px` / `px-5`) on mobile, `0` inside container on `md:` breakpoints
- **Top Padding / Nav Offset**: `8rem` (`128px` / `pt-32`) to ensure content flows smoothly beneath the fixed frosted navbar
- **Element Gaps**: `1.5rem` (`24px`) for grouped elements within sections

---

## 4. Shapes & Borders

- **Border Radius**:
  - `rounded-xl` (`12px` / `0.75rem`): Cards, containers (e.g. Currently card)
  - `rounded` (`4px` - `8px`): Tech stack chips/tags, small buttons
  - `rounded-full` (`9999px`): Status indicator dots, avatars
- **Borders**: Clean `1px solid #1e1e2e` borders for cards, tags, and dividing lines. No harsh white borders or heavy drop shadows.

---

## 5. Component Breakdown

### 1. Navigation Bar (`Navbar.tsx`)
- **Position**: `fixed top-0 w-full z-50` with `backdrop-blur-xl bg-[#60a5fa]/[0.02] border-b border-[#1e293b]/50`
- **Content**: Left brand name (`MusabNiz`), right text links (`Projects`, `Blog`, `GitHub`, `X`) with smooth color transitions to `#60a5fa` on hover.

### 2. Hero Section (`Hero.tsx`)
- **Content**: Large Rubik heading (`MusabNiz`), subtitle in primary accent (`Full Stack Developer`), and concise multi-sentence technical summary in `body-md` (`#cbc4d2`).

### 3. Currently Section (`Currently.tsx`)
- **Header**: Uppercase label with an active pulsing blue status dot (`CURRENTLY`).
- **Container**: `12px` rounded card with `#12121a` surface fill, `#1e1e2e` border, and 24px padding (`p-6`).

### 4. Selected Projects (`Projects.tsx`)
- **Heading**: `Selected Projects` in Rubik.
- **Card**: Clean typography-first layout with project title, direct external links (`Live ↗`, `Repo ↗`), one-sentence description, and inline tech tags (`Go`, `React`, `WebSockets`). Divided with subtle `1px` borders.

### 5. Stack / Skills (`Stack.tsx`)
- **Heading**: `Stack` in Rubik.
- **Columns**: 3-column responsive grid (`Frontend`, `Backend`, `Tools`) with uppercase category labels (`label-caps`) and vertically stacked technology items.

### 6. Footer (`Footer.tsx`)
- **Position**: Full-width footer with top border (`border-[#1e293b]/50`), containing dynamic copyright note (`© {currentYear} MusabNiz`) on the left and text links (`GitHub`, `LinkedIn`, `X`, `Email`) on the right.
