const booleanExpressionEvaluator = require('./booleanExpressionEvaluator');

describe('Boolean Expression Evaluator', () => {
    it('Evaluating boolean Expression', () => {
        //return the evaulated result
        // expect(booleanExpressionEvaluator('!true')).toEqual(false);
        // expect(booleanExpressionEvaluator('!false')).toEqual(true);
         expect(booleanExpressionEvaluator('false & true')).toEqual(false);

        //throws error when expression contains parameters other than true or false
        expect(() => booleanExpressionEvaluator('!(abc)')).toThrow();
        expect(() => booleanExpressionEvaluator('true & abc')).toThrow();

        //throws error when expression contains parameters other than & or | or ^
        expect(() => booleanExpressionEvaluator('~(true)')).toThrow();
        expect(() => booleanExpressionEvaluator('true && abc')).toThrow();

        //throws error when expression is not string
        expect(() => booleanExpressionEvaluator(12)).toThrow();
        expect(() => booleanExpressionEvaluator([])).toThrow();
        expect(() => booleanExpressionEvaluator({})).toThrow();
    });
});