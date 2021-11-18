import './App.css';
import MainLayout from 'component/layout/main-layout';
import { Route, Routes } from 'react-router-dom';
import Blog from 'component/pages/Blog/Blog';
import { useMediaQuery, createTheme } from '@mui/material';
import BottomNavComponent from 'component/layout/bottom-nav/BottomNav.component';
import Navbar from 'component/layout/navbar';
import { ThemeProvider } from '@emotion/react';

function App() {
  const small = useMediaQuery('(max-width:768px)');
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#1F2937',
      },

    },
  });
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        {
        small ? <BottomNavComponent /> : <Navbar />
      }
        <Routes>
          <Route path="/" caseSensitive element={<MainLayout />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
