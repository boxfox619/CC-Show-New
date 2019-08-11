# Beer-Shop
비바리퍼블리카 웹프론트엔드 사전과제
맥주 쇼핑 페이지

### 프로젝트 실행 방법
- 백엔드 API는 AWS Lambda 로 구동중 : 'https://q5kql5wepb.execute-api.ap-northeast-2.amazonaws.com/dev'
```
npm install   // 초기 모듈 다운로드
npm run start
 
그 외의 명령어
npm run test  // 단위테스트 수행
npm run lunt  // lint 규칙 검사 수행
npm run build // production mode bundling 수행
```
- 주의사항 : 백엔드가 Lambda로 구동중이므로 초기 접속시 Cold Start로 인한 지연이 발생할 수 있습니다.

### 환경
- node : v10.15.2
- react : v16
- webpack : v4
- Typescript
- Chrome : 75.0.3770.142

### Proejct 구조
```
├─assets        // image, file 등 부가적인 요소
├─data          // network, web api 등에 의존성을 가지는 domain layer의 구현체
├─domain        // pure interface, 의존성이 없는 순수한 데이터 관리 서비스의 interface 정의
├─models        // model, payload, 의존성이 없는 순수한 모델 정의
├─components    // stateless, presentational components
├─containers    // stateful component
├─reducer      // redux store, action, redux-observable의 epic 정의
└─utils         // 유틸리티 모듈 정의
```

### Spec Out
- Tag 구조체를 string으로 수정 : tag는 값 자체가 유일함, key 값과 name이 분리될 필요 없다고 판단
- 상품 구매 결과를 console에 출력 : UX향상을 위해 상품 구매 결과를 Modal에 전시함

## API Specifications
| Action | API | Parameter | Body | Success Response | Fail Response |
|--------|-----|-----------|---------|------------------|---------------|
| 상품 목록 조회 | GET /api/beers  | N/A | N/A | [{ "id": 1, "name": "Cass", "image": "...url", "tags": [ "tag1", "tag2" ], "price": 10000, "stock": 10}, ...] | |
| 태그 목록 조회  | GET /api/tags  |  N/A | N/A | [ "tag1", "tag2" ...] | |
| 상품 주문 | POST /api/purchase | N/A | [{ "id": 1, "count": 10}, ...] | { "totalCount": 20, "totalPrice": 15} | { "title": "error", "reason": "server error" } |
----