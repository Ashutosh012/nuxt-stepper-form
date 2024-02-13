export interface BankDetails {
    bank_name: string,
    account_name: string,
    bank_account_number: string,
    ifsc_code: string,
    aadhar_card: string,
    pan_card: string,
}

export interface BankDetailsErrors {
    bank_name?: string;
    account_name?: string;
    bank_account_number?: string;
    ifsc_code?: string;
    aadhar_card?: string;
    pan_card?: string;
}

export interface ValidationMessages {
    errors: {
        errorInBankDetails: BankDetailsErrors;
    };
}