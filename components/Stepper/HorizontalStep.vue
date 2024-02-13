<template>
    <ol
        class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li v-for="(item, index) in navItems" :key="index" class="flex items-center text-blue-600 dark:text-blue-500">
            <span
                class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
                :class="{ 'step-active': currentPage === item.step }">
                {{ item.step }}
            </span>
            {{ item.text }}
            
            <svg v-if="index < navItems.length - 1" class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
        </li>
    </ol>
</template>

<script setup lang="ts">

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    }
})

const navItems = [
    {
        step: 1,
        text: "Personal Details"
    },
    {
        step: 2,
        text: "Bank Details"
    },
    {
        step: 3,
        text: "Professional Details"
    },
    {
        step: 4,
        text: "Education Details"
    },
    {
        step: 5,
        text: "Experience Details"
    },
    {
        step: 6,
        text: "Current Organization Details"
    },
];
</script>