import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test';

import { LoginPage } from '../POM/PayMent/LoginPage';
import { MembershipPage } from '../POM/PayMent/MembershipPage';
import { PaymentPage } from '../POM/PayMent/PaymentPage';

test.use({ viewport: { width: 1920, height: 1080 } });

test('카드 결제', async () => {
    // const browser = await chromium.launch({headless: false, channel: 'msedge'}); // 브라우저 선택
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 300 }); // 브라우저 선택
    const page: Page = await browser.newPage(); // 페이지 생성

    // const browser1: Browser = await chromium.launch({headless: false, slowMo: 300}); // 브라우저 선택
    // const page1: Page = await browser.newPage(); // 페이지 생성

    const loginPage = new LoginPage(page);
    const membershipPage = new MembershipPage(page);
    const paymentPage = new PaymentPage(page);


    await loginPage.login('', '');
    await expect(page.getByRole('link', { name: 'Join Membership' })).toBeVisible();
    await expect(page.getByRole('banner')).toContainText('Join Membership');

    await membershipPage.navigateToMembership();
    await membershipPage.fillMembershipForm('01000001234', '168143');
    await membershipPage.fillAddress('디지털로 130', '130');
    // await page.waitForTimeout(5000);
    // await page.pause();
    // await new Promise(() => {}); // 비동기 대기
    await paymentPage.completePayment('xx', 'xx', 'xx', 'xx');
});