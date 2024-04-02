<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
</script>

<template>
    <div v-if="store.state.currentRoute == 'b1'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 1</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you reach the waiting shed near the lavatory.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right at the waiting shed.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see stairs and walk up on the stairs.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now at Building 1.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b2'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 2</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you reach the waiting shed near the lavatory.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right at the waiting shed.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see stairs and walk up on the stairs.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue moving forward until you see a ramp.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>Now that you are at the front of the ramp, look to your left; that is Building 2.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b3'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 3</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right into the first hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the hallway, continue forward until you see a two-story building near the garden on your left. That's Building 3.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b4'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 4</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right into the first hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the hallway, continue forward until you see stairs beside a ramp.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Walk up the stairs.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now inside Building 4.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b5'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 5</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right into the first hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now inside Building 5.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b6'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 6</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right into the first hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the first hallway, proceed until you reach the first intersection between the covered court to your left and the stairs to your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>After passing through the first intersection, you'll arrive at Building 6.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b7'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 7</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Turn right into the first hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the first hallway, proceed until you reach the second intersection between the stage to your left and the stairs to your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>After passing through the second intersection, you'll arrive at Building 7.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b8'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 8</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the 4-story building.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Walk up the stairs.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now inside Building 8.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b9'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 9</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Move forward until you see the comfort room on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now inside Building 9.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b10'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 10</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the first hallway, continue until you reach the first hallway on your right.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Enter the hallway; you've arrived in Building 10.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b11'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 11</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now inside Building 11.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b12'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 12</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the first hallway, continue until you reach the second hallway on your right near the garden.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Enter the hallway; you've arrived in Building 12.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b13'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 13</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the first hallway, continue until you reach the second hallway on your right near the garden.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>Enter the hallway, continue forward until you reach a path on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>After turning left, continue forward again until you reach the building in front.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>You are now at Building 13.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b14'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 14</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the hallway, continue forward until you reach the last path on your right after passing the garden.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>After turning right, continue forward for around 5 meters.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>After moving forward, Look to your left; there are stairs; you are now at Building 14.</li>
            </div>
        </ul>
    </div>
    <div v-else-if="store.state.currentRoute == 'b15'" class="w-72">
        <div class="text-lg font-semibold text-center border-b-2">
            <p>Route to Building 15</p>
        </div>
        <ul>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>Continue forward until you see the first hallway on your left.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-left.png" alt="">
                <li>Turn left and enter the hallway.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-straight.png" alt="">
                <li>After entering the hallway, continue forward until you reach the last path on your left after passing the garden.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-12 h-12" src="../assets/arrows/arrow-right.png" alt="">
                <li>After turning right, continue forward for around 2 meters.</li>
            </div>
            <div class="flex flex-row items-center border-b-2">
                <img class="w-6 h-6 m-3" src="../assets/arrows/check.png" alt="">
                <li>After moving forward, Look to your right; you are now at building 15.</li>
            </div>
        </ul>
    </div>
</template>

