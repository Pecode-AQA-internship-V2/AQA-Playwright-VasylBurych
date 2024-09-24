import { test as base } from '@playwright/test';
import dotenv from '.env.example';

dotenv.config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await page.goto('https://magento.softwaretestingboard.com/');
        await page.click('text=Sign In');
        await page.fill('#email', username);
        await page.fill('#pass', password);
        await page.click('#send2');
        await page.waitForSelector('text=Welcome');
        await use(page);
    },
});
