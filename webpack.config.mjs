import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkg from 'webpack';
import process from 'process'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const { container } = pkg;
const { ModuleFederationPlugin } = container;

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const ASSET_PATH = isProduction ? '/deepdiveinto2025/' : '';

const packageJson = await import('./package.json', {
  with: { type: "json" },
})

export default {
  entry: './src/main.tsx',  // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: ASSET_PATH,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|mjs)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Handle CSS files with Tailwind CSS
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  'tailwindcss',
                  'autoprefixer'
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ogm|mp4|webm|ogg|pdf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]', // Ensures all assets go into an 'assets/' folder
        },
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [
                remarkSlug,
                [
                  remarkAutolinkHeadings,
                  {
                    behavior: 'append',
                    linkProperties: {
                      className: ['anchor'],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './src/assets/united-states.svg', // This will copy the image to the output folder
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new ModuleFederationPlugin({
      name: 'deepdiveinto2025',
      remotes: {
        // Configure if needed for microfrontend
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.default.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.default.dependencies['react-dom'],
        },
      },
    }),
    new pkg.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),

  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 7000,
    historyApiFallback: true,
    open: true,
  },
  mode: 'development',
};
