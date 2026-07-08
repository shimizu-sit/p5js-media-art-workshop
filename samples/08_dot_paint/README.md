# 08 dot_paint

## 内容

マウスで絵を描くドットペイントのサンプルです．

マウスを動かすと，その場所に円が描かれます．

マウスで絵を描くサンプルです．

```javascript
function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}

function draw() {
  fill(mouseX, mouseY, 200, 80);
  circle(mouseX, mouseY, 30);
}
```

## 学べること

- マウスの位置に図形を描く
- 背景を消さずに絵を残す
- 透明度を使って色を重ねる
- ペイントツールのような表現を作る

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，絵を描く

p5.js Web Editor：

https://editor.p5js.org/

## 改造ポイント

次の部分を変えてみましょう．

```javascript
fill(mouseX, mouseY, 200, 80);
circle(mouseX, mouseY, 30);
```

|    変更する場所    |  変わるもの  |
| ------------------ | ------------ |
| `fill()`           | 色と透明度   |
| `circle()` の3つ目 | 点の大きさ   |
| `background()`     | 最初の背景色 |

## チャレンジ

* 点を大きくする
* 点を小さくして細かく描く
* 透明度を変える
* 背景色を黒にする
* `circle()` を `rect()` に変えて，四角で描く
