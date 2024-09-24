import { Page } from '@playwright/test';

export class WishlistPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openWishlist() {
        await this.page.click('text=My Wishlist');
    }

    async verifyProductInWishlist(productName: string) {
        await this.page.waitForSelector(`text=${productName}`);
        await this.page.locator(`text=${productName}`).isVisible();
    }
}
