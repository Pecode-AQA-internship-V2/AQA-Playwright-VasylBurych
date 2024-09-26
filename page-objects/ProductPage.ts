import { Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    private addToWishlistSelector = 'a[title="Add to Wish List"]';

    constructor(page: Page) {
        this.page = page;
    }

    async addToWishlist() {
        await this.page.waitForSelector(this.addToWishlistSelector, { state: 'visible' });
        await this.page.click(this.addToWishlistSelector, { force: true });
    }
}



