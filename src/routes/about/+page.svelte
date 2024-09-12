<script lang="ts">
	import { Image } from '@unpic/svelte';
	import image from '$lib/assets/self/ashley2.jpg';
	import Bio from '../../components/Bio.svelte';
	import Socials from '../../components/Socials.svelte';

	let showHiddenText: boolean = false;
	let isLoaded: boolean = false;

	const handlePhotoClick = () => {
		showHiddenText = !showHiddenText;
	};
</script>

<svelte:head>
	<title>Ashley Peterson - about page</title>
	<meta
		name="description"
		content="This page contains a summary of Ashley's early life and education, as well as a blurb about her current company and a description of her interests and hobbies."
	/>
</svelte:head>

<div class="container__outer">
	<h2 class="title">about</h2>
	<div class="container__inner">
		<div class="left__container">
			<button class="photo__wrapper {showHiddenText ? 'fade' : ''}" on:click={handlePhotoClick}>
				<div
					class="image-placeholder"
					style="background: url({image}) no-repeat center; background-size: cover; opacity: {isLoaded
						? 0
						: 1};"
				/>
				<Image
					src={image}
					aspectRatio={0.75}
					style="border-radius: 8px;"
					alt="A selfie of a woman in a rainbow-lit room."
					on:load={() => (isLoaded = true)}
				/>
				{#if showHiddenText}
					<p class="hidden-text">Fun fact: This selfie was taken at Planet Rose in NYC (iykyk!!)</p>
				{/if}
			</button>
		</div>
		<div class="right__container">
			<div class="content__wrapper">
				<Bio />
				<div class="socials__wrapper">
					<Socials />
				</div>
			</div>
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
		height: calc(100vh - 52px);
		overflow: hidden;
		@include lg {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}

	.container__inner {
		display: flex;
		flex-direction: row;
		max-height: 100%;
	}

	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-green);
	}

	.image-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		filter: blur(10px);
		transition: opacity 0.5s ease-in-out;
	}

	.left__container {
		flex-direction: column;
		flex-shrink: 0;
		display: none;

		@include md {
			display: flex;
		}
		margin-right: 1rem;
	}

	.right__container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 148.5px;

		.content__wrapper {
			overflow-y: auto;

			font-size: 0.9rem;
			@include lg {
				font-size: 1rem;
			}

			@include xl {
				max-width: 1000px;
			}
		}
	}

	.photo__wrapper {
		position: relative;

		:global(img) {
			height: 400px;
			width: 300px;
		}

		&.fade > :global(img) {
			opacity: 35%;
		}
	}

	.hidden-text {
		position: absolute;
		top: 50%;
		text-align: center;
	}

	.socials__wrapper {
		margin-top: 2rem;
	}
</style>
