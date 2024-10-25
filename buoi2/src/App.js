import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Button from './containers/Button.js';
import { ContextProvider } from './containers/Context.js';
import Menu from './containers/Menu.js';


function App() {
  // const name = "Khang Vo";
  const location = useLocation(); // Sử dụng useLocation để lấy đường dẫn hiện tại

  return (
    <ContextProvider>
      <div className="relative h-screen">
        {/* Điều kiện để hiển thị Menu và Button */}
        {location.pathname !== '/login' && location.pathname !== '/register' && (
          <>
            <Menu />
            <Button />
          </>
        )}
        <Outlet /> {/* Outlet để render các component con theo router */}
      </div>
    </ContextProvider>
  );
}

export default App;
