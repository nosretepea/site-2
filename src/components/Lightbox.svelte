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
	$: currentImage = images[$currentPhotoIndex];
	$: currentAspectRatio = currentImage.aspectRatio;

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
	<div class="photo__container" style="aspect-ratio: {currentAspectRatio};">
		<img class="photo" src={currentImage.path} alt="in lightbox" />
	</div>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.lightbox {
		background: rgba(0, 0, 0, 0.95);
		position: fixed;
		inset: 0;
		display: flex;
		z-index: 2;
		justify-content: center;
		align-items: center;
	}

	.photo__container {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 95%;
		max-height: 95%;
	}

	.photo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
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
