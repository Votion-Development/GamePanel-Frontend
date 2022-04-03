import type { SERVER_STATUS } from "./constants";

export interface Server {
  name: string;
  status: SERVER_STATUS;
  cpu: string;
  ram: string;
  disk: string;
}
