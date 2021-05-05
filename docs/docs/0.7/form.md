# フォーム部品

kitstrapのフォーム部品は、クラスを付与するだけで簡単に使用することができます。

## kit-textbox <Badge text="Class"/>

`input`要素や`textarea`要素に`.kit-textbox`クラスを使ってスタイルを付与できます。

**プレビュー**

<div class="p">
  <input type="text" class="kit-textbox kit-fit" placeholder="いまどうしてる？" />
</div>

```html
<div class="p">
  <input type="text" class="kit-textbox kit-fit" placeholder="いまどうしてる？" />
</div>
```

### size子クラス

また、`.-small`、`.-medium`、`.-large`の3つの子クラスやkit-width接頭辞を持つクラスを使用することでテキストボックスの幅を制御することができます。 

**プレビュー**

<div class="p">
  <input type="text" class="kit-textbox -small" placeholder=".-small (150px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox -medium" placeholder=".-medium (300px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox -large" placeholder=".-large (450px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox kit-width-50" placeholder=".kit-width-50 (50%)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox kit-width-100" placeholder=".kit-width-100 (100%)" />
</div>

```html
<div class="p">
  <input type="text" class="kit-textbox -small" placeholder=".-small (150px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox -medium" placeholder=".-medium (300px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox -large" placeholder=".-large (450px)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox kit-width-50" placeholder=".kit-width-50 (50%)" />
</div>
<div class="p">
  <input type="text" class="kit-textbox kit-width-100" placeholder=".kit-width-100 (100%)" />
</div>
```

### dark子クラス

子クラスの`.-dark`を使うと暗いテーマを適用できます。

**プレビュー**

<kit-pane class="p dark">
  <div>
    <input type="text" class="kit-textbox kit-fit -dark" placeholder="いまどうしてる？" />
  </div>
</kit-pane>


```html
<kit-pane class="p dark">
  <div>
    <input type="text" class="kit-textbox kit-fit -dark" placeholder="いまどうしてる？" />
  </div>
</kit-pane>
```

### disabled属性

また、`.kit-textbox`に対して`disabled`属性を付与すると、入力不能フィールドとなり、専用のスタイルが適用されます。

**プレビュー**

<input type="text" class="textbox" placeholder="入力不能フィールド" disabled />

```html
<input type="text" class="textbox" placeholder="入力不能フィールド" disabled />
```

### flat子クラス

`.-flat`子クラスを使用すると、フラットなスタイルのテキストボックスに変更することができます。`.-dark`との併用も可能です。

**プレビュー**

<div class="kit-bgclr-white p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-dodgerblue p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-crimson p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-black p-l">
  <input type="text" class="kit-textbox large kit-fit -flat -dark" placeholder="フラット・ダーク" />
</div>

```html

<div class="kit-bgclr-white p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-dodgerblue p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-crimson p-l">
  <input type="text" class="kit-textbox large kit-fit -flat" placeholder="フラットなスタイル" />
</div>
<div class="kit-bgclr-black p-l">
  <input type="text" class="kit-textbox large kit-fit -flat -dark" placeholder="フラット・ダーク" />
</div>
```

### rounded子クラス

子クラス`.-rounded`を用いて、丸みを帯びたデザインに変更することが可能です。`.-flat`や`.-dark`との併用も可能です。

**プレビュー**

<div class="kit-bgclr-silver p-l">
  <input type="text" class="kit-textbox kit-fit -rounded" placeholder="Rounded!">
</div>
<div class="kit-bgclr-limegreen p-l">
  <input type="text" class="kit-textbox kit-fit -flat -rounded" placeholder="Rounded!">
</div>

```html
<div class="kit-bgclr-silver p-l">
  <input type="text" class="kit-textbox kit-fit -rounded" placeholder="Rounded!">
</div>
<div class="kit-bgclr-limegreen p-l">
  <input type="text" class="kit-textbox kit-fit -flat -rounded" placeholder="Rounded!">
</div>
```

## kit-toggle <Badge text="Class"/>

クラス`.kit-togle`を付与した`label`要素内に`type="checkbox"`を持つ`input`要素、説明のテキスト、`for`属性を持つ空のラベル要素を順に配置することで、チェックボックスをトグル項目として表示することができます。

**プレビュー**

<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="matsu">松<label for="matsu"></label>
</label>
<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="take">竹<label for="take"></label>
</label>
<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="ume">梅<label for="ume"></label>
</label>

```html
<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="matsu">松<label for="matsu"></label>
</label>
<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="take">竹<label for="take"></label>
</label>
<label class="kit-toggle kit-line-l">
  <input type="checkbox" id="ume">梅<label for="ume"></label>
</label>
```

## kit-formgroup <Badge text="Tag"/> <Badge text="Class"/>

`.kit-formgroup`クラスまたは`<kit-formgroup></kit-formgroup>`要素の中にフォーム部品として`kit-button`(`kit-button-alt`、`kit-btn`も含む)や`.kit-textbox`要素を内包すると、フォーム部品を連結することができます。

**プレビュー**

<kit-formgroup class="p">
  <kit-button-alt>ボタン1</kit-button-alt>
  <kit-button-alt>ボタン2</kit-button-alt>
  <kit-button-alt>ボタン3</kit-button-alt>
  <kit-button-alt>ボタン4</kit-button-alt>
</kit-formgroup>

<kit-formgroup class="p">
  <kit-btn>ボタン1</kit-btn>
  <kit-btn>ボタン2</kit-btn>
  <kit-btn>ボタン3</kit-btn>
  <kit-btn>ボタン4</kit-btn>
</kit-formgroup>

<kit-formgroup class="p">
  <kit-button class="crimson">ボタン1</kit-button>
  <kit-button class="limegreen">ボタン2</kit-button>
  <kit-button class="orange">ボタン3</kit-button>
  <kit-button class="deeppink">ボタン4</kit-button>
</kit-formgroup>

<kit-formgroup class="p kit-flex kit-flex-nowrap kit-fit">
  <input type="text" class="textbox kit-width-75">
  <kit-button-alt class="kit-text-c kit-width-25">Search</kit-button-alt>
</kit-formgroup>

```html
<kit-formgroup class="p">
  <kit-button-alt>ボタン1</kit-button-alt>
  <kit-button-alt>ボタン2</kit-button-alt>
  <kit-button-alt>ボタン3</kit-button-alt>
  <kit-button-alt>ボタン4</kit-button-alt>
</kit-formgroup>

<kit-formgroup class="p">
  <kit-btn>ボタン1</kit-btn>
  <kit-btn>ボタン2</kit-btn>
  <kit-btn>ボタン3</kit-btn>
  <kit-btn>ボタン4</kit-btn>
</kit-formgroup>

<kit-formgroup class="p">
  <kit-button class="crimson">ボタン1</kit-button>
  <kit-button class="limegreen">ボタン2</kit-button>
  <kit-button class="orange">ボタン3</kit-button>
  <kit-button class="deeppink">ボタン4</kit-button>
</kit-formgroup>

<kit-formgroup class="p kit-flex kit-flex-nowrap kit-fit">
  <input type="text" class="textbox kit-width-75">
  <kit-button-alt class="kit-text-c kit-width-25">Search</kit-button-alt>
</kit-formgroup>
```
