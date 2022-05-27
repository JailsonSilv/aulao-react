import './App.css'
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';




function App() {
  return (
    <div className="App">
      
    {/*chamada*/}
    <FirstComponent />
    <Images/>
    <RenderCond x={7} y={2}/>
    <Hooks/>
    <Fragment/>
    <Container>
      <h1> Este é filho do container!</h1>
    </Container>

    </div>
  );
}

export default App;
