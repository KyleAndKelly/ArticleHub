# 「ArticleHub」

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3916068/089c5c0c-aee9-0865-7922-33856501c319.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3916068/1b9d92e7-7d42-34ee-4b72-d20dea857311.png)

## 1.紹介

- Managerment System for News Article 
- ニュース、ブログなどの文章を管理するためのシステム

## 2.実行
```
git clone https://github.com/KyleAndKelly/ArticleHub.git
npm install
npm run dev
```
## 3.機能

- 認証コードに基づくログイン
-　権限の判断
- 文章内容リストのチェック（フイルター、ページネーション）
- 文章の編集
- 文章の削除
- 文章のアプロード（テクスト、写真など）

## 4.技術
- Boostrapに基づく、ペイジのタグとスタイルを作成する
- wangEditorプラグインを統合して、エデータを実装する
- 純粋なJavaScriptを使用して、CRUD業務を完了する
- Axiosを使用して、RESTful APIとやり取りする
- tokenを使って、権限の判断を行う
- Node.jsを使用してプロジェクトをモジュール化し、
- Webpackを使ってプロジェクトをビルドし、
- npmでプロジェクトをデプロイした。




