<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    imagePath: String,
})

const hover = () => {
    console.log(props.imagePath);
}
</script>

<template>
    <div class="flex justify-center">
        <img class="image-size" @mouseover="hover" :src="props.imagePath" alt="cnhs_map">
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