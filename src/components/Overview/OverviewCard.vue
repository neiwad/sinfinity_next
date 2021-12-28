<template>
    <div class="border-1 border-gray-200 rounded h-[280px]">
        <div class="flex justify-between h-[100px] p-4">
            <div class="flex flex-col">
                <span>{{ title }}</span>
                <span class="text-3xl font-bold">{{ value }}</span>
            </div>
            <span>{{ progress }}%</span>
        </div>
        <div class="h-[180px] relative">
            <canvas id="rpm_chart" ref="root" height="180px" responsive></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";

const root = ref<HTMLCanvasElement>();
const props = defineProps({
    color: String,
    title: String,
    value: String,
    graphLabels: Array,
    graphValues: Array,
    progress: Number
})

onMounted(() => {
    const ctx = root.value && root.value.getContext("2d");
    const labels = props.graphLabels
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: props.graphValues,
            fill: {
                target: 'origin',
                above: `${props.color}10`,
                below: 'rgb(0, 0, 0)'
            },
            borderColor: props.color,
            tension: 0.4
        }]
    };
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    }
})

</script>