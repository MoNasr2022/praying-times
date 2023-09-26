
import { Container } from '@mui/material';
import './App.css'
import MainContent from './components/MainContent';

function App() {

  return (
    <div className='app'>
      <div className="contianer">
        <Container maxWidth="">
          <MainContent />
        </Container>
      </div>
    </div>
  );
}

export default App
