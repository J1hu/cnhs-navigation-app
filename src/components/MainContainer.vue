<script setup lang="ts">
import MainMap from './MainMap.vue';
import RouteLocator from './RouteLocator.vue';
</script>

<template>
    <div class="grid grid-flow-col">
        <div class="m-1 border-4 border-solid rounded-lg">
            <div class="text-2xl">Hover to highlight</div>
            <div class="flex justify-center">
                <div class="my-2">
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-blue-700"></div>Classroom Buildings</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-gray-900"></div>Paths</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-red-800"></div>Roofs</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-green-700"></div>Canteens</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-violet-800"></div>Faculty Rooms</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-yellow-800"></div>Comfort Rooms</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-fuchsia-700"></div>Guard House</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-yellow-300"></div>Library</div>
                    <div class="flex flex-row"><div class="w-3.5 h-3.5 my-1.5 mr-1 bg-green-400"></div>Walls</div>
                </div>
            </div>
        </div>
        <div class="col-span-3 m-1 border-4 border-solid rounded-lg">
            <MainMap />
        </div>
        <div class="m-1 border-4 border-solid rounded-lg">
            <RouteLocator />
        </div>
    </div>
</template>