<script lang="ts">
import { SERVER_STATUS } from "@/lib/constants";

export default {
  data() {
    return {
      SERVER_STATUS,
      servers: [
        {
          name: "hello",
          cpu: "80%",
          ram: "42069MB",
          disk: "50000MB",
          status: SERVER_STATUS.STARTING
        },
        {
          name: "server",
          cpu: "10%",
          ram: "1024MB",
          disk: "42069MB",
          status: SERVER_STATUS.RUNNING
        },
        {
          name: "world",
          cpu: "0%",
          ram: "0MB",
          disk: "6000MB",
          status: SERVER_STATUS.STOPPED
        },
        {
          name: "test",
          cpu: "5%",
          ram: "89MB",
          disk: "90000GiB",
          status: SERVER_STATUS.OFFLINE
        },
        {
          name: "free",
          cpu: "5%",
          ram: "89MB",
          disk: "69GiB",
          status: SERVER_STATUS.INSTALLING
        },
        {
          name: "pp",
          cpu: "5%",
          ram: "89MB",
          disk: "100GiB",
          status: SERVER_STATUS.STOPPED
        },
        {
          name: "stopping",
          cpu: "5%",
          ram: "89MB",
          disk: "1GiB",
          status: SERVER_STATUS.STOPPING
        },
        {
          name: "stopping",
          cpu: "5%",
          ram: "89MB",
          disk: "1GiB",
          status: SERVER_STATUS.STOPPING
        },
        {
          name: "stopping",
          cpu: "5%",
          ram: "89MB",
          disk: "1GiB",
          status: SERVER_STATUS.STOPPING
        },
        {
          name: "stopping",
          cpu: "5%",
          ram: "89MB",
          disk: "1GiB",
          status: SERVER_STATUS.STOPPING
        },
        {
          name: "stopping",
          cpu: "5%",
          ram: "89MB",
          disk: "1GiB",
          status: SERVER_STATUS.STOPPING
        }
      ]
    };
  }
};
</script>
<style>
* {
  overflow-x: hidden;
}
</style>
<template>
  <div class="grid place-items-center space-y-8 my-20 mx-10">
    <ul
      v-for="server in servers"
      :key="server.name"
      :class="{
        'border-l-gray-500': server.status === SERVER_STATUS.OFFLINE,
        'border-l-red-700': server.status === SERVER_STATUS.STOPPED,
        'border-l-lime-400': server.status === SERVER_STATUS.STARTING,
        'border-l-green-400': server.status === SERVER_STATUS.RUNNING,
        'border-l-purple-500': server.status === SERVER_STATUS.STOPPING,
        'border-l-yellow-600': server.status === SERVER_STATUS.INSTALLING
      }"
      class="border-l-4 flex items-center justify-between p-5 bg-gray-800 border-b-gray-900/10 shadow-lg rounded-md w-full border-b-2 cursor-pointer"
    >
      <div class="space-x-5">
        <font-awesome-icon icon="server" />
        <span class="font-bold text-lg">{{ server.name }}</span>
      </div>
      <div
        class="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-10 items-center"
      >
        <span>CPU: {{ server.cpu }}</span>
        <span>RAM: {{ server.ram }} /100TB</span>
        <span>DISK: {{ server.disk }} /1000TB</span>
      </div>
    </ul>
  </div>
</template>
