<script lang="ts">
export default {
  data() {
    return {
      active: "dashboard"
    };
  },
  methods: {
    setActive(section: string) {
      this.active = section;
    }
  }
};
</script>
<!-- what should i do lol, im not helping-->
<!-- idk tbh -->
<template>
  <div
    class="fixed min-h-screen w-[18rem] border-r-[.5px] border-r-gray-800 lg:flex md:flex sm:hidden hidden flex-col"
  >
    <h1 class="text-2xl text-center my-5">GamePanel</h1>
    <!-- TODO: Not hardcode the appname -->

    <div>
      <ul>
        <li
          :class="{ 'border-l-purple-400 border-l-2': active === 'dashboard' }"
          class="item_hover"
          @click="setActive('dashboard')"
        >
          <a href="#">Dashboard</a>
        </li>
        <li
          :class="{ 'border-l-purple-400 border-l-2': active === 'server' }"
          class="item_hover"
          @click="setActive('server')"
        >
          <a href="#">Servers</a>
        </li>
        <li
          class="item_hover"
          :class="{ 'border-l-purple-400 border-l-2': active === 'user' }"
          @click="setActive('user')"
        >
          <a href="#">Users</a>
        </li>
        <li
          class="item_hover"
          :class="{ 'border-l-purple-400 border-l-2': active === 'config' }"
          @click="setActive('config')"
        >
          <a href="#">Configurable Options</a>
        </li>
        <br />
        <div class="bg-gray-800 h-[.5px]" />
        <br />
        <li
          class="item_hover"
          @click="setActive('theme')"
          :class="{ 'border-l-purple-400 border-l-2': active === 'theme' }"
        >
          <a href="#">Themes</a>
        </li>
        <li
          class="item_hover"
          :class="{ 'border-l-purple-400 border-l-2': active === 'addon' }"
          @click="setActive('addon')"
        >
          <a href="#">Addons</a>
        </li>
        <li
          class="item_hover"
          :class="{ 'border-l-purple-400 border-l-2': active === 'software' }"
          @click="setActive('software')"
        >
          <a href="#">Software</a>
        </li>
      </ul>
    </div>
    <!-- <footer class="text-center">
      <a href="#">2022 • GamePanel</a>
    </footer>  (comment out after done sidebar) -->
  </div>
</template>
<style>
.item_hover {
  @apply w-full hover:bg-gray-800 cursor-pointer duration-150 p-2 ease-linear;
}
</style>
