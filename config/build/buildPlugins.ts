import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/types";

export const buildPlugins = ({ mode, paths }: BuildOptions): Configuration["plugins"] => {
	const isDev = mode === "development";
	const isProd = !isDev;

	const plugins: Configuration["plugins"] = [
		new HtmlWebpackPlugin({ template: paths.html }),
	];

	if (isDev) {
		// slow plugin
		plugins.push(new webpack.ProgressPlugin());
	}

	if (isProd) {
		plugins.push(new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}));
	}

	return plugins;
};