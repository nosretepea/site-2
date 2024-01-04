<div
	style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; text-align: center;"
>
	<div class="container__outer">
		<div class="container__inner">
			<div>
				<h1 class="title">Ashley Peterson</h1>
				<p class="subtitle">
					software engineer, music enthusiast, cat lover, runner, and coffee addict based in Austin,
					TX
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/breakpoints.scss';

	.container__outer {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		justify-content: center;
	}

	.container__inner {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		text-align: center;
	}

	.title {
		color: $l-pink;
		font-size: 3rem;
		font-weight: 700;
		text-transform: lowercase;
		@include xl {
			font-size: 4rem;
		}
	}

	.subtitle {
		font-size: 1.125rem;
		font-weight: 300;
		padding-top: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		@include sm {
			padding-left: 3rem;
			padding-right: 3rem;
		}
		@include md {
			font-size: 1rem;
		}
		@include lg {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}
</style>
