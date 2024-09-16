import { Page, expect } from '@playwright/test';

export class CheckboxesPage {
    private page: Page;
    private checkboxOne = '#id_checkboxes_0';
    private checkboxTwo = '#id_checkboxes_1';
    private checkboxThree = '#id_checkboxes_2';
    private submitButton = '#submit-id-submit';
    private resultText = '#result-text';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
    }

    async checkAllCheckboxes() {
        await this.page.locator(this.checkboxOne).check();
        await this.page.locator(this.checkboxTwo).check();
        await this.page.locator(this.checkboxThree).check();
    }

    async verifyAllCheckboxesChecked() {
        await expect(this.page.locator(this.checkboxOne)).toBeChecked();
        await expect(this.page.locator(this.checkboxTwo)).toBeChecked();
        await expect(this.page.locator(this.checkboxThree)).toBeChecked();
    }

    async uncheckAllCheckboxes() {
        await this.page.locator(this.checkboxOne).uncheck();
        await this.page.locator(this.checkboxTwo).uncheck();
        await this.page.locator(this.checkboxThree).uncheck();
    }

    async verifyAllCheckboxesUnchecked() {
        await expect(this.page.locator(this.checkboxOne)).not.toBeChecked();
        await expect(this.page.locator(this.checkboxTwo)).not.toBeChecked();
        await expect(this.page.locator(this.checkboxThree)).not.toBeChecked();
    }

    async submit() {
        await this.page.click(this.submitButton);
    }

    async verifyResultContains(text: string) {
        const result = await this.page.locator(this.resultText).innerText();
        expect(result).toContain(text);
    }

    async verifyResultHidden() {
        await expect(this.page.locator('#result')).toBeHidden();
    }
}
