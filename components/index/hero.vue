<script setup></script>

<template>
	<div class="hero__wrapper section__wrapper">
		<section
			class="hero section z-1 flex flex-col items-end gap-[3.2rem] md:gap-[1.6rem]"
		>
			<h1 class="hero__heading text-right">
				Expertly Tailoring Business Websites for Enhanced Online Presence
			</h1>
			<div class="hero__cta-line-down-wrapper flex flex-col items-center">
				<Cta text-content="enquire" is-uppercase />
				<div class="hero__line-down bg-secondary" />
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.hero {
	@include padding-3(256, 256, 18, 102, 0, 0);

	&__heading {
		@include width(324, 872);
		@include text-size(36, 80);
		@include leading(42, 96);
	}
	&__cta-line-down-wrapper {
		@include gap(32, 32);
	}
	&__line-down {
		@include width(1, 1);
		@include height(139, 232);
	}
}
</style>
