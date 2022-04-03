import type { Server } from "@/lib/types";
import { defineStore } from "pinia";

export const useServerState = defineStore({
  id: "server",
  state: () => ({
    name: "",
    status: "",
    cpu: "",
    ram: "",
    disk: ""
  }),
  actions: {
    setServer(server: Server) {
      this.name = server.name;
      this.cpu = server.cpu;
      this.ram = server.ram;
      this.disk = server.disk;
      this.status = server.status;
    }
  }
});
