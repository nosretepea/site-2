<script lang="ts">
	import '@fontsource/dm-serif-display';
	import '@fontsource/m-plus-1p';
	import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<div class="main">
	<ThemeToggle />
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
