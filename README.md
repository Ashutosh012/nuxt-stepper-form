# 🚀 Project Name: Stepper Form Nuxt

## 📚 Overview

<p align="center">
    Stepper form is a CRUD (Create, Read, Update, Delete) operation multi-step form application built with NuxtJS, Vue3 Composition API.
</p>

<p align="center">
    This form will be helpful for the e-commerce checkout process, or for storing multistep form data.
</p>

<p align="center">
    Integrate form in your e-commerce application in minutes.
</p>

<p align="center">
    This project is beneficial for the Vue frontend guys who want to explore Nuxtjs and also want to cover all sorts of functionalities that any Vue or Nuxt application has.
</p>

<p align="center">
  <a href="#covered-concepts"><strong>Covered Concepts</strong></a> ·  
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·  
  <a href="#common-bugs"><strong>Common Bugs</strong></a>
  <a href="#future-tasks"><strong>Future Tasks</strong></a>
</p>
<br/>

## Covered Concepts

1. Keep Alive - Tt caches the instances of the components and retains their state to avoid the re-render process.
2. Dynamic Components using <component> and defineAsyncComponent
3. makeRaw
4. Local Storage
5. Typescript
6. Reusable component
7. Slots


## Tech Stack

- Vue3 Composition API [VueJS](https://vuejs.org/guide/introduction.html)
- NuxtJS [Core App](https://nuxt.com/docs/getting-started/introduction) for the framework - Nuxt is built on top of VueJS.
- [Tailwind CSS](https://dub.sh/together-ai) for styling
- [Flowbite](https://dub.sh/together-ai) Flowbite is built on top of Tailwind and provide some premium UI designs
- [Headless UI](https://js.langchain.com/docs/get_started/introduction/) to use standard components
- [Heroicons](https://www.pinecone.io/) for the free and copyright-free icons
- Vite [Frontend Tooling](https://www.bytescale.com/) to generate light fast HMR, inbuilt support of TypeScript and optimized build.
- Vitest [Unit Testing](https://www.bytescale.com/) to write unit test cases.

## Common Bugs
[ ] On step 1 form needs to fix the design of the Upload Image button and placement of the validation message
[ ] On the step 1 form need to fix the date format from mm/dd/yyyy to dd/mm/yyyy
[ ] Disable autocomplete for all forms
[ ] Previous button data handle - suppose you are moving from step 1 to step 2 and from step 2 if you go back to step 1 then data of step 1 is getting disappear


## Future tasks

These are some future tasks that I have planned. Contributions are welcome!

- [ ] On the listing page, we want to add sorting. Sort by name, department, designation, email and mobile
- [ ] Allow file type missing in Image upload - Allow only jpeg, png images
- [ ] Step 2 form needs to add banking-related validations in 
- [ ] Step 2 form replace account name with account type and implement a dropdown
- [ ] Step 3 form for skills needs to implement a dropdown
- [ ] Step 3 form for Experience needs to correct the design of dropdowns and make it inline
- [ ] Step 3 form for Upload resume needs to add validation of only PDF file should allow to upload and common file upload button design
- [ ] Step 4 form for row validation of education details needs to be added
- [ ] Step 5 form for row validation of experience  details needs to be added
- [ ] Step 6 form for the need to correct the date format
- [ ] In the Current project, I didn't use state management libraries like pinia and vuex. so you can implement any or both libraries and create a wrapper structure for the best practices. - you can follow these guidelines - https://blog.logrocket.com/exploring-advanced-design-patterns-vue-js/
