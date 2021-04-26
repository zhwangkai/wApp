const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: { path: '/root/Nginx/Nginx_Frontend/www', filename: 'index.bundle.js' },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: './src/assets/style/common.scss'
                        }
                    }
                ]
            },      
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-sprite-loader',
            //     include: path.resolve(__dirname, "src/assets/images/svg"),
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },

    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};
