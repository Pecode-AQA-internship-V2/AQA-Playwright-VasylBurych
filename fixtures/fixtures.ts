import { test as baseTest } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';
import { WishlistPage } from '../page-objects/WishlistPage';
import { LoginPage } from '../page-objects/LoginPage';

type MyFixtures = {
    homePage: HomePage;
    productPage: ProductPage;
    wishlistPage: WishlistPage;
    loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    wishlistPage: async ({ page }, use) => {
        await use(new WishlistPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});
