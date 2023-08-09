<script setup></script>

<template>
	<div class="nav__wrapper section__wrapper fixed z-50 h-0">
		<nav class="nav section absolute top-0 flex justify-between items-center">
			<Logo />
			<div
				class="nav__items hidden gap-[3.2rem] text-secondary lg:flex px-[3.2rem] py-[1.6rem] bg-primary/25 backdrop-blur-[1.6rem] rounded-[100px]"
			>
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/#about">About</NuxtLink>
				<NuxtLink to="/#work">Work</NuxtLink>
				<NuxtLink to="/contact">Contact</NuxtLink>
			</div>
			<div
				class="nav__menu flex flex-col justify-center items-center gap-[.4rem] w-[4.8rem] h-[4.8rem] bg-primary/24 backdrop-blur-[1.6rem] rounded-[50rem] cursor-pointer lg:hidden"
			>
				<div class="w-[2.4rem] h-[.2rem] bg-secondary" />
				<div class="w-[2.4rem] h-[.2rem] bg-secondary" />
			</div>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.nav {
	&__wrapper {
	}
	&__items {
	}
	&__menu {
		& > * {
		}
	}
}
</style>
