<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import Icon from './Icon.svelte';

	type ThemeValue = 'light' | 'dark';

	let hoveredOverTheme: boolean = false;
	let theme: Writable<ThemeValue> = writable<ThemeValue>('light');

	onMount(() => {
		if (browser) {
			const storedTheme = localStorage.getItem('theme');
			const themeToSet: ThemeValue =
				storedTheme && (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : 'light';

			theme.set(themeToSet);
			applyTheme(themeToSet);
		}
	});

	const toggleTheme = () => {
		theme.update((current) => {
			const newTheme: ThemeValue = current === 'dark' ? 'light' : 'dark';
			applyTheme(newTheme);
			return newTheme;
		});
	};

	const applyTheme = (currentTheme: ThemeValue) => {
		document.body.className = currentTheme + '-theme';
		localStorage.setItem('theme', currentTheme);
	};
</script>

<div class="theme-toggle__container">
	<button
		class="theme-toggle"
		on:click={toggleTheme}
		on:mouseenter={() => (hoveredOverTheme = true)}
		on:mouseleave={() => (hoveredOverTheme = false)}
	>
		<Icon
			name={$theme === 'light' ? 'moon' : 'sun'}
			fillColor={hoveredOverTheme ? 'currentColor' : 'none'}
			size={30}
		/>
	</button>
</div>

<style lang="scss">
	.theme-toggle__container {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.5rem;
		margin-right: 0.5rem;
	}

	.theme-toggle {
		display: flex;
		cursor: pointer;
	}
</style>
