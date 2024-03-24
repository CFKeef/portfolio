import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
	presets: [presetUno(), presetIcons()],
	theme: {
		colors: {
			background: "hsl(249 51% 15%)",
			foreground: "hsl(0 0% 88%)",
			primary: {
				DEFAULT: "hsl(210 40% 98%)",
				foreground: "hsl(0 0% 88%)",
			},
			brand: {
				yellow: "#ffcb6b",
			},
		},
	},
});
