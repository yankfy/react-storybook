module.exports = {
  "stories": ["../src/**/*.stories.(tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
		"@storybook/addon-knobs",
		{ name: "@storybook/addon-docs", options: { configureJSX: true } },
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("react-docgen-typescript-loader"),
				},
			],
		});
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
}