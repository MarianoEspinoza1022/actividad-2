function fibonacci(n) {
    let fib=[0,1];
        for(let i=2; i<n; i++){
            let nextNum=fib[i-1]+fib[i-2];
            fib.push(nextNum);
        }
        return fib;
    }
    let n=1;
    console.log(fibonacci(n));