<script lang="ts" setup>
import Litepicker from 'litepicker';
import { DateTime } from 'luxon';

//import 'litepicker/dist/plugins/mobilefriendly';

import { useMainStore } from '~/stores/main';
import { OnClickOutside } from '@vueuse/components'

const store = useMainStore();
const litepicker = ref<Litepicker | null>(null);
const guestpicker = ref(false)
const guestelement = ref(null)
const checkinElement = ref()
const checkoutElement = ref()

// onClickOutside(guestpicker, event => console.log(event))

const focus = () => {
  if (litepicker.value !== null) {
    litepicker.value.show();
  }
}
function addDays(theDate: Date, days: number) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function clearDates() {
  // @ts-ignore
  litepicker.value?.clearSelection();
  store.checkin = ''
  store.checkout = ''
  store.guests.adults = 1
  store.guests.children = 0
}
onMounted(() => {
  if (!import.meta.env.SSR) {
    litepicker.value = new Litepicker({
      element: checkinElement.value,
      elementEnd: checkoutElement.value,
      numberOfMonths: 2,
      numberOfColumns: 2,
      singleMode: false,
      autoRefresh: true,
      startDate: DateTime.fromFormat(store.checkin, 'ccc, LLL d, y').toJSDate(),
      endDate: DateTime.fromFormat(store.checkout, 'ccc, LLL d, y').toJSDate(),
      format: {
        // parse function should return Date object
        // date - Date object or string (perhaps there will be more types, need to check)
        parse(date: Date) {
          if (date instanceof Date) {
            return date;
          }
          if (typeof date === 'string') {
            return DateTime.fromFormat(date, 'ccc, LLL d, y').toJSDate();
          }
          if (typeof date === 'number') {
            return new Date(date);
          }
          return new Date();
        },
        output(date: Date) {
          return DateTime.fromJSDate(date)
            .toFormat('ccc, LLL d, y');
        }
      },
      //selectForward: true,
      //resetButton: true,
      plugins: ['mobilefriendly'],
      minDate: addDays(new Date(), 3),
      minDays: 4,
      tooltipNumber: (nights: number) => (nights - 1),
      tooltipText: {
        one: 'night',
        other: 'nights'
      },
      setup: (picker: Litepicker) => {
        // @ts-ignore -- Dumb error
        picker.on('selected', (date1: any, date2: any) => {
          store.checkin = DateTime.fromJSDate(date1.dateInstance).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
          store.checkout = DateTime.fromJSDate(date2.dateInstance).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

          console.log('dates selected, start loader')
        });
      }
    });
  }
})
</script>

