import { writable } from "svelte/store";

export const direction = writable<"LEFT" | "RIGHT">("LEFT");