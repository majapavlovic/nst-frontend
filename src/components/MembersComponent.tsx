import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchMembersRequest } from '../redux/actions/membersActions';
import { Member } from '../types';

const MembersComponent: React.FC = () => {
  const dispatch = useDispatch();

  const members = useSelector((state: RootState) => state.members.members);
  const loading = useSelector((state: RootState) => state.members.loading);
  const error = useSelector((state: RootState) => state.members.error);

  useEffect(() => {
    dispatch(fetchMembersRequest());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Member List</h1>
      <ul>
        {members.map((member: Member) => (
          <li key={member.id}>
            {member.firstName}, {member.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MembersComponent;
