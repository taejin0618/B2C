import { defineConfig, devices } from '@playwright/test';

/**
 * 환경 변수 파일에서 읽기.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * 테스트 설정을 참조하십시오.
 * https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // expect:{
  //     // 60초 타임아웃
  //     timeout: 60000,
  // },
  /* 테스트 파일이 있는 디렉토리 */
  testDir: './tests',

  /* 파일의 테스트를 병렬로 실행 */
  fullyParallel: true,

  /* 파일의 테스트를 병렬로 실행하지 않음 */
  // fullyParallel: false,

  /* 테스트 파일을 무작위로 실행 */
  // shuffle: true,

  /* 테스트 파일을 무작위로 실행하지 않음 */
  // shuffle: false,

  /* 소스 코드에 test.only를 실수로 남겨두면 CI에서 빌드 실패 */
  forbidOnly: !!process.env.CI,

  /* CI에서만 재시도 */
  retries: process.env.CI ? 2 : 0,

  /* CI에서 병렬 테스트를 선택 해제 */
  workers: process.env.CI ? 1 : undefined,

  /* 사용할 리포터를 설정하십시오. https://playwright.dev/docs/test-reporters 참조*/
  // reporter: 'html',
  // reporter: [['html', {open: 'on-failure'}]], // 실패한 경우에만 HTML 리포트 열기
  // reporter: [['html', {open: 'never'}]],  // HTML 리포트를 열지 않음
  reporter: [['html', { open: 'always' }]],  // 항상 HTML 리포트 열기


  /* 아래의 모든 프로젝트에 대한 공유 설정. https://playwright.dev/docs/api/class-testoptions 참조 */
  use: {
    // 헤드리스 모드 설정
    headless: true, // headless mode
    // headless: false, // headful mode
    /* `await page.goto('/')`와 같은 작업에 사용할 기본 URL */
    // baseURL: 'http://127.0.0.1:3000',

    /* 실패한 테스트를 재시도할 때 추적 수집. https://playwright.dev/docs/trace-viewer 참조 */
    trace: 'on-first-retry',
  },

  /* 주요 브라우저에 대한 프로젝트 구성 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* 모바일 뷰포트에 대한 테스트 */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* 브랜드 브라우저에 대한 테스트 */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* 테스트를 시작하기 전에 로컬 개발 서버 실행 */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },



});