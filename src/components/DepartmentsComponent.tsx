import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchDepartmentsRequest } from "../redux/actions/departmentActions";
import { Department } from "../types";



const DepartmentsComponent: React.FC = () => {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const { departments, loading, error }= useSelector((state: RootState) => state.departments);


  useEffect(() => {
    dispatch(fetchDepartmentsRequest());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Departments Administration</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Short name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept: Department) => (
            <tr key={dept.id}>
              <td>{dept.name}</td>
              <td>{dept.shortName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DepartmentsComponent;
