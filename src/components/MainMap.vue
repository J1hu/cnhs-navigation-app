<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const routing = computed(() => `../src/assets/routes/${store.state.currentRoute}.png`);

const props = defineProps({
    imagePath: String,
})

</script>

<template>
    <div v-if="store.state.currentRoute == ''" class="flex justify-center">
        <img class="image-size" :src="props.imagePath" alt="cnhs_map">
    </div>
    <p
            v-if="store.state.currentRoute"
            class="text-right underline"
            @click="store.commit('setCurrentRoute', '');"
        >clear selection</p>
    <div v-if="store.state.currentRoute" class="flex justify-center">
        <img class="image-size" :src="routing" alt="cnhs_map">
    </div>
</template>

<style scoped>
.image-size {
    width: 600px;
}

@media (min-width: 1000px) {
    .image-size {
        width: 700px;
    }
}

@media (min-width: 1300px) {
    .image-size {
        width: 900px;
    }
}

@media (min-width: 1500px) {
    .image-size {
        width: 1000px;
    }
}


@media (min-width: 1600px) {
    .image-size {
        width: 1200px;
    }
}
</style>