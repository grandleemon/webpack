import path from "path";
import type { BuildMode } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";


interface EnvVariables {
	mode: BuildMode;
	port: number;
}

export default (env: EnvVariables) => {
	const isDev = env.mode === "development";

	const paths = {
		html: path.resolve(__dirname, "public", "index.html"),
		output: path.resolve(__dirname, "build"),
		entry: path.resolve(__dirname, "src", "index.tsx")
	};

	const config = buildWebpack({
		mode: env.mode ?? "development",
		port: 7777 ?? 5555,
		paths
	});

	return config;
};