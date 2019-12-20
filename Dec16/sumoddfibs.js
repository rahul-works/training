var sumFibs = function(n) {
    var a = 0, b = 1, f = 1, sum=0;
	sum+=f;
	while(a+b < n) {
        f = a + b;
        a = b;
        b = f;
		if(f%2!=0)
			sum+=f;
    }
    return sum;
};

console.log(sumFibs(10));