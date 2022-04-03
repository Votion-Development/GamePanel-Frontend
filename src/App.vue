<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  methods: {
    sendData(evt: any) {
      console.log(evt)
    }
  }
}   
</script>

<template>

  <main class="min-h-screen pt-12 md:pt-20 px-2 md:px-0" >
    <section>
      <h3 class="appname">GamePanel</h3> <!-- TODO: Make the appname not hardcoded and make it the set name -->
      <p>Sign into your account</p>
    </section>

    <section class="bg-white max-w-lg mx-auto">
      <form class="" action="#" method="POST">
        <div>
          <label for="email">Email</label>
          <input type="text" id="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" id="password">
        </div>
        <div>
          <a href="#">Forgot your password?</a>
        </div>
        <button type="submit">Sign in</button>
      </form>
    </section>
  </main>
  
  <RouterView />
</template>
