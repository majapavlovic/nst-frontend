import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import {
  addSubjectRequest,
  getSubjectRequest,
  updateSubjectRequest,
} from "../redux/actions/subjectActions";
import { fetchDepartmentsRequest } from "../redux/actions/departmentActions";
import { Alert } from "react-bootstrap";

const SubjectForm: React.FC = () => {
  const { id, deptId } = useParams<{ id?: string; deptId?: string }>();
  const dispatch = useDispatch();

  const [subjectData, setSubjectData] = useState({
    name: "",
    espb: 0,
    departmentId: deptId ? Number(deptId) : 0,
  });

  const [isDeptDisabled] = useState(!!deptId);

  const [alertError, setAlertError] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const { loading, error, subject } = useSelector(
    (state: RootState) => state.subjects.getSubject
  );

  const savedError = useSelector(
    (state: RootState) => state.subjects.addSubject.error
  );

  const savedSubject = useSelector(
    (state: RootState) => state.subjects.addSubject.success
  );

  const { departments } = useSelector(
    (state: RootState) => state.departments.allDepartments
  );
  const isUpdateMode = Boolean(id);

  useEffect(() => {
    dispatch(fetchDepartmentsRequest());

    if (isUpdateMode) {
      dispatch(getSubjectRequest(Number(id)));
    }
  }, [dispatch, isUpdateMode, id]);

  useEffect(() => {
    if (isUpdateMode && subject) {
      setSubjectData({
        name: subject.name,
        espb: subject.espb,
        departmentId: deptId ? Number(deptId) : subject.department?.id || 0,
      });
    }
  }, [isUpdateMode, subject, deptId]);

  useEffect(() => {
    if (savedSubject) setAlertSuccess("Success");
    else if (savedError) setAlertError(savedError);
    else if (error) setAlertError(error);
  }, [savedSubject, error, savedError]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isUpdateMode) {
      dispatch(updateSubjectRequest({ ...subjectData, id: Number(id) }));
    } else {
      dispatch(addSubjectRequest(subjectData));
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSubjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setAlertError("");
    setAlertSuccess("");
  };

  return (
    <div className='form-container'>
      {alertSuccess && <Alert variant='success'>{alertSuccess}</Alert>}
      {alertError && <Alert variant='danger'>{alertError}</Alert>}
      <h2>{isUpdateMode ? "Update Subject" : "Add New Subject"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={subjectData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='espb'>ESPB:</label>
          <input
            type='text'
            id='espb'
            name='espb'
            value={subjectData.espb}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='departmentId'>Department:</label>
          <select
            id='departmentId'
            name='departmentId'
            value={subjectData.departmentId}
            onChange={handleInputChange}
            disabled={isDeptDisabled}
            required>
            <option value=''>Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <button type='submit' disabled={loading}>
          {isUpdateMode ? "Update Subject" : "Add Subject"}
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;
