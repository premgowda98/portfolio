<template>
  <div class="px-8 flex flex-col gap-8 my-10">
    <!-- Build Your Own Redis -->
    <div class="border-l-4 border-blue-500 pl-5 hover:bg-gray-50 py-3 rounded-r transition-colors">
      <a href="https://github.com/premgowda98/byor" target="_blank" class="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
        Build Your Own Redis (BYOR) →
      </a>
      <p class="text-sm text-gray-500 my-1">2024 • Golang, Redis Protocol, Data Structures</p>
      <ul class="list-disc mx-5 my-3 space-y-2 text-gray-700">
        <li>Implemented <span class="font-semibold">production-grade Redis clone in Golang</span> supporting master-slave replication, RDB/AOF persistence, and 8+ data structures (strings, lists, sets, sorted sets, hashes)</li>
        <li>Designed custom <span class="font-semibold">RESP (Redis Serialization Protocol) parser</span> and command execution engine, handling concurrent client connections with goroutines and achieving <span class="font-semibold">sub-millisecond latency</span> for GET/SET operations</li>
      </ul>
    </div>

    <!-- AI-Powered Logistics Platform -->
    <div class="border-l-4 border-purple-500 pl-5 hover:bg-gray-50 py-3 rounded-r transition-colors">
      <h3 class="text-2xl font-bold text-gray-800">AI-Powered Logistics Automation Platform</h3>
      <p class="text-sm text-gray-500 my-1">2025 • Python, Gemini AI, Kubernetes, RabbitMQ, SQS</p>
      <ul class="list-disc mx-5 my-3 space-y-2 text-gray-700">
        <li>Developed <span class="font-semibold">WhatsApp-based logistics automation system</span> for construction materials using Python and Gemini AI to parse bill images and generate structured monthly invoices, <span class="font-semibold">reducing manual data entry by 90%</span></li>
        <li>Designed high-availability architecture using <span class="font-semibold">Amazon SQS for message buffering</span> and RabbitMQ for task distribution to on-premise Kubernetes cluster with MetalLB load balancing, ensuring <span class="font-semibold">99.9% uptime</span></li>
        <li>Implemented end-to-end observability using <span class="font-semibold">OpenTelemetry, Prometheus, and Grafana</span> for distributed tracing and performance monitoring across microservices</li>
      </ul>
    </div>

    <!-- Personal AI Assistant -->
    <div class="border-l-4 border-green-500 pl-5 hover:bg-gray-50 py-3 rounded-r transition-colors">
      <h3 class="text-2xl font-bold text-gray-800">Personal AI Assistant - Finance & Inbox Automation</h3>
      <p class="text-sm text-gray-500 my-1">2025 • n8n, PostgreSQL, LLM, Telegram Bot, Gmail API</p>
      <ul class="list-disc mx-5 my-3 space-y-2 text-gray-700">
        <li>Built automation platform using <span class="font-semibold">n8n and Telegram bot interface</span>; automated financial data pipelines loading into PostgreSQL for real-time analytics, and implemented <span class="font-semibold">LLM-based Gmail classification</span> for automatic newsletter categorization and knowledge base management</li>
      </ul>
    </div>

    <!-- Home Server Infrastructure -->
    <div class="border-l-4 border-orange-500 pl-5 hover:bg-gray-50 py-3 rounded-r transition-colors">
      <h3 class="text-2xl font-bold text-gray-800">Multi-Purpose Home Server Infrastructure</h3>
      <p class="text-sm text-gray-500 my-1">Ongoing • Kubernetes, Raspberry Pi, Cloudflare, Twingate</p>
      <ul class="list-disc mx-5 my-3 space-y-2 text-gray-700">
        <li>Designed home network infrastructure with <span class="font-semibold">Raspberry Pi</span>, Pi-hole for ad blocking, media server, and MotionEye OS for CCTV surveillance</li>
        <li>Set up personal <span class="font-semibold">Kubernetes cluster</span> and configured remote access solutions using Twingate and Cloudflare tunnels for secure external connectivity</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
