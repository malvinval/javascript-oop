# What is Setter and Getter

Dalam konteks OOP, method setter mengacu ke method yang bertugas untuk mengisi sebuah nilai. Sedangkan getter mengacu ke method yang bertugas mengambil/membaca sebuah nilai.

Dalam OOP Javascript, setter dibuat dengan menggunakan keyword `set` sebelum nama method. Sedangkan getter dibuat dengan menggunakan keyword `get` sebelum nama method.

**Important note**: Setter dan Getter dalam JavaScript akan disimpan didalam prototype, bukan ditempel di object.

Contoh:

```js
class Student {
    constructor(__studentId, __name) {
        this._studentId = __studentId;
        this._name = __name;
    }

    get studentId() {
        return this._studentId;
    }

    get name() {
        return this._name;
    }

    set studentId(__studentId) {
        this._studentId = __studentId;
    }

    set name(__name) {
        this._name = __name;
    }
}

const student1 = new Student(123, "Malvin Valerian");

console.log(`ID: ${student1.studentId} - Fullname: ${student1.name}`);

student1.studentId = 234;
student1.name = "Brendan Eich";

console.log(`ID: ${student1.studentId} - Fullname: ${student1.name}`);
```

Penjelasan kode:

```js
constructor(__studentId, __name) {
    this._studentId = __studentId;
    this._name = __name;
}
```

Kode diatas berguna untuk inisialisasi properti `_studentId` dan `_name` dalam class `Student`.

```js
get studentId() {
    return this._studentId;
}

get name() {
    return this._name;
}
```

Kode diatas adalah implementasi getter methods yang bertugas untuk mengembalikan nilai `_studentId` dan `_name`. Perhatikan bahwa kita tidak bisa memakai nama yang sama antara properti dan getter methods.

```js
set studentId(__studentId) {
    this._studentId = __studentId;
}

set name(__name) {
    this._name = __name;
}
```

Kode diatas adalah implementasi setter methods yang bertugas untuk mengembalikan nilai `_studentId` dan `_name`. Setter methods membutuhkan minimal 1 parameter yang harus dikirim oleh *accessor*. Perhatikan bahwa kita tidak bisa memakai nama yang sama antara properti dan setter methods.

```js
console.log(`ID: ${student1.studentId} - Fullname: ${student1.name}`);
```

Kode diatas menunjukkan bahwa kita dapat mengakses nilai properti `_studentId` dan `_name` melalui perantara method `studentId` dan `name`. Tidak secara langsung mengakses propertynya.

```js
student1.studentId = 234;
student1.name = "Brendan Eich";
```

Kode diatas menunjukkan bahwa kita dapat mengisi nilai properti `_studentId` dan `_name` melalui perantara method `studentId` dan `name`. Tidak secara langsung mengisi nilai propertynya.