export interface ProfessionalDetails {
    designation: string,
    department: string,
    experience?: Object
    current_location: string,
    skills: string,
    upload_resume: string,
}

export interface ProfessionalDetailsErrors {
    designation?: string;
    department?: string;
    experience?: Object;
    current_location?: string;
    skills?: string;
    upload_resume?: string;
}

export interface ValidationMessages {
    errors: {
        errorInProfessionalDetails: ProfessionalDetailsErrors;
    };
}