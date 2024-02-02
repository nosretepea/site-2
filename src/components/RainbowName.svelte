<div class="title">Ashley Peterson</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	.title {
		font-size: 3rem;
		@include xl {
			font-size: 4rem;
		}
		font-weight: 700;
		text-transform: lowercase;
		background: linear-gradient(
			90deg,
			var(--color-red),
			var(--color-orange),
			var(--color-yellow),
			var(--color-green),
			var(--color-blue),
			var(--color-purple),
			var(--color-pink)
		);
		background-size: 200% 200%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		animation: gradientAnimation 10s linear infinite;
		display: inline-block;
	}
</style>
