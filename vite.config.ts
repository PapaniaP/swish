import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// this on might be "import react from "@vitejs/plugin-react";" in your solution

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const config = {
		plugins: [react()],
		base: "/",
	};

	if (command !== "serve") {
		config.base = "/swish/";
	}

	return config;
});
