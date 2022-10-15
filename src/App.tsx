import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <>
      <Router>
        <div>
          <header>
            <h1>Header</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/books" element={<Books />} />
              <Route path="/current-readings" element={<CurrentReadings />} />
              <Route path="/past-readings" element={<PastReadings />} />
              <Route path="/*" element={<NoMatch />} />
            </Routes>
          </main>
          <footer>Footer</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
