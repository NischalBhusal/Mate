# Grammar & Spelling Assistant

A Chrome Extension that provides real-time spelling and grammar assistance as you type on any website.

## Features

- Auto-Detection: Identifies common spelling and grammatical errors in real-time
- Auto-Correction: Automatically fixes high-confidence errors (example: 'teh' to 'the')
- Smart Suggestions: Underlines low-confidence errors in red with hover tooltips showing suggestions
- Performance Optimized: Uses debouncing (300ms) to prevent lag during fast typing
- Privacy-Focused: All processing happens locally in your browser
- Customizable: Toggle auto-correct on or off via the options page

## Supported Fields

The extension monitors and assists with:
- Text input fields
- Text areas
- Content-editable divs

## Installation

### Load Unpacked Extension (Development)

1. Clone or download this repository
2. Open Chrome and navigate to chrome://extensions/
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the extension directory containing manifest.json

### Icons Setup

The extension requires icons. You can:
- Create your own icons (16x16, 48x48, 128x128 PNG files)
- Or temporarily comment out the icons section in manifest.json for testing

## How It Works

### High-Confidence Auto-Correction

Over 1000 common misspellings are automatically fixed as you type when auto-correct is enabled.

Examples include:
- teh to the
- recieve to receive
- occured to occurred
- seperate to separate
- definately to definitely
- beleive to believe
- freind to friend
- wich to which
- thier to their
- dont to don't
- cant to can't

### Low-Confidence Suggestions

These errors are underlined in red with suggestions shown on hover:
- alot suggests a lot
- everytime suggests every time
- aswell suggests as well
- basicly suggests basically
- probly suggests probably
- realy suggests really

## Technical Implementation

### Text Node Handling Without Breaking Styling

The extension carefully handles text nodes to preserve website styling:

For Regular Input or Textarea Elements:
- Uses direct value manipulation
- Preserves cursor position after corrections
- No DOM modification required

For ContentEditable Elements:
- Creates a TreeWalker to traverse text nodes
- Wraps error text in span elements with grammar-error class
- Uses minimal inline styles to avoid conflicts
- Restores cursor position using Range API
- Normalizes text nodes after modifications to merge adjacent nodes

Cursor Position Preservation:
The system saves cursor offset before modification and restores position after changes are applied.

Non-Intrusive Styling:
- Uses high z-index (999999) for tooltips
- Applies minimal background color changes
- Red underline using border-bottom instead of text decoration
- All styles are scoped to grammar-error class

### Debouncing Strategy

The extension uses a 300ms debounce timer to optimize performance. This approach ensures no lag during fast typing, reduced CPU usage, and smooth user experience.

### Dynamic Element Detection

Uses MutationObserver to detect dynamically added input fields and automatically attaches listeners to new fields.

## Options

Access the options page to customize behavior:

1. Click the extension icon in Chrome toolbar
2. Click Settings button
3. Toggle Auto-Correct on or off

Settings are synced across devices using Chrome's sync storage.

## Testing

1. Open test.html in Chrome after loading the extension
2. Try typing common errors in the test fields
3. Observe high-confidence errors being auto-corrected, low-confidence errors being underlined, tooltips appearing on hover, and smooth performance during fast typing

## File Structure

mate/
- manifest.json (Extension manifest with Manifest V3)
- content.js (Main content script)
- styles.css (Error highlighting and tooltip styles)
- options.html (Options page UI)
- options.js (Options page logic)
- popup.html (Extension popup UI)
- popup.js (Popup logic)
- test.html (Test page for development)
- README.md (Documentation)

## Permissions

The extension requires:

- activeTab: Access to the active tab for content script injection
- storage: Store user preferences
- scripting: Inject content scripts into web pages
- host_permissions for all_urls: Monitor input fields on all websites

All processing is done locally and no data is sent to external servers.

## Customization

### Adding New Error Rules

Edit ERROR_DATABASE in content.js to add new auto-corrections or suggestions.

### Adjusting Debounce Timing

Modify DEBOUNCE_DELAY in content.js (change to 500 for slower checking).

### Styling Errors

Customize appearance in styles.css by modifying the grammar-error class properties.

## Integration with External APIs

For production use, consider integrating with:

- LanguageTool API: Advanced grammar checking
- Grammarly API: Professional writing assistance
- OpenAI GPT: Context-aware suggestions

Replace the ERROR_DATABASE with API calls in the checkAndCorrectText function.

## License

MIT License

## Known Limitations

1. Works best with plain text; complex HTML in contenteditable may have issues
2. Does not handle extremely large text blocks (over 10,000 characters)
3. Basic error database; real-world apps should use professional APIs
4. May conflict with other grammar or spelling extensions

## Future Enhancements

- Context-aware grammar suggestions
- Support for multiple languages
- Custom dictionary for technical terms
- Performance metrics dashboard
- Integration with external grammar APIs
- Keyboard shortcuts for accepting or rejecting suggestions

## Contributing

Contributions are welcome. Please ensure code follows existing style patterns, new features include test cases, and documentation is updated.

Made for better writing.
