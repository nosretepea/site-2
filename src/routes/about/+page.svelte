<script lang="ts">
	import { Image } from '@unpic/svelte';
	import image from '$lib/assets/self/ashley2.jpg';
	import Bio from '../../components/Bio.svelte';

	let showHiddenText: boolean = false;

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
			<button
				class="photo__wrapper {showHiddenText ? 'fade' : undefined}"
				on:click={handlePhotoClick}
			>
				<Image
					src={image}
					width={345}
					height={460}
					style="border-radius: 8px;"
					alt="A selfie of a woman in a rainbow-lit room."
				/>
				{#if showHiddenText}
					<p class="hidden-text">Fun fact: This selfie was taken at Planet Rose in NYC (iykyk!!)</p>
				{/if}
			</button>
		</div>
		<div class="right__container">
			<div class="content__wrapper">
				<Bio />
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
		@include lg {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}

	.container__inner {
		display: flex;
		flex-direction: row;
	}

	.title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-green);
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
		flex-direction: row;
		align-items: center;

		.content__wrapper {
			overflow-y: auto;
			max-height: 75vh;

			@include xl {
				max-width: 1000px;
			}
		}
	}

	.photo__wrapper {
		position: relative;

		&.fade > :global(img) {
			opacity: 35%;
		}
	}

	.hidden-text {
		position: absolute;
		top: 50%;
		text-align: center;
	}
</style>
