<script lang="ts">
	import { writable } from 'svelte/store';
	import { images } from '$lib/images';
	import { Image } from '@unpic/svelte';

	let photoIndex = writable(0);
</script>

<div class="container__outer">
	<h2 class="title">photos</h2>
	<div class="container__inner">
		<div class="text__container">
			<p>
				These photos were shot with the camera on whatever phone I had at the time (newest to
				oldest: Google Pixel 7 Pro, Google Pixel 5, and Samsung Galaxy S8+).
			</p>
			<p>Click on a photograph to open the slideshow view.</p>
		</div>
		<div class="photos__container">
			{#each images as image}
				<div class="photo__wrapper">
					<Image src={image} class="photo" height={300} background="auto" />
				</div>
			{/each}
		</div>
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
		flex-direction: column;
	}

	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-orange);
	}

	.text__container {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.photos__container {
		display: grid;
		overflow-y: auto;
		max-height: 60vh;
		padding-left: 1rem;
		padding-right: 1rem;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		@include sm {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		@include md {
			gap: 0.5rem;
		}
		@include lg {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		@include xl {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	.photo__wrapper {
		margin: 0.25rem;
	}

	.photo {
		background-size: cover;
		background-position: center center;
		height: 300px;
		cursor: pointer;

		// &:focus-visible {
		// 	border: 1px solid var(--color-text);
		// 	border-radius: 8px;
		// }
	}
</style>
