
# Lotfollahi Lab Website

Static site built with **Docusaurus v2** and deployed to **GitHub Pages** under the custom domain **https://lotfollahi.com**.

---

## Requirements

- **Node.js ≥ 16.14** (Node 18 LTS recommended)
- **npm** (ships with Node)
- Git

Project config highlights:  
- `docusaurus.config.js` → `url: 'https://lotfollahi.com'`, `baseUrl: '/'`, `trailingSlash: true`
- `static/CNAME` contains:
```

lotfollahi.com

````

---

## Quick Start (Local Dev → Verify → Deploy)

### 1) Install & run dev server (hot reload)
```bash
npm install
npm run start             # http://localhost:3000
````

### 2) Build a production bundle

```bash
npm run build             # outputs to ./build
```

### 3) Preview the EXACT bundle that will go live

```bash
npm run serve             # http://localhost:3000 (serves ./build)
```

### 4) Deploy to GitHub Pages (HTTPS)

> We deploy the contents of `build/` to the **gh-pages** branch using HTTPS env vars.

**Windows PowerShell**

```powershell
$env:GIT_USER=<GITHUB_USERNAME>
$env:GIT_PASS="<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>"   # PAT with 'repo' scope
npm run deploy
```

**Windows CMD**

```bat
set GIT_USER=<GITHUB_USERNAME>
set GIT_PASS=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
npm run deploy
```

After deploy, GitHub Pages serves it at `gh-pages` and your custom domain points to it (thanks to `static/CNAME`).

---

## Project Structure (key bits)

```
lotfollahi.com/
├─ src/
│  ├─ pages/
│  │  ├─ index.js              # Home -> uses src/components/Landing
│  │  ├─ Lab.md                # Lab members page
│  │  ├─ about.md              # Biography page
│  │  └─ publications.md       # Publications page
│  ├─ css/
│  │  ├─ custom.css            # central CSS importing:
│  │  ├─ tokens.css            # design tokens (colors, sizes)
│  │  ├─ typography.css        # link/bold styles
│  │  ├─ hero.css              # hero card styles
│  │  ├─ members.css           # lab cards + photo layouts
│  │  └─ publications.css      # publications list styles
│  └─ components/              # (Landing, etc.)
├─ static/
│  ├─ img/                     # images served from /img/...
│  │  ├─ people/               # portraits
│  │  └─ gallery/              # site galleries (see below)
│  └─ CNAME                    # custom domain config (lotfollahi.com)
├─ docusaurus.config.js        # site config (url/baseUrl/trailingSlash)
├─ package.json                # scripts & deps
└─ build/                      # production output (generated)
```

---


## Scripts (for reference)

```json
{
  "scripts": {
    "start": "docusaurus start",
    "build": "docusaurus build",
    "serve": "docusaurus serve",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "swizzle": "docusaurus swizzle",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

---

## Typical Workflow

1. Edit content (Markdown/MDX, CSS, images).
2. `npm run start` to iterate fast.
3. `npm run build` → `npm run serve` to sanity-check the exact production bundle.
4. **Deploy via HTTPS**:

   * PowerShell:

     ```powershell
     $env:GIT_USER="<GITHUB_USERNAME>"
     $env:GIT_PASS="<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>"
     npm run deploy
     ```
   * CMD:

     ```bat
     set GIT_USER=
     set GIT_PASS=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
     npm run deploy
     ```

Your site will update at **[https://lotfollahi.com](https://lotfollahi.com)** (custom domain on GitHub Pages).

```

