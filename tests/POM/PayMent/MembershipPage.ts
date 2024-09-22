import {test, expect, Browser, Page, Locator} from '@playwright/test'; // 테스트 프레임워크 임포트

export class MembershipPage {

    private page: Page;
    public phoneInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneInput = page.locator('xpath=//form/fieldset[1]//dl[2]//input');  
    }

    async navigateToMembership() {
        await this.page.getByRole('link', { name: 'Join Membership' }).click();
        await this.page.getByRole('button', { name: '프리미엄 멤버십 Premium Business' }).click();
        await this.page.getByRole('button', { name: '프리미엄 멤버십 시작하기' }).click();
    }

    async fillMembershipForm(phone: string, code: string) {
    
        await this.phoneInput.press('ControlOrMeta+a');
        // const phoneInput = this.page.locator('xpath=//form/fieldset[1]//dl[2]//input');

        await this.phoneInput.press('ControlOrMeta+a');
        // await this.page.waitForTimeout(1000);
        // await this.page.pause();
        await this.phoneInput.fill(phone);
        // await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: '인증번호 발송' }).click();
        await this.page.getByPlaceholder('발송된 인증번호 6자리 입력').fill(code);
        await this.page.getByRole('button', { name: '인증번호 확인' }).click();
        // await this.fillAddress(address);
        await this.page.getByLabel('(필수) 개인정보 수집 및 이용에 관한 동의').check();

        // await this.page.waitForTimeout(3000);
        
    }

        async fillAddress(address: string, add: string) {
        await this.page.getByPlaceholder('우편번호').click();
        const postcodeLayerFrame = this.page.frameLocator('iframe[title="우편번호서비스 레이어 프레임"]');
        const searchFrame = postcodeLayerFrame.frameLocator('iframe[title="우편번호 검색 프레임"]');
        await searchFrame.getByText('예) 판교역로 166, 분당 주공, 백현동').click();
        await searchFrame.getByLabel('검색할 도로명/지번주소를 입력, 예시) 판교역로').fill(address);
        await searchFrame.getByRole('button', { name: '검색' }).click();
        await searchFrame.getByRole('button', { name: `서울 금천구 ${address} (남성프라자)` }).click();
        // await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('상세주소 *반드시 입력').fill(add);
        // await this.page.waitForTimeout(1000);   
        await this.page.getByRole('button', { name: '결제하기' }).click();
    }

}