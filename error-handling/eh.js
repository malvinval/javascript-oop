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
