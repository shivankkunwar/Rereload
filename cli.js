#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const watcherScript = path.join(__dirname, 'index.js');

const child = spawn('node', [watcherScript], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  process.exit(code);
});