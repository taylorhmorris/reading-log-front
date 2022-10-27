import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Authors } from './pages/Authors';
import { Books } from './pages/Books';
import { CurrentReadings } from './pages/CurrentReadings';
import { PastReadings } from './pages/PastReadings';
import { NoMatch } from './pages/NoMatch';
import './styles/global.css';

function App() {
  const { loggedIn } = useUserContext();
  return (
    <div>
      <header>
        <h1>Reading Log</h1>
        {loggedIn && <Navbar />}
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {loggedIn && (
              <>
                <Route path="/authors" element={<Authors />} />
                <Route path="/books" element={<Books />} />
                <Route path="/current-readings" element={<CurrentReadings />} />
                <Route path="/past-readings" element={<PastReadings />} />
              </>
            )}
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </Router>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
