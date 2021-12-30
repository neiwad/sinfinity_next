<template>
    <canvas id="rpm_chart" ref="root"></canvas>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";

const root = ref<HTMLCanvasElement>();
import { useInfinitinodes } from '@/stores/infinitynodes';

onMounted(() => {
    const ctx = root.value && root.value.getContext("2d");

    const labels = useInfinitinodes().infinitynodes.map(_node => _node.nicename)

    const data = {
        labels: labels,
        datasets: [{
            label: 'Rewards per node',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: useInfinitinodes().infinitynodes.map(_node => _node.rewards),
        },
        ]
    };

    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
</script>