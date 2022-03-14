import styled from 'styled-components';
// css style
import GlobalStyle from './styles/GlobalStyle';
import {OuterLayout} from './styles/Layout';
// component
import Header from './components/Header';
import CardSection from './components/CardSection';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <OuterLayout>
          <CardSection />
        </OuterLayout>
      </Main>
    </div>
  );
}

const Main = styled.main`

`;

export default App;
