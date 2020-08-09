const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({headless: true});
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto('https://sptfy-auth-server.herokuapp.com/login', {waitUntil: 'networkidle2'});


    await page.waitFor('#login-username')
    await page.type('#login-username', 'aetherpyro')
   
    await page.waitFor('#login-password')
    await page.type('#login-password', 'rohanP2019?')

    await page.waitFor('#login-button')
    await page.click('#login-button')

    await page.waitFor(3000);
    
     await browser.close();
   }
   run().then(() => {
    console.log('Program ran at :' + new Date());
  })

