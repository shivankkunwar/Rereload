# Rereload

Rereload is a lightweight Node.js package that watches a specified folder for file changes and automatically restarts a server script when changes are detected. It's perfect for development environments where you want your server to reflect code changes immediately without manual restarts.

## Features

- 🔍 Watch a specified folder for file changes
- 🔄 Automatically restart your server script on file changes
- ⚙️ Easy configuration through a JSON file
- 🚀 Simple to use with npm scripts or as a global command

## Installation

You can install Rereload globally:

```bash
npm install -g rereload
```

Or as a dev dependency in your project:

```bash
npm install --save-dev rereload
```

## Configuration

Create a `watcher-config.json` file in your project root with the following structure:

```json
{
  "folderToWatch": "./src",
  "serverScript": "./src/server.js"
}
```

- `folderToWatch`: The directory to watch for changes
- `serverScript`: The path to your server script that should be restarted on changes

## Usage

### As a global command

If installed globally, you can run Rereload from any directory containing a `watcher-config.json`:

```bash
rereload
```

### Using npx

You can use npx to run Rereload without installing it:

```bash
npx rereload
```

### As a npm script

Add a script to your `package.json`:

```json
"scripts": {
  "dev": "rereload"
}
```

Then run:

```bash
npm run dev
```

## How It Works

1. Rereload reads the `watcher-config.json` file in your project root.
2. It starts watching the specified folder for any file changes.
3. When a change is detected, it automatically restarts your server script.
4. The process continues running until you stop it (usually with Ctrl+C).

## Troubleshooting

- Ensure your `watcher-config.json` is in the root directory of your project.
- Check that the paths in `watcher-config.json` are correct relative to your project structure.
- If your server isn't restarting, ensure that file changes are being saved in the watched folder.

---
