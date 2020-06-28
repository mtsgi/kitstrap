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
