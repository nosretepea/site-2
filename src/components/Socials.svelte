<script lang="ts">
	import { siteTheme } from '../stores';
	import { Image } from '@unpic/svelte';
	import githubLight from '$lib/assets/social/github-light.png';
	import githubDark from '$lib/assets/social/github-dark.png';
	import linkedinLight from '$lib/assets/social/linkedin-light.png';
	import linkedinDark from '$lib/assets/social/linkedin-dark.png';
	import mailLight from '$lib/assets/social/mail-light.png';
	import mailDark from '$lib/assets/social/mail-dark.png';
</script>

<span class="social__container">
	<a class="social-link" href="mailto:nosretepea@gmail.com">
		<Image
			class="social-icon"
			src={$siteTheme === 'light' ? mailLight : mailDark}
			aspectRatio={1}
		/>
	</a>
	<a class="social-link" target="_blank" rel="noreferrer" href="https://www.github.com/nosretepea">
		<Image
			class="social-icon"
			src={$siteTheme === 'light' ? githubLight : githubDark}
			aspectRatio={1}
		/>
	</a>
	<a
		class="social-link"
		target="_blank"
		rel="noreferrer"
		href="https://www.linkedin.com/in/ashley-p-24387814a/"
	>
		<Image src={$siteTheme === 'light' ? linkedinLight : linkedinDark} aspectRatio={1} />
	</a>
</span>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.social__container {
		display: flex;
		flex-direction: row;
	}

	.social-link {
		margin-right: 0.5rem;
		@include sm {
			margin-right: 1rem;
		}

		width: 25px;
		:global(img) {
			width: 25px;
			height: 25px;
		}
		@include xs {
			width: 30px;
			:global(img) {
				width: 30px;
				height: 30px;
			}
		}
		@include sm {
			width: 40px;
			:global(img) {
				width: 40px;
				height: 40px;
			}
		}
	}
</style>
