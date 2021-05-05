# 要素と部品

kitstrapは、様々なHTML要素に使用できる汎用的なパーツのためのスタイルを用意しています。

## kit-button <Badge text="Tag"/> <Badge text="Class"/>

kitstrapでは、`class="kit-button"`を付与または`<kit-button></kit-button>`タグを使用することで、簡単にボタン要素を作成できます。

`class="kit-button-alt"`または`<kit-button-alt></kit-button-alt>`タグを使用すると、スタイルの異なるボタンを作成できます。


**プレビュー**

<a class="kit-button">ボタン1</a>
<kit-button>ボタン2</kit-button>
<a class="kit-button-alt">ボタン3</a>
<kit-button-alt>ボタン4</kit-button-alt>
<button class="kit-button kit-font-m">ボタン5</button>
<input type="button" class="kit-button kit-font-m" value="ボタン6">

```html
<a class="kit-button">ボタン1</a>
<kit-button>ボタン2</kit-button>
<a class="kit-button-alt">ボタン3</a>
<kit-button-alt>ボタン4</kit-button-alt>
<button class="kit-button kit-font-m">ボタン5</button>
<input type="button" class="kit-button kit-font-m" value="ボタン6">
```

::: tip
デフォルトのカラーは`dodgerblue`です
:::

### size子クラス

さらに、kit-buttonの子クラス`.-xxlarge`、`.-xlarge`、`.-large`、`.-medium`、`.-small`と`.-xsmall`でボタンのサイズを変更することもできます。

**プレビュー**

<kit-button class="-xsmall">-xsmall</kit-button>
<kit-button class="-small">-small</kit-button>
<kit-button class="-medium">-medium</kit-button>
<kit-button class="-large">-large</kit-button>
<kit-button class="-xlarge">-xlarge</kit-button>

```html
<kit-button class="-xsmall">-xsmall</kit-button>
<kit-button class="-small">-small</kit-button>
<kit-button class="-medium">-medium</kit-button>
<kit-button class="-large">-large</kit-button>
<kit-button class="-xlarge">-xlarge</kit-button>
```


**プレビュー(kit-button-alt)**

<kit-button-alt class="-xsmall">-xsmall</kit-button-alt>
<kit-button-alt class="-small">-small</kit-button-alt>
<kit-button-alt class="-medium">-medium</kit-button-alt>
<kit-button-alt class="-large">-large</kit-button-alt>
<kit-button-alt class="-xlarge">-xlarge</kit-button-alt>


```html
<kit-button-alt class="-xsmall">-xsmall</kit-button-alt>
<kit-button-alt class="-small">-small</kit-button-alt>
<kit-button-alt class="-medium">-medium</kit-button-alt>
<kit-button-alt class="-large">-large</kit-button-alt>
<kit-button-alt class="-xlarge">-xlarge</kit-button-alt>
```

### flat子クラス

また、`.-flat`クラスを付与することで、それぞれシンプルなデザインのボタンに変更することもできます。


**`.-flat`クラスを付与**

<kit-button class="-flat">-flat</kit-button>
<kit-button class="-green -flat">-green -flat</kit-button>
<kit-button class="-deeppink -flat">-deeppink -flat</kit-button>


```html
<kit-button class="-flat">-flat</kit-button>
<kit-button class="-green -flat">-green -flat</kit-button>
<kit-button class="-deeppink -flat">-deeppink -flat</kit-button>
```

**`.-flat`クラスを付与(-alt)**

<kit-button-alt class="-flat">-flat</kit-button-alt>
<kit-button-alt class="-orange -flat">-orange -flat</kit-button-alt>
<kit-button-alt class="-black -flat">-black -flat</kit-button-alt>

```html
<kit-button-alt class="-flat">-flat</kit-button-alt>
<kit-button-alt class="-orange -flat">-orange -flat</kit-button-alt>
<kit-button-alt class="-black -flat">-black -flat</kit-button-alt>
```

### rounded子クラス

`.-rounded`クラスを用いると、ボタンは丸みを帯びたデザインに変更されます。

**`.-rounded`クラスを付与**

<kit-button class="-crimson -large -rounded">-crimson -large -rounded</kit-button>
<kit-button-alt class="-limegreen -rounded">-limegreen -rounded</kit-button-alt>


