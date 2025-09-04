import { test, expect } from '../fixtures/fixtures';


test.describe('List page quick add article', () => {

    test.beforeEach(async ({listPage}) => {
        await listPage.navigateTo();
    });
    test('New test', async ({listPage}) => {
        await listPage.navigateTo();
        await listPage.userNameInput.fill("practice")
        await listPage.passwordInput.fill("SuperSecretPassword!")
        await listPage.loginButton.click()
        await expect(listPage.flashLabel).toBeVisible();
    });
});