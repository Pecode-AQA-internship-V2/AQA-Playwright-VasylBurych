import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.goto('https://magento.softwaretestingboard.com/');
        await this.page.click('text=Sign In');
        await this.page.fill('#email', username);
        await this.page.fill('#pass', password);
        await this.page.click('#send2');
    }
}
