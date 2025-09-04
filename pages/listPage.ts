import BasePage from './basePage';
import {Page, Locator} from 'playwright';

class ListPage extends BasePage {
    PATH = '/login';

    constructor(page: Page) {
        super(page);
    }

    readonly userNameInput: Locator = this.page.locator('//input[@name="username"]');
    readonly passwordInput: Locator = this.page.locator('//input[@name="password"]');
    readonly loginButton: Locator = this.page.locator('//button[@type="submit"]');
    readonly flashLabel: Locator = this.page.locator('//div[@id="flash"]');


    async navigateTo(): Promise<void> {
        await super.navigateTo();
    }

}

export default ListPage;