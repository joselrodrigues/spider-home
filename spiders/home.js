const puppeteer = require('puppeteer');

const urls = [
  "https://stackoverflow.com/questions/46293216/crawling-multiple-urls-in-a-loop-using-puppeteer",
  "https://github.com/puppeteer/puppeteer/issues/1329"
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try{
      await page.setViewport({width: 800, height: 800, deviceScaleFactor: 2});
      await page.goto(`${url}`, {timeout: 60000});
      await page.screenshot({ path: `./screenshots/home/home${i}.png`, fullPage: true });
    } catch (error){
      console.error(`this ${url} could not be scrapped, error ${error}`)
    }
  }
  await browser.close();
})();
