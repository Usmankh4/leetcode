class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(const token of tokens){
            if(!isNaN(Number(token))){
                stack.push(Number(token));
            }else{
                const right = stack.pop();
                const left = stack.pop();
                let result;
                if(token === "+") result = left + right;
                else if(token === "-") result = left - right;
                else if(token === "*") result = left *right;
                else result = Math.trunc(left / right);
                stack.push(result);

            }
        }
        return stack.pop();
    }
}
