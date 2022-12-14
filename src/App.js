
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext';
import HomePage from './pages/HomePage';

function App() {
  const apiKey=process.env.REACT_APP_API_KEY
  const baseUrl=process.env.REACT_APP_API_BASE_URL
  return (
      <BrowserRouter>
      <ThemeContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage apiKey={apiKey} baseUrl={baseUrl}/>}/>
        </Routes>
       </ThemeContextProvider>
      </BrowserRouter>
  );
}

export default App;
