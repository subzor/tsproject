import { Page } from '@playwright/test';


class BasePage {
    readonly PATH : string = '';
    readonly ENVIRONMENT : string = "https://practice.expandtesting.com/"
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto(new URL(this.PATH, this.ENVIRONMENT).href, {waitUntil: "domcontentloaded"});
    }
}

export default BasePage;
