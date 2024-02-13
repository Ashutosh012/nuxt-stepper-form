<template>
    <StepperForm>
        <template #title>Experience Details</template>
        <div class="flex justify-end m-4">
            <Button :="buttonProps" @buttonClick="addRow" />
        </div>
        <table class="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Company Name</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Position</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Total Year</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Last CTC</th>
                    <th class="py-3 px-4 border-b border-gray-300 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index"
                    class="border-b hover:bg-gray-50 transition duration-300 ease-in-out">
                    <td class="py-2 px-4">
                        <input v-model="row.company_name" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Company Name" :readonly="!row.add_update_row">
                        <p v-if="!row.company_name" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.company_name }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input v-model="row.position" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Position" :readonly="!row.add_update_row">
                        <p v-if="!row.position" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.position }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input v-model="row.total_year" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Total Year" :readonly="!row.add_update_row">
                        <p v-if="!row.total_year" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.total_year }}
                            </span>
                        </p>
                    </td>
                    <td class="py-2 px-4">
                        <input v-model="row.last_ctc" type="text"
                            class="w-full border rounded py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Last CTC" :readonly="!row.add_update_row">
                        <p v-if="!row.last_ctc" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">
                                {{ validationMessages.errors.errorInRowData.last_ctc }}
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
import type { Row } from '~/types/components/Stepper/Steps/stepFive';

const rows = ref<Array<Row>>([]);
const emit = defineEmits(['validation-update']);
const { updateFormData, getFormData } = useStepper(6);
const add_experience_details = ref({
    company_name: '',
    position: '',
    total_year: '',
    last_ctc: '',
    add_update_row: 1
});
const errorInRowData = { ...add_experience_details.value };
const validationMessages = ref({
    errors: {
        errorInRowData
    }
});
const isValidationTriggered = ref(false);

const fieldsToValidate = {
    company_name: 'Company Name is required',
    position: 'Current Poisition is required',
    total_year: 'Total Year is required',
    last_ctc: 'Your Last CTC is required',
};

const addRow = () => {
    rows.value.push({
        ...add_experience_details.value,
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
            if (!add_experience_details.value[key]) {
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
        ...add_experience_details.value,
    };
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
        title: 'Add Experience',
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
  