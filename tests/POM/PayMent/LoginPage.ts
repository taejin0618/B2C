import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.goto('https://qa-feature-ceo.hunet.co.kr/');
        await this.page.getByRole('link', { name: '로그인' }).click();
        await this.page.getByPlaceholder('아이디').fill(username);
        await this.page.getByPlaceholder('비밀번호').fill(password);
        await this.page.getByRole('button', { name: '로그인' }).click();
    }
}