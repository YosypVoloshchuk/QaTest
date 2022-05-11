import { test, expect } from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

test('basic test', async ({ page }) => {
    await page.goto('file:///Users/yosypvoloshchuk/WebstormProjects/testProject/tests/LoginPage.html');
    const ageField = 'xpath=//html/body/input[1]';
    // await page.waitForSelector(ageField)
    await page.fill(ageField, "6")
    await page.click('xpath=//html/body/input[2]')
    page.on('dialog', async (dialog) => {
        await expect(dialog.message()).toContain('Success!');
    });
})