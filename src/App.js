import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Page001 from './components/animation_contents/001/page';
import Page002 from './components/animation_contents/002/page';
import Page003 from './components/animation_contents/003/page';
import Page004 from './components/animation_contents/004/page';
import Page005 from './components/animation_contents/005/page';
import Page006 from './components/animation_contents/006/page';
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/001" exact element={<Page001 />} />
        <Route path="/002" exact element={<Page002 />} />
        <Route path="/003" exact element={<Page003 />} />
        <Route path="/004" exact element={<Page004 />} />
        <Route path="/005" exact element={<Page005 />} />
        <Route path="/006" exact element={<Page006 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
