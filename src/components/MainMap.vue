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
    <div class="">
        <img @mouseover="hover" :src="props.imagePath" alt="cnhs_map">
    </div>
</template>

<style scoped>
.image-size {
    height: 770px;
    margin: 0;
}
</style>