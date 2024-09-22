/* 아래 형식으로 작성된 케이스는 명령어로 실행시
npx playwright test tests/suite/Login_Page_instance.spec.ts
config 설정값을 우선적으로 사용하고, 테스트 코드에서 따로 설정하지 않으면 기본값을 사용
테스트 코드에서 설정한 값이 config 설정값보다 우선적으로 사용
테스트 탐색기에서 실행시 탐색기에서 설정한 값이 우선적으로 사용
이러한 형식은 test() 메서드의 인자로 page 인스턴스를 전달하는 방법
*/
import { test, expect } from '@playwright/test';

test.describe('연수원 로그인', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('연수원 로그인', async ({ page }) => {
    await page.goto('');
    await page.getByLabel('아이디', { exact: true }).click();
    await page.getByLabel('아이디', { exact: true }).fill('');
    await page.getByLabel('비밀번호').fill('');
    await page.getByLabel('비밀번호').press('');
    // 여기에 로그인 성공 확인 로직 추가

  });
});