import type { Configuration } from "webpack-dev-server";
import type { BuildOptions } from "./types/types";


export const buildDevServer = (options: BuildOptions): Configuration => {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true
	};
};