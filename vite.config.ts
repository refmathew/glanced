export default defineAppConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/styles/abstract";',
			},
		},
	},
});
