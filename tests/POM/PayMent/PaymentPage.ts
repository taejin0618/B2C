import { Page } from '@playwright/test';

export class PaymentPage {
    constructor(private page: Page) {}

    async completePayment(cardNumber: string, cvv: string, password: string, pass: string) {

        const payment = this.page.frameLocator('iframe[name="naxIfr"]');
        await this.page.waitForTimeout(30000);
        await this.page.getByRole('button', { name: '결제하기' }).click();
        await payment.getByText('전체동의').click({timeout: 60000});
        await payment.getByRole('link', { name: '카드 선택' }).click();
        await payment.getByRole('link', { name: '현대' }).click();
        await payment.getByLabel('할부선택').selectOption('00');
        await payment.getByLabel('카드사 새창에서 결제정보를 입력하면 결제내역화면으로 넘어갑니다').click();
        const cardframe = payment.frameLocator('iframe[name="CARD_CERT_IFR"]');
        await this.page.frameLocator('iframe[name="naxIfr"]').frameLocator('iframe[name="CARD_CERT_IFR"]').getByRole('link', { name: 'PIN번호 결제 6자리 숫자로 간편하게 (' }).click();
        await cardframe.getByRole('link', { name: '카드번호' }).click();
        await cardframe.getByLabel('카드번호').fill(cardNumber.slice(0, 4));
        await cardframe.getByRole('textbox', { name: '두번째칸의 카드번호' }).fill(cardNumber.slice(4, 8));
        await cardframe.getByRole('textbox', { name: '세번째칸의 카드번호' }).fill(cardNumber.slice(8, 12));
        await cardframe.getByRole('textbox', { name: '네번째칸의 카드번호' }).fill(cardNumber.slice(12, 16));
        await cardframe.getByText('CVV 번호(카드 뒷면 3자리)').fill(cvv);
        await cardframe.getByText('CVV 번호(카드 뒷면 3자리)').click();
        // await this.page.pause();
        // await this.page.frameLocator('iframe[name="CARD_CERT_IFR"]').frameLocator('iframe[name="naxIfr"]').getByRole('button', { name: '확인' })
        await cardframe.getByRole('button', { name: '확인' }).click();
        await cardframe.locator('#passwordDiv > p').first().fill(password);
        await cardframe.getByRole('button', { name: '결제하기' }).click();
        await cardframe.getByText('비밀번호 앞 2자리').fill(pass);
        await cardframe.getByRole('button', { name: '확인' }).nth(1).click();
    }
}