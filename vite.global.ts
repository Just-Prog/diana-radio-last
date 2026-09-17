export const devPorts = {
  web: 3077,
  worker: 3777,
} as const;

export const workerOrigin = `http://localhost:${devPorts.worker}`;
