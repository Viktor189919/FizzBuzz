for (i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log(`${i} is fizzBuzz`);
        } else {
            console.log(`${i} is fizz`);
        }
    } else if (i % 5 === 0) {
        console.log(`${i} is buzz`);
    }
}