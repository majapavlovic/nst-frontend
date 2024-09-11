import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import MembersComponent from "./components/MembersComponent";
import AppNavbar from "./components/Navbar";
import MemberForm from "./components/MemberForm";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SubjectsComponent from "./components/SubjectsComponent";
import DepartmentForm from "./components/DepartmentForm";
import SubjectForm from "./components/SubjectForm";
import DepartmentDetails from "./components/DepartmentDetails";

function App() {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== "/login";

  return (
    <>
      {shouldShowNavbar && <AppNavbar />}
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/add-member' element={<MemberForm />} />
        <Route path='/update-member/:id' element={<MemberForm />} />
        <Route path='/members' element={<MembersComponent />} />
        <Route path='/departments' element={<DepartmentsComponent />} />
        <Route path='/add-department' element={<DepartmentForm />} />
        <Route path='/update-department/:id' element={<DepartmentForm />} />
        <Route
          path='/department/subjects/:deptId'
          element={<SubjectsComponent />}
        />
        <Route
          path='/department/details/:deptId'
          element={<DepartmentDetails />}
        />
        <Route path='/subjects' element={<SubjectsComponent />} />
        <Route path='/add-subject' element={<SubjectForm />} />
        <Route
          path='department/subjects/:deptId/add-subject'
          element={<SubjectForm />}
        />
        <Route
          path='/department/subjects/:deptId/update-subject/:id'
          element={<SubjectForm />}
        />
        <Route path='/update-subject/:id' element={<SubjectForm />} />
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
