import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { NoMatch } from './pages/NoMatch';

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
