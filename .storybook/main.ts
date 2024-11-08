import type { StorybookConfig } from '@storybook/react-webpack5';
import { debug } from 'console';
import path, { dirname, join } from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/story.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },

  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  core: {
    builder: getAbsolutePath("@storybook/builder-webpack5"),
  },
  webpackFinal: async (config) => {
    // Resolve aliases
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    };

    // Add TypeScript support
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });

    // // Add support for JSX/JS files
    config.module?.rules?.push({
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
      exclude: /node_modules/,
    });


    return config;
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return (
            /@radix-ui/.test(prop.parent.fileName) ||
            !/node_modules/.test(prop.parent.fileName) ||
            /cmdk/.test(prop.parent.fileName)
          );
        }
        return true;
      },
    },
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
