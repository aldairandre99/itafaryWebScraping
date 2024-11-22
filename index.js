import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();

const  NAME_FILE = "premiosdipanda"
const FILE_EXTEN = {
  pdf : ".pdf",
  pgn : ".png"
}


try {

  await page.goto('https://premiosdipanda.ao/register');


  await page.locator("input").fill('angolanomiitp@gmail.com')

  await page.locator("button").click()

  await page.close()
  await browser.close();


} catch (error) {
  await page.close()
  await browser.close();
  console.log("Somthing is wrong with this website\n")
  console.error('Error:', error);
  browser.close()
}





