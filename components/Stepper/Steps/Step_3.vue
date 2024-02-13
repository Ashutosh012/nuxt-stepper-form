<template>
    <StepperForm>
        <template #title>Professional Details</template>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input 
                    v-model="stepData.designation"
                    type="text" name="designation" id="designation"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="designation"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Designation *
                </label>
                <p v-if="validationMessages.errors.errorInProfessionalDetails.designation" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.designation }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input 
                    v-model="stepData.department"
                    type="text" name="department" id="department"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="department"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Department *
                </label>
                <p v-if="validationMessages.errors.errorInProfessionalDetails.department" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.department }}
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="flex justify-content-around ms-0">
                <Title :=titleProps></Title>
                <div class="top-16 w-56">
                    <Listbox v-model="selectedYear">
                        <div class="relative mt-1">
                            <ListboxButton  class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ selectedYear.name }} {{ selectedYear.id < 3 ? 'Year' : 'Years' }}</span>
                                <span
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                >
                                    <ChevronUpDownIcon
                                    class="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                    />
                                </span>
                            </ListboxButton>
                            <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions 
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                                    <ListboxOption
                                        v-slot="{ active, selected }"
                                        v-for="year in years"
                                        :key="year.id"
                                        :value="year"
                                        as="template"
                                    >
                                        <li
                                            :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-5 pr-4',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >
                                                
                                                {{ year.name }} {{ year.id < 3 ? 'Year' : 'Years' }}
                                            </span>
                                            <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                                >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox> 

                    <Listbox v-model="selectedMonth">
                        <div class="relative mt-1">
                            <ListboxButton  class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ selectedMonth.name }} {{ selectedMonth.id < 3 ? 'Month' : 'Months' }}</span>
                                <span
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                >
                                    <ChevronUpDownIcon
                                    class="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                    />
                                </span>
                            </ListboxButton>
                            <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions 
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                                    <ListboxOption
                                        v-slot="{ active, selected }"
                                        v-for="month in months"
                                        :key="month.id"
                                        :value="month"
                                        as="template"
                                    >
                                        <li
                                            :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-5 pr-4',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >
                                                {{ month.name }} {{ month.id < 3 ? 'Month' : 'Months' }}
                                            </span>
                                            <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                                >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox> 
                </div>
            </div>

            <div class="relative z-0 w-full mb-6 group">
                <input 
                    v-model="stepData.current_location"
                    type="text" name="current_location" id="currentLocation"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="currentLocation"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Current Location *
                </label>
                <p v-if="validationMessages.errors.errorInProfessionalDetails.current_location" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.current_location }}
                    </span>
                </p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input 
                    v-model="stepData.skills"
                    type="text" name="skills" id="skills"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="skills"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Skills *
                </label>
                <p v-if="validationMessages.errors.errorInProfessionalDetails.skills" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.skills }}
                    </span>
                </p>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input 
                    @change="handleImageUpload"
                    type="file" 
                    name="upload_resume" 
                    id="uploadResume"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="uploadResume"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Upload Resume *
                </label>
                <p v-if="validationMessages.errors.errorInProfessionalDetails.upload_resume" id="filled_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.upload_resume }}
                    </span>
                </p>
                <p v-if="selectedResumeName">Selected Resume: {{ selectedResumeName }}</p>
                <p v-if="!selectedResumeName && validationMessages.errors.errorInProfessionalDetails.upload_resume" id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">
                        {{ validationMessages.errors.errorInProfessionalDetails.upload_resume }}
                    </span>
                </p>
            </div>
        </div>
    </StepperForm>
</template>

<script setup lang="ts">
import StepperForm from "~/components/Stepper/StepperForm.vue";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import Title from "~/components/Title.vue";
import type { TitleProps } from '~/types/pages/indexTypes';
import { ref } from 'vue';
import type { ProfessionalDetails, ValidationMessages } from '~/types/components/Stepper/Steps/stepThree';

const title: Ref<string> = ref("Experience");

const titleProps: TitleProps = {
  tag: 'h3',
  title: title.value,
  customClass: 'text-center p-2.5 text-xl mb-2'
};

const years = [
    { id: 1, name: '0'},
    { id: 2, name: '1'},
    { id: 3, name: '2'},
    { id: 4, name: '3'},
    { id: 5, name: '4'},
    { id: 6, name: '5'},
    { id: 7, name: '6'},
    { id: 8, name: '7'},
];

const months = [
    { id: 1, name: '0'},
    { id: 2, name: '1'},
    { id: 3, name: '2'},
    { id: 4, name: '3'},
    { id: 5, name: '4'},
    { id: 6, name: '5'},
    { id: 7, name: '6'},
    { id: 8, name: '7'},
    { id: 9, name: '8'},
    { id: 10, name: '9'},
    { id: 11, name: '10'},
    { id: 12, name: '11'},
    { id: 13, name: '12'},
];

const selectedYear = ref(years[0]);
const selectedMonth = ref(months[0]);

const emit = defineEmits(['validation-update']);
const { updateFormData, getFormData } = useStepper(6);

const professionalDetails = {
    designation: "",
    department: "",
    experience: {
        years: selectedYear.value,
        months: selectedMonth.value,
    },
    current_location: "",
    skills: "",
    upload_resume: "",
}
const errorInProfessionalDetails = { ...professionalDetails };

const stepData = ref({ ...professionalDetails });
const validationMessages = ref(<ValidationMessages>{
    errors: {
        errorInProfessionalDetails
    }
});

const isValidationTriggered = ref(false);
const selectedResumeName = ref('');

const handleImageUpload = (event: Event) => {
    const files = event.target?.files;
    if (files.length > 0) {
        selectedResumeName.value = files[0].name;
        stepData.value.upload_resume = selectedResumeName.value
    }
};

const validateStepData = () => {
    const isStepValid = ref(true);

    const fieldsToValidate: Record<keyof ProfessionalDetails, string> = {
        designation: 'Designation is required',
        department: 'Department is required',
        current_location: 'Current Location is required',
        skills: 'Skills are required',
        upload_resume: 'Resume is required',
    };

    validationMessages.value.errors.errorInProfessionalDetails = {};

    for (const [field, errorMessage] of Object.entries(fieldsToValidate)) {
        const key = field as keyof ProfessionalDetails;
        if (!stepData.value[key]) {
            validationMessages.value.errors.errorInProfessionalDetails[key] = errorMessage;
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
//     const stepDataFromState = getFormData(3);
//     if (stepDataFromState) {
//         stepData.value = stepDataFromState;
//     }
// });

watch(stepData, (newData) => {
    updateFormData(3, newData);
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