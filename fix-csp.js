import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlFile = path.join(distDir, 'index.html');
const scriptsFile = path.join(distDir, 'astro-scripts.js');

if (fs.existsSync(htmlFile)) {
    let content = fs.readFileSync(htmlFile, 'utf8');
    const scripts = [];

    // 1. Move inline scripts to external file (Required by Chrome Extensions CSP)
    content = content.replace(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi, (match, scriptContent) => {
        scripts.push(scriptContent);
        return '';
    });

    if (scripts.length > 0) {
        fs.writeFileSync(scriptsFile, scripts.join('\n\n'));
        content = content.replace('</body>', '<script src="astro-scripts.js"></script></body>');
    }

    // 2. Make paths relative so they work on GitHub Pages subfolders and Chrome Extensions
    // Replace href="/..." with href="..." (caution with external links, but Astro usually uses / for internal)
    // Replace src="/..." with src="..."

    // We target specifically /_astro/ and /favicon.png or other common root assets
    content = content.replace(/(href|src)="\/([^"]*)"/g, (match, attr, pathValue) => {
        // If it starts with http or is an absolute URL, don't change it
        if (pathValue.startsWith('http') || pathValue.startsWith('//')) {
            return match;
        }
        // Change absolute root path to relative
        return `${attr}="./${pathValue}"`;
    });

    // Specifically handle the case where Astro might have inserted the base path if we used it
    // But since we want to be universal, we'll just ensure everything is relative.

    fs.writeFileSync(htmlFile, content);
    console.log('Fixed CSP and made paths relative.');
} else {
    console.error('index.html not found in dist folder');
}
