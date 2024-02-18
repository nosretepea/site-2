<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from './Icon.svelte';
	import type { ThemeValue } from '../types';
	import { siteTheme } from '../stores';

	let hoveredOverTheme: boolean = false;

	onMount(() => {
		if (browser) {
			const storedTheme = localStorage.getItem('theme');
			const themeToSet: ThemeValue =
				storedTheme && (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : 'light';

			siteTheme.set(themeToSet);
			applyTheme(themeToSet);
		}
	});

	const toggleTheme = () => {
		siteTheme.update((current) => {
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
			name={$siteTheme === 'light' ? 'moon' : 'sun'}
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
