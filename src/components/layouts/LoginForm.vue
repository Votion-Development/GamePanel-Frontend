<script lang="ts">
export default {
  data() {
    return {
      user_email: "",
      user_password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log({ email: this.user_email, password: this.user_password });
    }
  }
};
</script>

<template>
  <div class="screen_container">
    <div class="login_container">
      <main class="login_form">
        <section>
          <h3 class="font-bold text-2xl">GamePanel</h3>
          <!-- TODO: Make the appname not hardcoded and make it the set name -->
          <p class="text-gray-600 pt-2">Sign into your account</p>
        </section>
        <section class="mt-10">
          <form
            @submit.prevent="onSubmit"
            class="flex flex-col"
            action="#"
            method="POST"
          >
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                >Email</label
              >
              <input
                v-model="user_email"
                type="email"
                id="email"
                name="email"
                class="input"
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                for="password"
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                >Password</label
              >
              <input
                v-model="user_password"
                type="password"
                name="password"
                id="password"
                class="input"
              />
            </div>
            <div class="flex justify-end">
              <a
                href="#"
                class="flex text-purple-600 hover:text-purple-700 hover:underline mb-6"
                >Forgot your password?</a
              >
            </div>
            <button
              type="submit"
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded shadow-lg hover:shadow-xl transition duration-200 active:scale-95 focus:outline-none"
            >
              Sign in
            </button>
          </form>
        </section>
      </main>

      <footer class="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" class="hover:underline">2022 • GamePanel</a>
      </footer>
    </div>
  </div>
</template>

<style>
.screen_container {
  @apply w-screen h-screen grid place-items-center;
}

.login_container {
  @apply w-full px-2 md:px-0 text-black;
}

.login_form {
  @apply bg-white max-w-xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl;
}

.input {
  @apply bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3;
}
</style>
