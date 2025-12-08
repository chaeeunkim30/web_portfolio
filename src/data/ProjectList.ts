export interface FeatureType {
  title: string;
  desc: string[];
}

export interface ProjectType {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  intro: string;
  techStack: string[];
  features: FeatureType[]; 
  github: string;
  images: string[];
}

export const projectList: ProjectType[] = [
  {
    id: 1,
    title: "지오멕스소프트 공식 홈페이지",
    subTitle: "3인 프로젝트 (FE 2명, BE 1명)",
    date: "2025.10.20 ~ 현재 진행 중",
    intro: "이 프로젝트는 지오멕스소프트의 기술력과 비전을 효과적으로 전달하기 위한 기업 공식 홈페이지 구축 프로젝트입니다. 단순한 정보 전달을 넘어, 관리자 페이지와 연동된 동적 데이터(공지사항, 채용 정보 등)를 사용자에게 보여주며, 다양한 인터랙티브 요소를 통해 최적의 사용자 경험(UX)을 제공하는 것을 목표로 하고 있습니다. Frontend Developer로서 홈페이지 전체 UI 구조 설계 및 구현을 담당하고 있으며, 백엔드 API와 프론트엔드 간의 데이터 연동을 주도적으로 수행하고 있습니다.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "1. 전체 페이지 UI 구축 및 반응형 웹 구현",
        desc: [
          "메인, 회사소개, 사업영역, 고객지원 등 사이트 전반의 퍼블리싱 및 UI 개발",
          "Responsive Design: 모바일, 태블릿, 데스크탑 등 다양한 해상도에 대응하는 반응형 레이아웃 완성"
        ]
      },
      {
        title: "2. REST API 연동 및 데이터 바인딩",
        desc: [
          "IPRS 및 고객사 시스템 연동: 자사 솔루션인 IPRS(Intelligent Parking Recruitment System) 및 고객사 관련 데이터를 API로 호출하여 웹사이트 내에 시각화 및 연동 처리",
          "CMS 기반 데이터 바인딩",
          "메인 배너 & 팝업: 관리자 설정 값에 따른 노출 제어 로직 구현",
          "게시판(공지사항) & 채용: 리스트 조회, 상세 페이지, 필터링 및 페이지네이션 연동",
          "서비스 소개: 서비스 목록 및 세부 정보를 서버 데이터 기반으로 렌더링"
        ]
      },
      {
        title: "3. 기능 구현 및 라이브러리 커스터마이징",
        desc: [
          "Swiper 플러그인 커스텀: 메인 배너 및 팝업 등에 Swiper.js를 적용하고, 디자인 요구사항에 맞춰 네비게이션 및 페이징 스타일을 커스터마이징했습니다.",
          "Progress-bar 플러그인 커스텀: 사용자에게 현재 Swiper의 진행 상황을 실시간으로 전달하기 위해 프로그레스바를 커스터마이징했습니다.",
          "Pagination (페이지네이션): 공지사항 등 데이터 양이 많은 리스트 페이지에서 페이지별 데이터 분할 로직 및 UI를 구현했습니다.",
        ]
      },
       {
        title: "4. 컴포넌트 기반 개발",
        desc: [
          "반복되는 UI 요소(버튼, 카드, 타이틀, 인풋 필드 등)를 재사용 가능한 컴포넌트로 모듈화하여 개발 효율성을 높였습니다.",
        ]
      }
    ],
    github: "https://github.com/chaeeunkim30/geomex-soft",
    images: [
      "./assets/img/지오멕스1.png",
      "./assets/img/지오멕스2.png",
      "./assets/img/지오멕스3.png",
      "./assets/img/지오멕스4.png",
    ]
  },
  {
    id: 2,
    title: "한국과학창의재단 지능형 과학실ON 콘텐츠 개발",
    subTitle: "다인원 프로젝트",
    date: "2025.09.26 ~ 2025.12.31",
    intro: "'지능형 과학실 ON'은 가상 공간에서 실험 과정을 체험하고 학습할 수 있는 에듀테크 서비스입니다. 이 프로젝트에서 저는 실험 스토리보드의 UI를 개발하고, 퀴즈 풀이, 보고서 작성, 화면 캡쳐 등 사용자가 학습에 몰입할 수 있는 다양한 인터랙티브 기능을 구현했습니다. Frontend Developer로서 실험 콘텐츠의 시각적 구현뿐만 아니라, 학습 보조 도구(캡쳐, 보고서, 퀴즈) 기능을 주도적으로 개발했습니다.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "1. 웹 화면 캡쳐 및 이미지 저장 기능 구현",
        desc: [
          "html2canvas 라이브러리 활용: 특정 DOM 영역을 캔버스로 변환하여 이미지 파일로 다운로드하는 버튼 기능 개발",
        ]
      },
      {
        title: "2. 실험 영상 제어 및 비디오 객체 핸들링",
        desc: [
          "useRef 훅 활용: DOM에 직접 접근하여 비디오 재생, 일시정지, 특정 구간 이동 등 세밀한 미디어 제어 로직 구현",
          "사용자의 학습 단계에 맞춰 영상이 자동으로 제어되도록 하여 학습 몰입도 증대"
        ]
      },
      {
        title: "3. 인터랙티브 학습 기능",
        desc: [
          "퀴즈 개발: 객관식/주관식 등 다양한 유형의 퀴즈 UI를 개발하고, useState를 통해 정답/오답 처리에 따른 사용자 피드백 관리",
          "보고서 작성 시스템: 실험 데이터를 입력하고 이미지로 저장할 수 있는 보고서 UI 및 데이터 처리 로직 구현",
          "정리하기: 실험 내용을 정리하는 모달 구현",
          "창의적으로 생각하기: 학생들이 질문에 대한 답을 작성할 수 있는 모달 구현"
        ]
      },
       {
        title: "4.  UI/UX 고도화 및 반응형 웹",
        desc: [
          "실험 보드 정적 페이지 개발: 모든 실험 단계에 대한 스토리보드 뷰(View) 퍼블리싱 및 컴포넌트화",
          "사이드바 메뉴 & 커스텀 스크롤바: 학습 내비게이션을 위한 사이드바 메뉴 구현 및 브라우저 기본 스크롤바를 디자인 컨셉에 맞게 커스텀",
          "QA 피드백 반영: QA 과정에서 발생한 디자인 및 기능 오류를 신속하게 수정하여 완성도 제고"
        ]
      }
    ],
    github: "https://github.com/chaeeunkim30/webGLedu2025",
    images: [
      "./assets/img/창의재단1.png",
      "./assets/img/창의재단2.png",
      "./assets/img/창의재단3.png",
      "./assets/img/창의재단4.png",
      "./assets/img/창의재단5.png",
      "./assets/img/창의재단6.png",
    ]
  },
  {
    id: 3,
    title: "디자인테크 기업 맞춤형 디자인 전략 지원 플랫폼",
    subTitle: "개인 프로젝트",
    date: "2025.10.29 ~ 2025.10.30",
    intro: "이 프로젝트는 디자인 테크 기업과 개인 사용자에게 맞춤형 디자인 전략을 제공하는 플랫폼의 사용자 진입(User Onboarding) 및 관리 화면을 구축한 작업입니다. 짧은 개발 기간 동안 유저의 가입 경험을 최적화하기 위해 단계별(Step-by-step) 회원가입 인터페이스를 설계하였으며, 회원 유형(기업/개인)에 따른 동적 UI 처리를 중점적으로 구현했습니다.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "1. Recoil 기반의 멀티 스텝 회원가입",
        desc: [
          "복잡한 가입 절차를 3단계(이메일 인증 → 정보 입력 → 가입 완료)로 나누어 사용자가 이탈하지 않도록 유도하는 UI를 구현했습니다.",
          "전역 상태 관리 (Recoil): 각 단계(JoinEmail, JoinInfo) 컴포넌트가 분리되어 있음에도 입력 데이터가 유지되도록 joinFormState와 joinStepState를 설계하여 데이터 흐름을 끊김 없이 관리했습니다.",
          "동적 UI 분기 처리: 기업 회원과 개인 회원의 입력 폼(사업자 번호 vs 이름 등)이 다르므로, 선택된 memberType에 따라 실시간으로 폼 구성이 변경되도록 구현했습니다."
        ]
      },
      {
        title: "2. 클라이언트 사이드 유효성 검사",
        desc: [
          "실시간 피드백: 이메일 형식, 비밀번호 일치 여부, 필수 약관 동의 등을 실시간으로 감지하여 에러 메시지나 토스트 팝업(react-hot-toast)으로 즉각적인 피드백을 제공했습니다.",
          "인증 시뮬레이션: 백엔드 연동 전, 프론트엔드 단에서 인증 번호 확인 및 가입 로직을 테스트할 수 있도록 시뮬레이션 로직을 구현하여 UI 완성도를 높였습니다.",
        ]
      },
      {
        title: "3. 마이페이지 인터랙션 구현",
        desc: [
          "화면 전환 최적화: 별도의 페이지 이동 없이 한 화면에서 프로필 조회(Card View)와 수정(Edit View) 상태가 부드럽게 전환되도록 useState를 활용한 뷰 모드(View Mode) 제어를 구현했습니다.",
          "프로필 카드 UI: 사용자의 활동 데이터(분석 건수)와 기본 정보를 직관적으로 보여주는 대시보드 형태의 컴포넌트를 제작했습니다.",
        ]
      },
    ],
    github: "https://github.com/chaeeunkim30/design-llm-portal",
    images: [
      "./assets/img/디자인테크1.png",
      "./assets/img/디자인테크2.png",
      "./assets/img/디자인테크3.png",
      "./assets/img/디자인테크4.png",
      "./assets/img/디자인테크5.png",
      "./assets/img/디자인테크6.png",
    ]
  },
  {
    id: 4,
    title: "경희대학교 아트퓨전 교육역량강화 오픈형 플랫폼",
    subTitle: "개인 프로젝트",
    date: "2025.10.27",
    intro: "이 작업은 [AnDOn] 플랫폼의 신뢰성을 확보하고 운영 규정을 사용자에게 명확히 전달하기 위한 약관 및 정책 페이지 개발 건입니다. 방대한 양의 법적 텍스트를 사용자가 쉽게 읽을 수 있도록 정보 구조를 시각화하고, 모바일과 PC 환경 모두에서 가독성을 유지하도록 반응형으로 구현했습니다.",
    techStack: ["Next.js 15", "TypeScript", "Styled Components"],
    features: [
      {
        title: "1. 텍스트 가독성 최적화",
        desc: [
          "법적 고지 내용의 특성상 텍스트 양이 많음을 고려하여, Styled-components를 활용해 일관된 타이포그래피 스타일(Font-size, Line-height, Letter-spacing)을 정의했습니다.",
          "BoxTitle, Contents, SubContents 등으로 스타일 컴포넌트를 모듈화하여, 약관 조항과 세부 내용의 위계가 한눈에 들어오도록 구조화했습니다.",
        ]
      },
      {
        title: "2. 반응형 웹 구현",
        desc: [
          "PC(max-width: 1320px)와 모바일(max-width: 1024px) 환경에 맞춰 패딩(Padding)과 마진(Margin)이 유동적으로 조절되도록 미디어 쿼리를 적용했습니다.",
          "모바일 환경에서도 긴 텍스트가 화면을 벗어나거나 가독성을 해치지 않도록 레이아웃을 최적화했습니다.",
        ]
      },
      {
        title: "3. 유지보수를 고려한 컴포넌트 설계",
        desc: [
          "3개의 페이지(이용약관, 환불정책, 개인정보방침)가 유사한 레이아웃을 공유하므로, 공통 스타일 객체(Wrapper, Container, ContentsContainer)를 재사용하여 코드 중복을 최소화하고 개발 속도를 단축했습니다.",
        ]
      },
    ],
    github: "https://github.com/chaeeunkim30/gaebalbadak",
    images: [
      "./assets/img/경희대1.png",
      "./assets/img/경희대2.png",
      "./assets/img/경희대3.png",
    ]
  },
  {
    id: 5,
    title: "한국스카우트연맹 홈페이지 리뉴얼",
    subTitle: "4인 프로젝트 (FE 2명, BE 2명)",
    date: "2025.09.02 ~ 2025.10.02",
    intro: "이 프로젝트는 한국스카우트연맹의 기존 웹사이트를 대상으로 진행한 디자인 및 기능 리뉴얼 프로젝트입니다. 사용자 경험(UX)을 고려하여 기획팀과 함께 전체적인 UI 디자인을 직관적이고 세련되게 수정하였으며, 최신 웹 기술 스택을 적용하여 반응형 웹 환경을 구축했습니다.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "1. 전체 UI 디자인 리뉴얼 및 구현",
        desc: [
          "기존의 노후화된 디자인을 분석하여 가독성과 심미성을 높인 모던한 UI로 전면 수정했습니다."
        ]
      },
      {
        title: "2. 재사용 가능한 컴포넌트 제작",
        desc: [
          "반복적으로 사용되는 버튼, 카드, 입력 폼 등을 공통 컴포넌트로 모듈화했습니다.",
          "이를 통해 개발 생산성을 높이고, 추후 유지보수가 용이한 코드 구조를 확립했습니다."
        ]
      },
      {
        title: "3. React Hooks를 활용한 상태 및 생명주기 관리",
        desc: [
          "useState: 모달 팝업, 탭 메뉴 전환 등 사용자 인터랙션에 따른 UI 상태 변화를 관리했습니다.",
          "useEffect: 컴포넌트 마운트 시 데이터 페칭이나 외부 라이브러리 초기화 등 사이드 이펙트를 제어했습니다."
        ]
      },
       {
        title: "4. 반응형 웹 및 애니메이션 적용",
        desc: [
          "Responsive Design: Tailwind CSS를 활용하여 모바일, 태블릿, PC 등 모든 디바이스에서 최적화된 레이아웃을 제공했습니다.",
          "AOS (Animate On Scroll): 스크롤 시 콘텐츠가 자연스럽게 나타나는 인터랙티브 애니메이션을 적용했습니다."
        ]
      }
    ],
    github: "https://github.com/chaeeunkim30/scout_portal",
    images: [
      "./assets/img/스카우트1.png",
      "./assets/img/스카우트2.png",
    ]
  },
  {
    id: 6,
    title: "강원 미식 50선 랜딩 페이지",
    subTitle: "3인 프로젝트 (FE 2명, BE 1명)",
    date: "2025.09.02 ~ 2025.10.02",
    intro: "'강원미담'은 시민과 관광객이 직접 추천하는 맛집 데이터를 수집하여 ‘강원 미식 50선’을 선정하는 참여형 캠페인 웹사이트입니다. 선정된 데이터는 향후 강원특별자치도의 공식 관광 콘텐츠로 활용될 예정입니다.\n이 랜딩 페이지는 캠페인 소개, 맛집 추천 접수(투표), 공지사항 및 Q&A 소통을 위해 제작되었습니다.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      {
        title: "1. Next.js Pages Router 기반 뷰 구조 설계",
        desc: [
          "네비게이션 바 및 공통 레이아웃(Header/Footer)을 구성하여 일관된 사용자 경험 제공",
          "주요 페이지 라우팅 처리"
        ]
      },
      {
        title: "2. 인트로 섹션 애니메이션 구현",
        desc: [
          "AOS (Animate On Scroll) 라이브러리를 도입하여, 랜딩 페이지 진입 및 스크롤 시 부드러운 페이드 인/아웃 효과 적용",
        ]
      },
      {
        title: "3. Q&A 아코디언 UI 개발",
        desc: [
          "useState 훅을 활용하여 질문 클릭 시 답변이 열리고 닫히는 토글(Toggle) 이벤트 로직 구현",
        ]
      },
       {
        title: "4. CSS3 반응형 디자인 (Responsive Design)",
        desc: [
          "Tailwind CSS와 미디어 쿼리를 활용하여 모바일, 태블릿, 데스크탑 등 다양한 해상도에 최적화된 UI 구현",
        ]
      }
    ],
    github: "https://github.com/chaeeunkim30/gw-food",
    images: [
      "./assets/img/강원미식1.png",
      "./assets/img/강원미식2.png",
      "./assets/img/강원미식3.png",
      "./assets/img/강원미식4.png",
    ]
  },
  
  
  {
    id: 7,
    title: "ZEP 메타버스 독서 프로그램 UI 컴포넌트",
    subTitle: "개인 프로젝트",
    date: "요청 시 당일 개발",
    intro: "이 프로젝트는 ZEP 메타버스 기반의 독서 교육 프로그램에 필요한 다양한 웹 임베디드(Web Embedded) 컴포넌트를 제작한 작업물입니다. 비밀번호 입력, 랭킹 보드, 용어 사전, 알림 팝업 등 사용자와 상호작용하는 UI 요소를 Vanilla HTML/CSS/JS로 경량화하여 개발하였으며, 메타버스 스크립트(ZEP Script)와 연동될 수 있도록 설계되었습니다.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      {
        title: "1. Custom Scrollbar 구현 (UI/UX)",
        desc: [
          "기본 브라우저 스크롤바가 메타버스 디자인 톤을 해치는 문제를 해결하기 위해, 마우스 이벤트(MouseDown, MouseMove)를 활용한 커스텀 스크롤 로직을 직접 구현했습니다.",
        ]
      },
      {
        title: "2. ZEP 스크립트 통신 (Data Integration)",
        desc: [
          "window.postMessage 활용: 메타버스 메인 로직(ZEP Script)에서 보내주는 사용자 랭킹 데이터 등을 실시간으로 수신하여 DOM을 업데이트하는 로직 구현",
          "동적 렌더링: 수신된 JSON 데이터를 파싱하여 랭킹 리스트 및 대시보드 UI를 동적으로 생성 (Ranking.html, dashboard.html)",
        ]
      },
      {
        title: "3. 인터랙티브 UI 컴포넌트 제작",
        desc: [
          "비밀번호 잠금 해제 시스템: 4자리 개별 입력(Password.html) 시 자동 포커스 이동(Auto-focusing) 및 정답 체크 로직 구현, 입력값 검증 후 이미지 리소스 교체(잠금/해제 아이콘) 등 즉각적인 시각 피드백 제공",
          "반응형 팝업 디자인: CSS Variables(:root)를 활용하여 유지보수가 용이한 스타일 시스템 구축, Absolute Positioning을 활용한 정교한 레이아웃 구성",
        ]
      },
    ],
    github: "https://github.com/chaeeunkim30/zep",
    images: [
      "./assets/img/zep1.png",
      "./assets/img/zep2.png",
      "./assets/img/zep3.png",
      "./assets/img/zep4.png",
    ]
  },
  {
    id: 8,
    title: "개발자를 위한 웹사이트",
    subTitle: "3인 팀 프로젝트",
    date: "2025.02.13 ~ 2025.04.01",
    intro: "커뮤니티를 통한 코드 질문과 오류 해결 / 스터디 모집 / 대회 및 부트캠프 공고 등 개발자들을 위한 다양한 정보를 모아둔 웹 사이트입니다.",
    techStack: ["React", "JavaScript", "SCSS", "Figma"],
    features: [
      {
        title: "1. 개발 기획 및 디자인",
        desc: [
          "전반적인 개발 기획을 주도하고 Figma를 활용해 웹 디자인을 하였습니다.",
        ]
      },
      {
        title: "2. 로그인 및 회원가입",
        desc: [
          "재사용 가능한 컴포넌트 기반 로그인 및 회원가입 페이지를 구현하고 Firebase와 연동하였습니다.",
        ]
      },
      {
        title: "3. 프로필 페이지 및 프로필 표시",
        desc: [
          "로그아웃, 프로필 이미지, 프로필 정보, 자기소개, 프로젝트 사진 및 소개를 구현하였습니다.",
          "프로필 이미지 컴포넌트를 사용해 각 사용자의 댓글 마다 개개인의 프로필 이미지 표시 / 프로필 이미지 클릭 시 각 유저의 프로필 페이지로 이동하게 구현하였습니다."
        ]
      },
      {
        title: "4. 댓글 수정 및 삭제",
        desc: [
          "본인이 작성한 댓글 수정과 삭제 기능을 구현하였습니다.",
        ]
      },
    ],
    github: "https://github.com/chaeeunkim30/gaebalbadak",
    images: [
      "./assets/img/개발자1.png",
      "./assets/img/개발자2.png",
      "./assets/img/개발자3.png",
    ]
  },
];