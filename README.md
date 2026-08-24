# Terminal Clock - VS Code Extension

A simple VS Code extension that displays the current time in terminal-style format (HH:MM:SS) in the status bar on the left side.

<img width="352" height="29" alt="image" src="https://github.com/user-attachments/assets/e6fd18a5-ec7f-4622-a7a6-f7a5f3b11b37" />


## Features

- Display time in HH:MM:SS format
- Update every second automatically
- Located in the left side of the status bar
- Minimalist design without WebView
- Written in TypeScript following Clean Code principles
- Full JSDoc documentation for all methods
- Unit tests with Mocha and Chai
- Functional tests with Playwright

## Project Structure

```
terminal-clock/
├── src/
│   └── extension.ts          # Main extension code
├── tests/
│   ├── unit/
│   │   └── extension.test.ts # Unit tests
│   ├── functional/
│   │   └── extension.spec.ts # Functional tests
│   └── test.config.js        # Test configuration
├── dist/
│   └── extension.js          # Compiled output
├── images/
│   └── icon.png              # Extension icon
├── package.json              # Extension manifest
├── tsconfig.json             # TypeScript configuration
├── webpack.config.js         # Webpack configuration
├── playwright.config.ts      # Playwright configuration
├── LICENSE                   # MIT License
├── CHANGELOG.md              # Version history
└── README.md                 # This file
```

## Installation

### For Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/terminal-clock.git
   cd terminal-clock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run compile
   ```

4. Open the folder in VS Code and press F5 to launch in debug mode

### For Usage

1. Build the extension:
   ```bash
   npm run vscode:prepublish
   ```

2. Package the extension:
   ```bash
   npm run package
   ```

3. Install the `.vsix` file in VS Code

## Scripts

- `npm run compile` - Build the project in development mode
- `npm run watch` - Build in watch mode (automatic rebuild)
- `npm run vscode:prepublish` - Production build
- `npm run package` - Create `.vsix` package
- `npm run test:unit` - Run unit tests
- `npm run test:functional` - Run functional tests
- `npm run test` - Run all tests

## Requirements

- VS Code ^1.85.0
- Node.js >= 16.x
- npm >= 8.x

## Testing

### Unit Tests

Unit tests verify the core functionality of the extension:

```bash
npm run test:unit
```

Tests include:
- Time format validation (HH:MM:SS)
- Hours, minutes, seconds range validation
- Time update between calls

### Functional Tests

Functional tests verify the extension behavior in VS Code environment:

```bash
npm run test:functional
```

Tests include:
- Extension activation
- Status bar item creation
- Time display format
- Update interval verification
- Resource cleanup on deactivation

## Publishing

To publish the extension to the VS Code Marketplace:

1. Install `@vscode/vsce` globally:
   ```bash
   npm install -g @vscode/vsce
   ```

2. Create a publisher account at [VS Code Marketplace](https://marketplace.visualstudio.com/manage/)

3. Login with your publisher token:
   ```bash
   vsce login <publisher-name>
   ```

4. Package and publish:
   ```bash
   vsce publish
   ```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.
