// var val1 = "var変数";
// console.log(val1);

// // varは上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // varは再宣言可能
// var var1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "lete変数"
// console.log(var2)

// // letは上書き可能
// var2 = "let変数を上書き"
// console.log(var2)

// // letは再宣言不可
// let var2 = "let変数を上書き"

// const var3 = "const変数"
// console.log(var3)

// // const変数は上書き不可
// var3 = "const変数を上書き"

// // const変数は再宣言不可
// const var3 = "const変数を再宣言"
// console.log(var3)

// const で定義したオブジェクトは変更可能
// const val4 = {
//   name: "mike",
//   age: 28,
// };
// val4.name = "aaa";
// val4.adress = "nagoya";
// console.log(val4);

// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("funcだよ"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20))

// // 分割代入
// const myProfille = {
//       name: "jyon",
//       age: 28
// }

// const messagge1 = `名前は${myProfille.name}です。年齢は${myProfille.age}歳です。`
// console.log(messagge1)

// const {name, age} = myProfille
// const messagge2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(messagge2)

// undefinedにならないようにする
// const sayHello = (name = "aaa") => console.log(`こんにちは${name}さん！`);
// sayHello();

// // スプレッド構文
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1, num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列の結合、コピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // =で繋ぐと参照先のコピーになるため、よくない

