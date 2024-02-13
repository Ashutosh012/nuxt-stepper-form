<template>
  <div>
    <Title :=titleProps></Title>
  </div>
  <div class="flex justify-end m-4">
    <Button
      :="buttonProps"
      @buttonClick="redirectTo"
    />
  </div>
</template>

<script setup lang="ts">
import Title from "~/components/Title.vue";
import Button from "~/components/Button.vue";

// adding type keyword to import type only interfaces
// also don't need to add .ts extenstion while importing
import type { TitleProps, ButtonProps } from '~/types/pages/indexTypes';

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

const title: Ref<string> = ref("Employee Management System");

const titleProps: TitleProps = {
  tag: 'h1',
  title: title.value,
  customClass: 'text-center p-2.5 font-bold text-3xl mb-2'
};

const buttonProps: ButtonProps = {
  tag: 'button',
  types: 'button',
  title: 'Add Employee',
  customClass: 'bg-black text-white p-2.5 rounded',
  buttonIcon: 'employee'
};
  
const redirectTo = async(): Promise<void> => {
  const router = useRouter();
  await router.push('/add-employee');
}
</script>
