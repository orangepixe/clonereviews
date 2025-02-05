<script lang="ts" setup>
import useHelp from '~/offers';

const { offers } = useHelp();
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max">
    <div class="border-b-1 border-gray-300 py-4">
      <button class="grid grid-cols-4 items-center gap-5 w-full">
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
      </button>
    </div>
    <div class="border-b-1 border-gray-300 py-4">
      <button class="grid grid-cols-4 items-center gap-5 w-full">
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
        <div class="w-1/4">asd</div>
      </button>
    </div>
  </div>
</template>
