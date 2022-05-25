const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ruleCSS = {
    test: /\.css$/i,
    use: [ 'style-loader' , 'css-loader']
}

const ruleImg = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'static/assets/[hash][ext][query]'
    }
}

const ruleBabel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options:{
            presets: [
                '@babel/preset-env',
                [
                    '@babel/preset-react',
                    {
                        runtime: 'automatic'
                    }
                ]
            ]
        }
    }

}

module.exports = (env, {mode}) => {
    
    if(mode === 'development'){
        return {
            mode:'development',
            entry: './src/index.js',
            devtool: 'inline-source-map',
            devServer: {
                open: true,
                port: 5000,
                watchFiles: ['src/**/*.css', 'public/**/*'],
                client: {
                    overlay: true
                },
                historyApiFallback: true,
            },
            module:{
                rules: [
                    ruleCSS,
                    ruleImg,
                    ruleBabel
                ]
            },
            resolve: {
                fallback: {
                    "fs": false,
                    path: require.resolve( 'path-browserify' ),
                },
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'App',
                    minify: false,
                    template: './public/index.html'
                }),
                new MiniCssExtractPlugin({
                    filename: 'main.css'
                })
            ]
        }
    }

    if( mode === 'production' ){
        return {
            mode:'production',
            entry: './src/index.js',
            output: {
                filename: 'static/js/main.[contenthash].js',
                path: path.resolve(__dirname, 'build'),
                clean: true,
                publicPath: '/'
            },
            module:{
                rules: [
                    ruleCSS,
                    ruleImg,
                    ruleBabel
                ]
            },
            resolve: {
                fallback: {
                    "fs": false,
                    path: require.resolve( 'path-browserify' ),
                },
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'App',
                    minify: false,
                    template: './public/index.html'
                }),
                new MiniCssExtractPlugin({
                    filename: 'static/css/main.[contenthash].css'
                })
            ]
        }
    }
}