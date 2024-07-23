const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: '/src/index',
  experiments: { outputModule: true },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'OneCX custom auth',
      filename: 'remoteEntry.js',
      exposes: {
        './CustomAuth': './libs/my-custom-auth/src/lib/my-custom-auth-service.ts',
      },
      library: {
        type: 'module',
      },
    }),
  ],
};
