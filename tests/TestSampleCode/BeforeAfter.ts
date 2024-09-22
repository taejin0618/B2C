/* let browser: Browser;
let page: Page;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
});

test.afterEach(async () => {
    await page.close();
    await browser.close();
});

test.use({ viewport: { width: 1920, height: 1080 } });

test('login', async ({ page }) => {

    ### 테스트 선언시 인수를 page 를 사용하지 않고 테스트 run 시 config 설정 옵션에 따라 수행
### headless 옵션 설정 예시(true, false)
    test.use({ headless: true }); // 헤드리스 모드 설정 default
    test.use({ headless: false }); // 헤드풀 모드 설정

### viewport 옵션 설정 예시(width, height)
    test.use({ viewport: { width: 1920, height: 1080 } }); // 브라우저 크기 설정
*/