import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import ReactRefreshTypescript from "react-refresh-typescript";
import type { BuildOptions } from "./types/types";

export const buildLoaders = ({ mode }: BuildOptions): ModuleOptions["rules"] => {
	const isDev = mode === "development";

	const cssLoaderWithModules = {
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
			},
		}
	};

	const scssLoader = {
		test: /\.s([ac])ss$/i,
		use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoaderWithModules, "sass-loader"],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: "ts-loader",
				options: {
					transpileOnly: isDev,
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypescript()].filter(Boolean)
					})
				},
			}
		],
		exclude: /node_modules/
	};

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: "asset/resource",
	};

	const svgrLoader = {
		test: /\.svg$/i,
		use: [{
			loader: "@svgr/webpack", options: {
				icon: true, svgoConfig: {
					plugins: [{
						name: "convertColors",
						params: {
							currentColor: true
						}
					}]
				}
			}
		}],
	};

	return [
		scssLoader,
		tsLoader,
		assetLoader,
		svgrLoader
	];
};