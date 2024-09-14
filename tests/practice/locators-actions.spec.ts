import {test, expect, frameLocator, FrameLocator} from "@playwright/test";
import {fa, faker} from '@faker-js/faker';

// Test 1 Register form
test('Register form', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/register');
    await page.fill('#firstName', faker.person.firstName());
    await page.fill('#lastName', faker.person.lastName());
    await page.fill('#phone', faker.phone.number());
    await page.selectOption('#countries_dropdown_menu', { label: 'Ukraine' });
    await page.fill('#emailAddress', faker.internet.email());
    await page.fill('#password', faker.internet.password());
    await page.click('#exampleCheck1');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=The account has been successfully created!')).toBeVisible();
});

//Test 2 iFrame
test('iFrame interactions', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/iframe');
    const frame:FrameLocator = page.frameLocator('#iframe-checkboxes');
    await  frame.locator('#learn-more').click();
    await expect(frame.locator('text=This text appears when you click the "Learn more" button')).toBeVisible();
});

//Test 3 Checkboxes
test('Check checkboxes', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');

    const checkboxOne = await page.locator('#id_checkboxes_0');
    const checkboxTwo = await page.locator('#id_checkboxes_1');
    const checkboxThree = await page.locator('#id_checkboxes_2');

    await checkboxOne.check();
    await checkboxTwo.check();
    await checkboxThree.check();

    await expect(checkboxOne).toBeChecked();
    await expect(checkboxTwo).toBeChecked();
    await expect(checkboxThree).toBeChecked();

    await page.click('#submit-id-submit');

    const resultText = await page.locator('#result-text').innerText();
    expect(resultText).toContain("one, two, three");


    await checkboxOne.uncheck();
    await checkboxTwo.uncheck();
    await checkboxThree.uncheck();


    await expect(checkboxOne).not.toBeChecked();
    await expect(checkboxTwo).not.toBeChecked();
    await expect(checkboxThree).not.toBeChecked();

    await page.click('#submit-id-submit');


    const resultElement = await page.locator('#result');
    await expect(resultElement).toBeHidden();
});