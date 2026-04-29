<template>
    <div class="px-8 mb-5">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Core Expertise</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['core']"/></a>
            </div>
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Backend</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['backend']"/></a>
            </div>
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Cloud & DevOps</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['devops']"/></a>
            </div>
        </div>

        <div class="flex flex-col items-center gap-4 justify-center mt-12">
            <p class="font-bold text-2xl">GitHub Contribution Graph (30 Days)</p>
            <img src="https://github-readme-activity-graph.vercel.app/graph?username=premgowda98&theme=github-compact&bg_color=050000&color=ffffff&grid=false&hide_title=true&point=e3e1dc" class="rounded-lg shadow-md">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    const iconSrc = ref(getIconSrc());

    function getIconSrc() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const perline = isMobile ? 5 : 4;
        return {
            core: `https://skillicons.dev/icons?i=go,python,kubernetes,docker&perline=${perline}`,
            backend: `https://skillicons.dev/icons?i=kafka,rabbitmq,redis,postgresql&perline=${perline}`,
            devops: `https://skillicons.dev/icons?i=azure,github,grafana,prometheus&perline=${perline}`,
            data: `https://skillicons.dev/icons?i=pyspark,databricks&perline=${perline}`,
            };
    }

    function handleResize() {
        iconSrc.value = getIconSrc();
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

</script>

<style scoped>

svg {
    @apply w-14 h-14;
}

</style>
