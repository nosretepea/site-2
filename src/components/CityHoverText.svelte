<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	let showTooltip: boolean = false;

	const removeBorder = () => {
		document.getElementsByClassName('city')[0].classList.remove('border');
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			showTooltip = !showTooltip;
		}
	};
</script>

<span
	class="city border"
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

<style lang="scss">
	.city {
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
