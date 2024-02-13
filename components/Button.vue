<template>
    <component 
    :is="tag" 
    :type="types"
    :class="customClass"
    @click="handleClick"
    :disabled="isDisabled"
    >
        <img 
            v-if="buttonIcon"
            class="d-flex inline-block justify-center mr-2 h-6 w-6 align-middle leading-none" 
            :src="'/_nuxt/assets/Img/' + buttonIcon + '.svg'" />
        {{ title }}
    </component>
</template>
<script setup lang="ts">
    const props = defineProps({
        tag:{
            type: String,
            required: true,
            validator: (value) => ['button', 'a'].includes(value),
        },
        types:{
            type: String,
            required: true,
            validator: (value) => ['button', 'submit', 'reset'].includes(value),
        },
        title:{
            type: String,
            required: true,
        },
        customClass: {
            type: String,
            required: false,
        },
        buttonIcon:{
            type: String,
            required: false
        },
        data: {
            type: Object,
            default: () => ({}),
            required: false
        },
        isDisabled:{
            type: Boolean,
            default: false,
            required: false
        }
    });

    const emits = defineEmits();

    const handleClick = () => {
        emits('buttonClick', props.data);
    };
    
</script>