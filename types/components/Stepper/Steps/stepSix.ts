export interface CurrentOrganizationDetails {
    joining_date: string,
    next_appraisal_date: string,
    current_ctc: string,
}

export interface CurrentOrganizationDetailsErrors {
    joining_date?: string,
    next_appraisal_date?: string,
    current_ctc?: string,
}

export interface ValidationMessages {
    errors: {
        errorInCurrentOrganizationDetails: CurrentOrganizationDetailsErrors;
    };
}