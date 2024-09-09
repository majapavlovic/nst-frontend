import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  deleteDepartmentRequest,
  fetchDepartmentsRequest,
} from "../redux/actions/departmentActions";
import { Department } from "../types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DepartmentsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { departments, loading, error } = useSelector(
    (state: RootState) => state.departments.allDepartments
  );

  useEffect(() => {
    dispatch(fetchDepartmentsRequest());
  }, []);

  const handleDeleteDepartment = (id: number) => {
    dispatch(deleteDepartmentRequest(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Departments Administration</h2>
      <Button onClick={() => navigate("/add-department")}>
        Add new Department
      </Button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Short name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept: Department) => (
            <tr key={dept.id}>
              <td>{dept.name}</td>
              <td>{dept.shortName}</td>
              <td>
                <Button
                  onClick={() => navigate(`/department/subjects/${dept.id}`)}>
                  Subjects
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => navigate(`/update-department/${dept.id}`)}>
                  Update
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteDepartment(dept.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DepartmentsComponent;
