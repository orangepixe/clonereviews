<script lang="ts" setup>
const { y } = useWindowScroll();
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['goto'])

const show = computed(() => !props.show && y.value > 650)
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="show" class="sticky top-0 z-50 bg-white">
      <div class="border-b-1 border-gray-300">
        <div class="container mx-auto py-2 max-w-[1184px]  grid grid-cols-3 items-center">
          <div class="col-span-2 text-sm">
            <a href="#" class="flex items-center" @click.prevent>
              <svg viewBox="0 0 24 24" width="16px" height="16px" class="me-2">
                <path d="m16.6 5.65-6.4 6.4 6.4 6.3-1.4 1.4-7.8-7.7 7.8-7.8z"></path>
              </svg>
              <span class="font-semibold">Back home</span>
            </a>
          </div>
          <div class="col-span-1 flex items-center justify-end">
            <svg class="cursor-pointer me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px"
              stroke-width="1">
              <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1"></path>
              <path d="M12 14v-11"></path>
              <path d="M9 6l3 -3l3 3"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" stroke-width="1">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="border-b-1 border-gray-300 shadow-">
        <div class="container mx-auto py-3 space-y-6 max-w-[1184px]">
          <div class="grid grid-cols-4 items-center">
            <div class="col-span-1 flex gap-3 items-center">
              <p class="w-1/2 truncate text-sm font-semibold">Newly Fitted Notting Hill Gate Vacation Home</p>
              <div class="w-1/2 flex">
                <svg viewBox="0 0 24 24" width="18px" height="18px" class="d Vb UmNoP">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.345 2.095h8.56v8.57l-11.25 11.24-8.56-8.55zm.621 1.5-9.75 9.76 6.44 6.43 9.75-9.74v-6.45zm6.44 16.5v-4.25h1.5v5.75h-5.75v-1.5z">
                  </path>
                  <path
                    d="M16.655 5.845a1.48 1.48 0 0 0-1.06.44 1.51 1.51 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0 1.51 1.51 0 0 0 0-2.12 1.5 1.5 0 0 0-1.07-.44">
                  </path>
                </svg>
                <span class="text-sm font-bold">Special offer</span>
              </div>
            </div>
            <div class="col-span-2">
              <ul v-scroll-spy-active="{ class: 'custom-active' }" v-scroll-spy-link class="flex gap-3">
                <li><a>Deals</a></li>
                <li><a>About</a></li>
                <li><a>Location</a></li>
                <li><a>Reviews</a></li>
              </ul>
            </div>
            <div class="col-span-1 flex items-center justify-end">
              <div class="grid grid-rows-2 items-center me-2">
                <div class="text-[1.4rem] font-bold text-gray-800 mb-0 h-5">$200</div>
                <div class="breadcrumbs text-gray-500 h-3">
                  VillasReviews
                  <svg viewBox="0 0 24 24" width="1em" height="1em" class="inline-block" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.89 6.36h9.75v9.75h-1.5V8.92l-8.72 8.72-1.06-1.06 8.72-8.72H7.89z"></path>
                  </svg>
                </div>
              </div>
              <a href="#" @click.prevent="emit('goto', 'pricing')"
                class="
                bg-[#f2b203]
                  text-lg
                  items-center
                active:bg-[#f7d36e]
                active:border-[#f7d36e]
                hover:border-[#fdc735]
                hover:bg-[#fdc735]
                cursor-pointer rounded-full border-[1.5px] border-[#f2b203] text-center px-4 h-[40px] font-bold flex gap-2">

                <span>Check availability</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>
<style lang="css">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(0px);
  opacity: 0;
}
</style>
