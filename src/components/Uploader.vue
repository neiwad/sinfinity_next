<template>
    <div>
        Uploader
        <input type="file" accept=".csv" @change="fileSelected" />
    </div>
</template>

<script setup lang="ts">
import { processHistoryFile, processInfinitynodes } from '@/composables';

const fileSelected = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return
    const file = input.files[0]
    const history = await processHistoryFile(file)
    const result = processInfinitynodes(history)
    console.log(result);
}
</script>