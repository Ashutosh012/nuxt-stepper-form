<template>
    <StepperForm>
        <template #title>Personal Details</template>
        <div class="grid md:grid-cols-3 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.first_name" type="text" name="first_name" id="firstName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="firstName"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    First name *
                </label>
                <p v-if="validationMessages.errors.errorInPersonalDetails.first_name" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.first_name }}
                    </span>
                </p>
                <p v-if="!isFirstNameValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        First name must be at least 3 characters long.
                    </span>
                </p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.middle_name" type="text" name="middle_name" id="middleName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />

                <label for="middleName"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Middle name *
                </label>

                <p v-if="validationMessages.errors.errorInPersonalDetails.middle_name" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.middle_name }}
                    </span>
                </p>

                <p v-if="!isMiddleNameValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        Middle name must be at least 3 characters long.
                    </span>
                </p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.last_name" type="text" name="last_name" id="lastName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />

                <label for="lastName"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Last name *
                </label>

                <p v-if="validationMessages.errors.errorInPersonalDetails.last_name" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.last_name }}
                    </span>
                </p>

                <p v-if="!isLastNameValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        Last name must be at least 3 characters long.
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-3 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input @input="onEmailChange = true" v-model="stepData.email" type="email" name="email" id="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />

                <label for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email *
                </label>

                <p v-if="validationMessages.errors.errorInPersonalDetails.email" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.email }}
                    </span>
                </p>

                <p v-if="onEmailChange && !isEmailValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        Email is invalid, please enter valid email address
                    </span>
                </p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input v-model="stepData.mobile_number" maxlength="10" type="tel" name="mobile_number" id="mobileNumber"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />

                <label for="mobileNumber"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Mobile Number *
                </label>

                <p v-if="validationMessages.errors.errorInPersonalDetails.mobile_number" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.mobile_number }}
                    </span>
                </p>

                <p v-if="!isMobileNameValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        Please enter valid mobile number
                    </span>
                </p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input @input="validateDateOfBirth" v-model="stepData.date_of_birth" type="date" name="date_of_birth"
                    id="dateOfBirth"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />

                <label for="dateOfBirth"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Date of Birth *
                </label>

                <p v-if="validationMessages.errors.errorInPersonalDetails.date_of_birth" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.date_of_birth }}
                    </span>
                </p>

                <p v-if="dateOfBirthTouched && !isDateOfBirthValid" class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        Please add valid date of birth
                    </span>
                </p>
            </div>
        </div>

        <div class="flex items-center justify-center w-full">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                Image</label>
            <input @change="handleImageUpload"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file" accept="image/*">
            <p v-if="selectedImageName">Selected Image: {{ selectedImageName }}</p>
            <p v-if="!selectedImageName && validationMessages.errors.errorInPersonalDetails.image" id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400">
                <span class="font-medium">
                    {{ validationMessages.errors.errorInPersonalDetails.image }}
                </span>
            </p>
        </div>

        <div class="grid md:grid-cols-2 mt-4 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="presentAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Present Address *
                </label>
                <textarea v-model="stepData.present_address" id="presentAddress" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="">
                    </textarea>
                <p v-if="validationMessages.errors.errorInPersonalDetails.present_address" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.present_address }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="permanentAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Permanent Address *
                </label>
                <textarea v-model="stepData.permanent_address" id="permanentAddress" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="">
                    </textarea>
                <p v-if="validationMessages.errors.errorInPersonalDetails.permanent_address" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInPersonalDetails.permanent_address }}
                    </span>
                </p>
            </div>
        </div>

        <div class="flex items-center mb-4">
            <input id="defaultCheckbox" type="checkbox" v-model="copyAddress" @change="copyTo"
                class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="defaultCheckbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Copy to Permanent Address
            </label>
        </div>
    </StepperForm>
</template>

<script setup lang="ts">
import StepperForm from "~/components/Stepper/StepperForm.vue";
import { ref } from 'vue';
import type { PersonalDetails, ValidationMessages } from '~/types/components/Stepper/Steps/stepOne';

const { updateFormData, getFormData } = useStepper(6);

const emit = defineEmits(['validation-update']);

const personalDetails = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    image: "",
    present_address: "",
    permanent_address: "",
    copy_address: false
}
const errorInPersonalDetails = { ...personalDetails };

const stepData = ref({ ...personalDetails });
const validationMessages = ref(<ValidationMessages>{
    errors: {
        errorInPersonalDetails
    }
});

const isFirstNameValid = computed(() => stepData.value.first_name.length >= 3 || stepData.value.first_name.length === 0);
const isMiddleNameValid = computed(() => stepData.value.middle_name.length >= 3 || stepData.value.middle_name.length === 0);
const isLastNameValid = computed(() => stepData.value.last_name.length >= 3 || stepData.value.last_name.length === 0);
const isEmailValid = computed(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(stepData.value.email);
});
const onEmailChange = ref(false);
const isMobileNameValid = computed(() => stepData.value.mobile_number.length === 10 || stepData.value.mobile_number.length === 0);

const copyAddress = ref(false);

const copyTo = () => {
    if (copyAddress.value) {
        stepData.value.permanent_address = stepData.value.present_address;
    }
};

const selectedImageName = ref('');

const handleImageUpload = (event: Event) => {
    const files = event.target?.files;
    if (files.length > 0) {
        selectedImageName.value = files[0].name;
        stepData.value.image = selectedImageName.value
    }
};

const dateOfBirthTouched = ref(false);
const isDateOfBirthValid = ref(true);

const validateDateOfBirth = () => {
    dateOfBirthTouched.value = true;
    const dob = new Date(stepData.value.date_of_birth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    isDateOfBirthValid.value = !isNaN(dob.getTime()) && age >= 18;
};

const isValidationTriggered = ref(false);

const validateStepData = () => {
    const isStepValid = ref(true);

    const fieldsToValidate: Record<keyof PersonalDetails, string> = {
        first_name: 'First Name is required',
        middle_name: 'Middle Name is required',
        last_name: 'Last Name is required',
        email: 'Email is required',
        mobile_number: 'Mobile Number is required',
        date_of_birth: 'Date of Birth is required',
        image: 'Image is required',
        present_address: 'Present Address is required',
        permanent_address: 'Permanent Address is required',
    };

    validationMessages.value.errors.errorInPersonalDetails = {};

    for (const [field, errorMessage] of Object.entries(fieldsToValidate)) {
        const key = field as keyof PersonalDetails;
        if (!stepData.value[key]) {
            validationMessages.value.errors.errorInPersonalDetails[key] = errorMessage;
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
//     const stepDataFromState = getFormData(1);
//     if (stepDataFromState) {
//         stepData.value = stepDataFromState;
//     }
// });

watch(stepData, (newData) => {
    updateFormData(1, newData);
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