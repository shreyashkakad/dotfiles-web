# dotfiles-web

Dotfiles Web is a lightweight React app for sharing dotfiles online. It’s simple, fast, and built for developers who want to upload and share their configs without extra setup or clutter.

## Homepage
![Homepage Screenshot](https://i.ibb.co/4ZfXrskz/screenshot-2025-11-12-11-48-56.png)

## Explore Setup's
![Explore Setup Screenshot](https://i.ibb.co/qYjb1pms/screenshot-2025-11-12-11-49-35.png)

## Upload Your Dotfiles
![Upload Screenshot](https://i.ibb.co/7tG3PFhQ/screenshot-2025-11-12-11-50-01.png)

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/shreyashkakad/dotfiles-web.git
cd dotfiles-web
npm install
```

This project uses Firebase, so you'll need a `.env` file in the project root with your own Firebase project's config. Copy the example file and fill in your values:

```bash
cp .env.example .env
```

You can find these values in the Firebase console under **Project Settings → General → Your apps**.

Then start the dev server:

```bash
npm run dev
```

## Design & Structural Decisions

- Kept the UI simple so dotfiles are easy to read and share.
- Organized code into small components instead of one large file.
- Separated data handling from UI logic.
- Used only necessary libraries to keep the project lightweight.
