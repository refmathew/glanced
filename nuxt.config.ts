// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/styles/base/_index.scss"],
	modules: [["nuxt-purgecss", {}], "@nuxtjs/tailwindcss"],
	// build:{
	//   minifyCSS: false
	// },
	generate: {},
});
