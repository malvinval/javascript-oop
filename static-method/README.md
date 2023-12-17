# What is Static Method

Sebenarnya ini sama saja dengan pembahasan static field [disini](https://github.com/malvinval/javascript-oop/tree/masterchef/static-field). Semua method yang bersifat `static` tidak lagi dimiliki oleh prototype, melainkan dimiliki langsung oleh classnya. Lihat contoh dibawah:

```js
class Project {
    static bootstrap() {
        console.log("Initializing project...");
    }
}

const project1 = new Project();

Project.bootstrap();
// project1.bootstrap(); ERROR EXPERIMENT
```

Dari kode diatas kita bisa pahami bahwa method `bootstrap()` tidak bisa diakses melalui instance (`project1`). Kita bisa memanggil method tersebut melalui classnya dengan kode `Project.boostrap()`.

Apa yang terjadi kalo kita jalanin kode `project1.bootstrap();`? Ya pasti error.

```
TypeError: project1.bootstrap is not a function
```