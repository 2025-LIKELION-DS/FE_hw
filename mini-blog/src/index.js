import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage'; 
import PostViewPage from './component/page/PostViewPage'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:id" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);