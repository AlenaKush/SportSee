import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import UserName from './components/UserName.jsx';

function App() {

  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/user/:id" element={<UserName />} />
          </Routes>
        </main>
        <Sidebar />

    </Router>
  );
}

export default App
