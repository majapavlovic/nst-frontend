import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addMemberRequest } from '../redux/actions/membersActions';

const AddMemberForm: React.FC = () => {
    const [memberData, setMemberData] = useState({
        firstName: "",
        lastName: "",
        academicTitleId: 0,
        educationTitleId: 0,
        scientificFieldId: 0
    });
    const dispatch: AppDispatch = useDispatch();
    const { loading, error, member } = useSelector((state: RootState) => state.members.addMember);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addMemberRequest(memberData));
    };

    const handleInputChange = (name: string, value: string) => {
        setMemberData({ ...memberData, [name]: value })
        console.log(memberData);
    }

    return (
        <div>
            <h2>Add New Member</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Academic Title:</label>
                    <input
                        type="text"
                        id="academicTitleId"
                        name="academicTitleId"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Education Title:</label>
                    <input
                        type="text"
                        id="educationTitleId"
                        name="educationTitleId"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Scientific Field:</label>
                    <input
                        type="text"
                        id="scientificFieldId"
                        name="scientificFieldId"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>Add Member</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default AddMemberForm;
