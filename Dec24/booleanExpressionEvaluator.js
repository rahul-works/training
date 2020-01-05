function evaulate_not(operand){
    if(operand=='T'){
        return 'F';
    } else {
        return 'T';
    }
}

function evaulate_and(operand1, operand2){
    if(operand1=='F' || operand2=='F'){
        return 'F';
    } else {
        return 'T';
    }
}

function evaulate_or(operand1, operand2){
    if(operand1=='T' || operand2=='T'){
        return 'T';
    } else {
        return 'F';
    }
}

function booleanExpressionEvaluator(expression){
    if(expression == undefined || expression == [] || expression == {} || typeof(expression) != "string"){
        throw "expression is not string";
    }
    // allow only character 
    // remove true and false 
    // if any character left then throw 
    char_expression = expression.replace(/[^a-zA-Z]+/g, '');
    char_expression = char_expression.toLowerCase();
    char_expression = char_expression.replace('true', ''); // removing true
    char_expression = char_expression.replace('false', ''); // removing false
    if(char_expression!=''){
        throw "expression contains parameters other than true or false";
    } else {
        // operand stack : true, false 
        // operator stack : !(not), &(and), |(or)
        let operand_stack = [];
        let operator_stack = [];

        expression = expression.replace(/true/g, 'T');
        expression = expression.replace(/false/g, 'F');
        expression = expression.replace(/ /g, "");
        
        let operand = ['T', 'F'];
        let operator = ['!', '&', '|'];

        // parser
        for(let i=0; i<expression.length; i++){
            if(operator.indexOf(expression[i])>-1){
                operator_stack.push(expression[i]);
            } else if(operand.indexOf(expression[i])>-1){
                operand_stack.push(expression[i]);
            } else {
                throw "expression contains parameters other than & or | or ^";
            }
        }

        // calculation
        let result;
        operator_stack.forEach( op => {
            let opr1, opr2;
            
            if(op == '!'){
                opr1 = operand_stack.pop();
            } else {
                opr1 = operand_stack.pop();
                opr2 = operand_stack.pop();
            }
            if(opr1==undefined){ throw "Invalid expression"; }
            if(opr2==undefined){ // only one operand 
                operand_stack.push(evaulate_not(opr1));
            } else { // two operand 
                if(op == '&'){
                    operand_stack.push(evaulate_and(opr1, opr2));
                } else if(op == '|'){
                    operand_stack.push(evaulate_or(opr1, opr2));
                }
            }
            if(operand_stack.length==1){
                if(operand_stack=='T'){
                    result = true;
                } else {
                    result = false;
                }

            } else {
                throw "Invalid expression";
            }
        });
        return result;
    }
}

module.exports = booleanExpressionEvaluator;
//return the evaulated result d// done 
//console.log(booleanExpressionEvaluator('!true'));
//console.log(booleanExpressionEvaluator('!false'));
// console.log(booleanExpressionEvaluator('false & true'));

//throws error when expression contains parameters other than true or false  // done
//console.log(booleanExpressionEvaluator('!(abc)'));
//console.log(booleanExpressionEvaluator('true & abc'));

//throws error when expression contains parameters other than & or | or ^
// console.log(booleanExpressionEvaluator('~(true)'));
// console.log(booleanExpressionEvaluator('true && abc'));

//throws error when expression is not string //done 
// console.log(booleanExpressionEvaluator(12));
// console.log(booleanExpressionEvaluator([]));
// console.log(booleanExpressionEvaluator({}));
