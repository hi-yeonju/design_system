# 1. 디자인 시스템의 핵심 구성 요소

```bash
/design-system
 ├── tokens/           # 색상, 타이포, 간격 등 디자인 토큰 JSON, SCSS 등
 ├── foundations/      # 토큰을 활용한 기초 스타일 (타이포, 컬러, 그리드 등)
 ├── components/       # 버튼, 입력창, 카드 등 컴포넌트 단위 UI
 ├── patterns/         # 컴포넌트 조합 UI 패턴 (폼, 네비게이션, 리스트)
 ├── utilities/        # margin, padding 등 유틸리티 클래스
 ├── guidelines/       # 브랜드 가이드, 접근성, 코드 스타일 가이드
 └── docs/             # Storybook, MDX 문서 파일
```

## 1) Design Tokens (디자인 토큰)
- 색상, 폰트, 간격, 그림자, 반경 등 기본 스타일 속성들의 원자 단위 변수들
- 플랫폼 별로 통일된 변수명과 값으로 관리

예) --color-primary, --font-size-base, --spacing-sm


## 2) Foundation (기초 스타일)
- Design Tokens를 활용해 만든 타이포그래피, 컬러 팔레트, 아이콘, 그리드, 레이아웃 가이드라인
- UI의 일관성을 위한 기본 원칙과 규칙들


## 3) Components (컴포넌트)
- 버튼, 입력창, 체크박스, 모달, 토스트 등 재사용 가능한 UI 컴포넌트 모음
- 각 컴포넌트는 상태별 디자인, 인터랙션, 접근성까지 명확히 문서화


## 4) Patterns (패턴)
- 여러 컴포넌트를 조합해서 만든 복합 UI 패턴 (예: 네비게이션 바, 폼, 리스트 등)
- 사용자 경험 흐름과 가이드 포함


## 5) Utilities (유틸리티 클래스 / 함수)
- 마진, 패딩, 디스플레이 속성 등 간단한 스타일 적용을 위한 헬퍼 클래스

예) .m-10 (margin 10px), .text-center


## 6) Guidelines (가이드라인)
- 디자인 철학, 접근성 가이드, 작성 규칙, 브랜딩 가이드 등
- 신규 디자이너/개발자 onboarding 문서 역할

