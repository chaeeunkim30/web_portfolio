# 📂 웹 포트폴리오
>
> 📅 **개발 기간:** 2일
> 🛠 **작업 범위:** 기획, 디자인, UI 개발 전 과정 (100% 개인 기여)
>> 🔗 **배포 링크:** [https://chaeeunkim30.github.io/web_portfolio/#projects](https://chaeeunkim30.github.io/web_portfolio/#projects)

<br/>

## 📖 프로젝트 소개
이 프로젝트는 프론트엔드 개발자로서의 역량을 시각적으로 보여주기 위해 제작한 **싱글 페이지 포트폴리오(Single Page Application)**입니다.
`react-fullpage`를 활용한 섹션 스크롤링 UI를 통해 몰입감 있는 사용자 경험을 제공하며, **TypeScript**와 **Emotion(CSS-in-JS)**을 사용하여 유지보수가 용이하고 확장 가능한 코드 구조를 설계하는 데 집중했습니다.

<br/>

## 🛠 Tech Stack

<img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Emotion-D26AC2?style=for-the-badge&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/Fullpage.js-FF5F45?style=for-the-badge&logo=javascript&logoColor=white">

<br/>

## 💻 개발 주안점 (Key Features & Dev Focus)

**Frontend Developer**로서 짧은 기간 내에 완성도 높은 결과물을 만들기 위해 **재사용성**과 **사용자 경험(UX)**에 집중했습니다.

### 1. Fullpage Scrolling & Navigation
- **`react-fullpage` 라이브러리 활용:** Home, Skills, Projects, Contact 섹션을 스크롤 한 번으로 이동하는 풀페이지 인터랙션을 구현하여 콘텐츠 집중도를 높였습니다.
- **헤더 연동 (Custom Navigation):** 상단 헤더의 메뉴 클릭 시 해당 섹션으로 부드럽게 이동하도록 `fullpage_api`를 커스텀하여 연결했습니다.

### 2. 데이터 기반 UI 렌더링 (Data-Driven UI)
- **데이터와 뷰의 분리:** 프로젝트 리스트(`ProjectList.ts`)를 별도의 데이터 상수 파일로 관리하여, 추후 프로젝트 추가나 수정 시 컴포넌트 코드를 건드리지 않고도 내용을 업데이트할 수 있도록 **유지보수성**을 확보했습니다.
- **동적 모달 시스템:** 사용자가 프로젝트 카드를 클릭했을 때만 `ProjectModal` 컴포넌트가 렌더링되도록 처리하여 초기 로딩 성능을 고려했습니다.

### 3. 디테일한 UX 처리 (Modal Interaction)
- **Scroll Lock:** 상세 모달이 열렸을 때 배경화면(body)이 스크롤 되는 것을 방지하기 위해 `useEffect`를 활용하여 `document.body.style.overflow = 'hidden'` 처리를 해주었습니다.
- **Overlay Close:** 모달 내부 닫기 버튼뿐만 아니라, 오버레이(배경) 영역 클릭 시에도 모달이 닫히도록 이벤트 위임 처리를 하여 사용성을 높였습니다.

### 4. Atomic Design 기반 컴포넌트 설계
- `components/atom` (버튼, 타이틀), `molecule` (카드), `organism` (헤더, 모달) 등으로 폴더 구조를 체계화하여 컴포넌트 재사용성을 높였습니다.

<br/>

> 추후 반응형 미디어 쿼리를 추가할 예정입니다.
