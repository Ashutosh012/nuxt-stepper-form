<template>
    <StepperForm>
        <template #title>Current Organization Details</template>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="date" v-model="stepData.joining_date" name="joining_date" id="joiningDate"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="joiningDate"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Joining Date *
                </label>
                <p v-if="validationMessages.errors.errorInCurrentOrganizationDetails.joining_date" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInCurrentOrganizationDetails.joining_date }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="date" v-model="stepData.next_appraisal_date" name="next_appraisal_date" id="nextAppraisalDate"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="nextAppraisalDate"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Next Appraisal Date *
                </label>
                <p v-if="validationMessages.errors.errorInCurrentOrganizationDetails.next_appraisal_date" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInCurrentOrganizationDetails.next_appraisal_date }}
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" v-model="stepData.current_ctc" name="current_ctc" id="currentCtc"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="currentCtc"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Current CTC *
                </label>
                <p v-if="validationMessages.errors.errorInCurrentOrganizationDetails.current_ctc" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInCurrentOrganizationDetails.current_ctc }}
                    </span>
                </p>
            </div>
        </div>
    </StepperForm>
</template>

<script setup lang="ts">
import StepperForm from "~/components/Stepper/StepperForm.vue";
import { ref } from 'vue';
import type { CurrentOrganizationDetails, ValidationMessages } from '~/types/components/Stepper/Steps/stepSix';

const emit = defineEmits(['validation-update']);
const { updateFormData, getFormData } = useStepper(6);

const currentOrganizationDetails = {
    joining_date: "",
    next_appraisal_date: "",
    current_ctc: "",
}
const errorInCurrentOrganizationDetails = { ...currentOrganizationDetails };

const stepData = ref({ ...currentOrganizationDetails });
const validationMessages = ref(<ValidationMessages>{
    errors: {
        errorInCurrentOrganizationDetails
    }
});

const isValidationTriggered = ref(false);

const validateStepData = () => {
    const isStepValid = ref(true);

    const fieldsToValidate: Record<keyof CurrentOrganizationDetails , string> = {
        joining_date: "Joining Date is required",
        next_appraisal_date: "Next Appraisal Date is required",
        current_ctc: "Current CTC is required",
    };

    validationMessages.value.errors.errorInCurrentOrganizationDetails = {};

    for (const [field, errorMessage] of Object.entries(fieldsToValidate)) {
        const key = field as keyof CurrentOrganizationDetails;
        if (!stepData.value[key]) {
            validationMessages.value.errors.errorInCurrentOrganizationDetails[key] = errorMessage;
            isStepValid.value = false;
        }
    }

    updateValidationState(isStepValid.value);
}

watch(stepData, (newData) => {
    updateFormData(6, newData);
}, { deep: true });

const updateValidationState = (isValid: boolean) => {
    emit('validation-update', isValid, stepData.value);
};

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