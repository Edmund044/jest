const { exportAllDeclaration } = require('@babel/types');
const { expect } = require('@jest/globals');
const { timeStamp } = require('console');
const { generateText, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

test('should output name and age', () => {
     const text = generateText('Max', 29);
     expect(text).toBe('Max (29 years old)');
     const text2 = generateText('Angelina', 26);
     expect(text2).toBe('Angelina (26 years old)');
});

test('should output data-less text', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)')

});

test('should generate a valid text output', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});
test('should click around', async() => {
     const browser = await puppeteer.launch({
         headless: true,
         slowMo:100,
         args: ['--window-size=1920,1080']
     });
     const page = await browser.newPage();
     await page.goto('file:///C:/Users/Dell/Desktop/jestTutorial/index.html');
     await page.click('input#name');
     await page.type('input#name', 'Anna');
     await page.click('input#age');
     await page.type('input#age', '28');
     const finalText = await page.$eval('.user-output', el => el.textContent)
     //await sequelize.sync()
     //expect(finalText).toBe('Anna (28 years old)')
},30000);
