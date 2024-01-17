import path from "path";
import type { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";


interface EnvVariables {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
	platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		html: path.resolve(__dirname, "public", "index.html"),
		output: path.resolve(__dirname, "build"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		public: path.resolve(__dirname, "public"),
		src: path.resolve(__dirname, "src")
	};

	const config = buildWebpack({
		mode: env.mode ?? "development",
		port: 7777 ?? 5555,
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? "desktop"
	});

	return config;
};