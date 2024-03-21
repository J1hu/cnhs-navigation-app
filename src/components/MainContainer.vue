<script setup lang="ts">
import { ref } from 'vue';
import RouteLocator from './RouteLocator.vue';

const items = ref([
  { id: 'classroom-buildings', name: 'Classroom Buildings', image: '../src/assets/classroom-buildings.png', color: 'bg-blue-700' },
  { id: 'canteens', name: 'Canteens', image: '../src/assets/canteens.png', color: 'bg-green-700' },
  { id: 'comfort-rooms', name: 'Comfort Rooms', image: '../src/assets/comfort-rooms.png', color: 'bg-yellow-800' },
  { id: 'faculties', name: 'Faculty Rooms', image: '../src/assets/faculties.png', color: 'bg-violet-800' },
  { id: 'guard-house', name: 'Guard House', image: '../src/assets/guard-house.png', color: 'bg-fuchsia-700' },
  { id: 'library', name: 'Library', image: '../src/assets/library.png', color: 'bg-yellow-300' },
  { id: 'paths', name: 'Paths', image: '../src/assets/paths.png', color: 'bg-gray-900' },
  { id: 'roofs', name: 'Roofs', image: '../src/assets/roofs.png', color: 'bg-red-800' },
  { id: 'walls', name: 'Walls', image: '../src/assets/walls.png', color: 'bg-green-400' }
]);

const currentImage = ref('../src/assets/overall-layout.png');

const changeImage = (imagePath: string) => {
  currentImage.value = imagePath;
};

const resetImage = () => {
  currentImage.value = '../src/assets/overall-layout.png';
};
</script>

<template>
    <div class="grid grid-flow-col">
        <div class="m-1 border-4 border-solid rounded-lg">
            <div class="text-2xl">Hover to highlight</div>
            <div class="flex justify-center">
                <div class="my-2">
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    :id="item.id"
                    class="flex flex-row"
                    @mouseover="changeImage(item.image)"
                    @mouseleave="resetImage()"
                  >
                    <div :class="`w-3.5 h-3.5 my-1.5 mr-1 ${item.color}`"></div>
                    {{ item.name }}
                  </div>
                </div>
            </div>
        </div>
        <div class="col-span-3 m-1 border-4 border-solid rounded-lg">
          <div>
            <img :src="currentImage" alt="Hovered Image" />
          </div>
        </div>
        <div class="m-1 border-4 border-solid rounded-lg">
            <RouteLocator />
        </div>
    </div>
</template>