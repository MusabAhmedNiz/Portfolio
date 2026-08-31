# MusabNiz

Full-stack developer. I build web applications with Next.js, React, and TypeScript — the whole vertical slice: auth flows, payments, file uploads, and the database work underneath. I care about simple, maintainable code over clever abstractions.

This repo holds my portfolio site. It doubles as a living summary of who I am and what I work with — versioned as things change.

## What I work with

**Web**

- Next.js, React, TypeScript
- Prisma and Better Auth — auth flows, RBAC, seeding admin users server-side
- Payments: Polar and Stripe
- File uploads: S3 and ImageKit, client-direct flows behind admin-only auth
- TanStack Form, pnpm, Vercel

**Systems** (the tinkerer zone)

- Daily driver: Omarchy (Arch + Hyprland). Previously hand-rolled my own Arch setup — Waybar, eww, Hyprlock, and a Python script that re-themed the desktop from the current wallpaper
- Homelab on an Oracle VPS: Pi-hole for DNS, Traefik as reverse proxy, WireGuard for remote access, and frp tunneling a self-hosted Minecraft server past a missing public IP

## The site itself

- Next.js (App Router), React, Tailwind CSS, TypeScript
- Dark, typography-first design — tokens and component spec in [DESIGN.md](./DESIGN.md)

```bash
pnpm install
pnpm dev
```

## Version history

| Version | Date       | Notes                                                                    |
| ------- | ---------- | ------------------------------------------------------------------------ |
| 0.2.0   | 2026-08-31 | Real content: actual bio, stack, and homelab notes; placeholders removed |
| 0.1.0   | 2026-08    | Initial build                                                            |

Projects get added to the site as they ship.
