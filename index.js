import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();

const  NAME_FILE = "premiosdipanda"
const FILE_EXTEN = {
  pdf : ".pdf",
  pgn : ".png"
}


try {

  await page.goto('https://learnwebcode.github.io/practice-requests/');

  await page.locator("#clickme").click()


  await page.locator("#ourfield").fill('Yellow')
  await page.locator("#ourform > button").click()
  await page.close()
  await browser.close();


} catch (error) {
  console.log("Somthing is wrong with this website\n")
  console.error('Error:', error);
  browser.close()
}




