import { getRenderTimestamp } from "$lib/ts/timeProvider";
export const prerender = true;

export const load = (async () => {
  return {
    timestamp: getRenderTimestamp(),
  };
});