# ユーティリティ

kitstrapには、kitstrap要素を生成するためのタグやクラスの他に、様々な汎用のユーティリティクラスが用意されています。

## 要素の幅 <Badge text="Class"/>

`.kit-width-auto`は、要素の幅を自動に設定します。

`.kit-width-25`は、要素の幅を25%に設定します。

`.kit-width-50`は、要素の幅を50%に設定します。

`.kit-width-75`は、要素の幅を75%に設定します。

`.kit-width-100`は、要素の幅を100%に設定します。

この他にも、5%刻みで`.kit-width-`接頭辞を持つクラスが用意されています。

`.kit-fit`は、要素の最大の幅を100%に設定します。

`.kit-width-0`を指定すると、要素の幅を0%に設定します。

**ブロック要素**

<kit-pane class="dark kit-width-auto">自動</kit-pane>
<kit-pane class="dark kit-width-25">25%</kit-pane>
<kit-pane class="dark kit-width-50">50%</kit-pane>
<kit-pane class="dark kit-width-75">75%</kit-pane>
<kit-pane class="dark kit-width-100">100%</kit-pane>
<kit-pane class="dark kit-fit">fit</kit-pane>

```html
<kit-pane class="dark kit-width-auto">自動</kit-pane>
<kit-pane class="dark kit-width-25">25%</kit-pane>
<kit-pane class="dark kit-width-50">50%</kit-pane>
<kit-pane class="dark kit-width-75">75%</kit-pane>
<kit-pane class="dark kit-width-100">100%</kit-pane>
<kit-pane class="dark kit-fit">fit</kit-pane>
```

**インラインブロック要素**

<kit-button class="m-t kit-width-auto">自動</kit-button><br>
<kit-button class="m-t kit-width-25">25%</kit-button><br>
<kit-button class="m-t kit-width-50">50%</kit-button><br>
<kit-button class="m-t kit-width-75">75%</kit-button><br>
<kit-button class="m-t kit-width-100">100%</kit-button><br>
<kit-button class="m-t kit-fit">fit</kit-button>

```html
<kit-button class="m-t kit-width-auto">自動</kit-button><br>
<kit-button class="m-t kit-width-25">25%</kit-button><br>
<kit-button class="m-t kit-width-50">50%</kit-button><br>
<kit-button class="m-t kit-width-75">75%</kit-button><br>
<kit-button class="m-t kit-width-100">100%</kit-button><br>
<kit-button class="m-t kit-fit">fit</kit-button>
```

## ドロップシャドウ <Badge text="Class"/>

`kit-shadow`接頭辞を持つクラスを使用して、要素の影をコントロールすることができます。

`.kit-shadow-0`(影なし)から`.kit-shadow-10`(20pxのブラー)までの影の深さから選択することができます。

**プレビュー**

<div class="kit-flex">
  <kit-badge class="-dodgerblue kit-shadow-0 kit-block m-l">kit-shadow-0</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-1 kit-block m-l">kit-shadow-1</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-2 kit-block m-l">kit-shadow-2</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-3 kit-block m-l">kit-shadow-3</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-4 kit-block m-l">kit-shadow-4</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-5 kit-block m-l">kit-shadow-5</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-6 kit-block m-l">kit-shadow-6</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-7 kit-block m-l">kit-shadow-7</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-8 kit-block m-l">kit-shadow-8</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-9 kit-block m-l">kit-shadow-9</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-10 kit-block m-l">kit-shadow-10</kit-badge>
</div>

```html
<div class="kit-flex">
  <kit-badge class="-dodgerblue kit-shadow-0 kit-block m-l">kit-shadow-0</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-1 kit-block m-l">kit-shadow-1</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-2 kit-block m-l">kit-shadow-2</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-3 kit-block m-l">kit-shadow-3</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-4 kit-block m-l">kit-shadow-4</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-5 kit-block m-l">kit-shadow-5</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-6 kit-block m-l">kit-shadow-6</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-7 kit-block m-l">kit-shadow-7</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-8 kit-block m-l">kit-shadow-8</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-9 kit-block m-l">kit-shadow-9</kit-badge>
  <kit-badge class="-dodgerblue kit-shadow-10 kit-block m-l">kit-shadow-10</kit-badge>
</div>
```

:::tip
.kit-shadow-*n* には、_n*2_ pxの影(ドロップシャドウ)のブラーがつきます。
:::

## 要素の非表示 <Badge text="Class"/>

`.kit-hidden`は、ドキュメントのレイアウトに影響を及ぼさずに要素を不可視にします。

`.kit-nodisp`(または、別名`.kit-nd`)は、要素を非表示にし、レイアウト上から除去します。

**プレビュー**

<kit-formgroup class="kit-flex p">
  <kit-button class="kit-flex-grow -deeppink -flat">可視</kit-button>
  <kit-button class="kit-flex-grow -deeppink -flat kit-hidden">不可視</kit-button>
  <kit-button class="kit-flex-grow -deeppink -flat">可視</kit-button>
</kit-formgroup>
<kit-formgroup class="kit-flex p">
  <kit-button-alt class="kit-flex-grow orange">表示</kit-button-alt>
  <kit-button-alt class="kit-flex-grow orange kit-nodisp">非表示</kit-button-alt>
  <kit-button-alt class="kit-flex-grow orange">表示</kit-button-alt>
</kit-formgroup>

```html
<kit-formgroup class="kit-flex p">
  <kit-button class="kit-flex-grow -deeppink -flat">可視</kit-button>
  <kit-button class="kit-flex-grow -deeppink -flat kit-hidden">不可視</kit-button>
  <kit-button class="kit-flex-grow -deeppink -flat">可視</kit-button>
</kit-formgroup>
<kit-formgroup class="kit-flex p">
  <kit-button-alt class="kit-flex-grow orange">表示</kit-button-alt>
  <kit-button-alt class="kit-flex-grow orange kit-nodisp">非表示</kit-button-alt>
  <kit-button-alt class="kit-flex-grow orange">表示</kit-button-alt>
</kit-formgroup>
```

## 全プロパティの初期化 <Badge text="Class"/>

要素に`.kit-init`クラスを付与することで、ブラウザ標準のスタイルを含めたすべてのCSSプロパティのスタイルを初期化します。

**プレビュー(.kit-init指定)**

<input type="text" class="kit-init" placeholder="inputタグ"><br>
<button class="kit-init">buttonタグ</button><br>
<a href="#" class="kit-init">aタグ</a><br>
<progress class="kit-init" max="100" value="50">progress</progress>

```html
<input type="text" class="kit-init" placeholder="inputタグ"><br>
<button class="kit-init">buttonタグ</button><br>
<a href="#" class="kit-init">aタグ</a><br>
<progress class="kit-init" max="100" value="50">progress</progress>
```

**プレビュー(クラス未指定)**

<input type="text" placeholder="inputタグ"><br>
<button>buttonタグ</button><br>
<a href="#">aタグ</a><br>
<progress max="100" value="50">progress</progress>

```html
<input type="text" placeholder="inputタグ"><br>
<button>buttonタグ</button><br>
<a href="#">aタグ</a><br>
<progress max="100" value="50">progress</progress>
```
