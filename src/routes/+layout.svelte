<script lang="ts">
	import '@fontsource/dm-serif-display';
	import '@fontsource/m-plus-1p';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import Icon from '../components/Icon.svelte';

	type ThemeValue = 'light' | 'dark';

	let theme: Writable<ThemeValue> = writable<ThemeValue>('light');
	let hoveredOverTheme: boolean = false;

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
	<div class="icon__container">
		<button
			class="icon"
			on:click={toggleTheme}
			on:keydown={toggleTheme}
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

	<nav class="nav">
		<a class="nav-item" href="/">home</a>
		<a class="nav-item" href="/about">about</a>
		<a class="nav-item" href="/photos">photos</a>
	</nav>

	<slot />
</div>

<style>
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'DM Serif Display', serif;
		margin: 0;
	}

	:global(p, span, a) {
		font-family: 'M Plus 1p', sans-serif;
		margin: 0;
	}

	:global(button) {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: var(--color-bg);
	}

	.icon__container {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.5rem;
		margin-right: 0.5rem;
	}

	.icon {
		cursor: pointer;
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
