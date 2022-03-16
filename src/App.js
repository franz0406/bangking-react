// css style
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import {OuterLayout} from './styles/Layout';
// component
import Header from './components/Header';
import Card from './components/Card';
import Chart from './components/Chart';
import Messaging from './components/Messaging';
import Payment from './components/Payment';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <OuterLayout>
          <Card />
          <Chart />
          <Messaging />
          <Payment />
          <FAQ />
        </OuterLayout>
      </Main>
    </div>
  );
}

const Main = styled.main`

`;

export default App;
