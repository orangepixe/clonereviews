import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const checkin = ref('');
  const checkout = ref('');
  const nights = ref(0);
  const guests = reactive({
    adults: 1,
    children: 0,
  });


  return {
    checkin,
    checkout,
    guests,
    nights
  }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
