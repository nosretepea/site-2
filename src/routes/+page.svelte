<script lang="ts">
	import CityHoverText from '../components/CityHoverText.svelte';
	import Navigation from '../components/Navigation.svelte';
	import RainbowName from '../components/RainbowName.svelte';
</script>

<div
	style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; text-align: center;"
>
	<div class="container__outer">
		<div class="container__inner">
			<div>
				<RainbowName />
				<p class="subtitle">
					software engineer, music enthusiast, cat lover, runner/long walker, and coffee addict
					based in <CityHoverText />
				</p>
				<Navigation type="index" />
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
		justify-content: center;
	}

	.container__inner {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		text-align: center;
	}

	.subtitle {
		color: var(--color-text);
		font-size: 1.125rem;
		font-weight: 300;
		padding-top: 1rem;
		padding-left: 3rem;
		padding-right: 3rem;
		@include sm {
			padding-left: 3.5rem;
			padding-right: 3.5rem;
		}
		@include md {
			padding-left: 10rem;
			padding-right: 10rem;
			font-size: 1rem;
		}
		@include lg {
			padding-left: 16rem;
			padding-right: 16rem;
		}
	}
</style>
