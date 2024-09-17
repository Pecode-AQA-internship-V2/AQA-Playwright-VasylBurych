import { test } from '@playwright/test';
import { RegisterPage } from '../../page-objects/RegisterPage';
import { generateUserData } from '../../utilities/dataGenerator';
import { IframePage } from '../../page-objects/IframePage';
import { CheckboxesPage } from '../../page-objects/CheckboxesPage';

test('Register form with dynamic data', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const userData = generateUserData();

    await registerPage.navigate();
    await registerPage.fillForm(userData);
    await registerPage.agreeToTerms();
    await registerPage.submit();
    await registerPage.verifySuccessMessage();
});

test('iFrame interactions', async ({ page }) => {
    const iframePage = new IframePage(page);
    await iframePage.navigate();
    await iframePage.clickLearnMore();
    await iframePage.verifyLearnMoreText();
});

test('Check checkboxes', async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigate();
    await checkboxesPage.checkAllCheckboxes();
    await checkboxesPage.verifyAllCheckboxesChecked();
    await checkboxesPage.submit();
    await checkboxesPage.verifyResultContains('one, two, three');
    await checkboxesPage.uncheckAllCheckboxes();
    await checkboxesPage.verifyAllCheckboxesUnchecked();
    await checkboxesPage.submit();
    await checkboxesPage.verifyResultHidden();
});