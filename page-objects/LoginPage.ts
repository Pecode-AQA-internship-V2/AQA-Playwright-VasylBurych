import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    private signInSelector = 'text=Sign In';
    private emailInputSelector = '#email';
    private passwordInputSelector = '#pass';
    private loginButtonSelector = 'button#send2';

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.goto(process.env.BASE_URL || 'https://magento.softwaretestingboard.com/');
        await this.page.click(this.signInSelector);
        await this.page.fill(this.emailInputSelector, username);
        await this.page.fill(this.passwordInputSelector, password);
        await this.page.click(this.loginButtonSelector);
    }
}




