import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { getMemberRequest, updateMemberRequest } from "../redux/actions/membersActions";
import { fetchAcademicTitlesRequest } from "../redux/actions/academicTitleActions";
import { fetchEducationTitlesRequest } from "../redux/actions/educationTitleActions";
import { fetchScientificFieldsRequest } from "../redux/actions/scientificFieldActions";
import '../styles/MemberForm.css';

const UpdateMemberForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const numericId = Number(id);
    const dispatch = useDispatch();
    const [memberData, setMemberData] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        academicTitleId: 0,
        educationTitleId: 0,
        scientificFieldId: 0
    });

    const { loading, error, member } = useSelector((state: RootState) => state.members.getMember);
    const academicTitles = useSelector((state: RootState) => state.academicTitles);
    const educationTitles = useSelector((state: RootState) => state.educationTitles);
    const scientificFields = useSelector((state: RootState) => state.scientificFields);

    useEffect(() => {
        dispatch(fetchAcademicTitlesRequest());
        dispatch(fetchEducationTitlesRequest());
        dispatch(fetchScientificFieldsRequest());
        dispatch(getMemberRequest(numericId));
    }, [dispatch, numericId]);

    useEffect(() => {
        if (member) {
            setMemberData({
                id: member.id || 0,
                firstName: member.firstName || "",
                lastName: member.lastName || "",
                academicTitleId: member.academicTitle?.id || 0,
                educationTitleId: member.educationTitle?.id || 0,
                scientificFieldId: member.scientificField?.id || 0,
            });
        }
    }, [member]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(updateMemberRequest(memberData));
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setMemberData(prevData => ({
            ...prevData,
            [name]:
                name === 'academicTitleId' ||
                    name === 'educationTitleId' ||
                    name === 'scientificFieldId'
                    ? Number(value)
                    : value,
        }));
    };

    return (
        <div className="form-container">
            <h2>Update Member</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={memberData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={memberData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="academicTitleId">Academic Title:</label>
                    <select
                        id="academicTitleId"
                        name="academicTitleId"
                        value={memberData.academicTitleId}
                        onChange={handleInputChange}
                        required
                    >
                        <option value={0}>Select Academic Title</option>
                        {academicTitles.academicTitles?.map((title) => (
                            <option key={title.id} value={title.id}>
                                {title.academicTitle}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="educationTitleId">Education Title:</label>
                    <select
                        id="educationTitleId"
                        name="educationTitleId"
                        value={memberData.educationTitleId}
                        onChange={handleInputChange}
                        required
                    >
                        <option value={0}>Select Education Title</option>
                        {educationTitles.educationTitles?.map((title) => (
                            <option key={title.id} value={title.id}>
                                {title.educationTitle}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="scientificFieldId">Scientific Field:</label>
                    <select
                        id="scientificFieldId"
                        name="scientificFieldId"
                        value={memberData.scientificFieldId}
                        onChange={handleInputChange}
                        required
                    >
                        <option value={0}>Select Scientific Field</option>
                        {scientificFields.scientificFields?.map((field) => (
                            <option key={field.id} value={field.id}>
                                {field.scientificField}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>Update Member</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default UpdateMemberForm;
