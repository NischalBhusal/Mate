# Mate | Grammar & Spelling Assistant

**mate** is a high-performance Chrome Extension (Manifest V3) that provides real-time spelling and grammar assistance as you type. It balances speed and accuracy to ensure your writing is professional and error-free across the entire web.

---

## Features

* **Auto-Detection:** Identifies common spelling and grammatical errors in real-time.
* **Auto-Correction:** Automatically fixes high-confidence errors (e.g., 'teh' to 'the', 'recieve' to 'receive').
* **Smart Suggestions:** Underlines low-confidence errors in red with hover tooltips showing suggestions.
* **Performance Optimized:** Uses a 300ms debounce to prevent lag during fast typing.
* **Privacy-Focused:** All processing happens locally in your browser; no data is sent to external servers.
* **Customizable:** Toggle auto-correct on or off via the options page.

## Supported Fields

The extension monitors and assists with:
* Standard text input fields (`<input>`)
* Text areas (`<textarea>`)
* Content-editable divs (e.g., Gmail, LinkedIn, Facebook editors)

## Installation

1.  **Download:** Clone or download this repository.
2.  **Open Extensions:** Navigate to `chrome://extensions/` in Google Chrome.
3.  **Developer Mode:** Enable "Developer mode" in the top-right corner.
4.  **Load Unpacked:** Click "Load unpacked" and select the extension directory containing `manifest.json`.

## ⚙️ Technical Implementation

### DOM Handling
* **Preservation:** Carefully handles text nodes to preserve website styling and layout.
* **ContentEditable:** Uses a `TreeWalker` to traverse nodes and the **Range API** to restore cursor position after corrections.
* **MutationObserver:** Automatically detects and attaches listeners to dynamically added input fields.

### Logic
* **Debouncing Strategy:** A 300ms timer ensures smooth performance and reduced CPU usage.
* **Non-Intrusive Styling:** Error underlines use `border-bottom` and high `z-index` (999999) tooltips to avoid conflicts with native site CSS.

### File Structure

```text
Mate|Grammar & Spelling Assistant
├── manifest.json   # Extension manifest (V3)
├── content.js      # Main content script (Logic)
├── styles.css      # Error highlighting and tooltip styles
├── options.html    # Options page UI
├── options.js      # Options page logic
├── popup.html      # Extension popup UI
├── popup.js        # Popup logic
└── test.html       # Development testing page
```

### Contributing

```text
Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.
```

## License
**MIT License**

Copyright (c) 2026 mate

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
