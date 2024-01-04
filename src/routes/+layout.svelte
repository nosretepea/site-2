<div class="main">
	<nav class="nav">
		<a class="nav-item" href="/">home</a>
		<a class="nav-item" href="/about">about</a>
		<a class="nav-item" href="/photos">photos</a>
	</nav>

	<slot />
</div>

<style>
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
