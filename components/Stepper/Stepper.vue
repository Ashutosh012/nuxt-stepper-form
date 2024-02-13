<template>
    <HorizontalStep :currentPage="currentStep" />
    <KeepAlive>
        <component :is="currentStepComponent" ref="currentStepRef" @validation-update="handleValidationUpdate" />
    </KeepAlive>
    <div class="m-8 flex justify-between">
        <Button :tag="'button'" :types="'button'" :title="'Previous'" class="p-2.5 rounded"
            :customClass="currentStep > 1 ? 'bg-black text-white cursor-pointer' : 'bg-slate-300 text-black'"
            :isDisabled="currentStep > 1 ? false : true" @buttonClick="previousStep">
        </Button>
        <Button :tag="'button'" :types="'button'" :title="'Next'" class="p-2.5 rounded"
            :customClass="'bg-black text-white cursor-pointer'" v-if="currentStep != totalStep" 
            @buttonClick="validateNextStep"
            >
        </Button>
        <Button :tag="'button'" :types="'button'" :title="'Submit'" class="p-2.5 rounded"
            :customClass="'bg-black text-white cursor-pointer'" @buttonClick="validateSubmit" v-if="currentStep === totalStep">
        </Button>
    </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";
import HorizontalStep from "~/components/Stepper/HorizontalStep.vue";

const totalStep = ref(6);
const currentStepRef = ref(null);
const storeAllFormData = [];

const { currentStep, nextStep, previousStep, setStepValidation, isCurrentStepValid, updateFormData, getAllFormData } = useStepper(totalStep.value);

let currentStepComponent = defineAsyncComponent(() => import(`~/components/Stepper/Steps/Step_${currentStep.value}.vue`));

watch(currentStep, (newStep) => {
    currentStepComponent = defineAsyncComponent(() => import(`~/components/Stepper/Steps/Step_${newStep}.vue`));
});

const handleValidationUpdate = (isValid: boolean, formData?:any) => {  
    setStepValidation(currentStep.value, isValid);
    if (formData) {
        updateFormData(currentStep.value, formData);       
    }
};

const validateNextStep = () => {
    if (currentStepRef.value && currentStepRef.value.triggerValidation) {
        const formData = currentStepRef.value.triggerValidation();
        handleValidationUpdate(isCurrentStepValid.value, formData);
    }   
    if (isCurrentStepValid.value) {
        nextStep();
    }
};

const validateSubmit = () => {
    const formData = getAllFormData();
    localStorage.setItem('formData', JSON.stringify([formData]));
}

</script>