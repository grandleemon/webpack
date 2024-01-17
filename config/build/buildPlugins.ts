import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = ({ mode, paths, analyzer, platform }: BuildOptions): Configuration["plugins"] => {
	const isDev = mode === "development";
	const isProd = !isDev;

	const plugins: Configuration["plugins"] = [
		new HtmlWebpackPlugin({ template: paths.html }),
		new webpack.DefinePlugin({
			__PLATFORM__: JSON.stringify(platform),
			__ENV__: JSON.stringify(mode)
		})
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

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
};