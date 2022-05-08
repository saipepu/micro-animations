import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
