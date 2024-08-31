import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchAcademicTitlesRequest } from "../redux/actions/academicTitleActions";
import { fetchEducationTitlesRequest } from "../redux/actions/educationTitleActions";
import { fetchScientificFieldsRequest } from "../redux/actions/scientificFieldActions";
import { addMemberRequest } from "../redux/actions/membersActions";


const AddMemberForm: React.FC = () => {
    const [memberData, setMemberData] = useState({
        firstName: "",
        lastName: "",
        academicTitleId: 0,
        educationTitleId: 0,
        scientificFieldId: 0
    });
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.members.addMember);
    const academicTitles = useSelector((state: RootState) => state.academicTitles);
    const educationTitles = useSelector((state: RootState) => state.educationTitles);
    const scientificFields = useSelector((state: RootState) => state.scientificFields);

    useEffect(() => {
        dispatch(fetchAcademicTitlesRequest());
        dispatch(fetchEducationTitlesRequest());
        dispatch(fetchScientificFieldsRequest());
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addMemberRequest(memberData));
    };

    const handleInputChange = (name: string, value: string) => {
        setMemberData({ ...memberData, [name]: value })
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
                    <label htmlFor="academicTitleId">Academic Title:</label>
                    <select
                        id="academicTitleId"
                        name="academicTitleId"
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                        value={memberData.academicTitleId}
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
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                        value={memberData.educationTitleId}
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
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                        value={memberData.scientificFieldId}
                    >
                        <option value="">Select Scientific Field</option>
                        {scientificFields.scientificFields?.map((field) => (
                            <option key={field.id} value={field.id}>
                                {field.scientificField}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>Add Member</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default AddMemberForm;
