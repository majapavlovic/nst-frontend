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

const SubjectForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();

  const [subjectData, setSubjectData] = useState({
    name: "",
    espb: 0,
    departmentId: 0,
  });

  const { loading, error, subject } = useSelector(
    (state: RootState) => state.subjects.getSubject
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
        departmentId: subject.department?.id || 0,
      });
    }
  }, [isUpdateMode, subject]);

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
  };

  return (
    <div className='form-container'>
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
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default SubjectForm;
