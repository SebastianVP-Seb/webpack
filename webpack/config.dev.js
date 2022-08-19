const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCSSExtractPlugin=require('mini-css-extract-plugin');

/*
npm init -y

npm i webpack webpack-cli -D

npx webpack --mode development ->Devuelve los archivos con más detalles
npx webpack --mode production  ->Devulve archivos simplificados

npm i @babel/core -D @babel/plugin-transform-runtime -D @babel/preset-env -D babel-loader -D @babel/preset-react -D

npm i html-loader css-loader sass-loader file-loader

npm i html-webpack-plugin mini-css-extract-plugin   

npm i html-webpack-plugin mini-css-extract-plugin 

npm i node-sass  

npx webpack -> para ejecutar este comando se debe establecer el mode
*/

module.exports={

    //entrada
    entry: './src/index.js',
    mode: 'development',//permite que la terminal sólo se ponga: npx webpack y al ejecutar, se obtiene. 
            //development, production
    //el archivo build
    //salida de los archivos estáticos
    output: {
        path: path.resolve(__dirname, '../dist'),//genera la ruta
        filename: '[name].[contenthash].js',//nombre del archivo de salida
        clean: true,//elimina lo que se tenga en la carpeta dist y lo crea nuevamente
    },
    //extensiones que resolverá
    resolve: {
        extensions: ['.js','.jsx']
    },
    //loaders
    module: {
        rules: [
            {   //loader de Babel
                //expresión regular para las extensiones que resolverá
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: 'assets/static/images/[contenthash].[ext]'
                        options: {
                            name: 'assets/images/[contenthash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //salida del dist
            filename: './index.html',
            template: './public/index.html',//
            inject: true,
            minify: true
        }),
        new MiniCSSExtractPlugin({
            //donde queremos que se encuentre en la carpeta, este es el resultado
            filename: './assets/styles/[name].[contenthash].css'
        })
    ]
}