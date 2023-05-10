require("dotenv").config({
    path: ".env"
});
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {findPort} = require("dev-server-ports");
const webpack = require("webpack");

const HOST = process.env.HOST || "localhost";
const DEFAULT_PORT = process.env.PORT || 3000;
const devServerHostCheckDisabled =
    process.env.DISABLE_DEV_SERVER_HOST_CHECK === "true";
const https = process.env.HTTPS === "true";

module.exports = async () => {
    const PORT = await findPort(DEFAULT_PORT, HOST, false);
    return ({
        devServer: {
            static: path.resolve(__dirname, "dist"),
            historyApiFallback: true,
            server: https ? "https" : "http",
            host: HOST,
            allowedHosts: devServerHostCheckDisabled ? "all" : undefined,
            port: PORT,
        },
        devtool: "source-map",
        entry: ["./src/index.tsx"],
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader' // compiles Less to CSS
                    }]
                },
                {
                    test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                    use: ["url-loader"]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'ASGARDEO_BASE_URL': `"${process.env.ASGARDEO_BASE_URL}"`,
                    'ASGARDEO_CLIENT_ID': `"${process.env.ASGARDEO_CLIENT_ID}"`,
                    'ASGARDEO_SIGN_IN_REDIRECT_URL': `"${process.env.ASGARDEO_SIGN_IN_REDIRECT_URL}"`,
                    'ASGARDEO_SIGN_OUT_REDIRECT_URL': `"${process.env.ASGARDEO_SIGN_OUT_REDIRECT_URL}"`,
                }
            })
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".json"]
        }
    });
};
