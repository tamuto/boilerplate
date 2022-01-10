# boilerplate

新規プロジェクトの雛形  
infodb-cliのinitコマンドから参照される

## 関連プロジェクト

関連するプロジェクトは以下の通り  
それぞれのREADME参照のこと

* [DevEnviron](https://github.com/tamuto/devenviron)
  * dockerコンテナ、コマンドライン用のプロジェクト
  * WindowsやMacでの統一した開発環境、利用しているバージョンの統一などが主目的
* [infodb-cli](https://github.com/tamuto/infodb-cli)
  * 主にnpm補助ツールとしての位置付け
  * package.jsonのスクリプト機能拡充のためのプロジェクト
* [boilerplate](https://github.com/tamuto/boilerplate)
  * プロジェクトテンプレート
  * infodb-cliのinitコマンドにて参照されるプロジェクト

## 新規プロジェクトの始め方

作業フォルダで以下のコマンドを実行する

```
infodb-cli init <project>
```

指定したプロジェクト名のフォルダには、以下の状態のプロジェクトが作成される。

* React、Material-UIを構築するためのfrontendフォルダ
* PythonのFastAPIを使用したbackendフォルダ
* および、それら環境構築用のファイル群

### プロジェクトのセットアップ

作られたプロジェクトフォルダへ移動し、以下のコマンドを実行する

```
npm run setup
npm run build
```

* また、denvの外、wsl2またはLimaのubuntu上で以下のコマンドを実行する

```
denvp 8000:8000 npm run serve
```

ホストマシンのWebブラウザから以下のURLにアクセスすると「This is boilerplate.」と表示される

http://localhost:8000

