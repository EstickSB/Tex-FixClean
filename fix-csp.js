import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlFile = path.join(distDir, 'index.html');
const scriptsFile = path.join(distDir, 'astro-scripts.js');

if (fs.existsSync(htmlFile)) {
    let content = fs.readFileSync(htmlFile, 'utf8');
    const scripts = [];

    // Regex to find script tags and extract their content
    content = content.replace(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi, (match, scriptContent) => {
        scripts.push(scriptContent);
        return ''; // Remove the inline script tag
    });

    if (scripts.length > 0) {
        fs.writeFileSync(scriptsFile, scripts.join('\n\n'));
        // Add the new script tag before the closing body tag or at the end of head
        content = content.replace('</body>', '<script src="/astro-scripts.js"></script></body>');
        fs.writeFileSync(htmlFile, content);
        console.log('Fixed CSP: Moved inline scripts to astro-scripts.js');
    } else {
        console.log('No inline scripts found.');
    }
} else {
    console.error('index.html not found in dist folder');
}
