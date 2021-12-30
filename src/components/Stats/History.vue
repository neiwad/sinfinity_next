<template>
    <div class="border-1 border-gray-200 rounded h-full">
        <span class="block h-[50px] p-4 font-bold">Recent History</span>
        <ul class="overflow-y-scroll h-full">
            <li v-for="h in history.slice(0, 5)" class="h-[70px] p-4 hover:bg-light-500">
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <span>{{ h.type }}</span>
                        </div>
                        <span
                            class="text-xs text-gray-400"
                        >******{{ h.address.slice(h.address.length - 4) }}</span>
                    </div>
                    <div class="flex flex-col items-end">
                        <span
                            :class="[h.amount > 0 ? 'text-green-300' : 'text-red-300']"
                        >{{ `${h.amount > 0 ? '+' : ''}${h.amount} SIN` }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useHistory } from '@/stores/history';
import { computed } from 'vue';
const history = computed(() => useHistory().history)
</script>