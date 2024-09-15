const chokidar = require('chokidar');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to read the config file
function readConfig() {
    const configPath = path.join(process.cwd(), 'watcher-config.json');
    try {
        const configData = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(configData);
    } catch (error) {
        console.error('Error reading config file:', error);
        process.exit(1);
    }
}

// Read configuration
const config = readConfig();
const folderToWatch = config.folderToWatch;
const serverScript = config.serverScript;

let serverProcess;

// Function to start the server
function startServer() {
    if (serverProcess) serverProcess.kill();
    console.log(`Starting server: ${serverScript}`);
    serverProcess = spawn('node', [serverScript], { stdio: 'inherit' });
    serverProcess.on('close', (code) => {
        console.log(`Server stopped with code ${code}`);
    });
}

// Watch the folder for changes using chokidar
chokidar.watch(folderToWatch, { ignoreInitial: true }).on('all', (event, path) => {
    console.log(`${path} file changed (${event})`);
    startServer();  // Restart server when a file changes
});

// Start the server for the first time
startServer();

// Handle process termination
process.on('SIGINT', () => {
    if (serverProcess) serverProcess.kill();
    process.exit();
});