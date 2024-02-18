<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import '@fontsource/dm-serif-display';
	import '@fontsource/m-plus-1p';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	import Navigation from '../components/Navigation.svelte';

	const showNavAtBottom = derived(page, ($page) => $page.url.pathname !== '/');
</script>

<div class="main">
	<ThemeToggle />
	<div class="body">
		<slot />
	</div>
	{#if $showNavAtBottom}
		<Navigation type="footer" />
	{/if}
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

	:global(p) {
		color: var(--color-text);
		margin-bottom: 0.5rem;
	}

	:global(a) {
		color: var(--color-link);

		&:hover:not(.nav-item) {
			opacity: calc(50%);
		}
	}

	:global(button) {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
	}

	:global(.lightbox > .photo__wrapper img) {
		width: 100%;
		height: auto;
		object-fit: contain;
		object-position: center;
		max-height: 80vh;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: var(--color-main);
	}

	.body {
		height: 100%;
		padding-top: 30px;
		padding-bottom: 52px;
	}
</style>
