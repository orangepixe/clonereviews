<script lang="ts" setup>
import EmagLogo from '~/assets/logos/emag.svg?url'
import {
  reviews,
} from '~/reviews'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['closeModal'])
const modal = ref()
const progress = ref()

const showmodal = computed(() => props.show)

const i = ref(0)

function startProgress() {
  if (i.value === 0) {
    i.value = 1
    let width = 1
    const id = setInterval(frame, 50)
    function frame() {
      if (width > 95) {
        window.location.href = 'https://www.emag.ro/vacanta-pofticiosilor-ema-si-eric-cresc-si-calatoresc-ioana-chicet-macoveiciuc-printesa-urbana-9786066837408/pd/DH54NJBBM/'
      }
      if (width >= 100) {
        clearInterval(id)
        i.value = 0
      }
      else {
        width++
        progress.value.style.width = `${width}%`
      }
    }
  }
}

watch(showmodal, (change) => {
  modal.value.classList.toggle('opacity-0')
  modal.value.classList.toggle('pointer-events-none')
  document.body.classList.toggle('modal-active')

  if (change === true) {
    i.value = 0
    startProgress()
  }
})

onMounted(() => {
  document.onkeydown = function (evt: KeyboardEvent): void {
    const escape = evt.key === 'Escape' || evt.keyCode === 27
    if (escape && document.body.classList.contains('modal-active')) {
      emit('closeModal')
      // modal.value.classList.toggle('opacity-0');
      // modal.value.classList.toggle('pointer-events-none');
      // document.body.classList.toggle('modal-active');
    }
  }
})
</script>

<template>
  <div
    ref="modal"
    class="z-50 modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div class="modal-overlay absolute w-full h-full bg-white opacity-95" />

    <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">
      <a
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50"
        @click.prevent="emit('closeModal')"
      >
        <svg
          class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
        (Esc)
      </a>

      <!-- Add margin if you want to see grey behind the modal -->
      <div class="modal-content container mx-auto h-auto text-left">
        <div class="flex items-center justify-center h-screen">
          <div class="min-w-sm max-w-lg">
            <div class="grid grid-cols-3 gap-3 border-y-1 border-gray-300 py-5">
              <div>
                <img src="https://s6.imgcdn.dev/YDeohw.jpg" alt="Picture" class="rounded-lg aspect-square object-cover">
              </div>
              <div class="col-span-2">
                <h1 class="text-lg font-semibold">
                  Newly Fitted Notting Hill Gate Vacation Home
                </h1>
                <div class="text-sm text-gray-600">
                  <span class="inline-block me-2">
                    <svg
                      class="inline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                    <svg
                      class="inline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                    <svg
                      class="inline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                    <svg
                      class="inline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                    <svg
                      class="inline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                      />
                    </svg>
                  </span>
                  <span class="text-sm text-gray-800 hover:underline cursor-pointer">
                    {{ reviews.length }} reviews</span>
                </div>
                <div class="text-sm font-semibold">
                  Condo/Apartment
                </div>
                <div class="text-sm">
                  <span class="text-gray-600 me-2">From</span>
                  <span class="font-semibold text-gray-900 text-2xl">$400</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 p-5">
              <div class="col-span-3 text-center">
                <h1 class="text-3xl font-bold">
                  Great choice!
                </h1>
                <h2 class="text-2xl font-semibold">
                  We’re sending you to our partner site to check availability and book...
                </h2>
                <p class="text-gray-600 text-sm">
                  All booking contracts are made directly with the property owner or manager.
                </p>
                <div class="py-4 mx-auto">
                  <div class="w-90 bg-gray-300 rounded-full h-2 inline-block">
                    <div ref="progress" class="bg-black h-2 rounded-full" style="width: 0%" />
                  </div>
                </div>
                <div>
                  <img :src="EmagLogo" alt="eMag logo" class="h-7 w-auto inline-block">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal {
  transition: opacity 0.25s ease;
}
</style>
