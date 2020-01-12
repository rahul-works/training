function* rangeIter(start, end) {
    if(start==undefined || typeof(start)!="number"){
        throw new TypeError( start+" is not a number");
    }
    if(end==undefined || typeof(end)!="number"){
        throw new TypeError(end+" is not a number");
    }
        
    if(end>=start){
        yield start;
        if (start === end) return;
        yield* rangeIter(start + 1, end);
    } else {
        return [];
    }   
}

module.exports = rangeIter;
