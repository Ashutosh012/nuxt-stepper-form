<template>
    <component 
        :is="tag" 
        :class="customClass" 
        :style="{ textAlign: textAlignment }">
        {{ title }}
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    tag: {
        type: String,
        required: true,
        validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(value),
    },
    textAlignment: {
        type: String,
        required: false,
        validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    customClass: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    }
});
</script>