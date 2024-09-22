# Playwright 테스트 프레임워크 사용 가이드

이 README는 Playwright를 사용한 웹 테스트 자동화에 대한 기본적인 가이드를 제공합니다.

## 목차
1. [기본 설정](#기본-설정)
2. [테스트 작성 기본](#테스트-작성-기본)
3. [페이지 객체 모델 사용](#페이지-객체-모델-사용)
4. [환경 설정](#환경-설정)
5. [브라우저 및 페이지 관리](#브라우저-및-페이지-관리)
6. [테스트 전후 처리](#테스트-전후-처리)
7. [테스트 구성 옵션](#테스트-구성-옵션)

## 기본 설정

테스트 파일 상단에 필요한 모듈을 임포트합니다:

```typescript
import {test, expect, Browser, Page, Locator} from '@playwright/test'; // 테스트 프레임워크 임포트
import { webkit, chromium, firefox} from '@playwright/test'; // 브라우저 임포트
```



## 테스트 작성 기본

### 기본 테스트 함수 구조

```typescript
test('login', async () => {
    // 테스트 코드 작성
});
```


### 수동으로 브라우저 및 페이지 관리

```typescript
let browser: Browser;
let page: Page;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
});


## 페이지 객체 모델 사용

페이지 객체를 임포트하여 사용합니다:

```typescript
import {LeadershipJourneyPage} from "../PageObjectModels/Main/Main"; // 페이지 객체 임포트
```


## 환경 설정

환경별 설정을 임포트합니다:

```typescript
import {configQA} from "../../config/config_QA"; // 환경 설정 임포트
import {config_Product} from "../../config/config_Product"; // 환경 설정 임포트
```


## 브라우저 및 페이지 관리

### 비동기 대기

```typescript
await new Promise(() => {}); // 비동기 대기
```


### 브라우저 및 페이지 닫기

```typescript
await page.close(); // 페이지 닫기
await browser.close(); // 브라우저 닫기
```




## 테스트 전후 처리

### 모든 테스트에 동일한 브라우저 옵션 적용

```typescript
test.beforeEach(async () => {
    browser = await chromium.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
});
```



### 테스트 전후 처리 예시

```typescript
test.beforeEach(async () => { 
    browser = await chromium.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
});

test.afterEach(async () => {
    await page.close();
    await browser.close();
});
```


## 테스트 구성 옵션

### Headless 모드 설정

```typescript
test.use({ headless: true }); // 헤드리스 모드 설정 default
test.use({ headless: false }); // 헤드풀 모드 설정
```


### Viewport 설정

```typescript
test.use({ viewport: { width: 1920, height: 1080 } }); // 브라우저 크기 설정
```

"# B2C" 
