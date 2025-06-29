import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/view/:postId" element={<PostViewPage />} />
        <Route path="/write" element={<PostWritePage />} />
      </Routes>
    
    </Router>
  );
}

export default App;
