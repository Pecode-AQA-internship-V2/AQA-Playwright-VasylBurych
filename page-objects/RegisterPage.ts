import { Page, expect } from '@playwright/test';

export class RegisterPage {
    private page: Page;
    private firstNameInput = '#firstName';
    private lastNameInput = '#lastName';
    private phoneInput = '#phone';
    private countrySelect = '#countries_dropdown_menu';
    private emailInput = '#emailAddress';
    private passwordInput = '#password';
    private agreeCheckbox = '#exampleCheck1';
    private submitButton = 'button[type="submit"]';
    private successMessage = 'text=The account has been successfully created!';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://qa-practice.netlify.app/register');
    }

    async fillForm(userData: { firstName: string, lastName: string, phone: string, email: string, password: string, country: string }) {
        await this.page.fill(this.firstNameInput, userData.firstName);
        await this.page.fill(this.lastNameInput, userData.lastName);
        await this.page.fill(this.phoneInput, userData.phone);
        await this.page.selectOption(this.countrySelect, { label: userData.country });
        await this.page.fill(this.emailInput, userData.email);
        await this.page.fill(this.passwordInput, userData.password);
    }

    async agreeToTerms() {
        await this.page.click(this.agreeCheckbox);
    }

    async submit() {
        await this.page.click(this.submitButton);
    }

    async verifySuccessMessage() {
        await this.page.waitForSelector(this.successMessage);
        await expect(this.page.locator(this.successMessage)).toBeVisible();
    }
}
