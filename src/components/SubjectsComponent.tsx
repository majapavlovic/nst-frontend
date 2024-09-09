import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import {
  deleteSubjectRequest,
  fetchSubjectsByDepartmentRequest,
  fetchSubjectsRequest,
} from "../redux/actions/subjectActions";
import { Subject } from "../types";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const SubjectsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deptId } = useParams<{ deptId?: string }>();
  const { subjects, loading, error } = useSelector(
    (state: RootState) => state.subjects.allSubjects
  );

  const deleteMsg = useSelector(
    (state: RootState) => state.subjects.deleteSubject.message
  );

  const deleteErr = useSelector(
    (state: RootState) => state.subjects.deleteSubject.error
  );
  const handleDeleteSubject = (id: number) => {
    dispatch(deleteSubjectRequest(id));
  };

  const [delMsg, setDelMsg] = useState("");

  useEffect(() => {
    setDelMsg(deleteErr);
  }, [deleteErr]);

  useEffect(() => {
    setDelMsg("");
  }, [subjects]);

  useEffect(() => {
    if (deptId) {
      dispatch(fetchSubjectsByDepartmentRequest(Number(deptId)));
    } else {
      dispatch(fetchSubjectsRequest());
    }
  }, [delMsg]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddNewSubject = () => {
    if (deptId) {
      navigate(`/department/subjects/${deptId}/add-subject`);
    } else {
      navigate("/add-subject");
    }
  };

  return (
    <>
      <h2>Subjects Administration</h2>
      <Button onClick={handleAddNewSubject}>Add new Subject</Button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>ESPB</th>
            <th scope='col'>Department</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject: Subject) => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.espb}</td>
              <td>{subject.department?.name || ""}</td>
              <td>
                <Button
                  onClick={() => navigate(`/update-subject/${subject.id}`)}>
                  Update
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteSubject(subject.id)}>
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

export default SubjectsComponent;
