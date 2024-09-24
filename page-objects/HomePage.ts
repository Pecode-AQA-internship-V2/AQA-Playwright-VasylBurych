import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToWomenCategory() {
        await this.page.click('text=Women');
        //await this.page.click('text=Hoodies & Sweatshirts');
    }
}
