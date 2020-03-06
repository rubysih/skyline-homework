const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./index.js",
    output: {
        //意思是在現在資料夾底下開一個 dist 資料夾
       //建一個整合後的檔案叫 bundle.js
       //__dirname 為現在資料夾
        path: path.join(__dirname, "/dist"),
        filename: 'main.js'
        // filename: 'bundle.[hash].js' //自動產生hash，防catch
    },
    module: {
        rules: [
            {
               //所有 .js結尾的檔案，都會去 load babel-loader
                test: /\.js$/,
                //排除 node_modules(通常已轉譯完)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            ,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
    // ,
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html'
    //     })
    // ]
}