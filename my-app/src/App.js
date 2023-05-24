import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CounterTest from './component/CounterTest';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
      <CounterTest/>
      </Container>
      </div>
     
  );
}

export default App;
