import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashBoard from './components/DashBoard.jsx';

function App() {

  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/user/:id" element={<DashBoard />} />
          </Routes>
        </main>
        <Sidebar />

    </Router>
  );
}

export default App
