require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { findPort } = require("dev-server-ports");

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
            server: https ? "https": "http",
            host: HOST,
            allowedHosts: devServerHostCheckDisabled ? "all" : undefined,
            port: PORT,
        },
        devtool: "source-map",
        entry: [ "./src/index.tsx" ],
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
                    use: [ "style-loader", "css-loader" ]
                },
                {
                    test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                    use: [ "url-loader" ]
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
                    use: [ "source-map-loader" ]
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
            })
        ],
        resolve: {
            extensions: [ ".tsx", ".ts", ".js", ".json" ]
        }
    });
};
