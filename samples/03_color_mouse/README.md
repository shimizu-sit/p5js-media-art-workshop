
# 03 color_mouse

## 内容

マウスの位置によって，円の色が変わるサンプルです．

マウスを動かすと，色が変化します．

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(mouseX, mouseY, 200);
  circle(200, 200, 120);
}
```

## 学べること

- `mouseX` を色に使う
- `mouseY` を色に使う
- マウスの位置と色を結びつける

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，色の変化を確認する

p5.js Web Editor：

https://editor.p5js.org/


## 改造ポイント

次の部分を変えてみましょう．

```javascript
fill(mouseX, mouseY, 200);
circle(200, 200, 120);
```

|    変更する場所    |         変わるもの         |
| ------------------ | -------------------------- |
| `mouseX`           | マウスの横位置で色が変わる |
| `mouseY`           | マウスの縦位置で色が変わる |
| `200`              | 青色の強さ                 |
| `circle()` の3つ目 | 円の大きさ                 |

## チャレンジ

* `fill(mouseY, mouseX, 200)` に変えてみる
* `200` を `mouseX` に変えてみる
* 円の大きさも `mouseX` にしてみる
* 背景色を黒にして，光るような印象にする

