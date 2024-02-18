import { type Writable, writable } from 'svelte/store';
import type { ThemeValue } from '../types';

export let siteTheme: Writable<ThemeValue> = writable<ThemeValue>('light');
export let currentPhotoIndex: Writable<number> = writable<number>(0);
export let showLightbox: Writable<boolean> = writable(false);
