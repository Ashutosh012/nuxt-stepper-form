import { toRefs } from 'vue';
const state = reactive({
    currentStep: 1,
    formData:{
      step_1:{
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
      },
      step_2: {
        bank_name: "",
        account_name: "",
        bank_account_number: "",
        ifsc_code: "",
        aadhar_card: "",
        pan_card: "",
      },
      step_3: {
        designation: "",
        department: "",
        experience: {
            years: "",
            months: "",
        },
        current_location: "",
        skills: "",
        upload_resume: "",
      },
      step_4: {},
      step_5: {},
      step_6: {},
    }
});

export default function useStepper(totalSteps) {
  const _currentStep = ref(state.currentStep);

  const currentStep = computed(() => _currentStep.value);

  const stepValidations = ref(Array(totalSteps).fill(false));

  const isCurrentStepValid = computed(() => stepValidations.value[_currentStep.value - 1]);

  const updateFormData = (step, data) => {
    state.formData[`step_${step}`] = JSON.parse(JSON.stringify(data));
  }

  const getFormData = (step) => {
    return state.formData[`step_${step}`];
  };

  const getAllFormData = () => {
    console.log("Line no 43", state.formData)
    return state.formData;
  };

  const nextStep = () => {
    if (_currentStep.value < totalSteps) {
      _currentStep.value++;
    }
  };

  const previousStep = () => {
    if (_currentStep.value > 1) {
      _currentStep.value--;
    }
  };

  const setStepValidation = (stepIndex, isValid) => {   
    if (stepIndex >= 1 && stepIndex <= totalSteps) {
      stepValidations.value[stepIndex - 1] = isValid;
    }
  };

  return {
    ...toRefs(state),
    updateFormData,
    getFormData,
    currentStep,
    nextStep,
    previousStep,
    setStepValidation,
    isCurrentStepValid,
    getAllFormData
  };
}
