<template>
  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 mt-36">
    <div class="">
      <Info/>
    </div>
    <div class="flex flex-col md:ml-52 max-w-4xl">
      <Options @selected_section="choosen_section"/>
      <div class="bg-white rounded-lg p-5 min-w-2xl max-w-2xl">
        <keep-alive>
          <Transition name="slide-fade">
            <component :is="components[current_component]"></component>
          </Transition>
        </keep-alive>
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
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(20px);
  opacity: 0;
}
</style>
