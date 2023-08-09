<script setup>
definePageMeta({
	layout: "home",
});

useState("work", () => {
	return [
		{
			name: "Daniel Scanlon Portfolio",
			services: ["Web design", "Web development"],
			description:
				"A web development portfolio of my previous client. The client wanted a flashy website with a lot of animations but remain conventional with the layout so as to not confuse his target market.",
		},
	];
});
</script>

<template>
	<div class="section__wrapper relative z-2">
		<IndexHero />
		<IndexAbout />
	</div>
</template>
