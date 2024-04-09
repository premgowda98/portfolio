<template>
  <div class="flex flex-col md:flex-row justify-center items-start gap-5 mt-36">
    <Info class="fixed top-0 left-0"/>
    <div class="flex flex-col">
      <Options @selected_section="choosen_section"/>
      <div class="bg-white rounded-lg p-5">
        <component :is="components[current_component]"></component>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import Info from './profile/info.vue';
import Options from './options.vue';
import Education from './content/education.vue';
import Skills from './content/skill.vue';
import Work from './content/work.vue';
import About from './content/about.vue';
import Contact from './content/contact.vue';

const components = {
  edu: Education,
  skill: Skills,
  work: Work,
  about: About,
  contact: Contact
};

const current_component = ref('about');


const choosen_section = (val)=>{
  current_component.value = val
}

</script>

<style scoped>

</style>
