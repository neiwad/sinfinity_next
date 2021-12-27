<template>
    <div class="border-1 border-gray-200 rounded h-[150px]">
        <div>Rewards</div>
        <div class="h-[120px] relative">
            <canvas id="rpm_chart" ref="root" height="120px" responsive></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";

const root = ref<HTMLCanvasElement>();
const props = defineProps({
    color: String
})

onMounted(() => {
    const ctx = root.value && root.value.getContext("2d");
    const labels = [65, 59, 80, 81, 56, 55, 40]
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
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
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
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