import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NewInscription from './components/pages/NewInscription';


function App() {
  return (
    <Router>
      <Navbar />
      <Container custom="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscricao" element={<NewInscription />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
