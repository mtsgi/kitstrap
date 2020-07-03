# レイアウト関連

kitstrapを使用して、簡単にWebページのレイアウトを構成することができます。

## kit-block <Badge text="Tag"/> <Badge text="Class"/>

`kit-block`を使用すると、要素をブロック要素にすることができます。例えば、`kit-button`にこれを適用すると、以下のようになります。

**プレビュー**

<kit-button class="kit-block m">ブロックレベルボタン</kit-button>
<kit-button class="kit-block m">ブロックレベルボタン</kit-button>
<kit-button class="kit-block m">ブロックレベルボタン</kit-button>

```html
<kit-button class="kit-block m">ブロックレベルボタン</kit-button>
<kit-button class="kit-block m">ブロックレベルボタン</kit-button>
<kit-button class="kit-block m">ブロックレベルボタン</kit-button>
```

## kit-inblock <Badge text="Tag"/> <Badge text="Class"/>

`kit-inblock`を使用すると、要素をインラインブロック要素にすることができます。例えば、`kit-button`にこれを適用すると、以下のようになります。

**プレビュー**

<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>
<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>
<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>

```html
<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>
<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>
<kit-button class="kit-inblock">インラインブロックレベルボタン</kit-button>
```

## kit-inline <Badge text="Tag"/> <Badge text="Class"/>

`kit-inline`を使用すると、要素をインラインブロック要素にすることができます。例えば、`kit-button`にこれを適用すると、以下のようになります。

**プレビュー**

<kit-button class="kit-inline">インラインレベルボタン</kit-button>
<kit-button class="kit-inline">インラインレベルボタン</kit-button>
<kit-button class="kit-inline">インラインレベルボタン</kit-button>

```html
<kit-button class="kit-inline">インラインレベルボタン</kit-button>
<kit-button class="kit-inline">インラインレベルボタン</kit-button>
<kit-button class="kit-inline">インラインレベルボタン</kit-button>
```

## paddingとmargin <Badge text="Class"/>

`.p`クラス、`.m`クラスとその派生クラスを使用すると、paddingとmarginを設定できます。

- `p`または`m`の後に`-t`、`-b`、`-l`、`-r`接尾辞を使用することで、特定の方向(それぞれ上、下、左、右)にのみ影響を与えるようにすることもできます。
  - 例：`.p-t`(上方向にpaddingを8px)や、`.m-r-xl`(右方向にmarginを24px)など
  - ※ 例外的に左方向にpaddingを8pxには`.p-left`を、左方向にmarginを8pxには`.m-left`を使用します。
- pまたはmの後に-x、-y接尾辞を使用することで、それぞれ横、縦にのみ影響を与えるようにすることもできます。
  - 例：`.p-x`(左右方向にpaddingを8px)や、`.m-y-l`(上下方向にmarginを16px)など

**paddingの例**

<kit-container class="m">
  <kit-box class="p-0">p-0 (0px)</kit-box>
  <kit-box class="p-s">p-s (4px)</kit-box>
  <kit-box class="p">p (8px)</kit-box>
  <kit-box class="p-m">p-m (10px)</kit-box>
  <kit-box class="p-l">p-l (16px)</kit-box>
  <kit-box class="p-xl">p-xl (24px)</kit-box>
</kit-container>

```html
<kit-container class="m">
  <kit-box class="p-0">p-0 (0px)</kit-box>
  <kit-box class="p-s">p-s (4px)</kit-box>
  <kit-box class="p">p (8px)</kit-box>
  <kit-box class="p-m">p-m (10px)</kit-box>
  <kit-box class="p-l">p-l (16px)</kit-box>
  <kit-box class="p-xl">p-xl (24px)</kit-box>
</kit-container>
```

**marginの例**

<blockquote class="m-0">m-0 (0px)</blockquote>
<blockquote class="m-s">m-s (4px)</blockquote>
<blockquote class="m">m (8px)</blockquote>
<blockquote class="m-m">m-m (10px)</blockquote>
<blockquote class="m-l">m-l (16px)</blockquote>
<blockquote class="m-xl">m-xl (24px)</blockquote>

