import { Page } from '@playwright/test';
import { configQA } from '../../../config/config_QA';

export class LeadershipJourneyPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(configQA.loginURL);
    }

    private async getElementByPlaceholder(placeholder: string) {
        return this.page.getByPlaceholder(placeholder);
    }

    private async getButtonByName(name: string) {
        return this.page.getByRole('button', { name });
    }

    async login() {
        const userIdInput = await this.getElementByPlaceholder('아이디');
        const passwordInput = await this.getElementByPlaceholder('비밀번호');
        const loginButton = await this.page.locator('form .mt-26 button');

        await userIdInput.fill(configQA.id);
        await passwordInput.fill(configQA.password);
        await loginButton.click();
    }
}

/*

*/