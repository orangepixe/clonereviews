<script lang="ts" setup>
import EmagLogo from '~/assets/logos/emag.svg?url'
import useHelp from '~/offers'

const props = defineProps({
  btnLoading: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['openDeal'])
const price = ref(450)
const percentIncrease = (sum: number, percent: number) => (((percent / 100) * sum) + sum).toFixed()
const { offers } = useHelp()
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max">
    <div class="border-b-1 border-t-1 border-gray-300 py-4">
      <button class="grid grid-cols-4 items-center gap-5 w-full">
        <div class="col-span-1">
          <img :src="EmagLogo" alt="eMag logo" class="h-7 w-auto">
        </div>
        <div class="col-span-2 text-left text-gray-600 flex items-center gap-2 text-sm">
          <svg viewBox="0 0 24 24" width="16px" height="16px" class="d Vb UmNoP" aria-hidden="true">
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M20.03 7.265 9.5 17.795l-5.53-5.53 1.06-1.06 4.47 4.47 9.47-9.47z"
            />
          </svg>
          Earn Trip Coins after your stay
        </div>
        <div class="col-span-1 grid grid-cols-2 gap-2 items-center">
          <div class="text-right max-w-[80px]">
            <div class="text-[.85rem] text-decoration-line text-prime">
              Our offer
            </div>
            <div>
              <span class="font-semibold text-2xl">&nbsp;${{ percentIncrease(price, 0)
              }}</span>
            </div>
          </div>
          <div class="ml-auto">
            <button
              :disabled="props.btnLoading" class="disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-[#c7cbd2] disabled:cursor-not-allowed cursor-pointer w-[100px] py-2 px-3 bg-[#f2b203] text-gray-950 rounded-full font-semibold active:bg-[#f7d36e] hover:bg-[#fdc735]"
              @click="emits('openDeal')"
            >
              <span v-if="props.btnLoading === true">Loading..</span>
              <span v-else>View deal</span>
            </button>
          </div>
        </div>
      </button>
    </div>
    <div v-for="({ name, logo, offer }, index) in offers" :key="index" class="border-b-1 border-gray-300 py-4">
      <button class="grid grid-cols-4 items-center gap-5 w-full">
        <div class="col-span-1">
          <img :src="logo" :alt="name" class="h-10 w-auto">
        </div>
        <div class="col-span-2 text-left text-gray-600 flex items-center gap-2 text-sm">
          Not available at this time
        </div>
        <div class="col-span-1 grid grid-cols-2 gap-2 items-center">
          <div class="text-right max-w-[80px]">
            <div class="text-[.85rem] text-decoration-line text-red-700">
              Sold out
            </div>
            <div>
              <span class="font-semibold text-2xl line-through">&nbsp;${{ percentIncrease(price, offer)
              }}</span>
            </div>
          </div>
          <div class="ml-auto">
            <button
              class="w-[100px] py-2 px-3  rounded-full font-semibold bg-gray-300 text-gray-400 hover:bg-[#c7cbd2] cursor-not-allowed"
            >
              View deal
            </button>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
