import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchSubjectsRequest } from "../redux/actions/subjectActions";
import { Subject } from "../types";

const SubjectsComponent: React.FC = () => {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const {subjects, loading, error} = useSelector((state: RootState) => state.subjects);


  useEffect(() => {
    dispatch(fetchSubjectsRequest());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Subjects Administration</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ESPB</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject: Subject) => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.espb}</td>
              <td>{subject.department?.name || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SubjectsComponent;
