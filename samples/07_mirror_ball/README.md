# 07 mirror_ball

## 内容

マウスの位置を使って，対称的な図形を描くサンプルです．

画面の4方向に円を配置し，ミラーボールのような表現を作ります．

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20);

  fill(mouseX, 100, 255);
  circle(mouseX, mouseY, 80);

  fill(255, mouseY, 100);
  circle(400 - mouseX, mouseY, 80);

  fill(100, 255, mouseX);
  circle(mouseX, 400 - mouseY, 80);

  fill(255, 255, 100);
  circle(400 - mouseX, 400 - mouseY, 80);
}
```

## 学べること

- `mouseX` と `mouseY` を使う
- 左右反転の位置を作る
- 上下反転の位置を作る
- 複数の図形で対称的な表現を作る

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，対称的な動きを確認する

p5.js Web Editor：

https://editor.p5js.org/

## 改造ポイント

次の部分を変えてみましょう．

```javascript
circle(mouseX, mouseY, 80);
circle(400 - mouseX, mouseY, 80);
circle(mouseX, 400 - mouseY, 80);
circle(400 - mouseX, 400 - mouseY, 80);
```

|  変更する場所  | 変わるもの |
| -------------- | ---------- |
| `80`           | 円の大きさ |
| `400 - mouseX` | 左右反転   |
| `400 - mouseY` | 上下反転   |
| `fill()`       | 色         |

## チャレンジ

* 円の大きさを変える
* 背景を暗くする
* 円を8個に増やす
* 透明度を追加して，重なりをきれいにする