<template>
  <div class="buttons mb-5">
    <div class="grid grid-cols-3 gap-3">
      <button class="cursor-pointer w-full rounded-md border-[1.5px] border-gray-300 focus:border-black text-left px-2 h-[50px]" @click="focus">
        <div class="flex items-center ">
          <div class="me-2">
            <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb icjEL">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.007 2.75a.75.75 0 0 1 .748.752l-.002.748h2.512V3.5a.75.75 0 0 1 1.5 0v.75h2.472l-.002-.748a.75.75 0 1 1 1.5-.004l.002.752h4.018v17H3.245v-17h4.008l.002-.752a.75.75 0 0 1 .752-.748m-.758 3H4.745v14h14.51v-14h-2.513l.006 1.747-1.5.005-.006-1.752h-2.477V7.5h-1.5V5.75H8.749l-.004 1.752-1.5-.004zm-.004 6h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z">
              </path>
            </svg>
          </div>
          <div class="relative label-floating w-full cursor-pointer">
            <input v-model="store.checkin" class="cursor-pointer outline-none py-2 w-full font-semibold" type="text"
              placeholder="Check In" ref="checkinElement" id="date-start">
            <label class="cursor-pointer absolute block top-0 right-0 w-full py-2" for="date-start">
              Check In
            </label>
          </div>
        </div>
      </button>
      <button
        class="cursor-pointer w-full rounded-md border-[1.5px] border-gray-300 focus:border-black text-left px-2 h-[50px]">
        <div class="flex items-center">
          <div class="me-2">
            <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb icjEL">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.007 2.75a.75.75 0 0 1 .748.752l-.002.748h2.512V3.5a.75.75 0 0 1 1.5 0v.75h2.472l-.002-.748a.75.75 0 1 1 1.5-.004l.002.752h4.018v17H3.245v-17h4.008l.002-.752a.75.75 0 0 1 .752-.748m-.758 3H4.745v14h14.51v-14h-2.513l.006 1.747-1.5.005-.006-1.752h-2.477V7.5h-1.5V5.75H8.749l-.004 1.752-1.5-.004zm-.004 6h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z">
              </path>
            </svg>
          </div>
          <div class="relative label-floating w-full cursor-pointer">
            <input v-model="store.checkout" class="cursor-pointer outline-none py-2 w-full font-semibold" type="text"
              placeholder="Check Out" ref="checkoutElement" id="date-end">
            <label class="cursor-pointer absolute block top-0 right-0 w-full py-2" for="date-end">
              Check Out
            </label>
          </div>
        </div>
      </button>

      <div class="relative">
        <button @click="guestpicker = !guestpicker"
          class="cursor-pointer w-full rounded-md border-[1.5px] border-gray-300 focus:border-black text-left px-2 h-[50px]">
          <div class="flex items-center">
            <div class="me-2">
              <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb icjEL">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.007 2.75a.75.75 0 0 1 .748.752l-.002.748h2.512V3.5a.75.75 0 0 1 1.5 0v.75h2.472l-.002-.748a.75.75 0 1 1 1.5-.004l.002.752h4.018v17H3.245v-17h4.008l.002-.752a.75.75 0 0 1 .752-.748m-.758 3H4.745v14h14.51v-14h-2.513l.006 1.747-1.5.005-.006-1.752h-2.477V7.5h-1.5V5.75H8.749l-.004 1.752-1.5-.004zm-.004 6h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z">
                </path>
              </svg>
            </div>
            <div class="relative label-floating w-full cursor-pointer">
              <input disabled
                :value="`${store.guests.adults} ${store.guests.adults === 1 ? 'adult' : 'adults'}, ${store.guests.children} ${store.guests.children === 1 ? 'child' : 'children'}`"
                class="cursor-pointer outline-none py-2 w-full font-semibold" type="text" placeholder="Guests"
                id="guests">
              <label class="cursor-pointer absolute block top-0 right-0 w-full py-2" for="guests">
                Guests
              </label>
            </div>
          </div>
        </button>

        <OnClickOutside :options="{ ignore: [/* ... */] }" class="mt-2 absolute w-[350px] z-10"
          @trigger="guestpicker ? guestpicker = !guestpicker : null">

          <div v-if="guestpicker" class="border-1 w-[350px] rounded-xl border-gray-300 bg-white" ref="guestelement">
            <div class="flex justify-end">
              <button @click="guestpicker = !guestpicker" type="button"
                class="text-3xl px-3 py-1 cursor-pointer">&times;</button>
            </div>
            <div class="p-4">
              <div class="grid grid-rows-3 gap-6">
                <div class="row-span-1 flex items-center gap-5">
                  <div class="w-1/2">
                    <span class="font-semibold">Adults</span>
                  </div>
                  <div class="flex items-center w-1/2">
                    <button type="button" :disabled="store.guests.adults === 1"
                      class="bg-black hover:bg-gray-800 rounded-full p-3 focus:ring-none focus:outline-none cursor-pointer disabled:bg-gray-300"
                      @click="store.guests.adults--">
                      <svg class="w-3 h-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1h16" />
                      </svg>
                    </button>
                    <input v-model="store.guests.adults" min="1" max="24" type="number"
                      class="bg-white border-0 h-auto text-center text-lg font-semibold focus:ring-none focus:outline-none block w-full px-3"
                      placeholder="1" />
                    <button type="button" :disabled="store.guests.adults === 24"
                      class="bg-black hover:bg-gray-800 rounded-full p-3 focus:ring-none focus:outline-none cursor-pointer disabled:bg-gray-300"
                      @click="store.guests.adults++">
                      <svg class="w-3 h-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="row-span-1 flex items-center gap-5">
                  <div class="w-1/2">
                    <span class="font-semibold">Children</span>
                  </div>
                  <div class="flex items-center w-1/2">
                    <button type="button" :disabled="store.guests.children === 0"
                      class="bg-black hover:bg-gray-800 rounded-full p-3 focus:ring-none focus:outline-none cursor-pointer disabled:bg-gray-300"
                      @click="store.guests.children--">
                      <svg class="w-3 h-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 1h16" />
                      </svg>
                    </button>
                    <input v-model="store.guests.children" min="0" max="24" type="number"
                      class="bg-white border-0 h-auto text-center text-lg font-semibold focus:ring-none focus:outline-none block w-full px-3"
                      placeholder="0" />
                    <button type="button" :disabled="store.guests.children === 12"
                      class="bg-black hover:bg-gray-800 rounded-full p-3 focus:ring-none focus:outline-none cursor-pointer disabled:bg-gray-300"
                      @click="store.guests.children++">
                      <svg class="w-3 h-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="row-span-1 flex items-center justify-start">
                  <button
                    class="text-base items-center bg-black hover:bg-gray-800 text-white cursor-pointer rounded-full px-4 py-1.5 font-semibold"
                    @click="guestpicker = !guestpicker">
                    <span>Update</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
  </div>
  <div>
    <a href="#" @click.prevent="clearDates">Clear dates</a>
    <br>
    {{ store.checkin }} - {{ store.checkout }} - {{ store.guests }}
  </div>
</template>

<style lang="css">
.label-floating input:not(:placeholder-shown) {
  padding-top: 1.2rem;
  padding-bottom: 0;
}

.label-floating input:not(:placeholder-shown)~label {
  font-size: 0.7rem;
  transition: all 0.2s ease-in-out;
}
</style>
