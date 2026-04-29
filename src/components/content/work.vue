<template>
    <div class="px-8">
        <!-- ZopSmart -->
        <div class="flex flex-col items-center justify-center my-6">
            <h2 class="text-2xl font-bold my-3">ZopSmart (Kroger.com)</h2>
            <div class="flex flex-row justify-start gap-5 my-6">
                <div class="bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] w-1 rounded"></div>
                <div class="max-w-2xl">
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-between">
                            <p class="text-xl font-bold">Software Development Engineer 2 (SDE-2)</p>
                            <p class="text-lg font-semibold text-gray-600">Dec 2024 - Present</p>
                        </div>
                        <div class="flex gap-2 my-3">
                            <div class="font-bold">Tech Stack:</div>
                            <div>
                                <p>Golang, Python, Kafka (Avro/CDC), PostgreSQL, Kubernetes</p>
                                <p>Databricks, PySpark, Spark SQL, Delta Lake</p>
                                <p>Azure, Harness CI/CD, GitHub Actions, Grafana</p>
                            </div>
                        </div>
                        <div class="ml-8 mt-4">
                            <ul class="list-disc space-y-2">
                                <li>Identified and resolved critical data integrity issues in Kafka event publishing pipelines processing <span class="font-semibold">1-3 million daily events</span> (20M+ during full loads) by implementing proper Avro schema encoding and validation</li>
                                <li>Co-designed Generic Event Schema with Avro nested metadata; <span class="font-semibold">reduced downstream processing overhead by 40%</span> while maintaining 100% backward compatibility</li>
                                <li>Drove 4-month cross-functional data quality initiative spanning 3 teams; <span class="font-semibold">increased data accuracy from 90-95% to 99%</span> through internal reconciliation tooling</li>
                                <li>Designed and implemented Harness CI/CD pipeline for feature environment deployments across 5-6 microservices; <span class="font-semibold">reduced environment-related bug escapes by 30%</span></li>
                                <li>Mentored 2 junior engineers through design RFCs, code reviews, and knowledge-sharing sessions on Kubernetes orchestration, Kafka streaming patterns, and Golang best practices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edgebricks -->
        <div class="flex flex-col items-center justify-center my-6">
            <h2 class="text-2xl font-bold my-3">Edgebricks</h2>
            <div class="flex flex-row justify-start gap-5 my-6">
                <div class="bg-gradient-to-b from-[#F59E0B] to-[#D97706] w-1 rounded"></div>
                <div class="max-w-2xl">
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-between">
                            <p class="text-xl font-bold">Backend Engineer</p>
                            <p class="text-lg font-semibold text-gray-600">Sep 2024 - Nov 2024</p>
                        </div>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-3">
                            <p class="text-sm italic text-gray-700">Note: Early-stage AI startup that ceased operations due to funding challenges. Delivered complete MVP within 3-month timeframe.</p>
                        </div>
                        <div class="flex gap-2 my-3">
                            <div class="font-bold">Tech Stack:</div>
                            <div>
                                <p>Python, Langchain, LlamaIndex, Docker, Ansible</p>
                                <p>Redis, RESTful APIs, Multi-tenant Architecture</p>
                            </div>
                        </div>
                        <div class="ml-8 mt-4">
                            <ul class="list-disc space-y-2">
                                <li>Built production-ready <span class="font-semibold">RAG-based LLM chatbot</span> using Langchain and LlamaIndex, enabling natural language querying over business data with high user adoption across pilot clients</li>
                                <li>Transformed monolithic chatbot application into <span class="font-semibold">multi-tenant SaaS platform</span> using Docker and Ansible automation, supporting concurrent clients with fully isolated data environments</li>
                                <li>Designed and implemented RESTful APIs with rate limiting, authentication middleware, and Redis-based caching to optimize API response times and throughput</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Insight Consultants -->
        <div class="flex flex-col items-center justify-center my-6">
            <h2 class="text-2xl font-bold my-3">Insight Consultants</h2>
            <div class="flex flex-row justify-start gap-5 my-6">
                <div class="bg-gradient-to-b from-[#10B981] to-[#059669] w-1 rounded"></div>
                <div class="max-w-2xl">
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-between">
                            <p class="text-xl font-bold">Python Developer</p>
                            <p class="text-lg font-semibold text-gray-600">Mar 2022 - Sep 2024</p>
                        </div>
                        <div class="flex gap-2 my-3">
                            <div class="font-bold">Tech Stack:</div>
                            <div>
                                <p>Python, FastAPI, Selenium, Azure OCR</p>
                                <p>PostgreSQL, Docker, Nginx, Azure DevOps</p>
                                <p>Facial Recognition APIs, Document Processing</p>
                            </div>
                        </div>
                        <div class="ml-8 mt-4">
                            <ul class="list-disc space-y-2">
                                <li>Designed and built <span class="font-semibold">loan underwriting automation system</span> using Python, Selenium, and third-party OCR providers; <span class="font-semibold">reduced per-application verification time from 10+ minutes to under 1 minute</span></li>
                                <li>Architected and deployed RESTful identity verification service using FastAPI, integrating facial recognition and bank statement analysis APIs; achieved <span class="font-semibold">60% reduction in manual processing time</span></li>
                                <li>Engineered automated data pipelines integrating web scraping, OCR, and rule-based validation to streamline document processing workflows, handling <span class="font-semibold">100+ daily verification requests</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
