# QR Code Generator

A lightweight, browser-based QR code generator that converts a URL into a downloadable QR code.

The application provides a simple interface for entering a URL, generating a QR code instantly, previewing it on the page, and downloading it as a PNG image.

**Live Demo:** https://lalia63.github.io/QRCodeGenerator/

---

## Features

* Generate QR codes from URLs
* Input validation for empty values
* Instant QR code preview
* Canvas-based QR rendering
* Download generated QR codes as PNG
* Responsive layout
* Simple and focused UI
* Fully client-side — no backend required

---

## Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript
* Bootstrap 5.3.8

**QR Generation**

* QRious 4.0.2

**Deployment**

* GitHub Pages

---

## How It Works

The application follows a simple client-side flow:

```text
User enters URL
       │
       ▼
Generate button
       │
       ▼
Validate input
       │
       ▼
QRious generates QR code
       │
       ▼
Display QR on canvas
       │
       ▼
Download as PNG
```

The QR code is generated directly in the browser using the **QRious** JavaScript library.

No server-side processing or database is required.

---

## Project Structure

```text
QRCodeGenerator/
│
├── index.html      # Application markup and layout
├── index.js        # QR generation and download logic
├── style.css       # Custom styling
└── README.md       # Project documentation
```

---

## Getting Started

### Clone the repository

```bash
git clone <repository_url>
cd QRCodeGenerator
```

### Run locally

Because this is a static frontend project, no backend setup is required.

You can open `index.html` directly in a browser or run it using a local development server.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Usage

1. Enter a URL into the input field.
2. Click **Generate**.
3. The QR code will be rendered in the preview area.
4. Click **Download** to save the QR code as `qr.png`.

---

## Implementation

The QR code is rendered using a `<canvas>` element.

```javascript
const qr = new QRious({
  element: canvas,
  value: "",
  size: 256
});
```

When the user generates a QR code, the entered URL is assigned to the QRious instance:

```javascript
qr.value = urlValue;
```

The generated canvas is then converted into a PNG data URL for downloading:

```javascript
const dataUrl = canvas.toDataURL("image/png");
```

This keeps the entire application client-side.

---

## Deployment

The project is deployed using **GitHub Pages**.

**Live Application:**
https://lalia63.github.io/QRCodeGenerator/

---

## Project Highlights

This project demonstrates practical experience with:

* DOM manipulation
* JavaScript event handling
* Form/input validation
* Canvas API
* Third-party JavaScript libraries
* Client-side file generation
* PNG download functionality
* Bootstrap integration
* Responsive UI development
* GitHub Pages deployment

---

## Author

**Hsu Yati Zaw (Lia)**

Full Stack Developer & UI/UX Designer

**Hsu Yati Zaw:** [LaLia63](https://github.com/LaLia63)

---

## License

This project is a personal portfolio project.
