import { Routes,Route } from 'react-router-dom';

import { Navbar } from './components/navbar/navbar';

import { Home } from './pages/Home/home';
import { Projects } from './pages/Projects/projects';
import { Contacts } from './pages/Contacts/contacts';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
