function fizzBuzz() {
    const container = document.getElementById("container");
    container.classList.add("flex")
    const fizz = "Fizz";
    const buzz = "Buzz";

   
    for (let i = 0; i < 100; i++) {
        let num = i + 1;

        const div = document.createElement("div");
        container.append(div);

        if (num % 15 === 0) {
            console.log("FizzBuzz ", num);           
            div.append(fizz,buzz);
            div.classList.add("box","fizzbuzz");
            
        } else if (num % 5 === 0) {
            console.log("Buzz", num);
            div.append(buzz);
            div.classList.add("box","buzz");
                       
        } else if (num % 3 === 0) {
            console.log("Fizz ", num); 
            div.append(fizz);
            div.classList.add("box","fizz");
                       
        } else {
            console.log("num ", num);
            div.append(num);
            div.classList.add("box","num");
               
        }

    }

}

fizzBuzz()

