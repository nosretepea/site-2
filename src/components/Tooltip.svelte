<script lang="ts">
	export let richTextContent: string = '';
</script>

<div class="tooltip">{@html richTextContent}</div>

<style lang="scss">
	@import '../styles/colors.scss';

	.tooltip {
		position: absolute;
		padding: 8px;
		background-color: $d-background;
		color: $d-text;
		border-radius: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 14rem;
	}
</style>
