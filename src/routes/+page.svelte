<script lang="ts">
	import CityHoverText from '../components/CityHoverText.svelte';
	import Navigation from '../components/Navigation.svelte';
	import RainbowName from '../components/RainbowName.svelte';
</script>

<div class="container">
	<div>
		<RainbowName />
		<p class="subtitle">
			software engineer, music enthusiast, cat lover, runner, long walk-taker, and coffee addict
			based in <CityHoverText />
		</p>
		<Navigation type="index" />
	</div>
</div>

<style lang="scss">
	@import '../styles/colors.scss';
	@import '../styles/breakpoints.scss';

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		text-align: center;
		padding-left: 2rem;
		padding-right: 2rem;
		@include sm {
			padding-left: 6rem;
			padding-right: 6rem;
		}
		@include md {
			padding-left: 12rem;
			padding-right: 12rem;
		}
		@include lg {
			padding-left: 18rem;
			padding-right: 18rem;
		}
		@include xl {
			padding-left: 24rem;
			padding-right: 24rem;
		}
		@include xxl {
			padding-left: 32rem;
			padding-right: 32rem;
		}
	}

	.subtitle {
		color: var(--color-text);
		font-size: 1.125rem;
		font-weight: 300;
		padding-top: 1rem;
	}
</style>
