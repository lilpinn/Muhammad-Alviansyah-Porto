const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const out = process.argv[2] || 'C:/Users/M. Alviansyah/AppData/Local/Temp/opencode';

  // Desktop full page, scroll stepwise to trigger IntersectionObserver reveals
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3199', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 700) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(350);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${out}/full-desktop-2.png`, fullPage: true });

  // Section-wise viewport shots
  const marks = [900, 1900, 2900, 3900, 4900, 5900];
  for (let i = 0; i < marks.length; i++) {
    await page.evaluate((v) => window.scrollTo(0, v), marks[i]);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${out}/sec-${i + 1}.png` });
  }
  await page.close();

  // Mobile full page
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto('http://localhost:3199', { waitUntil: 'networkidle' });
  await m.waitForTimeout(2000);
  const mh = await m.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < mh; y += 600) {
    await m.evaluate((v) => window.scrollTo(0, v), y);
    await m.waitForTimeout(300);
  }
  await m.evaluate(() => window.scrollTo(0, 0));
  await m.waitForTimeout(600);
  await m.screenshot({ path: `${out}/full-mobile-2.png`, fullPage: true });
  await m.close();

  await browser.close();
  console.log('done');
})();
