class MinStack {
    constructor() {
        // initialize stack and minStack
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // push val into stack
        this.stack.push(val);

        // check whether minStack is currently empty or not. if it is, push val in minStack
        if(this.minStack.length === 0){
            this.minStack.push(val);
        }else{
            // if its not empty, get the currentMin inside minStack and compare it with the val thats being pushed in to compare and determine which is smaller
            const currentMin = this.minStack[this.minStack.length - 1];
            const newMin = Math.min(val, currentMin);
            this.minStack.push(newMin);
        }

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
