<script>
	import '@fontsource/dm-serif-display';
	import '@fontsource/m-plus-1p';
</script>

<div class="main">
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
		line-height: 0;
	}

	:global(p, span, a) {
		font-family: 'M Plus 1p', sans-serif;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
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
