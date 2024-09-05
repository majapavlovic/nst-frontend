import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MembersComponent from './components/MembersComponent';
import AppNavbar from './components/Navbar';
import MemberForm from './components/MemberForm';

function App() {

  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/login';

  return (<>
    {shouldShowNavbar && <AppNavbar />}
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      {/* <Route path="/add-member" element={<AddMemberForm />} />
      <Route path="/update-member/:id" element={<UpdateMemberForm />} /> */}
       <Route path="/add-member" element={<MemberForm />} />
       <Route path="/update-member/:id" element={<MemberForm />} />
      <Route path="/members" element={<MembersComponent />} />
    </Routes>
  </>
  );
}

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
