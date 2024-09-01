import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MembersComponent from './components/MembersComponent';
import AddMemberForm from './components/AddMemberForm';
import UpdateMemberForm from './components/UpdateMemberForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-member" element={<AddMemberForm />} />
        <Route path="/update-member/:id" element={<UpdateMemberForm />} />
        <Route path="/members" element={<MembersComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
