<script lang="ts">
	import { icons } from '$lib/icons';

	export let name: string;
	export let colorVar: string = '--color-text';
	export let fillColor: string = 'none';
	export let size: number = 24;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width="{size}px"
	height="{size}px"
	fill={fillColor}
	style="color: var({colorVar});"
>
	{@html icons[name]}
</svg>
