import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  deleteMemberRequest,
  fetchMembersRequest,
} from "../redux/actions/membersActions";
import { Member } from "../types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/MemberForm.css";

const MembersComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const members = useSelector((state: RootState) => state.members.allMembers);

  useEffect(() => {
    dispatch(fetchMembersRequest());
  }, []);

  if (members.loading) {
    return <div>Loading...</div>;
  }

  if (members.error) {
    return <div>Error: {members.error}</div>;
  }

  const handleDeleteMember = (id: number) => {
    dispatch(deleteMemberRequest(id));
  };

  return (
    <>
      <h2>Member Administration</h2>
      <Button onClick={() => navigate("/add-member")}>Add new Member</Button>
      <table
        className='table table-striped'
        //  className="form-container"
      >
        <thead>
          <tr>
            <th scope='col'>First name</th>
            <th scope='col'>Last name</th>
            <th scope='col'>Academic Title</th>
            <th scope='col'>Education Title</th>
            <th scope='col'>Scientific Field</th>
          </tr>
        </thead>
        <tbody>
          {members.members.map((member: Member) => (
            <tr key={member.id}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.academicTitle?.academicTitle || ""}</td>
              <td>{member.educationTitle?.educationTitle || ""}</td>
              <td>{member.scientificField?.scientificField || ""}</td>
              <td>
                <Button onClick={() => navigate(`/update-member/${member.id}`)}>
                  Update
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteMember(member.id)}>
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

export default MembersComponent;
