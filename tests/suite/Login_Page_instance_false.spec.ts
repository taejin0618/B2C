/* 아래 형식으로 작성된 케이스는 명령어로 실행시
npx playwright test tests/suite/Login_Page_instance_false.spec.ts
config 설정값을 우선적으로 사용하고, 테스트 코드에서 따로 설정하지 않으면 기본값을 사용
test() 에 page 인스턴스를 사용하지 않고 브라우저와 페이지 인스턴스를 직접 생성하여 사용
테스트 탐색기에서 실행시 탐색기에서 설정한 값이 우선적으로 사용
예시
import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test'; // 브라우저 임포트

describe 블록은 테스트 스위트를 정의합니다.

test.describe('로그인 테스트', () => {
    let browser: Browser;
    let page: Page;

    test.beforeEach(async () => {
        browser = await chromium.launch({ slowMo: 200 });
        page = await browser.newPage();
        await page.setViewportSize({ width: 1920, height: 1080 });
    });

    test.afterEach(async () => {
        await page.close();
        await browser.close();
    });

*/
import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test'; // 브라우저 임포트
import { LeadershipJourneyPage } from "../POM/Main/Main"; // 페이지 객체 임포트
import { configQA } from "../../config/config_QA"; // 환경 설정 임포트
import { config_Product } from "../../config/config_Product"; // 환경 설정 임포트

// describe 블록은 테스트 스위트를 정의합니다.
test.describe('로그인 테스트', () => {
    let browser: Browser;
    let page: Page;

    test.beforeEach(async () => {
        browser = await chromium.launch({ slowMo: 200 });
        page = await browser.newPage();
        await page.setViewportSize({ width: 1920, height: 1080 });
    });

    test.afterEach(async () => {
        await page.close();
        await browser.close();
    });

    test('로그인 테스트', async () => {
        const login = new LeadershipJourneyPage(page);

        await test.step('1. 홈페이지로 이동', async () => {
            await login.navigateToHomePage();
        });

        await test.step('2. 로그인 수행', async () => {
            await login.login();
        });

        await test.step('3. 로그인 확인', async () => {
            await expect(page.getByRole('banner')).toContainText('멤버십 가입하기');
        });

        await test.step('4. 멤버십 가입 페이지로 이동', async () => {
            const membershipLink = page.locator('xpath=//a[contains(@class, \'ml-40\')]');
            await membershipLink.click();
            await page.getByRole('link', { name: '멤버십 가입하기' }).click();
        });

        // page.close()는 여기서 제거합니다. afterEach에서 처리됩니다.
    });
});



