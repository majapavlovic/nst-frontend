import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchMembersRequest } from '../redux/actions/membersActions';
import { Member } from '../types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MembersComponent: React.FC = () => {
  const dispatch = useDispatch();

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
    console.log(id);
  }

  return (
    <>
      <h2>Member Administration</h2>
      <Link to="/add-member">Add new Member</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Academic Title</th>
            <th scope="col">Education Title</th>
            <th scope="col">Scientific Field</th>

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
              <td><Button onClick={() => handleDeleteMember(member.id)}>Delete member</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MembersComponent;
