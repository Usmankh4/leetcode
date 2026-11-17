class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];
        const pairs = {
            ")" : "(", "}" : "{", "]": "["
        }
        for(const char of s){
            if( char === "(" || char === "{" || char === "["){
                stack.push(char);
            }else{
                const top = stack.pop();
                if(top !== pairs[char]) return false;
            }
        }
        return stack.length === 0;

        
    }
}