```html
<kit-button class="-crimson -large -rounded">-crimson -large -rounded</kit-button>
<kit-button-alt class="-limegreen -rounded">-limegreen -rounded</kit-button-alt>
```

**`.-rounded`クラスを付与(-alt)**

<kit-button class="-flat -large -rounded">-flat -large -rounded</kit-button>
<kit-button-alt class="-black -flat -rounded">-black -flat -rounded</kit-button-alt>

```html
<kit-button class="-flat -large -rounded">-flat -large -rounded</kit-button>
<kit-button-alt class="-black -flat -rounded">-black -flat -rounded</kit-button-alt>
```

### disabled子クラス

`.-disabled`で、無効化されたボタンのスタイルを設定することができます。

**無効なボタンのプレビュー**

<kit-button class="-disabled">無効</kit-button>
<button class="kit-button -crimson kit-font-m -disabled">無効</button>
<kit-button class="-large -disabled">無効</kit-button>
<button class="kit-button -large -orange kit-font-m -disabled">無効</button>
<button class="kit-button -large -rounded -disabled">無効</button>

```html
<kit-button class="-disabled">無効</kit-button>
<button class="kit-button -crimson kit-font-m -disabled">無効</button>
<kit-button class="-large -disabled">無効</kit-button>
<button class="kit-button -large -orange kit-font-m -disabled">無効</button>
<button class="kit-button -large -rounded -disabled">無効</button>
```

### 色のための子クラス

kit-buttonとkit-button-altの子クラスとして、`class="kit-button -deeppink"`のように色を選択するクラスが用意されています。

**プレビュー**

<a class="kit-button -orange">ボタン</a>
<a class="kit-button-alt -orange">ボタン</a>
`.-orange`

<a class="kit-button -dodgerblue">ボタン</a>
<a class="kit-button-alt -dodgerblue">ボタン</a>
`.-dodgerblue`

<a class="kit-button -deeppink">ボタン</a>
<a class="kit-button-alt -deeppink">ボタン</a>
`.-deeppink`

<a class="kit-button -limegreen">ボタン</a>
<a class="kit-button-alt -limegreen">ボタン</a>
`.-limegreen`

<a class="kit-button -crimson">ボタン</a>
<a class="kit-button-alt -crimson">ボタン</a>
`.-crimson`

<a class="kit-button -green">ボタン</a>
<a class="kit-button-alt -green">ボタン</a>
`.-green`

<a class="kit-button -silver">ボタン</a>
<a class="kit-button-alt -silver">ボタン</a>
`.-silver`

<a class="kit-button -black">ボタン</a>
<a class="kit-button-alt -black">ボタン</a>
`.-black`

## kit-hyperlink <Badge text="Tag"/> <Badge text="Class"/>

`<a>`要素やその他の要素に対して`.kit-hyperlink`クラス(あるいは、エイリアス`.kit-hl`)を付与、または`<kit-hl></kit-hl>`タグを使用することで、ハイパーリンクのスタイルを設定できます。`.kit-hl-alt`クラスまたは`<kit-hl-alt></kit-hl-alt>`は、親要素の前景色を継承するスタイルを持ちます。 

**プレビュー**

リンクは<a href="#" class="kit-hyperlink">こちら</a>をクリック！

・<kit-hl-alt>シンプルなkit-hl-alt使用したリンク</kit-hl-alt>

```html
リンクは<a href="#" class="kit-hyperlink">こちら</a>をクリック！<br>
・<kit-hl-alt>シンプルなkit-hl-alt使用したリンク</kit-hl-alt>
```

::: tip
ポインターのカーソルになります。
:::

## kit-badge <Badge text="Tag"/> <Badge text="Class"/>

要素に`.kit-badge`クラスを付与または`<kit-badge></kit-badge>`タグを使用することで、バッジ要素を生成することができます。 

**プレビュー**

<span class="kit-badge">NEW!</span>kitstrapへようこそ

```html
<span class="kit-badge">NEW!</span>kitstrapへようこそ
```

::: tip
デフォルトのカラーは`.-orange`です。
:::
　
### 色のための子クラス

**kit-badge**にも子クラスとして、`class="kit-badge -limegreen"`のように色を選択するクラスが用意されています。

**プレビュー**

<span class="kit-badge -orange">-orange</span>
<span class="kit-badge -dodgerblue">-dodgerblue</span>
<span class="kit-badge -deeppink">-deeppink</span>
<span class="kit-badge -limegreen">-limegreen</span>
<span class="kit-badge -crimson">-crimson</span>
<span class="kit-badge -green">-green</span>
<span class="kit-badge -silver">-silver</span>
<span class="kit-badge -black">-black</span>

