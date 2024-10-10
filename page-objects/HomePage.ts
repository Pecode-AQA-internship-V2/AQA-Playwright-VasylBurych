import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    private womenCategorySelector = 'text=Women';

    constructor(page: Page) {
        this.page = page;
    }

    async goToWomenCategory() {
        await this.page.waitForSelector(this.womenCategorySelector, { state: 'visible' });
        await this.page.click(this.womenCategorySelector);
    }
}

