<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { Image } from '@unpic/svelte';
	import { currentPhotoIndex, showLightbox } from '../stores';
	import Icon from './Icon.svelte';

	type Image = {
		path: string;
		width: number;
		height: number;
		aspectRatio: number;
	};

	export let images: Image[] = [];

	const handleGlobalKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'Esc':
			case 'Escape':
				closeLightbox();
				break;
			case 'ArrowLeft':
				changeSlide(-1);
				break;
			case 'ArrowRight':
				changeSlide(1);
				break;
			default:
		}
	};

	onMount(() => {
		if (browser) {
			window.addEventListener('keydown', handleGlobalKeyDown);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', handleGlobalKeyDown);
		}
	});

	const changeSlide = (direction: number): void => {
		currentPhotoIndex.update((current) => {
			const newIndex = current + direction;

			// if we're going out-of-bounds to the left of the array, go to the end instead
			if (newIndex === -1) {
				return images.length - 1;
				// if we're going out-of-bounds to the right of the array, go back to the beginning
			} else if (newIndex === images.length) {
				return 0;
			} else {
				return newIndex;
			}
		});
	};

	const closeLightbox = () => {
		showLightbox.set(false);
	};
</script>

<div class="lightbox">
	<button class="close" on:click={closeLightbox}>
		<Icon name="close" colorVar="--color-white" fillColor="currentColor" size={50} />
	</button>
	<button class="arrow left" on:click={() => changeSlide(-1)}>
		<Icon name="leftCaret" colorVar="--color-white" fillColor="currentColor" size={50} />
	</button>
	<button class="arrow right" on:click={() => changeSlide(1)}>
		<Icon name="rightCaret" colorVar="--color-white" fillColor="currentColor" size={50} />
	</button>
	<div style="margin-left: 1rem; margin-right: 1rem;">
		<!-- <Image
			src={images[$index].path}
			alt={`Photo ${index}`}
			width={images[$index].width / 5.2}
			height={images[$index].height / 5.2}
			layout="constrained"
			background="auto"
		/> -->
		<div
			style={`background-image: url(${images[$currentPhotoIndex].path}); width: ${
				images[$currentPhotoIndex].width / 5.2
			}px; height: ${
				images[$currentPhotoIndex].height / 5.2
			}px; background-size: contain; background-position: center center; background-repeat: no-repeat;`}
		/>
	</div>
</div>

<style lang="scss">
	.lightbox {
		background: rgba(0, 0, 0, 0.9);
		position: fixed;
		inset: 0;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.close {
		z-index: 3;
		position: fixed;
		top: 1%;
		left: 0;
	}

	.arrow {
		z-index: 3;
		position: fixed;
		top: 50%;

		&.left {
			left: 0;
		}

		&.right {
			right: 0;
		}
	}
</style>