```html
<span class="kit-badge -orange">-orange</span>
<span class="kit-badge -dodgerblue">-dodgerblue</span>
<span class="kit-badge -deeppink">-deeppink</span>
<span class="kit-badge -limegreen">-limegreen</span>
<span class="kit-badge -crimson">-crimson</span>
<span class="kit-badge -green">-green</span>
<span class="kit-badge -silver">-silver</span>
<span class="kit-badge -black">-black</span>
```

## kit-notice <Badge text="Tag"/> <Badge text="Class"/>

要素に`.kit-notice`クラスを付与または`<kit-notice></kit-notice>`タグを使用することで、ユーザーへの通知を送るペインを生成できます。

また、子クラスの`.-green`、`.-yellow`、`.-red`、`.-black`で、色を変更することができます。

**プレビュー**

<div class="kit-notice">これは通知です。</div>
<div class="kit-notice -green">これはメッセージです。(-green)</div>
<div class="kit-notice -yellow">これは注意メッセージです。(-yellow)</div>
<div class="kit-notice -red">これはエラーメッセージです。(-red)</div>
<div class="kit-notice -black">これは黒色の通知です。(-black)</div>

```html
<div class="kit-notice">これは通知です。</div>
<div class="kit-notice -green">これはメッセージです。(-green)</div>
<div class="kit-notice -yellow">これは注意メッセージです。(-yellow)</div>
<div class="kit-notice -red">これはエラーメッセージです。(-red)</div>
<div class="kit-notice -black">これは黒色の通知です。(-black)</div>
```

## kit-table <Badge text="Class"/>

`<table>`要素に対して`.kit-table`クラスおよびその子クラスを付与することで、テーブルに様々なスタイルを付与することができます。

`.kit-text-`接頭辞を持つ「テキストの位置」クラスを任意のテーブル内の要素に付与して、テキスト位置を明示的に指定することもできます。

**標準的なテーブル**

<table class="kit-table">
    <thead>
      <tr>
        <th>名前</th><th>URL</th><th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>kit</th> <td>https://kit.osdn.jp/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kitstrap</th> <td>https://kitstrap.netlify.app/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kafjs</th> <td>https://kafjs.netlify.app/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kpt</th> <td>https://kpkg.herokuapp.com/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kish</th> <td>https://mtsgi.github.io/kish/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
    </tbody>
</table>

```html
<table class="kit-table">
    <thead>
      <tr>
        <th>名前</th><th>URL</th><th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>kit</th> <td>https://kit.osdn.jp/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kitstrap</th> <td>https://kitstrap.netlify.app/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kafjs</th> <td>https://kafjs.netlify.app/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kpt</th> <td>https://kpkg.herokuapp.com/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
      <tr>
        <th>kish</th> <td>https://mtsgi.github.io/kish/</td> <td><a class="kit-hl">操作</a></td>
      </tr>
    </tbody>
</table>
```

## kit-navbar <Badge text="Tag"/> <Badge text="Class"/>

`.kit-navbar`クラスまたは`<kit-navbar></kit-navbar>`の中に、`.kit-navitem`クラスまたは`<kit-navitem></kit-navitem>`を並べることで、ナビゲーションバーとその項目を設置することができます。

**kit-navbar**

<kit-navbar>
  <kit-navitem>項目1</kit-navitem>
  <kit-navitem>項目2</kit-navitem>
  <kit-navitem>項目3</kit-navitem>
  <kit-navitem>項目4</kit-navitem>
</kit-navbar>

```html
<kit-navbar>
  <kit-navitem>項目1</kit-navitem>
  <kit-navitem>項目2</kit-navitem>
  <kit-navitem>項目3</kit-navitem>
  <kit-navitem>項目4</kit-navitem>
</kit-navbar>
```

`.kit-navbar-alt`クラスまたは`<kit-navbar-alt></kit-navbar-alt>`で項目を囲うことで、異なるスタイルが適用されます。 

**kit-navbar-alt**

<kit-navbar-alt>
  <kit-navitem>項目1</kit-navitem>
  <kit-navitem>項目2</kit-navitem>
  <kit-navitem>項目3</kit-navitem>
  <kit-navitem>項目4</kit-navitem>
