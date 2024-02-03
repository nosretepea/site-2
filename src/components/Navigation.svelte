<script lang="ts">
	type NavType = 'index' | 'footer';
	export let type: NavType = 'footer';
</script>

<nav class="nav {type}">
	<a class="nav-item home" href="/">home</a>
	<a class="nav-item about" href="/about">about</a>
	<a class="nav-item photos" href="/photos">photos</a>
</nav>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	@keyframes slide-up {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.nav {
		z-index: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 5rem;
		@include sm {
			margin-top: 1.5rem;
		}

		&.footer {
			position: fixed;
			bottom: 0;
			width: 100%;
			padding-top: 1rem;
			padding-bottom: 1rem;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
			animation: slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
			background: var(--color-secondary);
		}

		&.footer .nav-item {
			font-size: 1.2rem;
			line-height: 1.1rem;

			&.home {
				color: var(--color-pink);
			}

			&.about {
				color: var(--color-green);
			}

			&.photos {
				color: var(--color-orange);
			}
		}

		&.index .nav-item {
			font-size: 1.6rem;
			line-height: 1.5rem;

			&.home {
				&:hover {
					color: var(--color-pink);
				}
			}

			&.about {
				&:hover {
					color: var(--color-green);
				}
			}

			&.photos {
				&:hover {
					color: var(--color-orange);
				}
			}
		}
	}

	.nav-item {
		color: var(--color-link);
		text-decoration: none;
		border-bottom: 2px dotted;

		&:hover {
			text-decoration: underline;
			border-bottom: none;
		}

		&:not(:last-child) {
			margin-right: 2.5rem;
		}
	}
</style>
