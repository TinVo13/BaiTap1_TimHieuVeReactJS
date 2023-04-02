import './App.css';
import Dashboard from './components/projects/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
