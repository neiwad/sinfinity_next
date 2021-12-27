<template>
  <div class="container mx-auto">
    <Upload v-if="!nodes.length" />
    <template v-else>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatCard color="#FF0000" />
        <StatCard color="#00FF00" />
      </div>
      <RewardsPerNode />
      ROI {{ useInfinitinodes().globalRoi }}
    </template>
  </div>
</template>

<script setup lang="ts">
import Upload from '@/views/Upload.vue'
import { useInfinitinodes } from '@/stores/infinitynodes';
import { computed } from 'vue';
import StatCard from './components/stats/StatCard.vue';

const nodes = computed(() => {
  return useInfinitinodes().nodes
})
</script>