</kit-navbar-alt>

```html
<kit-navbar-alt>
  <a class="kit-navitem">項目1</a>
  <a class="kit-navitem">項目2</a>
  <a class="kit-navitem">項目3</a>
  <a class="kit-navitem">項目4</a>
</kit-navbar-alt>
```

## kit-pane <Badge text="Tag"/> <Badge text="Class"/>

`.kit-pane`クラスを付与または、`<kit-pane></kit-pane>`タグを使用して、操作や表示のための領域を作成します。子クラスの`.dark`を使用して、暗いテーマを使用可能です。子クラス`.hover`で、ホバー時の効果を付与できます。 

**プレビュー**

<kit-pane>kit-pane</kit-pane>
<kit-pane class="dark">kit-pane.dark</kit-pane>
<kit-pane class="hover">kit-pane.hover</kit-pane>
<kit-pane class="dark hover">kit-pane.dark.hover</kit-pane>

```html
<kit-pane>kit-pane</kit-pane>
<kit-pane class="dark">kit-pane.dark</kit-pane>
<kit-pane class="hover">kit-pane.hover</kit-pane>
<kit-pane class="dark hover">kit-pane.dark.hover</kit-pane>
```

## ツールチップ <Badge text="Tag"/> <Badge text="Class"/>

`.kit-tipped`クラスを持つ要素または`<kit-tipped></kit-tipped>`要素の中に、`.kit-tip`または`<kit-tip></kit-tip>`要素を内包することで、親要素のツールチップを表示させることができます。この時、親要素(`.kit-tipped`)には`position: relative`が指定され、インラインブロック要素として振る舞います。

**ツールチップのサンプル**

<kit-tipped class="kit-width-50 kit-line-0">
  <img src="./banner.png" class="kit-fit">
  <kit-tip>バナー画像</kit-tip>
</kit-tipped>
<kit-tipped class="kit-width-25 kit-line-0">
  <img src="./banner.png" class="kit-fit">
  <kit-tip class="-bottom">バナー画像</kit-tip>
</kit-tipped>

↑ホバーしてください

```html
<kit-tipped class="kit-width-50 kit-line-0">
  <img src="./banner.png" class="kit-fit">
  <kit-tip>バナー画像</kit-tip>
</kit-tipped>
<kit-tipped class="kit-width-25 kit-line-0">
  <img src="./banner.png" class="kit-fit">
  <kit-tip class="-bottom">バナー画像</kit-tip>
</kit-tipped>
```

ツールチップは、デフォルトではホバー時に要素の上側に表示されます。子要素(`.kit-tip`)に子クラス「`.-bottom`」を付与することで、下側に表示することもできます。また、子クラス「`.-disabled`」を付与すると、ツールチップの表示を無効化することもできます。 

**ツールチップのサンプル 2**

<kit-tipped class="kit-fit">
  <input type="text" class="kit-textbox kit-fit" placeholder="example@example.com">
  <kit-tip>メールアドレスを入力してください</kit-tip>
</kit-tipped>
<kit-tipped>
  <kit-button class="-disabled">送信する</kit-button>
  <kit-tip class="-disabled">無効です</kit-tip>
</kit-tipped>

```html
<kit-tipped class="kit-fit">
  <input type="text" class="kit-textbox kit-fit" placeholder="example@example.com">
  <kit-tip>メールアドレスを入力してください</kit-tip>
</kit-tipped>
<kit-tipped>
  <kit-button class="-disabled">送信する</kit-button>
  <kit-tip class="-disabled">無効です</kit-tip>
</kit-tipped>
```

## パンくずリスト <Badge text="Class"/>

`.kit-breadcrumb`クラスを付与した`<li></li>`要素を用いて、簡単にパンくずリストを作成することができます。

パンくずのリンクとなるアイテムをアンカーとして`.kit-breadcrumb`のリストアイテムにを内包します。リンクでないアイテムは、単にテキストとして内包します。 

**プレビュー**

<ul class="kit-breadcrumb">
  <li><a href="#">トップページ</a></li>
  <li><a href="#">要素と部品</a></li>
  <li>パンくずリスト</li>
</ul> 

```html
<ul class="kit-breadcrumb">
  <li><a href="#">トップページ</a></li>
  <li><a href="#">要素と部品</a></li>
  <li>パンくずリスト</li>
</ul> 
```
