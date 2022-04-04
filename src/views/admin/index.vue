<script lang="ts">
import BetterSidebar from "@/components/layouts/BetterSidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BetterSidebar
  }
});
</script>

<template>
  <better-sidebar />
  <mobile-nav />
  <div class="lg:w-[calc(100vw - 18rem)] md:lg:w-[calc(100vw - 18rem)]">
    <router-view />
  </div>
</template>
