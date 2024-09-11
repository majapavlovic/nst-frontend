import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import {
  clearDeleteSubjectState,
  deleteSubjectRequest,
  fetchSubjectsByDepartmentRequest,
} from "../redux/actions/subjectActions";
import { Subject } from "../types";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentsRequest } from "../redux/actions/departmentActions";

const DepartmentDetails: React.FC = () => {
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

  const department = useSelector(
    (state: RootState) => state.departments.getDepartment
  );

  const [delMsg, setDelMsg] = useState("");

  useEffect(() => {
    setDelMsg(deleteErr);
  }, [deleteErr]);

  useEffect(() => {
    setDelMsg("");
  }, [subjects]);

  useEffect(() => {
    if (deptId) {
      dispatch(getDepartmentsRequest(Number(deptId)));
      dispatch(fetchSubjectsByDepartmentRequest(Number(deptId)));
    }
  }, [deptId]);

  const handleDeleteSubject = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subject?"
    );
    if (confirmed) {
      dispatch(deleteSubjectRequest(id));
    }
  };

  useEffect(() => {
    if (deleteMsg) {
      dispatch(fetchSubjectsByDepartmentRequest(Number(deptId)));
      dispatch(clearDeleteSubjectState());
    }
  }, [deleteMsg, dispatch, deptId]);

  const handleAddNewSubject = () => {
    navigate(`/department/subjects/${deptId}/add-subject`);
  };

  const handleUpdateSubject = (id: any) => {
    navigate(`/department/subjects/${deptId}/update-subject/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div
          className='table-container'
          style={{ maxWidth: "600px", width: "100%" }}>
          <h2>Department details</h2>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Short name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{department.department.id}</td>
                <td>{department.department.name}</td>
                <td>{department.department.shortName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3>Subjects</h3>
      <Button onClick={handleAddNewSubject}>Add new Subject</Button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>ESPB</th>
            <th scope='col'>Department</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject: Subject) => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.espb}</td>
              <td>{subject.department?.name || ""}</td>
              <td>
                <Button onClick={() => handleUpdateSubject(subject.id)}>
                  Update
                </Button>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => handleDeleteSubject(subject.id)}>
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

export default DepartmentDetails;
