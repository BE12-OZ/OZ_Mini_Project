## OZ 온라인 쇼핑몰 (Flask 기반) 프로젝트 개요

이 문서는 Flask 프레임워크를 사용하여 개발된 온라인 쇼핑몰 웹 애플리케이션의 핵심 내용을 요약합니다. 본 프로젝트는 기본적인 전자상거래 기능을 구현하여 웹 개발의 전반적인 과정을 이해하고 실습하는 데 중점을 두었습니다.

### 1. 주요 기능

*   **사용자 관리**: 회원가입, 로그인, 로그아웃, 사용자 세션 관리
*   **상품 관리**: 상품 목록 조회, 상세 정보 조회
*   **관리자 기능**: 관리자 대시보드 접근, 상품 추가/수정/삭제 (CRUD)
*   **장바구니 기능**: 상품 장바구니 추가, 장바구니 상품 조회 및 비우기
*   **주문 기능**: 장바구니 상품을 이용한 주문 생성, 주문 완료 페이지
*   **보안**: 비밀번호 해싱 (Werkzeug), 관리자 권한 및 로그인 필수 데코레이터 적용

![2](https://github.com/user-attachments/assets/5dce98ba-a93e-44c8-91d5-64a032b2e5d7)
![9](https://github.com/user-attachments/assets/84713571-760d-46f9-bdfb-e1d340898689)
![11](https://github.com/user-attachments/assets/7fa7e55f-6346-408c-9cea-ec03e291308d)
![12](https://github.com/user-attachments/assets/870717eb-d560-44d4-b37c-480b1fc73045)
![14](https://github.com/user-attachments/assets/1659aa0b-b898-4764-ae82-eaf17bfe5e54)
![15](https://github.com/user-attachments/assets/62a19bc8-0524-435d-96b4-d5315c19eb19)
![16](https://github.com/user-attachments/assets/1802c970-03fb-4b0f-8f4b-7c6ea106c5ca)
![18](https://github.com/user-attachments/assets/5d99e145-3d3c-4e7e-8b93-8e16ef37db4e)

### 2. 기술 스택

*   **백엔드**:
    *   Python
    *   Flask (웹 프레임워크)
    *   Flask-SQLAlchemy (ORM)
    *   Flask-Migrate (데이터베이스 마이그레이션)
    *   PyMySQL (MySQL 드라이버)
    *   Werkzeug (보안 유틸리티)
*   **데이터베이스**: MySQL
*   **프론트엔드**:
    *   HTML5 (Jinja2 템플릿 엔진 활용)
    *   CSS3
    *   JavaScript (클라이언트 사이드 로직)

### 3. 프로젝트 구조

```
OZ_SHOP_1차수정/
├── app.py                  # 메인 Flask 애플리케이션 파일 (라우트, 모델, 비즈니스 로직)
├── requirements.txt        # Python 종속성 목록
├── create_admin.py         # (옵션) 관리자 계정 생성 유틸리티 스크립트
├── .venv/                  # Python 가상 환경
├── migrations/             # Flask-Migrate (Alembic) 데이터베이스 마이그레이션 스크립트
│   ├── versions/           # 마이그레이션 파일들
│   └── ...
├── static/                 # 정적 파일 (CSS, JavaScript, 이미지 등)
│   ├── css/                # 스타일시트 파일
│   │   ├── Admin.css
│   │   ├── Main_Page.css
│   │   └── ...
│   └── js/                 # JavaScript 파일
│       ├── Admin_Product_Management.js
│       ├── Main_Page.js
│       └── ...
└── templates/              # HTML 템플릿 파일 (Jinja2)
    ├── base.html           # 기본 레이아웃 템플릿
    ├── Main_Page.html      # 메인 페이지
    ├── Login_Page.html     # 로그인 페이지
    ├── Admin_Dashboard.html # 관리자 대시보드
    └── ...
```

### 4. 핵심 기능 흐름

#### 4.1. 사용자 기능 흐름 (예: 상품 구매)

1.  **회원가입/로그인**: 사용자는 `Login_Page.html`을 통해 회원가입하거나 로그인합니다. 성공적으로 로그인하면 사용자 세션이 생성됩니다.
2.  **상품 탐색**: `Main_Page.html` 또는 특정 상품의 `Product_Detail_Page.html`을 통해 상품 목록을 탐색하고 상세 정보를 확인합니다.
3.  **장바구니 추가**: 상품 상세 페이지에서 원하는 상품을 선택하고 장바구니에 추가합니다. 이 과정은 `/api/cart/add` API 엔드포인트와 상호작용합니다.
4.  **장바구니 확인**: 장바구니 페이지에서 현재 담긴 상품 목록을 확인합니다 (`/api/cart` API).
5.  **주문 생성**: 장바구니에 담긴 상품들을 최종 확인 후 주문을 생성합니다. `/api/order` API 엔드포인트를 통해 주문이 처리되고, 장바구니는 비워집니다.
6.  **주문 완료**: `OrderComplete.html` 페이지에서 주문 완료 메시지를 확인합니다.

#### 4.2. 관리자 기능 흐름 (예: 상품 관리)

1.  **관리자 로그인**: 관리자 권한을 가진 사용자로 로그인합니다.
2.  **관리자 대시보드 접근**: `/admin/dashboard` 경로로 이동하여 관리자 대시보드(`Admin_Dashboard.html`)에 접근합니다. ( `@admin_required` 데코레이터로 보호됨)
3.  **상품 관리 페이지 이동**: `Admin_Product_Management.html` 페이지로 이동하여 상품 목록을 확인합니다.
4.  **상품 CRUD 작업**: 관리자는 API 엔드포인트 (`/api/products`)를 통해 새로운 상품을 추가하거나, 기존 상품의 정보를 수정하고, 상품을 삭제할 수 있습니다.
