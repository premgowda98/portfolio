<template>
    <div>
        <div>
            <h1 class="text-3xl font-bold">Contact</h1>
        </div>
        <div id="calendly-inline-widget" class="text-black" style="min-width:320px;height:780px;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(()=>{
    // Initialize Calendly inline widget
    Calendly.initInlineWidget({
        url: 'https://calendly.com/premkumarmvks/30min',
            parentElement: document.getElementById('calendly-inline-widget'),
        });
})
</script>

<style>

</style>