```html
<blockquote class="m-0">m-0 (0px)</blockquote>
<blockquote class="m-s">m-s (4px)</blockquote>
<blockquote class="m">m (8px)</blockquote>
<blockquote class="m-m">m-m (10px)</blockquote>
<blockquote class="m-l">m-l (16px)</blockquote>
<blockquote class="m-xl">m-xl (24px)</blockquote>
```

## position <Badge text="Class"/>

kitstrapには、要素のpositionプロパティを変更するためのクラスが用意されています。

**position関連クラス**

- `.kit-static`は、要素のpositionを`static`にします。
- `.kit-relative`は、要素のpositionを`relative`にします。
- `.kit-absolute`は、要素のpositionを`absolute`にします。
- `.kit-fixed`は、要素のpositionを`fixed`にします。
- `.kit-sticky`は、要素のpositionを`stciky`にします。

## flexシステム <Badge text="Class"/>

kitstrapのflexシステムを使用すれば、flexboxを簡単に利用することができます。まずは、flexboxコンテナーの親要素に`.kit-flex`クラスを付与(または、`<kit-flex></kit-flex>`要素を使用)します。

または、`.kit-inline-flex`クラスを使用してインラインブロックレベルのflexboxコンテナーを作ることもできます。

**コンテナーに指定するクラス**

- `.kit-flex-row`は、指定したコンテナー内の子要素の並び順を**行方向**にします。
- `.kit-flex-row-reverse`は、指定したコンテナー内の子要素の並び順を**行方向・向きを逆**にします。
- `.kit-flex-column`は、指定したコンテナー内の子要素の並び順を**列方向**にします。
- `.kit-flex-column-reverse`は、指定したコンテナー内の子要素の並び順を**列方向・向きを逆**にします。
- `.kit-flex-nowrap`は、コンテナー内での子要素の折返しを許可しません。
- `.kit-flex-start`は、0以外の伸長係数を持つ子要素を含まないflexboxコンテナー内で、子要素を先頭側に寄せて配置します。
- `.kit-flex-end`は、0以外の伸長係数を持つ子要素を含まないflexboxコンテナー内で、子要素を末尾側に寄せて配置します。
- `.kit-flex-center`は、0以外の伸長係数を持つ子要素を含まないflexboxコンテナー内で、子要素を中央に寄せて配置します。
- `.kit-flex-fit`は、0以外の伸長係数を持つ子要素を含まないflexboxコンテナー内で、最初の要素を先頭側に、最後の要素を末尾側に寄せ、残りの子要素をその中間で均等に配置します。
- `.kit-flex-top`は、コンテナー内で子要素を交差軸方向に対して先頭側(通常の軸の場合、**上側**)に寄せて配置します。
- `.kit-flex-middle`は、コンテナー内で子要素を交差軸方向に対して中央に寄せて配置します。
- `.kit-flex-bottom`は、コンテナー内で子要素を交差軸方向に対して末尾側(通常の軸の場合、**下側**)に寄せて配置します。

**子要素に指定するクラス**

- `.kit-flex-grow`は、指定した子要素のコンテナー内における伸長係数を1に指定します。
- `.kit-flex-shrink`は、指定した子要素のコンテナー内における縮小係数を1に指定します。
- `.kit-flex-order-1`は、指定した子要素の順序を`-1`(先頭)に移動します。

<kit-flex class="kit-flex-row kit-flex-fit kit-flex-middle">
  <kit-badge class="p-l">1</kit-badge>
  <kit-badge class="kit-flex-shrink">2</kit-badge>
  <kit-badge class="kit-flex-grow">3</kit-badge>
  <kit-badge class="kit-flex-order-1">4</kit-badge>
</kit-flex>

```html
<kit-flex class="kit-flex-row kit-flex-fit kit-flex-middle">
  <kit-badge class="p-l">1</kit-badge>
  <kit-badge class="kit-flex-shrink">2</kit-badge>
  <kit-badge class="kit-flex-grow">3</kit-badge>
  <kit-badge class="kit-flex-order-1">4</kit-badge>
</kit-flex>
```
