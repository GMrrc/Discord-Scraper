const fs = require('fs');
const path = require('path');
const download = require('download');

const urls = require('./storage/links.json');

async function downloadWithDelay(urls) {
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const parsedUrl = new URL(url);
        const filename = i+'_'+path.basename(parsedUrl.pathname);
        const dest = path.resolve('./downloads');
        
        try {
            await downloadFileWithDelay(url, dest, i * 1); 
            console.log(`${filename} downloaded successfully`);
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error);
        }
    }

}

async function downloadFileWithDelay(url, dest, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    await download(url, dest);
}

downloadWithDelay(urls);
