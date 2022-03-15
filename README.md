# 리액트 웹사이트 튜토리얼

### styled-components 전역 스타일 설정

전역 스타일을 지원하기 위해 Styled Components는 `createGlobalStyle` 제공.

```javascript
// 파일이름 GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }
    * {
        margin:0; padding:0;
    }
    
    css 리셋이나 common style 작성

`;

export default GlobalStyle;
```

`createGlobalStyle`로 생성한 전역 스타일 컴포넌트를 애플리케이션의 최상위 컴포넌트에 추가! 하위 모든 컴포넌트에 해당 스타일이 일괄 적용.
```javascript
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
```
