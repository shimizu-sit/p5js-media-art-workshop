
# 04 moving_circle

## 内容

円が左右に動き，画面の端で跳ね返るサンプルです．

マウスの位置によって，円の高さや色も変わります．

```javascript
let x = 100;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(mouseX, 120, 255);
  circle(x, mouseY, 90);

  x = x + speed;

  if (x > width || x < 0) {
    speed = speed * -1;
  }
}
```

## 学べること

- 変数を使って位置を変える
- `speed` で速さを決める
- `if` 文で画面端の判定をする
- マウス操作とアニメーションを組み合わせる

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，円の動きを確認する

p5.js Web Editor：

https://editor.p5js.org/

## 改造ポイント

次の部分を変えてみましょう．

```javascript
let speed = 3;
fill(mouseX, 120, 255);
circle(x, mouseY, 90);
```

|    変更する場所    |        変わるもの        |
| ------------------ | ------------------------ |
| `speed`            | 動く速さ                 |
| `fill()`           | 円の色                   |
| `mouseY`           | マウスの縦位置で円が動く |
| `circle()` の3つ目 | 円の大きさ               |

## 速さの例

```javascript
let speed = 1;  // ゆっくり
let speed = 3;  // ふつう
let speed = 8;  // 速い
```

## チャレンジ

* 円の動きを速くする
* 円を大きくする
* 背景を黒にする
* `fill(mouseX, mouseY, 255)` に変えて，色の変化を強くする

