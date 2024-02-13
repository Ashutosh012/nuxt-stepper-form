export interface PersonalDetails {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    mobile_number: string;
    date_of_birth: string;
    image: string;
    present_address: string;
    permanent_address: string;
}

export interface PersonalDetailsErrors {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    email?: string;
    mobile_number?: string;
    date_of_birth?: string;
    image?: string
    present_address?: string,
    permanent_address?: string
}

export interface ValidationMessages {
    errors: {
        errorInPersonalDetails: PersonalDetailsErrors;
    };
}