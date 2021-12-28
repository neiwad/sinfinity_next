<template>
  <div class="container mx-auto">
    <Upload v-if="!nodes.length" />
    <template v-else>
      <Overview />
      <RewardsPerNode />
      ROI {{ useInfinitinodes().globalRoi }}
    </template>
  </div>
</template>

<script setup lang="ts">
import Upload from '@/views/Upload.vue'
import { useInfinitinodes } from '@/stores/infinitynodes';
import { computed } from 'vue';

const nodes = computed(() => {
  return useInfinitinodes().nodes
})
</script>
