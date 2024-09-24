import { Page, test as baseTest } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

type MyFixtures = {
    loggedInPage: Page;
};

export const test = baseTest.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(process.env.MAGENTO_USERNAME!, process.env.MAGENTO_PASSWORD!);
        await use(page);
    },
});

