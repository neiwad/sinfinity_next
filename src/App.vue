<template>
  <div class="container mx-auto py-4">
    <Upload v-if="!nodes.length" />
    <template v-else>
      <div class="space-y-4">
        <Overview />
        <Stats />
      </div>
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
