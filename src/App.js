import Home from './pages/Home';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Notfound from './pages/Notfound';
import ProjectPage from './pages/ProjectPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-page/:id" element={<ProjectPage/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
