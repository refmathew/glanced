<script setup>
const props = defineProps({
	textContent: { type: String },
	isUppercase: { type: Boolean },
});
</script>

<template>
	<div class="flex justify-end">
		<NuxtLink
			class="cta px-[4rem] py-[1.6rem] bg-accent-1 rounded-[5rem] tracking-[.128rem]"
			:class="{ uppercase: isUppercase, capitalize: !isUppercase }"
			to="/contact"
			>{{ textContent }}</NuxtLink
		>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.cta {
	@include text-size(14, 16);
}
</style>
