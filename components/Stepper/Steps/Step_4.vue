<template>
    <StepperForm>
        <template #title>Education Details</template>
        <div class="flex justify-end m-4">
            <Button :="buttonProps" @buttonClick="addRow" />
        </div>
        <table class="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Education Name</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">University Name</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Result</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Year of Passing</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index"
                    class="border-b hover:bg-gray-50 transition duration-300 ease-in-out">
                    <td class="py-2 px-4">
                        <input v-model="row.education_name" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Education Name" :readonly="!row.add_update_row">
                        <p v-if="!row.education_name" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.education_name }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input v-model="row.university_name" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="University Name" :readonly="!row.add_update_row">
                        <p v-if="!row.university_name" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.university_name }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input v-model="row.result" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Result" :readonly="!row.add_update_row">
                        <p v-if="!row.result" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.result }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input 
                            v-model="row.year_of_passing" 
                            type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Year of Passing" :readonly="!row.add_update_row">
                        <p v-if="!row.year_of_passing" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.year_of_passing }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4 flex justify-center space-x-2">
                        <button type="button" v-if="row.add_update_row != 1" @click="editRow(index)"
                            class="text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                        <button type="button" v-if="row.add_update_row == 1" @click="saveRow(row)"
                            class="text-white bg-green-500 hover:bg-green-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                        <button type="button" v-if="row.add_update_row == 1" @click="resetRow(index)"
                            class="text-white bg-yellow-500 hover:bg-yellow-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Reset</button>
                        <button type="button" @click="deleteRow(index)"
                            class="text-white bg-red-500 hover:bg-red-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="rows.length === 0" class="py-8 text-center text-sm text-gray-400">
            No Data Found
        </div>
    </StepperForm>
</template>
  
<script setup lang="ts">
import StepperForm from "~/components/Stepper/StepperForm.vue";
import Button from "~/components/Button.vue";
import { ref, computed } from 'vue';
import type { Row } from '~/types/components/Stepper/Steps/stepFour';

const rows = ref<Array<Row>>([]);
const emit = defineEmits(['validation-update']);
const { updateFormData, getFormData } = useStepper(6);

const add_education_details = ref({
    education_name: '',
    university_name: '',
    result: '',
    year_of_passing: '',
    add_update_row: 1
});
const errorInRowData = { ...add_education_details.value };
const validationMessages = ref({
    errors: {
        errorInRowData
    }
});
const isValidationTriggered = ref(false);

const fieldsToValidate = {
    education_name: 'Education Name is required',
    university_name: 'University Name is required',
    result: 'Result is required',
    year_of_passing: 'Pass Year is required',
};

const addRow = () => {
    rows.value.push({
        ...add_education_details.value,
    });
    buttonProps.value.isDisabled = true;
    buttonProps.value.customClass = 'p-2.5 rounded bg-slate-300 text-black';
};

const editRow = (index: number) => {
    rows.value[index].add_update_row = 1;
    buttonProps.value.isDisabled = true;
    buttonProps.value.customClass = 'p-2.5 rounded bg-slate-300 text-black';
}

const saveRow = (row: Row) => {
    validationMessages.value.errors.errorInRowData = {};
    const { add_update_row, ...objectToValidate } = row;
    if(isObjectCompletelyEmpty(objectToValidate)){
        for (const [field, errorMessage] of Object.entries(fieldsToValidate)) {
            const key = field;
            if (!add_education_details.value[key]) {
                validationMessages.value.errors.errorInRowData[key] = errorMessage;
            }
        }
        return false;
    }
    if (row.add_update_row) {
        row.add_update_row = 0;
    }
    buttonProps.value.isDisabled = false;
    buttonProps.value.customClass = 'bg-black text-white p-2.5 rounded';
}

const resetRow = (index: number) => {
    rows.value[index] = {
        ...add_education_details.value,
    };
    validationMessages.value.errors.errorInRowData = {};
}

const deleteRow = (index: number) => {
    rows.value.splice(index, 1);
};

const isObjectCompletelyEmpty = (obj: Row) => {
    return Object.values(obj).every(value => value === '' || (typeof value === 'string' && value.trim() === ''));
};

const buttonProps = computed(() => {
    return {
        tag: 'button',
        types: 'button',
        title: 'Add Education',
        customClass: 'bg-black text-white p-2.5 rounded',
        buttonIcon: 'employee'
    };
});

const validateStepData = () => {
    const isStepValid = ref(true);
    if(rows.value.length === 0){
        isStepValid.value = false;
    }
    if(rows.value.length > 0){
        isStepValid.value = true;
    }
    updateValidationState(isStepValid.value);
}

const updateValidationState = (isValid: boolean) => {
    emit('validation-update', isValid, rows.value);
};

watch(rows, (newData) => {
    updateFormData(4, newData);
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
  