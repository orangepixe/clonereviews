<script lang="ts" setup>
import { reviews, reviews_summary, mentions, percentage, percent } from '~/reviews'
import { useIntersectionObserver } from '@vueuse/core'

const el = ref(null);
const pricing = ref(null);
const elvisible = ref(true)
const guests = reactive({
  adults: 1,
  children: 0,
})

useIntersectionObserver(el, ([entry]) => {
  elvisible.value = entry?.isIntersecting || false
});

const revsum = ref<any>(null);
const images = reactive([
  "https://s6.imgcdn.dev/YDeohw.jpg",
  "https://s6.imgcdn.dev/YDe8Wa.jpg",
  "https://s6.imgcdn.dev/YDepKt.jpg",
  "https://s6.imgcdn.dev/YDmDZT.jpg",
  "https://s6.imgcdn.dev/YDmji9.jpg",
  "https://s6.imgcdn.dev/YDmY8D.jpg",
  "https://s6.imgcdn.dev/YDmwry.jpg",
  "https://s6.imgcdn.dev/YDm6m8.jpg",
  "https://s6.imgcdn.dev/YDmcu2.jpg",
  "https://s6.imgcdn.dev/YDmu1i.jpg",
  "https://s6.imgcdn.dev/YDm4WH.jpg",
  "https://s6.imgcdn.dev/YDmIhS.jpg",
  "https://s6.imgcdn.dev/YDmNPC.jpg",
  "https://s6.imgcdn.dev/YDmQZe.jpg",
  "https://s6.imgcdn.dev/YDmi80.jpg",
  "https://s6.imgcdn.dev/YDmnkM.jpg",
  "https://s6.imgcdn.dev/YDmsrd.jpg",
  "https://s6.imgcdn.dev/YDmyql.jpg",
  "https://s6.imgcdn.dev/YDmK4h.jpg"
]);


const goto = (elem: string) => {
  const element = eval(elem).value;
  console.log(element)
  window.scrollTo(0, element.offsetTop);
}
const deals = reactive([
  {

  }
])


