<script setup lang="ts">
import MainMap from './MainMap.vue';
import RouteLocator from './RouteLocator.vue';
</script>

<template>
    <div class="grid grid-flow-col m-5">
        <div class="col-span-4 m-5 border-4 border-solid rounded-lg">
            <MainMap />
        </div>
        <div class="m-5 border-4 border-solid rounded-lg">
            <RouteLocator />
        </div>
    </div>
</template>