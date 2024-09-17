import { Page, FrameLocator, expect } from '@playwright/test';

export class IframePage {
    private page: Page;
    private iframeLocator: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframeLocator = page.frameLocator('#iframe-checkboxes');
    }

    async navigate() {
        await this.page.goto('https://qa-practice.netlify.app/iframe');
    }

    async clickLearnMore() {
        await this.iframeLocator.locator('#learn-more').click();
    }

    async verifyLearnMoreText() {
        await expect(this.iframeLocator.locator('text=This text appears when you click the "Learn more" button')).toBeVisible();
    }
}
