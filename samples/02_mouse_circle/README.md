
# 02 mouse_circle

## 内容

マウスの位置に円を描くサンプルです．

マウスを動かすと，円がマウスについてきます．

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(0, 150, 255);
  circle(mouseX, mouseY, 80);
}
```

## 学べること

- `mouseX` を使う
- `mouseY` を使う
- マウスの位置に反応する表現を作る

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かしてみる

p5.js Web Editor：


https://editor.p5js.org/


## 改造ポイント

次の部分を変えてみましょう．

```javascript
fill(0, 150, 255);
circle(mouseX, mouseY, 80);
```

|    変更する場所    | 変わるもの |
| ------------------ | ---------- |
| `fill()`           | 円の色     |
| `circle()` の3つ目 | 円の大きさ |
| `background()`     | 背景色     |

## チャレンジ

* 円を大きくする
* 円の色を変える
* 背景色を暗くする
* `circle()` を `rect()` に変えて，四角がマウスについてくるようにする

