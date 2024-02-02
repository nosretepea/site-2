<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import '@fontsource/dm-serif-display';
	import '@fontsource/m-plus-1p';

	type ThemeValue = 'light' | 'dark';

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

<div class="main">
	<nav class="nav">
		<a class="nav-item" href="/">home</a>
		<a class="nav-item" href="/about">about</a>
		<a class="nav-item" href="/photos">photos</a>
	</nav>
	<button on:click={toggleTheme}>Toggle Theme</button>

	<slot />
</div>

<style>
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'DM Serif Display', serif;
		line-height: 0;
	}

	:global(p, span, a) {
		font-family: 'M Plus 1p', sans-serif;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: var(--color-bg);
	}

	.nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.nav-item {
		padding-right: 0.5rem;
	}
</style>
