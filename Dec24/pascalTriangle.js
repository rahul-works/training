function addRow(triangle){
    let previous = triangle[triangle.length - 1];
    let newRow = [1];
    for(let i = 0; i < previous.length - 1; i++){
        let current = previous[i];
        let next = previous[i+1];
        newRow.push(current+next);
    }
    newRow.push(1);
    return triangle.push(newRow);
}

function pascalTriangle(numRows){
    if(numRows!=undefined && numRows>0){
        if(numRows == 1){
            return [[1]];
        } else if(numRows == 2){
            return [[1], [1,1]];
        } else {
            let triangle = [[1], [1,1]];
            for(let i = 2; i < numRows; i++){
                addRow(triangle);
            }
            return triangle;
        }
    } else {
        return [];
    }
}

module.exports = pascalTriangle;
//console.log(pascalTriangle(3));
//console.log(balancedBraces(20)[19]);
