import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Main from './components/main';
import CreateComp from './components/pages/createComp';
import DeleteComp from './components/pages/deleteComp';
import UpdateComp from './components/pages/updateComp';
import ListComp from './components/pages/listComp';
import ReorderComp from './components/pages/reorderComp';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>} /> 
      </Routes>
      <Routes>
        <Route path="/create" element={<CreateComp/>} />
      </Routes>
      <Routes>
        <Route path="/delete" element={<DeleteComp/>} />
      </Routes>
      <Routes>
        <Route path="/update" element={<UpdateComp/>} />
      </Routes>
      <Routes>
        <Route path="/list" element={<ListComp/>} />
      </Routes>
      <Routes>
        <Route path="/reorder" element={<ReorderComp/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
