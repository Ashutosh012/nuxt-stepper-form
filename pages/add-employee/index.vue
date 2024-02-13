<template>
    <div>
        <Stepper />
    </div>
</template>

<script setup lang="ts">
import Stepper from "~/components/Stepper/Stepper.vue";
useHead({
    title: 'Stepper Form',
    meta: [
        { name: 'title', content: 'Stepper Form - Employee Management System' },
        { name: 'description', content: 'Stepper Form - Employee Management System' }
    ],
    bodyAttrs: {
        class: 'test'
    },
});
</script>