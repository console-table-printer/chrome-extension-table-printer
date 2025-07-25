# Console Table Printer (CTP) - Monorepo

A comprehensive collection of tools for creating beautiful ASCII tables in various environments - from Node.js applications to Chrome extensions and CLI tools.

## 🚀 Projects

This monorepo contains several related projects:

### 📦 [console-table-printer](./console-table-printer/)
The core Node.js library for printing pretty tables in console applications.

```bash
npm install console-table-printer
```

**Features:**
- Beautiful ASCII table formatting
- Color support and styling
- Column alignment and customization
- Computed columns and sorting
- TypeScript support

### 🌐 [Chrome Extension](./chrome-extension/)
A browser extension that formats table data on web pages using the console-table-printer library.

### 🖥️ [CLI Tool](./table-printer-cli/)
A command-line interface for formatting tabular data from various sources.

```bash
npm install -g table-printer-cli
```

### 📚 [Documentation Site](./console-table-docu/)
Interactive documentation and examples built with Docusaurus.

Visit: https://console-table.netlify.app

### 🍺 [Homebrew Formula](./homebrew-console-table/)
Homebrew formula for easy installation on macOS.

```bash
brew install console-table
```

### 🔧 [simple-wcswidth](./simple-wcswidth/)
A utility library for calculating display width of Unicode strings, used internally by console-table-printer.

### 🧪 [E2E Tests](./e2e/)
End-to-end testing suite for all projects in the monorepo.

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/console-table-printer/console-table-printer.git
   cd console-table-printer
   ```

2. **Install dependencies for all projects:**
   ```bash
   # Install dependencies for each project
   cd console-table-printer && yarn install && cd ..
   cd table-printer-cli && yarn install && cd ..
   cd console-table-docu && yarn install && cd ..
   cd simple-wcswidth && yarn install && cd ..
   cd e2e && yarn install && cd ..
   ```

3. **Build all projects:**
   ```bash
   # Build core library
   cd console-table-printer && yarn build && cd ..
   
   # Build CLI tool
   cd table-printer-cli && yarn build && cd ..
   
   # Build simple-wcswidth
   cd simple-wcswidth && yarn build && cd ..
   ```

4. **Run tests:**
   ```bash
   # Test core library
   cd console-table-printer && yarn test && cd ..
   
   # Test CLI tool
   cd table-printer-cli && yarn test && cd ..
   
   # Run E2E tests
   cd e2e && yarn test && cd ..
   ```

## 📄 License

MIT License - see individual project directories for specific license files.

## 👥 Contributing

Contributions are welcome! Please read the contributing guidelines in each project directory.

## 🔗 Links

- **Documentation:** https://console-table.netlify.app
- **NPM Package:** https://www.npmjs.com/package/console-table-printer
- **GitHub:** https://github.com/console-table-printer/console-table-printer

---

Made with ❤️ by Nahiyan Kamal
