# JSON Table Formatter - Chrome Extension

A Chrome browser extension that transforms JSON data into beautifully formatted ASCII tables. Perfect for developers, data analysts, and anyone who needs to visualize JSON data in a structured, readable format.

### Manual Installation (Developer Mode)

1. **Download the Extension**
   ```bash
   git clone <repository-url>
   cd chrome-extension
   ```

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `chrome-extension` folder

3. **Start Using**
   - Look for the JSON Table Formatter icon in your Chrome toolbar
   - Click the icon to open the formatter popup

## Usage

### Basic Usage

1. **Open the Extension** - Click the extension icon in your Chrome toolbar
2. **Input JSON Data** - Paste or type your JSON array in the text area
3. **Format Table** - Click "Format Table" or press Ctrl+Enter (Cmd+Enter on Mac)
4. **View Results** - Your formatted table appears in the output section

### Supported JSON Format

The extension accepts JSON arrays containing objects with consistent properties:

```json
[
  {"name": "John", "age": 30, "city": "New York"},
  {"name": "Jane", "age": 25, "city": "Boston"},
  {"name": "Bob", "age": 35, "city": "Chicago"}
]
```

**Output:**
```
┌────────┬─────┬──────────┐
│  name  │ age │   city   │
├────────┼─────┼──────────┤
│  John  │ 30  │ New York │
│  Jane  │ 25  │  Boston  │
│  Bob   │ 35  │ Chicago  │
└────────┴─────┴──────────┘
```

### Example Data Sets

The extension includes two built-in examples:

- **Simple Example**: Basic user data (name, age, city)
- **Complex Example**: Product inventory data (id, product, price, category, stock)

Click the example links below the input area to load sample data instantly.

## Technical Details

### Architecture

- **Manifest V3** - Built using the latest Chrome extension manifest version
- **Pure JavaScript** - No external dependencies, lightweight and fast
- **Custom Table Formatter** - Browser-compatible implementation inspired by console-table-printer
- **Unicode Box Drawing** - Professional table formatting with Unicode characters

### Prerequisites

- Google Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd chrome-extension
   ```

2. **Load in Chrome**
   - Navigate to `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked" and select the project folder

3. **Make Changes**
   - Edit files as needed
   - Click the refresh button in `chrome://extensions/` to reload
   - Test changes by clicking the extension icon

## Browser Compatibility

- **Chrome**: Full support (Manifest V3)
- **Edge**: Compatible with Chromium-based Edge
- **Other Browsers**: May require manifest adjustments

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Changelog

### Version 1.0
- Initial release
- JSON to ASCII table conversion
- Built-in examples
- Input validation and error handling
- Keyboard shortcuts support

---

**Made with ❤️ for developers who love clean data visualization**