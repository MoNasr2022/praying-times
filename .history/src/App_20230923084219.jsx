
import { Container } from '@mui/material';
import './App.css'
import MainContent from './components/MainContent';

function App() {

  return (
    <div className='app'>
      <div className="first-contianer">
        <Container maxWidth="xl">
          <MainContent />
        </Container>
      </div>
    </div>
  );
}

export default App
