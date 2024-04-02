<script setup lang="ts">
import RouteLocator from './RouteLocator.vue';
import MainMap from './MainMap.vue';
import NavBar from './NavBar.vue';
import RouteLocations from './RouteLocations.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const items = [
  { value: 'classroom-buildings', label: 'Classroom Buildings', color: 'bg-blue-700' },
  { value: 'paths', label: 'Paths', color: 'bg-gray-900' },
  { value: 'roofs', label: 'Roofs', color: 'bg-red-800' },
  { value: 'canteens', label: 'Canteens', color: 'bg-green-700' },
  { value: 'faculties', label: 'Faculty Rooms', color: 'bg-violet-800' },
  { value: 'comfort-rooms', label: 'Comfort Rooms', color: 'bg-yellow-800' },
  { value: 'guard-house', label: 'Guard House', color: 'bg-fuchsia-700' },
  { value: 'library', label: 'Library', color: 'bg-yellow-300' },
  { value: 'satellite', label: 'Satellite', color: 'bg-gray-800' }
];

const imageName = ref('overall-layout');

const imagePath = computed(() => `/assets/${imageName.value}.png`);

const changeImage = (value: string) => {
  imageName.value = value;
};

const resetImage = () => {
  imageName.value = 'overall-layout';
};
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <RouteLocations />
    <div class="grid grid-flow-col">
      <div class="border-4 border-solid rounded-lg">
        <div class="text-2xl">Hover to highlight</div>
        <div class="flex justify-center">
          <div class="my-2">
            <div v-for="item in items" :key="item.value" class="flex flex-row" @mouseover="changeImage(item.value)" @mouseleave="resetImage()">
              <div class="w-3.5 h-3.5 my-1.5 mr-1" :class="item.color"></div>
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 border-4 border-solid rounded-lg ">
        <MainMap :imagePath="imagePath" />
      </div>
      <div v-if="store.state.currentRoute" class="border-4 border-solid rounded-lg">
        <RouteLocator />
      </div>
    </div>
  </div>
</template>
