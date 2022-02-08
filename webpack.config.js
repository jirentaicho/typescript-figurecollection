const path = require('path')
module.exports = {
    mode: "development", // バンドルモード
   // mode: "production",
    entry: './src/main.ts', // 入口となるファイル
    output: {   //　バンドルしたファイルの出力先
        path: path.resolve(__dirname, 'public'), // publicフォルダ
        filename: 'bundle.js'
    },
    resolve: { //インポート時ファイル拡張子を省略します
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ["style-loader",'css-loader','sass-loader'], //後ろから適用される
                // style-loader = JS の文字列から `style` ノードを生成する。
            },
            {
                loader: 'ts-loader',
                test: /\.ts$/ ,
                exclude: /node_modules/,
            },
        ]
    },
    performance: {
        maxAssetSize: 99999999, //バンドル可能サイズを変更する
    }
}