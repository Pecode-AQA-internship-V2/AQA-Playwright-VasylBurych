import { Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToWishlist() {
        await this.page.waitForSelector('a[title="Add to Wish List"]', { state: 'visible' });
        await this.page.click('a[title="Add to Wish List"]', { force: true });
    }

}
