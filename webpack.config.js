module.exports = {
    entry: './lib/index.js',
    output: {
        library: 'Waziup',
        filename: 'lib/Waziup.js',
        libraryTarget:'var'
    },
	module: {
        rules: [
          {
            test: /.png$/,
            use: 'base64-image-loader'
          },
          {
            test: /.css$/,
            use: 'css-content-loader'
          }
        ]
    }
};
