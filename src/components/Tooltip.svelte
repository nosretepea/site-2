<script lang="ts">
	export let richTextContent: string = '';
</script>

<div class="tooltip">{@html richTextContent}</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.tooltip {
		position: absolute;
		padding: 8px;
		background-color: var(--color-main);
		color: var(--color-text);
		border-radius: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 8rem;
		@include sm {
			width: 10rem;
		}
		@include md {
			width: 14rem;
		}
		@include lg {
			width: 16rem;
		}
		font-size: 0.8rem;
	}
</style>
