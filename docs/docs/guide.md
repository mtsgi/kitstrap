
# はじめる

kitstrapは、簡単にあなたのプロジェクトに導入できます。

## npmから <Badge text="推奨"/>

npmパッケージkitstrapをプロジェクトに追加して、kitstrapの使用を開始することができます。npm、あるいはyarnを利用することができます。 

```sh
npm i kitstrap
# or
yarn add kitstrap
```

次に、kitstrapコアのCSSファイルをインポートして、kitstrapの使用を開始します。 

```js
import "kitstrap/d/kitstrap.css";
```

## CDNから

CDNから任意のバージョンのkitstrapを選択して使用可能です。指定バージョンのkitstrapを高速にロードすることが可能です。

kitstrap-font.cssなどのモジュールも利用可能です。 

<Badge text="v0.7"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.7/kitstrap.css">
```

<Badge text="v0.6"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.6/kitstrap.css">
```

<Badge text="v0.5"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.5/kitstrap.css">
```

<Badge text="v0.4"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.4/kitstrap.css">
```

<Badge text="v0.3"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.3/kitstrap.css">
```

<Badge text="v0.2"/>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.2/kitstrap.css">
```

## ダウンロード

kitstrapの本体をダウンロードして使用を開始する場合、下のボタンからダウンロードできます。

<a href="https://github.com/mtsgi/kitstrap/archive/master.zip" target="_blank" class="kit-large kit-button-alt kit-block kit-text-c m-l limegreen">最新版をダウンロード</a>

zipファイルをプロジェクトのディレクトリに展開してください。/d以下にkitstrapの本体が入っています。docsディレクトリは削除可能です。

CSSファイルが設置できたら、次のようにlinkタグを挿入します。これだけでkitstrapを使用する準備は完了です。正しくCSSを読み込めているか開発者ツールなどで確認するとよいでしょう。 

```html
<link rel="stylesheet" href="./d/kitstrap.css">
```
