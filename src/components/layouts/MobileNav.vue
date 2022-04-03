<script lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  }
};
</script>

<template>
  <div
    class="w-full p-5 lg:hidden md:hidden sm:flex flex border-b-2 border-b-gray-800"
  >
    <div class="w-[95%] mx-auto flex items-center justify-between">
      <div class="font-semibold">GamePanel</div>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex justify-center w-full px-5 py-3 text-sm font-medium text-white bg-gray-800 rounded-md bg-opacity-80 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <font-awesome-icon icon="bars" />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                  ]"
                >
                  Dashboard
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                  ]"
                >
                  Servers
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                  ]"
                >
                  Users
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                  ]"
                >
                  Configurable Options
                </button>
              </MenuItem>
            </div>

            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                  ]"
                >
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
