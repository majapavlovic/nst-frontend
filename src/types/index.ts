export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    academicTitle: AcademicTitle;
    educationTitle: EducationTitle;
    scientificField: ScientificField;
}

export interface MemberRequest {
    firstName: string;
    lastName: string;
    academicTitleId: number;
    educationTitleId: number;
    scientificFieldId: number;
}


export interface AcademicTitle {
    id: number;
    academicTitle: string;
}

export interface EducationTitle {
    id: number;
    educationTitle: string;
}

export interface ScientificField {
    id: number;
    scientificField: string;
}