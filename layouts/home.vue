<script setup></script>

<template>
	<div class="home__layout relative overflow-x-hidden bg-primary">
		<div
			class="hero__bg absolute top-0 left-2/4 -translate-x-2/4 md:-top-[6%] lg:-top-[37%]"
		>
			<img class="w-full h-full" src="@/assets/images/background.jpg" />
		</div>
		<Nav />
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.hero__bg {
	@include width(1013, 2656);
	@include height(1065, 2792);
}
</style>
