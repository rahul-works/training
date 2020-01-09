function* fibonacciIter(){
    let seacondLastNumber = 0;
    let lastNumber = 1;
    let next = lastNumber + seacondLastNumber;
    while(true){
        yield next;
        seacondLastNumber = lastNumber;
        lastNumber = next;
        next = seacondLastNumber + lastNumber;
    }
}

module.exports = fibonacciIter;