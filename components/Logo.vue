<script setup>
const props = defineProps({
	color: {
		default: "secondary",
		type: String,
	},
});
</script>

<template>
	<div
		class="logo"
		:class="{
			'text-secondary': props.color === 'secondary',
			'text-accent': props.color === 'accent',
		}"
	>
		Glanced
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as *;

.logo {
	@include text-size(24, 36);
}
</style>
