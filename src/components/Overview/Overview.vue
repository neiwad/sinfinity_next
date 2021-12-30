<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <OverviewCard
            color="#8a2be2"
            title="Rewards this month"
            :value="`${monthlyRewards.at(-1)!.totalRewards} SIN`"
            :graphLabels="monthlyRewards.map(_m => _m.niceMonth)"
            :graphValues="monthlyRewards.map(_m => _m.totalRewards)"
            :progress="calculateProgress(monthlyRewards.map(_m => _m.totalRewards))"
        />
        <OverviewCard
            color="#ffd700"
            title="Active nodes"
            :value="`${monthlyNodes.at(-1)!.nodes.length}`"
            :graphLabels="monthlyNodes.map(_m => _m.niceMonth)"
            :graphValues="monthlyNodes.map(_m => _m.nodes.length)"
            :progress="calculateProgress(monthlyNodes.map(_m => _m.nodes.length))"
        />
        <OverviewCard
            v-if="prices.length"
            color="#48d1cc"
            title="SIN's price"
            :value="`$${prices.at(-1)![1].toFixed(5)}`"
            :graphLabels="prices.map(_m => _m[0])"
            :graphValues="prices.map(_m => _m[1])"
            :progress="(prices.at(-1)![1] / prices[0][1]).toFixed(2)"
        />
    </div>
</template>

<script setup lang="ts">
import { useInfinitinodes } from '@/stores/infinitynodes';
import { computed, ref } from 'vue';
import { checkCoingeckoStatus, fetchSinMarket } from '@/api/coingecko';

const monthlyRewards = computed(() => useInfinitinodes().monthlyRewards)
const monthlyNodes = computed(() => useInfinitinodes().monthlyNodes)
const calculateProgress = (array: Array<number>): number => {
    return parseFloat((array.at(-1)! / array.at(-2)!).toFixed(2))
}

const prices = ref([])

const getSinPrices = async () => {
    await checkCoingeckoStatus()
    const market = await fetchSinMarket()
    prices.value = market.prices
    return
}

getSinPrices()

</script>