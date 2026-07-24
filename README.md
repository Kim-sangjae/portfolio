# Portfolio

김상재 개인 포트폴리오 사이트입니다. 지속적으로 업데이트됩니다.

- Live: https://kim-sangjae.github.io/portfolio/ (GitHub Pages 활성화 후)
- Stack: HTML / CSS / Vanilla JS (빌드 도구 없음)

## 구조

```
index.html            메인 페이지 (소개, 이력, 기술스택, 프로젝트, 연락처)
projects/              프로젝트 상세 페이지
  jimwhere.html
  linkee.html
  gaekdam.html
css/style.css          스타일
js/main.js             모바일 네비, 스크롤 애니메이션, 아코디언
assets/img             프로필 이미지
assets/docs            발표자료 PDF
```

## 로컬 확인

정적 사이트라 별도 빌드 없이 `index.html`을 브라우저로 열거나, 로컬 서버로 확인합니다.

```bash
npx serve .
```

## 업데이트 방법

내용을 수정한 뒤 커밋하고 푸시하면 됩니다.

```bash
git add .
git commit -m "update: ..."
git push
```
