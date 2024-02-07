<div class="container__outer">
	<h2 class="title">photos</h2>
	<div class="container__inner">
		<p>hii this is the photos page</p>
	</div>
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	.container__outer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		@include lg {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}

	.container__inner {
		display: flex;
		flex-direction: row;
	}

	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-orange);
	}
</style>
