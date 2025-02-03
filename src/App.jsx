import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashBoard from './components/DashBoard.jsx';
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/user/:id" element={<DashBoard />} />
            <Route path="/user/404" element={<NotFound />} /> 
          </Routes>
        </main>
        <Sidebar />

    </Router>
  );
}

export default App
