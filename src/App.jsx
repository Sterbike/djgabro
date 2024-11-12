import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;