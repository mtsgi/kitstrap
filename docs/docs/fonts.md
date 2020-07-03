# テキスト・フォント

 `kit-text`や`kit-font`から始まるクラスを使用して、簡単にテキストの配置を適用することができます。

## フォントの大きさ <Badge text="Class"/>

`.kit-font-xxlarge`(または、別名`.kit-font-xxl`)は、40pxフォントを使用します。

`.kit-font-xlarge`(または、別名`.kit-font-xl`)は、特大フォントを使用します。

`.kit-font-large`(または、別名`.kit-font-l`)は、大きなフォントを使用します。

`.kit-font-medium`(または、別名`.kit-font-m`)は、普通サイズのフォントを使用します。

`.kit-font-small`(または、別名`.kit-font-s`)は、小さなフォントを使用します。

`.kit-font-xsmall`(または、別名`.kit-font-xs`)は、極小フォントを使用します。

`.kit-font-0`は、フォントサイズを0に指定します。

**プレビュー**

<span class="kit-font-xxlarge m">XX-Large</span>
<span class="kit-font-xlarge m">X-Large</span>
<span class="kit-font-large m">Large</span>
<span class="kit-font-medium m">Medium</span>
<span class="kit-font-small m">Small</span>
<span class="kit-font-xsmall m">X-Small</span>

```html
<span class="kit-font-xxlarge m">XX-Large</span>
<span class="kit-font-xlarge m">X-Large</span>
<span class="kit-font-large m">Large</span>
<span class="kit-font-medium m">Medium</span>
<span class="kit-font-small m">Small</span>
<span class="kit-font-xsmall m">X-Small</span>
```

## フォントのウェイト <Badge text="Class"/>

`.kit-font-bold`は、太字フォントを使用します。

`.kit-font-normal`は、普通の太さのフォントを使用します。

`.kit-font-thin`は、細字フォントを使用します。

**プレビュー**

<span class="kit-font-bold m">Bold</span>
<span class="kit-font-normal m">Normal</span>
<span class="kit-font-thin m">Thin</span>

```html
<span class="kit-font-bold m">Bold</span>
<span class="kit-font-normal m">Normal</span>
<span class="kit-font-thin m">Thin</span>
```

## テキストの位置 <Badge text="Class"/>

`.kit-text-l`は、テキストを左寄せにします。

`.kit-text-c`は、テキストを中央寄せにします。

`.kit-text-r`は、テキストを右寄せにします。

**プレビュー**

<kit-button class="kit-block kit-text-l m">kit-text-l</kit-button>
<kit-button class="kit-block kit-text-c m">kit-text-c</kit-button>
<kit-button class="kit-block kit-text-r m">kit-text-r</kit-button>

```html
<kit-button class="kit-block kit-text-l m">kit-text-l</kit-button>
<kit-button class="kit-block kit-text-c m">kit-text-c</kit-button>
<kit-button class="kit-block kit-text-r m">kit-text-r</kit-button>
```

## テキストの整形 <Badge text="Class"/>

`.kit-text-upper`は、テキストを大文字にします。

`.kit-text-lower`は、テキストを小文字にします。

`.kit-text-capitalize`は、テキストを先頭大文字にします。

`.kit-text-zenkaku`は、テキストを全角文字にします(環境により反映されない場合があります)。 

**プレビュー**

<kit-pane>Hello, world!(Default)</kit-pane>
<kit-pane class="kit-text-upper">Hello, world!(Upper)</kit-pane>
<kit-pane class="kit-text-lower">Hello, world!(Lower)</kit-pane>
<kit-pane class="kit-text-capitalize">Hello, world!(Capitalize)</kit-pane>
<kit-pane class="kit-text-zenkaku">Hello, world!(Zenkaku)</kit-pane>

```html
<kit-pane>Hello, world!(Default)</kit-pane>
<kit-pane class="kit-text-upper">Hello, world!(Upper)</kit-pane>
<kit-pane class="kit-text-lower">Hello, world!(Lower)</kit-pane>
<kit-pane class="kit-text-capitalize">Hello, world!(Capitalize)</kit-pane>
<kit-pane class="kit-text-zenkaku">Hello, world!(Zenkaku)</kit-pane>
```

## テキストの装飾 <Badge text="Class"/>

