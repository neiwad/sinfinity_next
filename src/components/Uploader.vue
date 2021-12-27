<template>
    <div>
        <input ref="inputFile" type="file" accept=".csv" class="hidden" @change="fileSelected" />
        <button class="bg-red-300" @click="openInput()">Upload</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { processHistoryFile, processInfinitynodes } from '@/composables';
import { useInfinitinodes } from '@/stores/infinitynodes';

const infinitynodes = useInfinitinodes()
const inputFile = ref<HTMLInputElement>()
const openInput = () => {
    inputFile.value && inputFile.value.click()
}

const fileSelected = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return
    const file = input.files[0]
    const history = await processHistoryFile(file)
    const result = processInfinitynodes(history)
    infinitynodes.setInfinitynodes(result)
}
</script>