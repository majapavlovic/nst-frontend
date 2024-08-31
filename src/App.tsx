import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MembersComponent from './components/MembersComponent';
import AddMemberForm from './components/AddMemberForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to University Administration App</h1>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-member" element={<AddMemberForm />} />
        <Route path="/members" element={<MembersComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