</script>
<template>
  <HeaderComponent />
  <NavComponent />
  <BreadcrumbsComponent />
  <!-- Main Content -->
  <main id="main">
    <form class="container mx-auto py-6 space-y-6 max-w-[1184px]">

    </form>
    <!-- Title and Ratings Section -->
    <section class="container mx-auto py-6 space-y-6 max-w-[1184px]" ref="el">
      <div class="flex items-center justify-left gap-2 mb-4">
        <h1 class="text-3xl font-extrabold text-gray-800">Newly Fitted Notting Hill Gate Vacation Home</h1>
        <svg viewBox="0 0 24 24" width="16px" height="16px" class="inline-block">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="m14.232 4.13-2.603-2.134L9.037 4.13l-3.358-.195-.848 3.253L2 8.987l1.227 3.142L2 15.26l2.832 1.813.849 3.244 3.357-.195 2.592 2.133 2.603-2.133 3.358.195.849-3.244 2.832-1.812-1.227-3.13 1.227-3.143-2.833-1.8-.847-3.253zm-3.62 11.833 5.195-5.196-1.414-1.414-3.784 3.784-1.753-1.745-1.412 1.417z">
          </path>
        </svg>
        <div class="flex-1">
          <div class="flex justify-end items-center gap-3">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"
              stroke-width="1">
              <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1"></path>
              <path d="M12 14v-11"></path>
              <path d="M9 6l3 -3l3 3"></path>
            </svg>
            <div>
              <button
                class="
                  text-lg
                  items-center
                hover:bg-black
                hover:text-white
                cursor-pointer w-full rounded-full border-[1.5px] border-border-black focus:border-black text-left px-3 h-[38px] font-bold flex gap-2">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1">
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-start gap-2 mb-2">
        <svg class="text-prime fill-prime" viewBox="0 0 128 24" width="88" height="16" aria-labelledby=":lithium-r73:">
          <title id=":lithium-r73:">5.0 of 5 bubbles</title>
          <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path>
          <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(26 0)"></path>
          <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(52 0)"></path>
          <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(78 0)"></path>
          <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
            transform="translate(104 0)"></path>
        </svg>
        <span class="text-base text-gray-800 hover:underline cursor-pointer">{{ reviews.length }} reviews</span>
        <div class="flex items-center ms-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" width="20" height="20" stroke-width="1">
            <path d="M21 3l-5 9h5l-6.891 7.086a6.5 6.5 0 1 1 -8.855 -9.506l7.746 -6.58l-1 5l9 -5z"></path>
            <path d="M9.5 14.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
          </svg>
          <span class="text-sm ms-1 hover:underline cursor-pointer"><strong>NEW</strong> AI Reviews Summary</span>
        </div>
        <span class="text-base ms-6">
          #6 of 1,161 hotels in London
        </span>
      </div>

      <div class="flex items-center justify-start text-base gap-2 mb-0">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" width="20" height="20" stroke-width="1">
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
        </span>
        <span class="text-base text-gray-800 hover:underline cursor-pointer">
          Lancaster Terrace, London W2 2TY England
        </span>
      </div>
      <div class="flex items-center justify-start text-base gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" width="20" height="20" stroke-width="1.5">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M3.6 9h16.8"></path>
          <path d="M3.6 15h16.8"></path>
          <path d="M11.5 3a17 17 0 0 0 0 18"></path>
          <path d="M12.5 3a17 17 0 0 1 0 18"></path>
        </svg>
        <span class="text-[1.1rem] text-gray-800 hover:underline cursor-pointer">
          <strong>Visit hotel website</strong>
        </span>
        <div class="flex-1">
          <div class="flex justify-end items-center gap-3">
            <div class="grid grid-rows-2 items-center">
              <div class="text-2xl font-bold text-gray-800 mb-0 h-6">$200</div>
              <div class="breadcrumbs text-gray-500 h-4">
                VillasReviews
                <svg viewBox="0 0 24 24" width="1em" height="1em" class="inline-block" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.89 6.36h9.75v9.75h-1.5V8.92l-8.72 8.72-1.06-1.06 8.72-8.72H7.89z"></path>
                </svg>
              </div>
            </div>
            <div>
              <button @click="goto('pricing')"
                class="
                    bg-[#f2b203]
                      text-lg
                      items-center
                    active:bg-[#f7d36e]
                    active:border-[#f7d36e]
                    hover:border-[#fdc735]
                    hover:bg-[#fdc735]
                    cursor-pointer w-full rounded-full border-[1.5px] border-[#f2b203] text-center px-4 h-[40px] font-bold flex gap-2">
                <span>Check availability</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ScrollSpy :show="elvisible" @goto="goto" />
    <section class="container mx-auto max-w-[1184px]">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <div class="h-[500px] relative">
            <div class="grid grid-cols-3 cols-4 h-[500px] hover:brightness-105">
              <div class="col-span-2 h-[500px]">
                <img :src="images[0]" alt="Main Image" class="h-[500px] w-full object-cover pe-1 rounded-l-xl">
              </div>
              <div class="grid grid-rows-3 h-[500px] gap-1">
                <div class="col">
                  <img :src="images[1]" alt="Main Image"
                    class="h-full w-full object-cover hover:brightness-105 rounded-tr-xl">
                </div>
                <div class="col">
                  <img :src="images[2]" alt="Main Image" class="h-full w-full object-cover hover:brightness-105">
                </div>
                <div class="col">
                  <img :src="images[3]" alt="Main Image"
                    class="h-full w-full object-cover hover:brightness-105 rounded-br-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-scroll-spy="{ offset: 80 }">
      <section class="container mx-auto py-6 space-y-6 max-w-[1184px]" ref="pricing">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12" id="deals">
            <div>
              <div class="p-6 rounded-xl border border-gray-300">
                <div>
                  <h1 class="text-2xl font-bold text-gray-800 mb-6">View prices for your travel dates</h1>
                </div>
                <div class="errors hidden">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dolor iusto ducimus! Rem
                    reiciendis sed corporis suscipit vero quis eum ex consequatur doloremque, nam placeat incidunt quos
                    quas, assumenda voluptates.
                  </p>
                </div>
                <SelectDates />
                <div class="rounded-md border border-gray-300 p-4 mb-5">
                  <div>
                    <button class="flex items-center">
                      <span class="aBoAu inline-block"><svg viewBox="0 0 24 24" width="32px" height="32px"
                          class="fill-warning">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.7499 2.09473H20.3108V10.6656L9.06086 21.9048L0.5 13.3553L11.7499 2.09473ZM12.3716 3.59473L2.62152 13.3541L9.06066 19.7847L18.8108 10.0439V3.59473H12.3716Z">
                          </path>
                          <path
                            d="M15.0608 5.84473C14.8637 5.8438 14.6684 5.88224 14.4864 5.9578C14.3044 6.03335 14.1393 6.1445 14.0008 6.28473C13.7223 6.56726 13.5662 6.94802 13.5662 7.34473C13.5662 7.74143 13.7223 8.1222 14.0008 8.40473C14.2837 8.68624 14.6666 8.84427 15.0658 8.84427C15.4649 8.84427 15.8478 8.68624 16.1308 8.40473C16.4093 8.1222 16.5654 7.74143 16.5654 7.34473C16.5654 6.94802 16.4093 6.56726 16.1308 6.28473C15.9908 6.14375 15.824 6.0322 15.6402 5.95664C15.4565 5.88107 15.2595 5.84302 15.0608 5.84473Z">
                          </path>
                          <path d="M22.4788 4.0752V11.586L12 22.0752" class="stroke-warning" stroke-width="1.5"
                            fill="none"></path>
                        </svg></span>
                      <span class="flex flex-col ms-2 text-start">
                        <div class="text-sm text-warning font-semibold">Special offer</div>
                        <div class="text-lg">
                          EXCLUSIVE DEAL Only When BOOKING DIRECT on Royal Lancaster London
                        </div>
                      </span>
                    </button>
                  </div>
                </div>

                <OffersComponent />

                <br>
                <br>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto py-6 space-y-6 max-w-[1184px]">
        <div class="border-b border-gray-200">
          <nav class="flex space-x-6">
            <a href="#"
              class="py-2 text-gray-700 hover:text-green-600 border-b-2 border-transparent hover:border-green-600">Overview</a>
            <a href="#"
              class="py-2 text-gray-700 hover:text-green-600 border-b-2 border-transparent hover:border-green-600">Reviews</a>
            <a href="#"
              class="py-2 text-gray-700 hover:text-green-600 border-b-2 border-transparent hover:border-green-600">Availability</a>
            <a href="#"
              class="py-2 text-gray-700 hover:text-green-600 border-b-2 border-transparent hover:border-green-600">Map</a>
            <a href="#"
              class="py-2 text-gray-700 hover:text-green-600 border-b-2 border-transparent hover:border-green-600">Things
              to Do</a>
          </nav>
        </div>
      </section>
      <!-- Tabs Navigation -->


      <!-- Overview Section -->
      <section class="container mx-auto py-6 space-y-6 max-w-[1184px]">
        <h2 class="text-xl font-bold text-gray-800">Overview</h2>
        <p class="text-gray-600">This small family home has been recently fitted out with all the necessities...</p>
        <ul class="text-gray-600 space-y-1">
          <li>🛏️ 1 bedroom</li>
          <li>🛁 2 bathrooms</li>
          <li>👤 4 guests</li>
          <li>📏 Minimum stay varies</li>
        </ul>
      </section>

      <!-- Reviews Section -->
      <section class="container mx-auto py-6 space-y-6 max-w-[1184px]">
        <h2 class="text-2xl font-bold text-gray-800">Reviews</h2>
        <p class="text-gray-600 leading-5">
          Reviews are the subjective opinion of Tripadvisor members and not of Tripadvisor LLC. Tripadvisor performs
          checks on reviews as part of our industry-leading trust & safety standards. Read our transparency report to
          learn more.
        </p>
        {{ revsum }}
        <div class="grid grid-cols-2 py-5 gap-4" v-if="revsum !== null">
          <div class="col-span-1 border-r-1 border-gray-300 py-4 m-auto w-full flex gap-5">
            <div class="m-auto text-center px-10">
              <div class="text-6xl font-semibold">{{ revsum['rating'].toFixed(1) }}</div>
              <div class="font-bold text-lg">Excellent</div>
              <div class="py-3">
                <svg class="text-prime fill-prime inline-block" viewBox="0 0 128 24" width="88" height="16"
                  aria-labelledby=":lithium-r73:">
                  <title id=":lithium-r73:">5.0 of 5 bubbles</title>
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                    transform=""></path>
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                    transform="translate(26 0)"></path>
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                    transform="translate(52 0)"></path>
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                    transform="translate(78 0)"></path>
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                    transform="translate(104 0)"></path>
                </svg>
                <span class="ms-2">{{ reviews.length }}</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="grid grid-rows-5">
                <div class="grid grid-cols-12" v-for="(value, name, index) in revsum['averages']" :key="index">
                  <div class="col-span-4">{{ name }}</div>
                  <div class="col-span-6">
                    <div class="w-full bg-gray-300 rounded-full h-3">
                      <div class="bg-prime h-3 rounded-full" :style="`width: ${percent(value, reviews.length)}%`"></div>
                    </div>
                  </div>
                  <div class="col-span-2">{{ value }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-5 grid grid-cols-3 gap-2">
            <div v-for="(sum, index) in revsum['summary']" :key="index" class="col-span-1">
              <div>
                <strong>{{ sum['ratingLabelLocalizedString'] }}</strong>
              </div>
              <div class="grid grid-cols-12 gap-2 items-center">
                <div class="col-span-10">
                  <div class="w-full bg-gray-300 rounded-full h-3">
                    <div class="bg-prime h-3 rounded-full" :style="`width: ${percentage(sum['rating'])}%`"></div>
                  </div>
                </div>
                <div class="col-span-2">{{ sum['rating'].toFixed(1) }}</div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-4">Popular mentions</h3>

        <div class="flex flex-wrap">
          <div v-for="(mention, index) in mentions" :key="index"
            class="rounded-full border border-gray-300 py-2 px-4 font-semibold cursor-pointer me-4 mb-4 ">{{ mention }}
          </div>
        </div>

        <pre>{{ revsum }}</pre>
      </section>
    </div>


  </main>
</template>
