import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { addMemberRequest, getMemberRequest, updateMemberRequest } from "../redux/actions/membersActions";
import { fetchAcademicTitlesRequest } from "../redux/actions/academicTitleActions";
import { fetchEducationTitlesRequest } from "../redux/actions/educationTitleActions";
import { fetchScientificFieldsRequest } from "../redux/actions/scientificFieldActions";
import '../styles/MemberForm.css';

const MemberForm: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const dispatch = useDispatch();
    
    const [memberData, setMemberData] = useState({
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

    const isUpdateMode = Boolean(id); 

    useEffect(() => {
        dispatch(fetchAcademicTitlesRequest());
        dispatch(fetchEducationTitlesRequest());
        dispatch(fetchScientificFieldsRequest());

        if (isUpdateMode) {
            dispatch(getMemberRequest(Number(id)));
        }
    }, [dispatch, isUpdateMode, id]);

    useEffect(() => {
        if (isUpdateMode && member) {
            setMemberData({
                firstName: member.firstName || "",
                lastName: member.lastName || "",
                academicTitleId: member.academicTitle?.id || 0,
                educationTitleId: member.educationTitle?.id || 0,
                scientificFieldId: member.scientificField?.id || 0,
            });
        }
    }, [isUpdateMode, member]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isUpdateMode) {
            dispatch(updateMemberRequest({ ...memberData, id: Number(id) }));
        } else {
            dispatch(addMemberRequest(memberData));
        }
    };

    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setMemberData(prevData => ({
            ...prevData,
            [name] : value,
        }));
    };

    return (
        <div className="form-container">
            <h2>{isUpdateMode ? "Update Member" : "Add New Member"}</h2>
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
                        <option value="">Select Academic Title</option>
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
                        <option value="">Select Education Title</option>
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
                        <option value="">Select Scientific Field</option>
                        {scientificFields.scientificFields?.map((field) => (
                            <option key={field.id} value={field.id}>
                                {field.scientificField}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>
                    {isUpdateMode ? "Update Member" : "Add Member"}
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default MemberForm;
