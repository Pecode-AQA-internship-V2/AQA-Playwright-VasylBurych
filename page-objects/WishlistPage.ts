import { Page } from '@playwright/test';

export class WishlistPage {
    readonly page: Page;
    private myWishlistSelector = 'text=My Wishlist';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductInWishlist(productName: string) {
        await this.page.waitForSelector(`text=${productName}`);

    }
}
