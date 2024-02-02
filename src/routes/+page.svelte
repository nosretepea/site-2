<script lang="ts">
	import Tooltip from '../components/Tooltip.svelte';
	let showTooltip: boolean = false;

	const removeBorder = () => {
		document.getElementsByClassName('location')[0].classList.remove('border');
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			showTooltip = !showTooltip;
		}
	};
</script>

<div
	style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; text-align: center;"
>
	<div class="container__outer">
		<div class="container__inner">
			<div>
				<h1 class="title">Ashley Peterson</h1>
				<p class="subtitle">
					software engineer, music enthusiast, cat lover, runner/long walker, and coffee addict
					based in <span
						class="location border"
						role="button"
						tabindex="0"
						on:mouseenter={() => (showTooltip = true)}
						on:mouseleave={() => (showTooltip = false)}
						on:click={removeBorder}
						on:keydown={handleKeyDown}
					>
						Boston, MA
						{#if showTooltip}
							<Tooltip richTextContent={`Okay <i>technically</i> the Boston metro area`} />
						{/if}
					</span>
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
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
		color: var(--color-pink);
		font-size: 3rem;
		font-weight: 700;
		text-transform: lowercase;
		@include xl {
			font-size: 4rem;
		}
	}

	.subtitle {
		color: var(--color-text);
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

	.location {
		position: relative;
		&:hover {
			background: #cccccc;
			color: #121212;
		}
	}

	.border {
		cursor: pointer;
		border-bottom: 1px dashed var(--color-text);
	}
</style>
