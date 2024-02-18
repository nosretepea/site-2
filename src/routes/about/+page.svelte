<script lang="ts">
	import { Image } from '@unpic/svelte';
	import image from '$lib/assets/self/ashley2.jpg';
</script>

<div class="container__outer">
	<h2 class="title">about</h2>
	<div class="container__inner">
		<div class="left__container">
			<Image src={image} width={345} height={460} style="border-radius: 8px;" />
		</div>
		<div class="right__container">
			<div class="content__wrapper">
				<p>Hello! I'm Ashley, a software engineer currently living near Boston, MA.</p>
				<p>
					Right now, I am working at{' '}
					<a
						href="https://www.lattice.com/"
						rel="noreferrer nofollow noopener"
						target="_blank"
						class="link">Lattice</a
					>, a company with a people success platform which helps organizations develop, grow, and
					engage with their employees.
				</p>
				<p>
					I was born in Raleigh, North Carolina, but my family relocated to Henderson, Nevada, when
					I was about eight. At seventeen, I moved to St. Louis, Missouri, to attend Washington
					University in St. Louis, where I graduated with a Bachelor of Science in Computer Science
					and a Minor in Writing. A few months later, I trekked down to Austin, Texas, where I then
					lived for five and a half years.
				</p>
				<p>
					When I'm not programming, I'm usually walking or running on the various trails in and
					around Boston, meandering through the city, cooking or baking a new recipe (have recently
					gotten very into making salsa), or spending too much time on the internet. I also love
					traveling and taking photos of interesting things that I come across.
				</p>
				<p>
					Listening to music and going to concerts are other favorite activities of mine. Check out
					what I've been vibing with lately on
					<a
						href="https://last.fm/user/oceanseacrest"
						rel="noreferrer nofollow noopener"
						target="_blank"
						class="link">Last.fm</a
					>.
				</p>
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
</style>
