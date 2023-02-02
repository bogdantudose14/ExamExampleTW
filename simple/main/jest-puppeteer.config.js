module.exports = {
    server: {
      command: 'node server.js',
      port: 8080,
    },
    launch: {
        dumpio: true,
        headless: true,
    },
    browser: 'chromium',
    browserContext: 'default',
}