<script lang="ts">
	import { currentPhotoIndex, showLightbox } from '../../stores';
	import { Image } from '@unpic/svelte';
	import { images } from '$lib/images';
	import Lightbox from '../../components/Lightbox.svelte';

	const toggleLightbox = (index: number) => {
		currentPhotoIndex.set(index);
		showLightbox.update((current) => !current);
	};
</script>

<svelte:head>
	<title>Ashley Peterson - photos page</title>
	<meta
		name="description"
		content="This page contains a gallery of photos that Ashley has taken over the years."
	/>
</svelte:head>

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
			{#each images as image, index}
				<button
					tabindex={$showLightbox ? -1 : undefined}
					class="photo__wrapper"
					on:click={() => toggleLightbox(index)}
				>
					<Image
						src={image.path}
						alt={`Photo ${index}`}
						height={300}
						width={1200}
						background="auto"
						style="border-radius: 4px;"
					/>
				</button>
			{/each}
		</div>
	</div>
</div>

{#if $showLightbox}
	<Lightbox {images} />
{/if}

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
		@include sm {
			padding-left: 1.25rem;
			padding-right: 1.25rem;
		}
	}

	.photos__container {
		display: grid;
		overflow-y: auto;
		max-height: 60vh;
		@include sm {
			padding-left: 1rem;
			padding-right: 1rem;
		}
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
		margin-bottom: 0.5rem;
		@include sm {
			margin-top: 0.25rem;
			margin-left: 0.25rem;
			margin-right: 0.25rem;
			margin-bottom: 0rem;
		}
		cursor: pointer;

		// TODO: improve focus appearance on photos
		// &:focus {
		// 	border: 1px solid var(--color-text);
		// 	border-radius: 8px;
		// }
	}
</style>
