import { writable } from 'svelte/store';

export const show = writable({
  combined: true,
  r: true,
  g: true,
  b: true,
  info: true,
});
