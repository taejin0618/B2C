import { Page } from '@playwright/test';

export class LeadershipJourney {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getElement1() {
        return this.page.getByPlaceholder('비밀번호');
    }

    async passwordInput() {
        const element = await this.getElement1();

        if (element) {
            await element.click();
            await element.fill('');
        }
    }
}

/*
이제 코드에 대한 설명을 드리겠습니다:
1. 이 코드는 LeadershipJourney라는 클래스를 정의합니다. 이 클래스는 Playwright를 사용하여 웹 페이지와 상호 작용하는 데 사용됩니다.
2. 클래스는 Page 객체를 private 속성으로 가지고 있으며, 생성자를 통해 초기화됩니다.
getElement1 메서드는 '비밀번호'라는 placeholder를 가진 요소를 찾아 반환합니다.
passwordInput 메서드는 다음과 같은 작업을 수행합니다:
getElement1을 호출하여 비밀번호 입력 필드를 가져옵니다.
요소가 존재하면 클릭한 후 ''라는 텍스트를 입력합니다.
5. 모든 메서드는 비동기(async)로 선언되어 있어, Playwright의 비동기 작업을 적절히 처리할 수 있습니다.
이 클래스는 페이지 객체 모델(Page Object Model, POM) 패턴을 따르고 있으며, 특정 페이지의 요소와 상호 작용을 캡슐화하고 있습니다. 이는 테스트 코드의 유지보수성과 재사용성을 높이는 데 도움이 됩니다.
*/