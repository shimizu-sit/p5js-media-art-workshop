
# 05 light_trail

## 内容

光の軌跡のような表現を作るサンプルです．

背景を毎回消さないことで，前に描いた円が残ります．

```javascript
let x = 0;
let speed = 4;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(mouseX, 100, 255, 35);
  circle(x, mouseY, 70);

  x = x + speed;

  if (x > width || x < 0) {
    speed = speed * -1;
  }
}
```

## 学べること

- 背景を残す表現
- 透明度を使った色
- 動きの軌跡を作る
- アニメーションとマウス操作を組み合わせる

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，光の軌跡を作る

p5.js Web Editor：

https://editor.p5js.org/


## 改造ポイント

次の部分を変えてみましょう．

```javascript
fill(mouseX, 100, 255, 35);
circle(x, mouseY, 70);
```

|    変更する場所     | 変わるもの |
| ------------------- | ---------- |
| `fill()` の1〜3つ目 | 色         |
| `fill()` の4つ目    | 透明度     |
| `circle()` の3つ目  | 光の大きさ |
| `speed`             | 動く速さ   |

## 透明度について

```javascript
fill(赤, 緑, 青, 透明度);
```

透明度は，0〜255で指定します．

* `0`：透明
* `50`：かなり薄い
* `255`：不透明

## チャレンジ

* 透明度を変えて，残り方を変える
* 光の色を変える
* 円を小さくして細かい軌跡にする
* 背景色を黒以外にする

