# What is Error

Error adalah makanan wajib bagi kita sebagai programmer. Oleh karena itu, JavaScript membeda-bedakan error yang ada seperti `SyntaxError`, `TypeError`, `EvalError`, dan lain-lain. Semua error tersebut berujung pada sebuah class `Error` yang merupakan sebuah *superclass* untuk semua error yang ada di JavaScript. Mari kita cobain!

```js
const error = new Error();

error.message = "You are an idiot!";
error.name = "Brain error";
error.stack = 0;

throw error;
```

Dari kode diatas kita bisa pahami bahwa:

1. Error akan muncul sebagai output apabila kita menggunakan keyword `throw`
2. Ada beberapa field dalam interface `Error`, yakni `message`, `name`, dan `stack`
3. Kita juga bisa menggunakan syntax `throw new Error("Pesan error");`