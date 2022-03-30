const path = require('path');

const SRC_STYLES = path.resolve(__dirname, '..', 'src');
const ANTD_STYLES = path.resolve(__dirname, '..', 'node_modules/antd');

function inlineOptions(loaders) {
    return loaders.map(({ loader, options = {} }) => {
        return loader + '?' + JSON.stringify(options);
    });
}

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, '..', './public'),
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: [SRC_STYLES, ANTD_STYLES],
                use: (info) => {
                    return inlineOptions([
                        { loader: 'style-loader' },

                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: !info.resource.includes('antd')
                                        ? '[path]-[name]__[local]'
                                        : '[local]',
                                },
                            },
                        },
                    ]);
                },
            },
        ],
    },
};
