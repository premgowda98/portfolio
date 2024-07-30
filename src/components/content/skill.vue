<template>
    <div class="px-8 mb-5">
        <div class="flex flex-col md:flex-row justify-center gap-8">
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Backend</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['backend']"/></a>
                <img src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white"/> 
            </div>
            <div class="flex flex-col items-center gap-2 mt-5"> 
                <p class="text-2xl font-bold">Frontend</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['frontend']"/></a> 
                <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=Streamlit&logoColor=white"/> 
            </div>
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Data</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['data']"/></a>
                <img src="https://img.shields.io/badge/PowerBI-F2C811?style=for-the-badge&logo=Power%20BI&logoColor=white"/>
                <img src="https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white"/> 
            </div>
            <div class="flex flex-col items-center gap-2 mt-5">
                <p class="text-2xl font-bold">Devops</p>
                <a href="https://github.com/premgowda98" target="_blank"><img style="margin: 10px" :src="iconSrc['devops']"/></a>
                <img src="https://img.shields.io/badge/ngrok-140648?style=for-the-badge&logo=Ngrok&logoColor=white"/> 
            </div>
        </div>
        <div class="flex flex-col items-center gap-4 justify-center mt-10">
            <p class="font-bold text-2xl">Github Contribution Graph (30 Days)</p>
            <img src="https://github-readme-activity-graph.vercel.app/graph?username=premgowda98&theme=high-contrast&bg_color=050000&color=ffffff&grid=false&hide_title=true&point">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    const iconSrc = ref(getIconSrc());

    function getIconSrc() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const perline = isMobile ? 5 : 2;
        return {
            backend: `https://skillicons.dev/icons?i=py,git,supabase,mongodb,selenium,redis,rabbitmq,neo4j&perline=${perline}`,
            frontend: `https://skillicons.dev/icons?i=html,css,js,vue,nuxt&perline=${perline}`,
            data: `https://skillicons.dev/icons?i=py,sklearn,tensorflow,opencv&perline=${perline}`,
            devops: `https://skillicons.dev/icons?i=azure,docker,nginx,kubernetes,ansible&perline=${perline}`
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

.cls-1{
    fill:#130754;
}

.cls-2{
    fill:#ffca00;
}

.cls-3{
    fill:#e70488;
}

</style>