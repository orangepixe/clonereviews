<script lang="ts" setup>
import ghostUser from "~/assets/images/ghost-user.svg?url"
</script>

<template>
  <!-- Top Header -->
  <header class="bg-white shadow-md m-auto max-w-[1184px]">
    <div class="container mx-auto flex items-center justify-between py-2">
      <!-- Logo -->
      <div class="flex-1 flex items-center space-x-4">
        <div class="text-2xl font-bold text-prime">Logo</div>
        <!-- Searchbar -->
        <div class="flex-1 px-5">
          <div class="relative">
            <input type="text" placeholder="Search"
              class="border border-gray-300 w-full rounded-full px-10 py-2 focus:outline-none focus:ring focus:ring-green-200">
            <div class="absolute inset-y-0 left-0 pl-3
              flex items-center
              pointer-events-none">
              <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Links and User -->
      <div class="flex items-center">
        <a href="#"
          class="text-base font-semibold me-2 items-center cursor-pointer active:bg-gray-300 rounded-full px-3 py-2">Discover</a>
        <a href="#"
          class="text-base font-semibold me-2 items-center cursor-pointer active:bg-gray-300 rounded-full px-3 py-2">Trips</a>
        <a href="#"
          class="text-base font-semibold me-2 items-center cursor-pointer active:bg-gray-300 rounded-full px-3 py-2">Review</a>
        <!-- Locale & Currency -->
        <div class="flex me-2">
          <button class="w-full grid grid-cols-3 items-center cursor-pointer active:bg-gray-300 rounded-full px-4 py-2">
            <div class="max-w-20px">
              <svg viewBox="0 0 24 24" width="20px" height="20px" class="inline-block">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.31 9.82h4.178c-.069-1.591-.356-2.993-.766-4.017-.237-.593-.501-1.023-.756-1.293-.211-.223-.38-.3-.5-.32h-.133c-.12.02-.289.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017m-.374-5.14q-.135.272-.252.566C8.194 6.472 7.88 8.07 7.81 9.82H5.055a6.39 6.39 0 0 1 3.88-5.14m2.301-1.989a7.883 7.883 0 0 0-7.726 7.88 7.88 7.88 0 0 0 7.884 7.885c.584 0 .871-.014 1.11-.074.124-.031.172-.049.213-.064.058-.02.099-.036.312-.073l-.26-1.477a4 4 0 0 0-.628.159c-.031.007-.132.029-.743.029-.121 0-.313-.06-.566-.327-.255-.27-.519-.699-.756-1.292-.41-1.025-.697-2.426-.767-4.017h4.203a4.7 4.7 0 0 1-.113.843 6 6 0 0 1-.112.413l-.012.04-.004.016c-.034.114-.089.298-.1.478l1.498.088v.006s.007-.035.044-.161l.012-.04c.038-.126.09-.298.136-.505.072-.313.134-.698.152-1.178h2.734a4.2 4.2 0 0 1-.195.949c-.055.16-.11.28-.166.403l-.004.01-.01.02c-.046.101-.132.288-.161.486l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.216-.529.168-.49.31-1.168.31-2.186a7.88 7.88 0 0 0-7.72-7.879 2 2 0 0 0-.325 0m2.626 1.99q.134.271.252.565c.49 1.226.805 2.824.875 4.574h2.75a6.38 6.38 0 0 0-3.877-5.14M8.94 16.466a8 8 0 0 1-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.055a6.39 6.39 0 0 0 3.885 5.147">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.489 12.343h-8.75v6.648h5.255l3.495 2.325zm-1.5 1.5v4.674l-1.542-1.026H13.24v-3.648z"></path>
              </svg>
            </div>
            <div class="mx-1 text-gray-300">
              |
            </div>
            <div class="text-base font-semibold max-w-30px">
              EUR
            </div>
          </button>
        </div>
        <!-- User Avatar -->
        <button class="w-10 h-10 bg-gray-300 rounded-full active:bg-gray-350 cursor-pointer">
          <img :src="ghostUser" alt="Ghost user" class="w-10 h-10 rounded-full">
        </button>
      </div>
    </div>
  </header>
</template>
