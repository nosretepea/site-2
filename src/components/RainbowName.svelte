<h1 class="rainbow">Ashley Peterson</h1>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: -200% 50%;
		}
	}

	.rainbow {
		font-size: 3rem;
		@include xl {
			font-size: 4rem;
		}
		font-weight: 700;
		text-transform: lowercase;
		display: inline-block;
		background: linear-gradient(
			90deg,
			var(--color-red),
			var(--color-orange),
			var(--color-yellow),
			var(--color-green),
			var(--color-blue),
			var(--color-purple),
			var(--color-pink),
			var(--color-red),
			var(--color-orange),
			var(--color-yellow),
			var(--color-green),
			var(--color-blue),
			var(--color-purple),
			var(--color-pink)
		);
		background-size: 400% 200%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		animation: gradientAnimation 10s linear infinite;
	}
</style>
