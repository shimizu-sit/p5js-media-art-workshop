# p5.js Media Art Workshop

このリポジトリは，高校生向け体験授業  
**「はじめてのメディアアート制作」** で使用するサンプルコード集です．

プログラムで図形や色を動かし，自分だけのアート表現を体験できます．

## 対象

- 高校生
- プログラミング初心者
- メディアアート，CG，ゲーム，情報学に興味がある人
- 体験授業のあと，自宅でも続きを試したい人

プログラミング経験は不要です．  
まずはコードをコピー＆ペーストして動かしてみましょう．

## 使うサイト

以下のサイトを使います．

https://editor.p5js.org/


p5.js Web Editorは，ブラウザで使えるプログラミング環境です．
アプリのインストールは不要です．

## 基本的な使い方

1. p5.js Web Editorを開く
   [https://editor.p5js.org/](https://editor.p5js.org/)

2. 左側に最初から書かれているコードをすべて消す

3. このリポジトリのサンプルコードをコピーする

4. p5.js Web Editorに貼り付ける

5. ▶ボタンを押して実行する

6. 数字や色を変えて，自分だけの作品にする

## 保存について

p5.js Web Editorで作品を保存するにはログインが必要です．

体験授業ではログインしない場合があります．
その場合は，次の方法で作品を残してください．

* スクリーンショットを撮る
* コードをメモ帳などにコピーする
* 自宅でログインしてもう一度作る

## サンプル一覧

| 番号  |                    フォルダ                     |          内容          |
| :---: | ----------------------------------------------- | ---------------------- |
|  01   | [01_first_circle](./samples/01_first_circle/)   | 円を描く               |
|  02   | [02_mouse_circle](./samples/02_mouse_circle/)   | マウスについてくる円   |
|  03   | [03_color_mouse](./samples/03_color_mouse/)     | マウス位置で色が変わる |
|  04   | [04_moving_circle](./samples/04_moving_circle/) | 左右に動く円           |
|  05   | [05_light_trail](./samples/05_light_trail/)     | 光の軌跡               |
|  06   | [06_bubbles](./samples/06_bubbles/)             | カラフルなシャボン玉   |
|  07   | [07_mirror_ball](./samples/07_mirror_ball/)     | ミラーボール風の表現   |
|  08   | [08_dot_paint](./samples/08_dot_paint/)         | ドットペイント         |

## 01：円を描く

最初に試すサンプルです．
画面の中央に円を描きます．

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(255, 120, 120);
  circle(200, 200, 120);
}
```

### 改造ポイント

```javascript
background(240);
fill(255, 120, 120);
circle(200, 200, 120);
```

* `background()`：背景色
* `fill()`：円の色
* `circle()`：円の位置と大きさ

## 02：マウスについてくる円

マウスの位置に円を描くサンプルです．

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

### 改造ポイント

* 円の色を変える
* 円の大きさを変える
* 背景色を変える

## 03：マウス位置で色が変わる

マウスを動かすと，円の色が変わります．

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

## 04：左右に動く円

円が左右に動き，画面の端で跳ね返ります．

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

### 改造ポイント

```javascript
let speed = 3;
```

数字を変えると，動く速さが変わります．

```javascript
let speed = 1;  // ゆっくり
let speed = 3;  // ふつう
let speed = 8;  // 速い
```

## 05：光の軌跡

背景を毎回消さないことで，光の軌跡のような表現を作ります．

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

## 06：カラフルなシャボン玉

複数の円を組み合わせたサンプルです．

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

## 07：ミラーボール

マウス位置を使って，対称的な図形を描きます．

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

## 08：ドットペイント

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

## よくあるエラー

### 画面が真っ白になる

次を確認してください．

* ▶ボタンを押したか
* `;` が抜けていないか
* `{` と `}` の数が合っているか
* `circle` や `background` のつづりが間違っていないか

### よくある間違い

```javascript
background(240)   // ; がない
fill(255, 0, 0;   // ) がない
circl(200, 200, 100); // circle のつづりが違う
```

プログラムは1文字違うだけで止まることがあります．
ただし，直せばまた動きます．

## 色の指定

`fill()` では色を指定できます．

```javascript
fill(255, 0, 0);     // 赤
fill(0, 150, 255);   // 青
fill(255, 200, 0);   // 黄色
fill(150, 80, 255);  // 紫
fill(0, 220, 160);   // 緑
```

数字は 0〜255 の範囲で指定します．

```javascript
fill(赤, 緑, 青);
```

透明度を使う場合は，4つ目の数字を追加します．

```javascript
fill(0, 150, 255, 50);
```

```javascript
fill(赤, 緑, 青, 透明度);
```

## 家で続ける方法

1. [https://editor.p5js.org/](https://editor.p5js.org/) を開く
2. サンプルコードをコピーする
3. p5.js Web Editorに貼り付ける
4. ▶ボタンで実行する
5. 数字や色を変える
6. 気に入ったらログインして保存する

## ライセンス

このリポジトリのサンプルコードは，学習目的で自由に利用できます．

授業，体験講座，自宅学習などで利用してください．