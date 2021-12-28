<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <OverviewCard
            color="#FF1717"
            title="Rewards per month"
            :value="`${monthlyRewards.at(-1).totalRewards}`"
            :graphLabels="monthlyRewards.map(_m => _m.niceMonth)"
            :graphValues="monthlyRewards.map(_m => _m.totalRewards)"
            :progress="calculateProgress(monthlyRewards.map(_m => _m.totalRewards))"
        />
        <OverviewCard
            color="#00FF00"
            title="Rewards"
            :value="`${monthlyRewards.at(-1).totalRewards}`"
            :graphLabels="monthlyRewards.map(_m => _m.niceMonth)"
            :graphValues="monthlyRewards.map(_m => _m.totalRewards)"
            :progress="calculateProgress(monthlyRewards.map(_m => _m.totalRewards))"
        />
    </div>
</template>

<script setup lang="ts">
import { useInfinitinodes } from '@/stores/infinitynodes';
import { computed } from 'vue';
const monthlyRewards = computed(() => useInfinitinodes().monthlyRewards)
const calculateProgress = (array) => {
    return (array.at(-1) / array.at(-2)).toFixed(2)
}
</script>