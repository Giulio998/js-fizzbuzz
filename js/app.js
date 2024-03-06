function fizzBuzz() {
    const container = document.getElementById("container");
    container.classList.add("flex")
    const fizz = "Fizz";
    const buzz = "Buzz";

   
    for (let i = 0; i < 100; i++) {
        let num = i + 1;
        

        if (num % 15 === 0) {
            console.log("FizzBuzz ", num);
            const div = document.createElement("div");
            div.append(fizz,buzz);
            div.classList.add("box","fizzbuzz");
            container.append(div);
           

        } else if (num % 5 === 0) {
            console.log("Buzz", num);
            const div = document.createElement("div");
            div.append(buzz);
            div.classList.add("box","buzz");
            container.append(div);
            
        } else if (num % 3 === 0) {
            console.log("Fizz ", num);
            const div = document.createElement("div");
            div.append(fizz);
            div.classList.add("box","fizz");
            container.append(div);
            
        } else {
            console.log("num ", num);
            const div = document.createElement("div");
            div.append(num);
            div.classList.add("box","num");
            container.append(div);
            
        }

    }

}

fizzBuzz()

