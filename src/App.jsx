import './App.css';
import MainLayout from 'component/layout/main-layout';
import { Route, Routes } from 'react-router-dom';
import Blog from 'component/pages/Blog/Blog';
import { useMediaQuery } from '@mui/material';
import BottomNavComponent from 'component/layout/bottom-nav/BottomNav.component';
import Navbar from 'component/layout/navbar';

function App() {
  const small = useMediaQuery('(max-width:768px)');
  return (
    <div className="App">
      {
        small ? <BottomNavComponent /> : <Navbar />
      }
      <Routes>
        <Route path="/" caseSensitive element={<MainLayout />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