- `.kit-text-underline`は、テキストに下線を引きます。
- `.kit-text-overline`は、テキストに上線を引きます。

次に示すスタイルで、下線または上線のスタイルを変更することができます。

- `.kit-text-wavy`は、テキストに波線を引きます。
- `.kit-text-double`は、テキストに二重線を引きます。
- `.kit-text-nodecoration`は、テキストの装飾を解除します。

## 見出しのスタイリング <Badge text="Tag"/>

kitstrapは、`h1`〜`h5`までの見出しにスタイルを付与します。

**プレビュー**

<h1>This is heading. (h1)</h1>
<h2>This is heading. (h2)</h2>
<h3>This is heading. (h3)</h3>
<h4>This is heading. (h4)</h4>
<h5>This is heading. (h5)</h5>

```html
<h1>This is heading. (h1)</h1>
<h2>This is heading. (h2)</h2>
<h3>This is heading. (h3)</h3>
<h4>This is heading. (h4)</h4>
<h5>This is heading. (h5)</h5>
```

## 引用 <Badge text="Tag"/>

kitstrapは、引用(`blockquote`)タグに専用のスタイルを付与します。

```html
<blockquote>
  Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.
  <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
```

## 整形済みテキスト <Badge text="Tag"/>

kitstrapは、整形済みテキスト(`pre`タグ)に専用のスタイルを付与します。

```html
<pre>const kitstrap = new Kitstrap();</pre>
```

## 行間 <Badge text="Class"/>

`.kit-line-xl`は、行間を倍率2.75にします。

`.kit-line-l`は、行間を倍率2にします。

`.kit-line-m`は、行間を倍率1.5にします。

`.kit-line-s`は、行間を倍率1にします。

**プレビュー**

<kit-badge class="black">行間：XL</kit-badge>
<blockquote class="kit-line-xl">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</blockquote>

<kit-badge class="black">行間：L</kit-badge>
<blockquote class="kit-line-l">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</blockquote>

<kit-badge class="black">行間：M</kit-badge>
<blockquote class="kit-line-m">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</blockquote>

<kit-badge class="black">行間：S</kit-badge>
<blockquote class="kit-line-s">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</blockquote>

```html
<kit-badge class="black">行間：XL</kit-badge>
<blockquote class="kit-line-xl">...</blockquote>

<kit-badge class="black">行間：L</kit-badge>
<blockquote class="kit-line-l">...</blockquote>

<kit-badge class="black">行間：M</kit-badge>
<blockquote class="kit-line-m">...</blockquote>

<kit-badge class="black">行間：S</kit-badge>
<blockquote class="kit-line-s">...</blockquote>
```

## テキストの色 <Badge text="Class"/>

`.kit-clr-`接頭辞(または、別名`.kit-c-`接頭辞)付きのカラークラスを使用すると、テキストの色を簡単に指定することができます。同様の色名で、`.kit-bgclr-`接頭辞を使用することで、背景色を変更することができます。

利用可能な色の名前とカラーコードについては、Wikiを参照してください。 

**プレビュー**

<ul>
  <li class="kit-clr-orange">kit-clr-orange</li>
  <li class="kit-clr-dodgerblue">kit-clr-dodgerblue</li>
  <li class="kit-clr-deeppink">kit-clr-deeppink</li>
  <li class="kit-clr-limegreen">kit-clr-limegreen</li>
  <li class="kit-clr-crimson">kit-clr-crimson</li>
  <li class="kit-clr-green">kit-clr-green</li>
  <li class="kit-clr-black">kit-clr-black</li>
  <li class="kit-clr-white kit-bgclr-black">kit-clr-white</li>
</ul>

```html
<ul>
  <li class="kit-clr-orange">kit-clr-orange</li>
  <li class="kit-clr-dodgerblue">kit-clr-dodgerblue</li>
  <li class="kit-clr-deeppink">kit-clr-deeppink</li>
  <li class="kit-clr-limegreen">kit-clr-limegreen</li>
  <li class="kit-clr-crimson">kit-clr-crimson</li>
  <li class="kit-clr-green">kit-clr-green</li>
  <li class="kit-clr-black">kit-clr-black</li>
  <li class="kit-clr-white kit-bgclr-black">kit-clr-white</li>
</ul>
```