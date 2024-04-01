<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isOpen = ref(false);

const buttons = [
    { text: 'Building 1', route: 'building1' },
    { text: 'Building 2', route: 'building2' },
    { text: 'Building 3', route: 'building3' },
    { text: 'Building 4', route: 'building4' },
    { text: 'Building 5', route: 'building5' },
    { text: 'Building 6', route: 'building6' },
    { text: 'Building 7', route: 'building7' },
    { text: 'Building 8', route: 'building8' },
    { text: 'Building 9', route: 'building9' },
    { text: 'Building 10', route: 'building10' },
    { text: 'Building 11', route: 'building11' },
    { text: 'Building 12', route: 'building12' },
    { text: 'Building 13', route: 'building13' },
    { text: 'Building 14', route: 'building14' },
    { text: 'Building 15', route: 'building15' },
];

const rows = computed(() => {
    const chunks = [];
    for (let i = 0; i < buttons.length; i += 8) {
        chunks.push(buttons.slice(i, i + 8));
    }
    return chunks;
});
  
const toggle = () => {
    isOpen.value = !isOpen.value;
};

const handleButtonClick = (route: string) => {
    store.commit('setCurrentRoute', route);
    isOpen.value = !isOpen.value;
    console.log(store.state.currentRoute);
};
</script>

<template>
    <div class="w-full">
        <button
            type="button"
            class="w-full max-w-xs p-2 mx-auto text-base font-medium text-left text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="toggle"
        >
        Routes
        </button>
    <div v-show="isOpen" class="mt-2">
        <div v-for="row, rowIndex in rows" :key="rowIndex" class="flex flex-wrap justify-center mb-2">
            <button
                v-for="button in row"
                :key="button.text"
                type="button"
                class="w-full max-w-xs px-4 py-2 mx-auto my-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="
                    toggle, handleButtonClick(button.route)"
            >
            {{ button.text }}
            </button>
        </div>
    </div>
    </div>
</template>
