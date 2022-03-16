# 리액트 웹사이트 튜토리얼

### styled-components 전역 스타일 설정

전역 스타일을 지원하기 위해 Styled Components는 `createGlobalStyle` 제공.

```javascript
// 파일이름 GlobalStyle.js

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

### useState 활용 간단한 아코디언 메뉴 만들기.
```javascript
const [toggle, setToggle] = useState(false);
const toggler = ()=>{
    setToggle(!toggle);
};
<div>
  <div className="toggle_title">
    <h4>{title}</h4>
    <button onClick={toggler}>내용보기!</button>
  </div>
  {toggle ? <p className='desc'>{desc}</p> : null}
</div>
```

처음엔 내용이 숨겨져 있어야 하니 기본 상태값을 `false`  
클릭 이벤트시 toggler 함수 실행문으로 기본 상태값을 반대로 바꿈

### 3항 연산자

```javascript
// 조건문 ? 참 : 거짓

let person = {
  name: '황',
  age: 80,
  adult: null
};
// if 문
if (person.age >= 20) {
  person.adult = true;
} else {
  person.adult = false;
}
// 3항 연산자 
person.adult = person.age >= 20 ? true : false;
```