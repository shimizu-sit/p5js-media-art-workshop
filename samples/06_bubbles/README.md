# 06 bubbles

## 内容

カラフルなシャボン玉のような表現を作るサンプルです．

複数の円を重ねて，マウスに反応する作品を作ります．

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(245);

  fill(255, 100, 150, 120);
  circle(mouseX, mouseY, 120);

  fill(100, 200, 255, 120);
  circle(400 - mouseX, mouseY, 90);

  fill(255, 220, 80, 120);
  circle(mouseX, 400 - mouseY, 70);
}
```

## 学べること

- 複数の図形を描く
- 透明度を使って図形を重ねる
- `mouseX` と `mouseY` を使う
- 反対方向の動きを作る

## 使い方

1. `sketch.js` の中身をコピーする
2. p5.js Web Editorを開く
3. 左側のコードをすべて消す
4. コピーしたコードを貼り付ける
5. ▶ボタンを押して実行する
6. マウスを動かして，円の重なりを確認する

p5.js Web Editor：

https://editor.p5js.org/


## 改造ポイント

次の部分を変えてみましょう．

```javascript
fill(255, 100, 150, 120);
circle(mouseX, mouseY, 120);
```

|    変更する場所    |   変わるもの   |
| ------------------ | -------------- |
| `fill()`           | 円の色と透明度 |
| `circle()` の3つ目 | 円の大きさ     |
| `400 - mouseX`     | 左右反転の動き |
| `400 - mouseY`     | 上下反転の動き |

## チャレンジ

* 円をさらに追加する
* 色の組み合わせを変える
* 透明度を低くして，淡い表現にする
* 背景色を変える

