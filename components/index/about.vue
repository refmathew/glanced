<script setup></script>

<template>
	<div class="about__wrapper section-wrapper">
		<section class="about section">
			<div
				class="about__main leading-normal w-[100%] md:w-[60%] lg:w-[71%] font-normal"
			>
				Glanced is a one-man agency specialized in web design and development
				services, collaborating with business to bring impactful visions to
				life. With a focus on world-class websites and cutting-edge technology,
				we craft digital experiences that leave a meaningful impact.
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.about {
	@include padding-3(86, 86, 18, 109, 96, 128);

	@include for-size(tablet) {
		@include padding-on(top, 75, 75);
	}

	@include for-size(tablet) {
		@include padding-on(top, 64, 64);
	}

	&__wrapper {
	}

	&__main {
		@include text-size(24, 40);
	}
}
</style>
