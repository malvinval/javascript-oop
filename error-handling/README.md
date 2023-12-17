# What is Error Handling

Ketika program aplikasi kita throw error, maka keseluruhan program akan crash (berhenti bekerja). Sepertinya kita gamau itu terjadi kan? Karena itulah kita butuh *error handling*. Caranya gimana? pake `try-catch` block. Contoh:

```js
class Matematika {
    static sum(...nums) {
        if (nums.length < 2) {
            throw new Error("At least 2 arguments required")
        } else {   
            let total = 0;
         
            nums.forEach(n => {
                total += n;
            });
         
            return total;
        }

    }
}

try {
    const myNum = Matematika.sum(1);
    console.log(myNum);
} catch (error) {
    console.log(error);
}

console.log("Sum operation done!");
```

Dari kode diatas, kita membuat aturan agar ada minimal 2 parameter untuk menjalankan static method `sum`. Jika kondisi tersebut tidak terpenuhi, maka program kita akan `throw new Error()`.

Artinya, ada kemungkinan method tersebut akan menghasilkan error. Sehingga, kita butuh error handling `try-catch`. Apa keuntungannya? Jika kita menggunakan error handling, maka program tidak akan crash apabila ada error yang di-*throw*. Dalam contoh kode diatas, program `console.log("Sum operation done!");` akan tetap dijalankan. Jika tidak ada handling, maka program tersebut tidak akan berjalan (*unreachable*).

Sebagai tambahan, kita juga bisa membuat block `finally`. Block program `finally` akan dieksekusi baik terjadi error maupun tidak. Contoh:

```js
try {
    const myNum = Matematika.sum(1);
    console.log(myNum);
} catch (error) {
    console.log(error);
} finally {
    console.log("Sum operation done!");
}
```