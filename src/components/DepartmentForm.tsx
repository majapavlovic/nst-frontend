import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import {
  addDepartmentRequest,
  getDepartmentsRequest,
  updateDepartmentRequest,
} from "../redux/actions/departmentActions";
import { Alert } from "react-bootstrap";

const DepartmentForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();

  const [departmentData, setDepartmentData] = useState({
    name: "",
    shortName: "",
  });

  const [alertError, setAlertError] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const { loading, error, department } = useSelector(
    (state: RootState) => state.departments.getDepartment
  );
  const savedDept = useSelector(
    (state: RootState) => state.departments.addDepartment.success
  );
  const savedErr = useSelector(
    (state: RootState) => state.departments.addDepartment.error
  );

  const isUpdateMode = Boolean(id);

  useEffect(() => {
    if (isUpdateMode) {
      dispatch(getDepartmentsRequest(Number(id)));
    }
  }, [dispatch, isUpdateMode, id]);

  useEffect(() => {
    if (isUpdateMode && department) {
      setDepartmentData({
        name: department.name || "",
        shortName: department.shortName || "",
      });
    }
  }, [isUpdateMode, department]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isUpdateMode) {
      dispatch(updateDepartmentRequest({ ...departmentData, id: Number(id) }));
    } else {
      dispatch(addDepartmentRequest(departmentData));
    }
  };

  useEffect(() => {
    if (savedErr) setAlertError(savedErr);
    if (error) setAlertError(error);
  }, [error, savedErr]);

  useEffect(() => {
    if (savedDept) setAlertSuccess("Success");
  }, [savedDept]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setDepartmentData((prevData) => ({
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
      <h2>{isUpdateMode ? "Update Department" : "Add New Department"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={departmentData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='shortName'>Short Name:</label>
          <input
            type='text'
            id='shortName'
            name='shortName'
            value={departmentData.shortName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type='submit' disabled={loading}>
          {isUpdateMode ? "Update Department" : "Add Department"}
        </button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default DepartmentForm;
