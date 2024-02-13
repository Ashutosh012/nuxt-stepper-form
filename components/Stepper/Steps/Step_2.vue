<template>
    <StepperForm>
        <template #title>Bank Details</template>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.bank_name" type="text" name="bank_name" id="bankName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="bankName"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Bank name *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.bank_name" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.bank_name }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.account_name" type="text" name="account_name" id="accountName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="accountName"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Account name *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.account_name" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.account_name }}
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.bank_account_number" type="text" name="bank_account_number" id="bankAccountNumber"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="bankAccountNumber"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Bank Account Number *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.bank_account_number" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.bank_account_number }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.ifsc_code" type="text" name="ifsc_code" id="ifscCode"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="ifscCode"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    IFSC Code *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.ifsc_code" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.ifsc_code }}
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.aadhar_card" type="text" name="aadhar_card" id="aadharCard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="aadharCard"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Aadhar Card Number *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.aadhar_card" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.aadhar_card }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.pan_card" type="text" name="pan_card" id="panCard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="panCard" 
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    PAN Card Number *
                </label>
                <p v-if="validationMessages.errors.errorInBankDetails.pan_card" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInBankDetails.pan_card }}
                    </span>
                </p>
            </div>
        </div>
    </StepperForm>
</template>

<script setup lang="ts">
import StepperForm from "~/components/Stepper/StepperForm.vue";
import { ref } from 'vue';
import type { BankDetails, ValidationMessages } from '~/types/components/Stepper/Steps/stepTwo';

const emit = defineEmits(['validation-update']);
const { updateFormData, getFormData } = useStepper(6);

const bankDetails = {
    bank_name: "",
    account_name: "",
    bank_account_number: "",
    ifsc_code: "",
    aadhar_card: "",
    pan_card: "",
}
const errorInBankDetails = { ...bankDetails };

const stepData = ref({ ...bankDetails });
const validationMessages = ref(<ValidationMessages>{
    errors: {
        errorInBankDetails
    }
});

const isValidationTriggered = ref(false);

const validateStepData = () => {
    const isStepValid = ref(true);

    const fieldsToValidate: Record<keyof BankDetails, string> = {
        bank_name: 'Bank Name is required',
        account_name: 'Account Name is required',
        bank_account_number: 'Bank Account Number is required',
        ifsc_code: 'IFSC code is required',
        aadhar_card: 'Aadhar Card Number is required',
        pan_card: 'PAN Card Number is required',
    };

    validationMessages.value.errors.errorInBankDetails = {};

    for (const [field, errorMessage] of Object.entries(fieldsToValidate)) {
        const key = field as keyof BankDetails;
        if (!stepData.value[key]) {
            validationMessages.value.errors.errorInBankDetails[key] = errorMessage;
            isStepValid.value = false;
        }
    }

    updateValidationState(isStepValid.value);
}

const updateValidationState = (isValid: boolean) => {
    emit('validation-update', isValid, stepData.value);
};

// ToDo: This logic is written to get data on click of previous button.
// But issue with the code is that it is merging data with next upcoming step
// for e.g data of step 1 is merging with step 2
// So need to work on this issue and fix the below code

// onMounted(() => {
//     const stepDataFromState = getFormData(2);
//     if (stepDataFromState) {
//         stepData.value = stepDataFromState;
//     }
// });

watch(stepData, (newData) => {
    updateFormData(2, newData);
}, { deep: true });

watchEffect(() => {
    if (isValidationTriggered.value) {
        validateStepData();
    }
});

const triggerValidation = () => {
    isValidationTriggered.value = true;
    validateStepData();
};

defineExpose({ triggerValidation });

</script>