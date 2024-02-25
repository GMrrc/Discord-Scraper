# Discord Scraper

## Setup:

Install all dependencies with:

```bash
npm install
```

Don't forget to paste your token and the channel ID you want to scrape into the settings.json file.

## Startup:

Run the `scrape.js` file to fetch and extract the content of the channel.
The list.json and links.json files are located in the ./storage folder.
If you want to download all the attached files, run `download.js`.

```bash
node scrape.js
```
```bash
node download.js
```